const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");
const { v4: uuid } = require("uuid");

const addColumn = async (columnBody, userId, tableId) => {
  try {
    logger.info("add column API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const table = await Table.findOne({ tableId: tableId, userId: userId });
    if (!table) {
      logger.error("Table not found");
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Table not found");
    }
    const columnId = uuid();

    // Push the new column to the columns array
    table.columns.push({
      name: columnBody.columnName,
      columnId: columnId,
    });

    // Save the updated matrix
    const addColumn = await table.save();
    if (!addColumn) {
      logger.error("Something went wrong");
      throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
    }

    for (let i = 0; i < table.rows.length; i++) {
      const rowId = table.rows[i].rowId;
      const rowName = table.rows[i].name;
      table.variables.push({
        value: "",
        columnId: columnId,
        columnName: columnBody.columnName,
        rowId: rowId,
        rowName: rowName,
        position: rowName + " , " + columnBody.columnName,
      });

      await table.save();
    }
    return addColumn;
  } catch (error) {
    logger.error(
      `addColumn => add column service has error ::> ${error.message}`
    );
    console.error(
      "addColumn => add column service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  addColumn,
};
