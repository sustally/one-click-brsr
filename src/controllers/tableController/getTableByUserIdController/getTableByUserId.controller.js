const httpStatus = require("http-status");
const getTableByUserIdService = require("../../../services/tableService/getTableByUserIdService/getTableByUserId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getTableByUserId = catchAsync(async (req, res) => {
  try {
    logger.info("get table by userId API called");
    const table = await getTableByUserIdService.getTableByUserId(req.id);
    logger.info("table get by userId successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "table get by userId successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`table get by userId has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getTableByUserId,
};
