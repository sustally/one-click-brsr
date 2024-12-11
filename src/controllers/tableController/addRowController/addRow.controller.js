const httpStatus = require("http-status");
const addRowService = require("../../../services/tableService/addRowService/addRow.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const addRow = catchAsync(async (req, res) => {
  try {
    logger.info("add row API called");
    const row = await addRowService.addRow(
      req.body,
      req.id,
      req.params.tableId
    );
    logger.info("row added successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "row added successfully",
          row
        )
      );
  } catch (error) {
    logger.error(`row added has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  addRow,
};
