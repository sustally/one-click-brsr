const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const logger = require("../../../config/logger");
const SourceData = require("../../../models/sourceDataModel/sourceData.model");
const User = require("../../../models/userModel/user.model");

const getSourceDataByUserId = async (userId) => {
  try {
    logger.info("get source data by user id API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const sourceData = await SourceData.find({ userId: userId });
    if (sourceData.length === 0) {
      logger.error("Source data is not found");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Source data is not found");
    }
    return sourceData;
  } catch (error) {
    logger.error(
      `getSourceDataByUserId => get source data by user id service has error ::> ${error.message}`
    );
    console.error(
      "getSourceDataByUserId => get source data by user id service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  getSourceDataByUserId,
};
