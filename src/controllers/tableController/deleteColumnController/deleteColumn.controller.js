const httpStatus = require("http-status");
const deleteColumnService = require("../../../services/tableService/deleteColumnService/deleteColumn.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const deleteColumn = catchAsync(async (req, res) => {
  try {
    logger.info("delete column API called");
    const column = await deleteColumnService.deleteColumn(
      req.id,
      req.params.tableId,
      req.query.columnId
    );
    logger.info("column deleted successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "column deleted successfully",
          column
        )
      );
  } catch (error) {
    logger.error(`column deleted has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  deleteColumn,
};
