const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const logger = require("../../../config/logger");
const SourceData = require("../../../models/sourceDataModel/sourceData.model");
const User = require("../../../models/userModel/user.model");

const saveSourceData = async (userId, sourceDataBody) => {
  try {
    logger.info("save source data API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const { sourceName, sourceData } = sourceDataBody;

    if (!sourceName || !sourceData) {
      logger.error("Both 'sourceName' and 'sourceData' are required fields.");
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Both 'sourceName' and 'sourceData' are required fields."
      );
    }
    // Create a new document with sourceName and data
    const document = new SourceData({
      userId,
      sourceName,
      sourceData,
    });

    const savedDoc = await document.save();
    if (!savedDoc) {
      logger.error("something went wrong");
      throw new ApiError(httpStatus.BAD_REQUEST, "something went wrong");
    }
    return savedDoc;
  } catch (error) {
    logger.error(
      `saveSourceData => save source data service has error ::> ${error.message}`
    );
    console.error(
      "saveSourceData => save source data service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  saveSourceData,
};
