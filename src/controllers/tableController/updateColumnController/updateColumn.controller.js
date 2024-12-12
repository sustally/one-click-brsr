const httpStatus = require("http-status");
const updateColumnService = require("../../../services/tableService/updateColumnService/updateColumn.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const updateColumn = catchAsync(async (req, res) => {
  try {
    logger.info("update column API called");
    const column = await updateColumnService.updateColumn(
      req.body,
      req.id,
      req.params.tableId,
      req.query.columnId
    );
    logger.info("column updated successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "column updated successfully",
          column
        )
      );
  } catch (error) {
    logger.error(`column updated has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  updateColumn,
};
