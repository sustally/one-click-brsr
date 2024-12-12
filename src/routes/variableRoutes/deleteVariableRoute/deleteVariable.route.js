const express = require("express");
const router = express.Router();
const deleteVariableController = require("../../../controllers/variableController/deleteVariableController/deleteVariable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.delete(
  "/delete/:variableId",
  verifyToken,
  deleteVariableController.deleteVariable
);

module.exports = router;
