const httpStatus = require("http-status");
const getVariableByVariableIdService = require("../../../services/variableService/getVariableByVariableIdService/getVariableByVariableId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getVariableByVariableId = catchAsync(async (req, res) => {
  try {
    logger.info("get variable by variableId API called");
    const variable =
      await getVariableByVariableIdService.getVariableByVariableId(
        req.id,
        req.params.variableId
      );
    logger.info("variable get successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "variable get successfully",
          variable
        )
      );
  } catch (error) {
    logger.error(`variable get has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  getVariableByVariableId,
};
