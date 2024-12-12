const httpStatus = require("http-status");
const deleteTableService = require("../../../services/tableService/deleteTableService/deleteTable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const deleteTable = catchAsync(async (req, res) => {
  try {
    logger.info("delete table API called");
    const table = await deleteTableService.deleteTable(
      req.params.tableId,
      req.id
    );
    logger.info("table deleted successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "table deleted successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`table deleted has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  deleteTable,
};
