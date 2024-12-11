const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");
const { v4: uuid } = require("uuid");
const normalizeString = require("../../../middlewares/normalizeString");

const createTable = async (tableBody, userId) => {
  try {
    logger.info("create table API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const normalizedTableName = normalizeString(tableBody.tableName);

    const duplicateTable = await Table.findOne({
      userId: userId,
      tableName: normalizedTableName,
    }).collation({ locale: "en", strength: 2 });

    if (duplicateTable) {
      logger.error("Table already exists");
      throw new ApiError(httpStatus.NOT_FOUND, "Table already exists");
    }

    const columnId = uuid();
    const rowId = uuid();

    const table = new Table({
      userId: userId,
      tableName: tableBody.tableName,
      columns: [
        {
          name: "column1",
          columnId: columnId,
        },
      ],
      rows: [
        {
          name: "row1",
          rowId: rowId,
        },
      ],
      variables: [
        {
          value: "",
          columnId: columnId,
          columnName: "column1",
          rowId: rowId,
          rowName: "row1",
          position: "row1" + " , " + "column1",
        },
      ],
    });

    const addTable = await table.save();
    if (!addTable) {
      logger.error("Something went wrong while adding table");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong while adding table"
      );
    }
    return addTable;
  } catch (error) {
    logger.error(
      `createTable => create table service has error ::> ${error.message}`
    );
    console.error(
      "createTable => create table service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  createTable,
};
