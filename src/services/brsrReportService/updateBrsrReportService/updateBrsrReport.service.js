const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const BRSRReport = require("../../../models/brsrReportModel/brsrReport.model");
const logger = require("../../../config/logger");

const updateBrsrReport = async (brsrReportBody, userId, brsrReportId) => {
  try {
    logger.info("update BRSR report API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const brsrReport = await BRSRReport.findOne({
      userId: userId,
      brsrReportId: brsrReportId,
    });
    if (!brsrReport) {
      logger.error("BRSR report not found");
      throw new ApiError(httpStatus.NOT_FOUND, "BRSR report not found");
    }

    // Loop through the fields to be updated
    Object.keys(brsrReportBody).forEach((key) => {
      if (brsrReportBody[key] !== undefined) {
        // If it's an array, update it accordingly
        if (Array.isArray(brsrReportBody[key])) {
          // Handle array fields
          brsrReport[key] = brsrReportBody[key];
        } else {
          // For other fields, just update the field
          brsrReport[key] = brsrReportBody[key];
        }
      }
    });

    await brsrReport.save();

    logger.info("BRSR report updated successfully");
    return brsrReport;
  } catch (error) {
    logger.error(
      `updateBrsrReport => updated BRSR report service has error ::> ${error.message}`
    );
    console.error(
      "updateBrsrReport => updated BRSR report has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  updateBrsrReport,
};
