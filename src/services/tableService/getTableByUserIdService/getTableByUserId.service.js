const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Table = require("../../../models/tableModel/table.model");
const logger = require("../../../config/logger");

const getTableByUserId = async (userId) => {
  try {
    logger.info("get table by tableId API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const table = await Table.find({ userId: userId });
    if (!table) {
      logger.error("Something went wrong while getting table for user");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong while getting table for user"
      );
    }
    return table;
  } catch (error) {
    logger.error(
      `getTableByUserId => get table by userId service has error ::> ${error.message}`
    );
    console.error(
      "getTableByUserId => get table by userId service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  getTableByUserId,
};
