const httpStatus = require("http-status");
const updateRowService = require("../../../services/tableService/updateRowService/updateRow.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const updateRow = catchAsync(async (req, res) => {
  try {
    logger.info("update row API called");
    const row = await updateRowService.updateRow(
      req.body,
      req.id,
      req.params.tableId,
      req.query.rowId
    );
    logger.info("row updated successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "row updated successfully",
          row
        )
      );
  } catch (error) {
    logger.error(`row updated has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  updateRow,
};
