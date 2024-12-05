const httpStatus = require("http-status");
const verifyCreatePasswordOtpService = require("../../../services/userService/verifyCreatePasswordOtpService/verifyCreatePasswordOtp.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const verifyCreatePasswordOtp = catchAsync(async (req, res) => {
  try {
    logger.info("verify create password otp API called");
    const Otp = await verifyCreatePasswordOtpService.verifyCreatePasswordOtp(
      req.body
    );
    logger.info("create password otp verify successfully");
    res
      .status(httpStatus.OK)
      .send(
        successResponseGenerator(
          httpStatus.OK,
          "create password otp verify successfully",
          Otp
        )
      );
  } catch (error) {
    logger.error(`create password otp verify has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  verifyCreatePasswordOtp,
};
