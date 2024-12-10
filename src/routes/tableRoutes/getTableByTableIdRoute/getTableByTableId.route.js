const express = require("express");
const router = express.Router();
const getTableByTableIdController = require("../../../controllers/tableController/getTableByTableIdController/getTableByTableId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/get/:tableId",
  verifyToken,
  getTableByTableIdController.getTableByTableId
);

module.exports = router;
