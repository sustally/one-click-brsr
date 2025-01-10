const httpStatus = require("http-status");
const createBrsrReportService = require("../../../services/brsrReportService/createBrsrReportService/createBrsrReport.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createBrsrReport = catchAsync(async (req, res) => {
  try {
    logger.info("create BRSR report API called");
    const brsrReport = await createBrsrReportService.createBrsrReport(req.id);
    logger.info("BRSR report created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "BRSR report created successfully",
          brsrReport
        )
      );
  } catch (error) {
    logger.error(`BRSR report created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createBrsrReport,
};
