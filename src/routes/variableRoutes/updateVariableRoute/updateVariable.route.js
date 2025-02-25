const express = require("express");
const router = express.Router();
const updateVariableController = require("../../../controllers/variableController/updateVariableController/updateVariable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.put(
  "/update/:variableId",
  verifyToken,
  updateVariableController.updateVariable
);

module.exports = router;
