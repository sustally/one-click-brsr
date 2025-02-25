const httpStatus = require("http-status");
const deleteRowService = require("../../../services/tableService/deleteRowService/deleteRow.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const deleteRow = catchAsync(async (req, res) => {
  try {
    logger.info("delete row API called");
    const row = await deleteRowService.deleteRow(
      req.id,
      req.params.tableId,
      req.query.rowId
    );
    logger.info("row deleted successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "row deleted successfully",
          row
        )
      );
  } catch (error) {
    logger.error(`row deleted has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  deleteRow,
};
