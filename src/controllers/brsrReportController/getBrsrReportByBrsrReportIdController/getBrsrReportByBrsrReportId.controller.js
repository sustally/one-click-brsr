const httpStatus = require("http-status");
const getBrsrReportByBrsrReportIdService = require("../../../services/brsrReportService/getBrsrReportByBrsrReportIdService/getBrsrReportByBrsrReportId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getBrsrReportByBrsrReportId = catchAsync(async (req, res) => {
  try {
    logger.info("get BRSR report by brsrReportId API called");
    const brsrReport =
      await getBrsrReportByBrsrReportIdService.getBrsrReportByBrsrReportId(
        req.id,
        req.params.brsrReportId
      );
    logger.info("BRSR report get successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "BRSR report get successfully",
          brsrReport
        )
      );
  } catch (error) {
    logger.error(`BRSR report get has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getBrsrReportByBrsrReportId,
};
