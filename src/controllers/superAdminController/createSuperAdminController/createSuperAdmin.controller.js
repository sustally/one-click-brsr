const httpStatus = require("http-status");
const createSuperAdminService = require("../../../services/superAdminService/createSuperAdminService/createSuperAdmin.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createSuperAdmin = catchAsync(async (req, res) => {
  try {
    logger.info("create super admin API called");
    const superAdmin = await createSuperAdminService.createSuperAdmin(req.body);
    logger.info("super admin created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "super admin created successfully",
          superAdmin
        )
      );
  } catch (error) {
    logger.error(`super admin created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createSuperAdmin,
};
