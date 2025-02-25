const httpStatus = require("http-status");
const generateCreatePasswordOtpService = require("../../../services/userService/generateCreatePasswordOtpService/generateCreatePasswordOtp.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const generateCreatePasswordOtp = catchAsync(async (req, res) => {
  try {
    logger.info("generate create password otp API called");
    const Otp =
      await generateCreatePasswordOtpService.generateCreatePasswordOtp(
        req.params.email,
        res
      );
    logger.info("create password otp generated successfully");
    res
      .status(httpStatus.OK)
      .send(
        successResponseGenerator(
          httpStatus.OK,
          "create password otp generated successfully",
          Otp
        )
      );
  } catch (error) {
    logger.error(`create password otp generate has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  generateCreatePasswordOtp,
};
