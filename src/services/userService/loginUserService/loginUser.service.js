const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const logger = require("../../../config/logger");
const { jwtEncode } = require("../../../middlewares/authorization");

const loginUser = async (email, password) => {
  try {
    logger.info("logIn user API called");
    const user = await User.findOne({ email: email });
    if (!user) {
      logger.info("user does not exist");
      throw new ApiError(httpStatus.BAD_REQUEST, "user does not exist");
    }

    if (!user.password) {
      logger.info("Please create the password");
      throw new ApiError(httpStatus.BAD_REQUEST, "Please create the password");
    }
    if (!user) {
      logger.error("LogIn Failed! Incorrect email or password");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "LogIn Failed! Incorrect email or password"
      );
    }

    const password_valid = await user.isPasswordMatch(password);
    if (!password_valid) {
      logger.info("LogIn Failed! Incorrect email or password");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "LogIn Failed! Incorrect email or password"
      );
    }

    const token = jwtEncode(user.userId, user.email);

    await User.findOneAndUpdate(
      { email: email },
      { recentLogin: new Date() },
      { new: true }
    );

    user.password = undefined;
    return {
      user,
      token,
    };
  } catch (error) {
    logger.info(
      `loginUser => login user service has error ::> ${error.message}`
    );
    console.error(
      "loginUser => login user service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  loginUser,
};
