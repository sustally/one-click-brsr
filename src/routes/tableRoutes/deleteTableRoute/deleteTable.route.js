const express = require("express");
const router = express.Router();
const deleteTableController = require("../../../controllers/tableController/deleteTableController/deleteTable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.delete(
  "/delete/:tableId",
  verifyToken,
  deleteTableController.deleteTable
);

module.exports = router;
