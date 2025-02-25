const httpStatus = require("http-status");
const getSourceDataBySourceDataIdService = require("../../../services/sourceDataService/getSourceDataBySourceDataIdService/getSourceDataBySourceDataId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getSourceDataBySourceDataId = catchAsync(async (req, res) => {
  try {
    logger.info("get source data by source data id API called");
    const sourceData =
      await getSourceDataBySourceDataIdService.getSourceDataBySourceDataId(
        req.params.sourceDataId,
        req.id
      );
    logger.info("source data get by source data id successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "source data get by source data id successfully",
          sourceData
        )
      );
  } catch (error) {
    logger.error(
      `source data get by source data id has error ${error.message}`
    );
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getSourceDataBySourceDataId,
};
