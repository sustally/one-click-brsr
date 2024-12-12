const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Variable = require("../../../models/variableModel/variable.model");
const logger = require("../../../config/logger");
const { v4: uuid } = require("uuid");
const normalizeString = require("../../../middlewares/normalizeString");

const createVariable = async (variableBody, userId) => {
  try {
    logger.info("create variable API called");
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
          $elemMatch: { variableName: normalizedVariableName },
        },
      },
      { "variables.$": 1 }
    ).collation({ locale: "en", strength: 2 });

    if (duplicateVariable) {
      logger.error("Variable already exists");
      throw new ApiError(httpStatus.NOT_FOUND, "Variable already exists");
    }

    const checkVariable = await Variable.findOne({ userId: userId });
    if (!checkVariable) {
      const variableObj = {
        userId,
        variables: [
          {
            ...variableBody,
            variableId: uuid(),
          },
        ],
      };

      const variable = await Variable.create(variableObj);
      if (!variable) {
        logger.error("Something went wrong");
        throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
      }
      return variable;
    } else {
      variableBody.variableId = uuid();
      const updatedVariable = await Variable.findOneAndUpdate(
        { userId: userId },
        {
          $push: { variables: variableBody },
        },
        { new: true }
      );
      if (!updatedVariable) {
        logger.error("Something went wrong");
        throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
      }
      return updatedVariable;
    }
  } catch (error) {
    logger.error(
      `createVariable => create variable service has error ::> ${error.message}`
    );
    console.error(
      "createVariable => create variable service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  createVariable,
};
