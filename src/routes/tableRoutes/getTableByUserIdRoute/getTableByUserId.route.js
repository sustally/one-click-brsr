const express = require("express");
const router = express.Router();
const getTableByUserIdController = require("../../../controllers/tableController/getTableByUserIdController/getTableByUserId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get("/list", verifyToken, getTableByUserIdController.getTableByUserId);

module.exports = router;
