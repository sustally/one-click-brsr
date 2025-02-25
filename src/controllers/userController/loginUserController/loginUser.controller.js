const httpStatus = require("http-status");
const loginUserService = require("../../../services/userService/loginUserService/loginUser.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const loginUser = catchAsync(async (req, res) => {
  try {
    logger.info("logIn user API called");
    const { email, password } = req.body;
    const user = await loginUserService.loginUser(email, password);
    logger.info("user logIn successfully");
    res
      .status(httpStatus.OK)
      .send(
        successResponseGenerator(httpStatus.OK, "user logIn successfully", user)
      );
  } catch (error) {
    logger.error(`user logIn has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  loginUser,
};
