const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const BRSRReport = require("../../../models/brsrReportModel/brsrReport.model");
const logger = require("../../../config/logger");

const createBrsrReport = async (brsrReportBody, userId) => {
  try {
    logger.info("create BRSR report API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    brsrReportBody.userId = userId;
    const brsrReport = await BRSRReport.create(brsrReportBody);
    if (!brsrReport) {
      logger.error("Some thing went wrong while create BRSR report");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Some thing went wrong while create BRSR report"
      );
    }
    return brsrReport;
  } catch (error) {
    logger.error(
      `createBrsrReport => create BRSR report service has error ::> ${error.message}`
    );
    console.error(
      "createBrsrReport => create BRSR report has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  createBrsrReport,
};
