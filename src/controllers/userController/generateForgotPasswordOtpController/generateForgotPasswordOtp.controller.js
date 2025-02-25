const httpStatus = require("http-status");
const generateForgotPasswordOtpService = require("../../../services/userService/generateForgotPasswordOtpService/generateForgotPasswordOtp.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const generateForgotPasswordOtp = catchAsync(async (req, res) => {
  try {
    logger.info("generate forgot password otp API called");
    const Otp =
      await generateForgotPasswordOtpService.generateForgotPasswordOtp(
        req.params.email,
        res
      );
    logger.info("forgot password otp generated successfully");
    res
      .status(httpStatus.OK)
      .send(
        successResponseGenerator(
          httpStatus.OK,
          "forgot password otp generated successfully",
          Otp
        )
      );
  } catch (error) {
    logger.error(`forgot password otp generate has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  generateForgotPasswordOtp,
};
