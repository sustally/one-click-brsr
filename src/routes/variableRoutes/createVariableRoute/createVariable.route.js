const express = require("express");
const router = express.Router();
const createVariableController = require("../../../controllers/variableController/createVariableController/createVariable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/create", verifyToken, createVariableController.createVariable);

module.exports = router;
