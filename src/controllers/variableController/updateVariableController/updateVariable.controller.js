const httpStatus = require("http-status");
const updateVariableService = require("../../../services/variableService/updateVariableService/updateVariable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const updateVariable = catchAsync(async (req, res) => {
  try {
    logger.info("update variable API called");
    const variable = await updateVariableService.updateVariable(
      req.body,
      req.id,
      req.params.variableId
    );
    logger.info("variable updated successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "variable updated successfully",
          variable
        )
      );
  } catch (error) {
    logger.error(`variable updated has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  updateVariable,
};
