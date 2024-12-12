const express = require("express");
const router = express.Router();
const updateColumnController = require("../../../controllers/tableController/updateColumnController/updateColumn.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.put(
  "/update/:tableId",
  verifyToken,
  updateColumnController.updateColumn
);

module.exports = router;
