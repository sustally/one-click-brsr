const express = require("express");
const router = express.Router();
const getVariableByUserIdController = require("../../../controllers/variableController/getVariableByUserIdController/getVariableByUserId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/get",
  verifyToken,
  getVariableByUserIdController.getVariableByUserId
);

module.exports = router;
