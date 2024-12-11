const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");
const normalizeString = require("../../../middlewares/normalizeString");

const updateTable = async (tableBody, tableId, userId) => {
  try {
    logger.info("update table API called");
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
      tableId: { $ne: tableId },
    }).collation({ locale: "en", strength: 2 });

    if (duplicateTable) {
      logger.error("Table already exists");
      throw new ApiError(httpStatus.NOT_FOUND, "Table already exists");
    }

    const table = await Table.findOne({ tableId: tableId, userId: userId });
    if (!table) {
      logger.error("Table not found");
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Table not found");
    }

    const updateTable = await Table.findOneAndUpdate(
      { tableId: tableId, userId: userId },
      tableBody,
      { new: true }
    );
    if (!updateTable) {
      logger.error("Something went wrong while update table");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong ehile update table"
      );
    }
    return updateTable;
  } catch (error) {
    logger.error(
      `updateTable => update table service has error ::> ${error.message}`
    );
    console.error(
      "updateTable => update table service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  updateTable,
};
