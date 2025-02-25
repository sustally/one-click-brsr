const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const SuperAdmin = require("../../../models/superAdminModel/superAdmin.model");
const logger = require("../../../config/logger");

const createSuperAdmin = async (body) => {
  logger.info("create super admin API called");
  try {
    const superAdmin = await SuperAdmin.create(body);
    if (!superAdmin) {
      logger.error("Something went wrong");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }
    superAdmin.password = undefined;
    return superAdmin;
  } catch (error) {
    logger.error(
      `createSuperAdmin => create super admin service has error ::> ${error.message}`
    );
    console.error(
      "createSuperAdmin => create super admin service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.BAD_REQUEST, "Some error message");
  }
};

module.exports = {
  createSuperAdmin,
};
