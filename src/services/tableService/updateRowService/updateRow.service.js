const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const updateRow = async (rowBody, userId, tableId, rowId) => {
  try {
    logger.info("update row API called");
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
    const updateRow = await Table.findOneAndUpdate(
      {
        userId: userId,
        tableId: tableId,
        "rows.rowId": rowId,
      },
      { $set: { "rows.$.name": rowBody.name } },
      { new: true }
    );
    if (!updateRow) {
      logger.error("Something went wrong");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }
    return updateRow;
  } catch (error) {
    logger.error(
      `updateRow => update row service has error ::> ${error.message}`
    );
    console.error(
      "updateRow => update row service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  updateRow,
};
