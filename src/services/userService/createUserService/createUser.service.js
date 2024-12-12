const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const SuperAdmin = require("../../../models/superAdminModel/superAdmin.model");
const logger = require("../../../config/logger");

const createUser = async (body, userId, userType) => {
  try {
    logger.info("create user API called");
    if (userType !== "SUPER-ADMIN") {
      logger.info("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "You do not have permission to perform this action"
      );
    }

    const superAdmin = await SuperAdmin.findOne({ superAdminId: userId });
    if (!superAdmin) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const checkUser = await User.findOne({ email: body.email });
    if (checkUser) {
      logger.error("User already exists");
      throw new ApiError(httpStatus.UNAUTHORIZED, "User already exists");
    }
    const user = await User.create(body);
    if (!user) {
      logger.error("Something went wrong");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Something went wrong");
    }
    user.password = undefined;
    return user;
  } catch (error) {
    logger.error(
      `createUser => create user service has error ::> ${error.message}`
    );
    console.error(
      "createUser => create user service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  createUser,
};
