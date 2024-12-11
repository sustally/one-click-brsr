const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const deleteColumn = async (userId, tableId, columnId) => {
  try {
    logger.info("delete column API called");
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
    const deleteColumn = await Table.findOneAndUpdate(
      {
        userId: userId,
        tableId: tableId,
        "columns.columnId": columnId,
      },
      { $pull: { columns: { columnId: columnId } } },
      { new: true }
    );

    if (!deleteColumn) {
      logger.error("Something went wrong");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }

    const deleteVariable = await Table.findOneAndUpdate(
      {
        userId: userId,
        tableId: tableId,
        "variables.columnId": columnId,
      },
      { $pull: { variables: { columnId: columnId } } },
      { new: true }
    );
    if (!deleteVariable) {
      logger.error("Something went wrong");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }
  } catch (error) {
    logger.error(
      `deleteColumn => delete column service has error ::> ${error.message}`
    );
    console.error(
      "deleteColumn => delete column service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  deleteColumn,
};
