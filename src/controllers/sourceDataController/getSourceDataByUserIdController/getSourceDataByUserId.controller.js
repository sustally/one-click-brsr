const httpStatus = require("http-status");
const getSourceDataByUserIdService = require("../../../services/sourceDataService/getSourceDataByUserIdService/getSourceDataByUserId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getSourceDataByUserId = catchAsync(async (req, res) => {
  try {
    logger.info("get source data by user id API called");
    const sourceData = await getSourceDataByUserIdService.getSourceDataByUserId(
      req.id
    );
    logger.info("source data get by user id successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "source data get by user id successfully",
          sourceData
        )
      );
  } catch (error) {
    logger.error(`source data get by user id has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getSourceDataByUserId,
};
