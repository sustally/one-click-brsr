const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const BRSRReport = require("../../../models/brsrReportModel/brsrReport.model");
const logger = require("../../../config/logger");

const createBrsrReport = async (userId) => {
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

    // Dynamically initialize fields based on schema
    const schemaDefaults = {};
    for (const [key, value] of Object.entries(BRSRReport.schema.obj)) {
      if (value.default !== undefined) {
        // Use the default value if defined in the schema
        schemaDefaults[key] = value.default;
      } else {
        // Otherwise, assign a type-specific placeholder
        if (value.type === String) schemaDefaults[key] = "";
        if (value.type === Number) schemaDefaults[key] = 0;
        if (Array.isArray(value.type)) schemaDefaults[key] = [];
        if (value.type === Boolean) schemaDefaults[key] = false;
      }
    }

    // Add mandatory fields
    schemaDefaults.userId = userId;

    // Create and save the document
    const brsrReport = new BRSRReport(schemaDefaults);
    const savedReport = await brsrReport.save();
    if (!savedReport) {
      logger.error("Some thing went wrong while create BRSR report");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Some thing went wrong while create BRSR report"
      );
    }
    return savedReport;
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
