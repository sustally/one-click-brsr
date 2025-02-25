const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Variable = require("../../../models/variableModel/variable.model");
const logger = require("../../../config/logger");

const getVariableByVariableId = async (userId, variableId) => {
  try {
    logger.info("get variable by variableId API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const variable = await Variable.findOne(
      {
        userId: userId,
        variables: { $elemMatch: { variableId: variableId } },
      },
      { "variables.$": 1 }
    );

    if (!variable) {
      logger.error("Something went wrong");
      throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
    }
    return variable;
  } catch (error) {
    logger.error(
      `getVariableByVariableId => get variable by variableId service has error ::> ${error.message}`
    );
    console.error(
      "getVariableByVariableId => get variable by variableId service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  getVariableByVariableId,
};
