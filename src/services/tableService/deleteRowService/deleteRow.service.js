const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const deleteRow = async (userId, tableId, rowId) => {
  try {
    logger.info("delete row API called");
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
    const deleteRow = await Table.findOneAndUpdate(
      {
        userId: userId,
        tableId: tableId,
        "rows.rowId": rowId,
      },
      { $pull: { rows: { rowId: rowId } } },
      { new: true }
    );

    if (!deleteRow) {
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
        "variables.rowId": rowId,
      },
      { $pull: { variables: { rowId: rowId } } },
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
      `deleteRow => delete row service has error ::> ${error.message}`
    );
    console.error(
      "deleteRow => delete row service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  deleteRow,
};
