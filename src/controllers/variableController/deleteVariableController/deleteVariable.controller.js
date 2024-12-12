const httpStatus = require("http-status");
const deleteVariableService = require("../../../services/variableService/deleteVariableService/deleteVariable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const deleteVariable = catchAsync(async (req, res) => {
  try {
    logger.info("delete variable API called");
    const variable = await deleteVariableService.deleteVariable(
      req.id,
      req.params.variableId
    );
    logger.info("variable deleted successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "variable deleted successfully",
          variable
        )
      );
  } catch (error) {
    logger.error(`variable deleted has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  deleteVariable,
};
