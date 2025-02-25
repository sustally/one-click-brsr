const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Token = require("../../../models/tokenModel/token.model");
const logger = require("../../../config/logger");
const emailService = require("../../emailService/email.service");

const generateForgotPasswordOtp = async (email) => {
  try {
    logger.info("generate forgot password otp API called");
    const user = await User.findOne({ email: email });
    if (!user) {
      logger.error("Incorrect email");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email");
    }

    const userId = user.userId;

    await Token.findOneAndDelete({ email: email, userId: userId });
    const otp = Math.floor(100000 + Math.random() * 900000);
    let token = {
      userId: userId,
      email: email,
      token: otp.toString(),
    };
    await Token.create(token);
    await emailService.sendResetPasswordEmail(
      "one-click-brsr - Forgot password otp",
      email,
      otp,
      user.firstName + "  " + user.lastName
    );
    logger.info("Forgot password otp send successfully");
    return email;
  } catch (error) {
    logger.error(
      `generateForgotPasswordOtp => generate forgot password otp service has error ::> ${error.message}`
    );
    console.error(
      "generateForgotPasswordOtp => generate forgot password otp service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  generateForgotPasswordOtp,
};
