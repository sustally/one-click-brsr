const httpStatus = require("http-status");
const updateTableService = require("../../../services/tableService/updateTableService/updateTable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const updateTable = catchAsync(async (req, res) => {
  try {
    logger.info("update table API called");
    const table = await updateTableService.updateTable(
      req.body,
      req.params.tableId,
      req.id
    );
    logger.info("table updated successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "table updated successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`table updated has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  updateTable,
};
