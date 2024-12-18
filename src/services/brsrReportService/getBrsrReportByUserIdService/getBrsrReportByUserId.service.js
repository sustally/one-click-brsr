const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const BRSRReport = require("../../../models/brsrReportModel/brsrReport.model");
const logger = require("../../../config/logger");

const getBrsrReportByUserId = async (userId) => {
  try {
    logger.info("get BRSR report by userId API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const brsrReports = await BRSRReport.find({ userId: userId }).lean();
    if (!brsrReports) {
      logger.error("Some thing went wrong while getting BRSR report");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Some thing went wrong while getting BRSR report"
      );
    }
    return brsrReports;
  } catch (error) {
    logger.error(
      `getBrsrReportByUserId => get BRSR report by userId service has error ::> ${error.message}`
    );
    console.error(
      "getBrsrReportByUserId => get BRSR report by userId service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  getBrsrReportByUserId,
};
