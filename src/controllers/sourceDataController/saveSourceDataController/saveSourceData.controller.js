const httpStatus = require("http-status");
const saveSourceDataService = require("../../../services/sourceDataService/saveSourceDataService/saveSourceData.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const saveSourceData = catchAsync(async (req, res) => {
  try {
    logger.info("save source data API called");
    const brsrReport = await saveSourceDataService.saveSourceData(
      req.id,
      req.body
    );
    logger.info("source data save successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "source data save successfully",
          brsrReport
        )
      );
  } catch (error) {
    logger.error(`source data save has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  saveSourceData,
};
