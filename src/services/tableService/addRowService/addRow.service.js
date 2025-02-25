const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");
const { v4: uuid } = require("uuid");
const normalizeString = require("../../../middlewares/normalizeString");

const addRow = async (rowBody, userId, tableId) => {
  try {
    logger.info("add row API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const normalizedRowName = normalizeString(rowBody.rowName);

    const duplicateRow = await Table.findOne(
      {
        userId: userId,
        tableId: tableId,
        rows: {
          $elemMatch: { name: normalizedRowName },
        },
      },
      { "rows.$": 1 }
    ).collation({ locale: "en", strength: 2 });

    if (duplicateRow) {
      logger.error("row already exists for this table");
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "row already exists for this table"
      );
    }

    const table = await Table.findOne({ tableId: tableId, userId: userId });
    if (!table) {
      logger.error("Table not found");
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Table not found");
    }
    const rowId = uuid();

    table.rows.push({
      name: rowBody.rowName,
      rowId: rowId,
    });

    const addRow = await table.save();
    if (!addRow) {
      logger.error("Something went wrong");
      throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
    }

    for (let i = 0; i < table.columns.length; i++) {
      const columnId = table.columns[i].columnId;
      const columnName = table.columns[i].name;
      table.variables.push({
        value: "",
        columnId: columnId,
        columnName: columnName,
        rowId: rowId,
        rowName: rowBody.rowName,
        position: rowBody.rowName + " , " + columnName,
      });

      await table.save();
    }
    return addRow;
  } catch (error) {
    logger.error(`addRow => add row service has error ::> ${error.message}`);
    console.error("addRow => add row service has error ::> ", error.message);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  addRow,
};
