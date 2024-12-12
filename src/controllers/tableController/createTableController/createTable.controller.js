const httpStatus = require("http-status");
const createTableService = require("../../../services/tableService/createTableService/createTable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createTable = catchAsync(async (req, res) => {
  try {
    logger.info("create table API called");
    const table = await createTableService.createTable(req.body, req.id);
    logger.info("table created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "table created successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`table created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createTable,
};
