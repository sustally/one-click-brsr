const express = require("express");
const router = express.Router();
const getVariableByVariableIdController = require("../../../controllers/variableController/getVariableByVariableIdController/getVariableByVariableId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/get/:variableId",
  verifyToken,
  getVariableByVariableIdController.getVariableByVariableId
);

module.exports = router;
