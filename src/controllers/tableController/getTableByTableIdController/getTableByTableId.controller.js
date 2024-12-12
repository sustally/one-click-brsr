const httpStatus = require("http-status");
const getTableByTableIdService = require("../../../services/tableService/getTableByTableIdService/getTableByTableId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getTableByTableId = catchAsync(async (req, res) => {
  try {
    logger.info("get table by tableId API called");
    const table = await getTableByTableIdService.getTableByTableId(
      req.params.tableId,
      req.id
    );
    logger.info("table get by tableId successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "table get by tableId successfully",
          table
        )
      );
  } catch (error) {
    logger.error(`table get by tableId has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getTableByTableId,
};
