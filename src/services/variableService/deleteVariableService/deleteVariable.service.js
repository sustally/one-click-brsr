const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const Variable = require("../../../models/variableModel/variable.model");
const logger = require("../../../config/logger");

const deleteVariable = async (userId, variableId) => {
  try {
    logger.info("delete variable API called");
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }
    const deleteVariable = await Variable.findOneAndUpdate(
      { userId: userId },
      {
        $pull: {
          variables: { variableId: variableId },
        },
      },
      { new: true }
    );
    if (!deleteVariable) {
      logger.error("some thing went wrong while deleting variable");
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "some thing went wrong while deleting variable"
      );
    }
  } catch (error) {
    logger.error(
      `deleteVariable => delete variable service has error ::> ${error.message}`
    );
    console.error(
      "deleteVariable => delete variable service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  deleteVariable,
};
