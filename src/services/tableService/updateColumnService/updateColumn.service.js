const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const updateColumn = async (columnBody, userId, tableId, columnId) => {
  try {
    logger.info("update column API called");
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
    const updateColumn = await Table.findOneAndUpdate(
      {
        userId: userId,
        tableId: tableId,
        "columns.columnId": columnId,
      },
      { $set: { "columns.$.name": columnBody.name } },
      { new: true }
    );
    if (!updateColumn) {
      logger.error("Something went wrong");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }
    return updateColumn;
  } catch (error) {
    logger.error(
      `updateColumn => update column service has error ::> ${error.message}`
    );
    console.error(
      "updateColumn => update column service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  updateColumn,
};
