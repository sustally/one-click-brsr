const httpStatus = require("http-status");
const addColumnService = require("../../../services/tableService/addColumnService/addColumn.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const addColumn = catchAsync(async (req, res) => {
  try {
    logger.info("add column API called");
    const table = await addColumnService.addColumn(
      req.body,
      req.id,
      req.params.tableId
    );
    logger.info("column added successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "column created successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`column created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  addColumn,
};
