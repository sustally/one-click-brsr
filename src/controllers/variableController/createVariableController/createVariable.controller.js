const httpStatus = require("http-status");
const createVariableService = require("../../../services/variableService/createVariableService/createVariable.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createVariable = catchAsync(async (req, res) => {
  try {
    logger.info("create variable API called");
    const variable = await createVariableService.createVariable(
      req.body,
      req.id
    );
    logger.info("variable created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "variable created successfully",
          variable
        )
      );
  } catch (error) {
    logger.error(`variable created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createVariable,
};
