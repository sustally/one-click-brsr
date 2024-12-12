const httpStatus = require("http-status");
const createUserService = require("../../../services/userService/createUserService/createUser.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createUser = catchAsync(async (req, res) => {
  try {
    logger.info("create user API called");
    const user = await createUserService.createUser(
      req.body,
      req.id,
      req.userType
    );
    logger.info("user created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "user created successfully",
          user
        )
      );
  } catch (error) {
    logger.error(`user created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createUser,
};
