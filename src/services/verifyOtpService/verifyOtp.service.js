const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const logger = require("../../config/logger");
const Token = require("../../models/tokenModel/token.model");

const verifyOtp = async (otp, email) => {
  try {
    logger.info("Verify otp API called");
    const token = await Token.findOne({
      email: email,
      token: otp.toString(),
    });
    if (!token) {
      logger.error("Invalid token");
      throw new ApiError(httpStatus.NOT_FOUND, " Invalid token");
    }
    await Token.findOneAndDelete({
      email: email,
      token: otp.toString(),
    });
  } catch (error) {
    logger.error(
      `verifyOtp => verify otp service has error ::> ${error.message}`
    );
    console.error(
      "verifyOtp => verify otp service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  verifyOtp,
};
