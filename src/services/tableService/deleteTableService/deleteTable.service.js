const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const deleteTable = async (tableId, userId) => {
  try {
    logger.info("delete table API called");
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

    const deleteTable = await Table.findOneAndDelete({
      tableId: tableId,
      userId: userId,
    });
    if (!deleteTable) {
      logger.error("Something went wrong while update table");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong ehile update table"
      );
    }
  } catch (error) {
    logger.error(
      `deleteTable => delete table service has error ::> ${error.message}`
    );
    console.error(
      "deleteTable => delete table service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  deleteTable,
};
