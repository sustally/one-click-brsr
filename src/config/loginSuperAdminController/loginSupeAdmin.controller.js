const httpStatus = require("http-status");
const loginSuperAdminService = require("../../../services/superAdminService/loginSuperAdminService/loginSuperAdmin.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const loginSuperAdmin = catchAsync(async (req, res) => {
  try {
    logger.info("logIn super admin API called");
    const { email, password } = req.body;
    const superAdmin = await loginSuperAdminService.loginSuperAdmin(
      email,
      password
    );
    logger.info("super admin logIn successfully");
    res
      .status(httpStatus.OK)
      .send(
        successResponseGenerator(
          httpStatus.OK,
          "super admin logIn successfully",
          superAdmin
        )
      );
  } catch (error) {
    logger.error(`super admin logIn has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  loginSuperAdmin,
};
