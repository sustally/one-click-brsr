const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Variable = require("../../../models/variableModel/variable.model");
const logger = require("../../../config/logger");
const normalizeString = require("../../../middlewares/normalizeString");

const updateVariable = async (variableBody, userId, variableId) => {
  try {
    logger.info("update variable API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const normalizedVariableName = normalizeString(variableBody.variableName);

    const duplicateVariable = await Variable.findOne(
      {
        userId: userId,
        variables: {
          $elemMatch: {
            variableName: normalizedVariableName,
            variableId: { $ne: variableId },
          },
        },
      },
      { "variables.$": 1 }
    ).collation({ locale: "en", strength: 2 });

    if (duplicateVariable) {
      logger.error("Variable already exists");
      throw new ApiError(httpStatus.NOT_FOUND, "Variable already exists");
    }

    const updateVariable = await Variable.findOneAndUpdate(
      {
        $and: [{ "variables.variableId": variableId }, { userId: userId }],
      },
      {
        $set: {
          "variables.$": variableBody,
        },
      },
      { new: true }
    );
    if (!updateVariable) {
      logger.error("some thing went wrong while updating variable");
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "some thing went wrong while updating variable"
      );
    }
    return updateVariable;
  } catch (error) {
    logger.error(
      `updateVariable => update variable service has error ::> ${error.message}`
    );
    console.error(
      "updateVariable => update variable service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  updateVariable,
};
