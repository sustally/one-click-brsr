const httpStatus = require("http-status");
const getVariableByUserIdService = require("../../../services/variableService/getVariableByUserIdService/getVariableByUserId.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const getVariableByUserId = catchAsync(async (req, res) => {
  try {
    logger.info("get variable by userId API called");
    const variable = await getVariableByUserIdService.getVariableByUserId(
      req.id
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
  getVariableByUserId,
};
