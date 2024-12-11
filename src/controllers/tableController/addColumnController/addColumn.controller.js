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
    const column = await addColumnService.addColumn(
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
          "column added successfully",
          column
        )
      );
  } catch (error) {
    logger.error(`column added has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  addColumn,
};
