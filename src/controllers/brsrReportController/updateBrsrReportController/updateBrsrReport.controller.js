const httpStatus = require("http-status");
const updateBrsrReportService = require("../../../services/brsrReportService/updateBrsrReportService/updateBrsrReport.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const updateBrsrReport = catchAsync(async (req, res) => {
  try {
    logger.info("update BRSR report API called");
    const brsrReport = await updateBrsrReportService.updateBrsrReport(
      req.body,
      req.id,
      req.params.brsrReportId
    );
    logger.info("BRSR report updated successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "BRSR report updated successfully",
          brsrReport
        )
      );
  } catch (error) {
    logger.error(`BRSR report updated has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  updateBrsrReport,
};
