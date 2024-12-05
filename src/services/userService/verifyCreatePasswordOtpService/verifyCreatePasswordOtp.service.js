const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const logger = require("../../../config/logger");
const { jwtEncode } = require("../../../middlewares/authorization");
const { verifyOtp } = require("../../verifyOtpService/verifyOtp.service");
const bcrypt = require("bcryptjs");

const verifyCreatePasswordOtp = async (body) => {
  const { email, otp, password } = body;
  try {
    logger.info("verify create password otp API called");
    const user = await User.findOne({ email: email });
    if (!user) {
      logger.error("Incorrect email");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email");
    }
    await verifyOtp(otp, email);
    const newPassword = await bcrypt.hash(password, 10);
    const updatePassword = await User.findOneAndUpdate(
      { email: email },
      {
        password: newPassword,
        recentLogin: new Date(),
      }
    );
    if (!updatePassword) {
      logger.error("something went wrong");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Something went wrong");
    }

    const token = jwtEncode(user.userId, user.email, user.userType);

    user.password = undefined;
    return {
      user,
      token,
    };
  } catch (error) {
    logger.error(
      `verifyCreatePasswordOtp => verify create password otp service has error ::> ${error.message}`
    );
    console.error(
      "verifyCreatePasswordOtp => verify create password otp service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  verifyCreatePasswordOtp,
};
