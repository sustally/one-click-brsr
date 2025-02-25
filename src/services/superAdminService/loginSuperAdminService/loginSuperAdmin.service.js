const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const SuperAdmin = require("../../../models/superAdminModel/superAdmin.model");
const logger = require("../../../config/logger");
const { jwtEncode } = require("../../../middlewares/authorization");

const loginSuperAdmin = async (email, password) => {
  try {
    logger.info("logIn super admin API called");
    const superAdmin = await SuperAdmin.findOne({ email: email });
    if (!superAdmin) {
      logger.info("super admin does not exist");
      throw new ApiError(httpStatus.BAD_REQUEST, "super admin does not exist");
    }

    if (!superAdmin.password) {
      logger.info("Please create the password");
      throw new ApiError(httpStatus.BAD_REQUEST, "Please create the password");
    }
    if (!superAdmin) {
      logger.error("LogIn Failed! Incorrect email or password");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "LogIn Failed! Incorrect email or password"
      );
    }

    const password_valid = await superAdmin.isPasswordMatch(password);
    if (!password_valid) {
      logger.info("LogIn Failed! Incorrect email or password");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "LogIn Failed! Incorrect email or password"
      );
    }

    const token = jwtEncode(
      superAdmin.superAdminId,
      superAdmin.email,
      superAdmin.userType
    );

    await SuperAdmin.findOneAndUpdate(
      { email: email },
      { recentLogin: new Date() },
      { new: true }
    );

    superAdmin.password = undefined;
    return {
      updateUser: superAdmin,
      token,
    };
  } catch (error) {
    logger.info(
      `loginSuperAdmin => login super admin service has error ::> ${error.message}`
    );
    console.error(
      "loginSuperAdmin => login super admin service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  loginSuperAdmin,
};
