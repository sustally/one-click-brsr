const express = require("express");
const router = express.Router();
const deleteColumnController = require("../../../controllers/tableController/deleteColumnController/deleteColumn.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.delete(
  "/delete/:tableId",
  verifyToken,
  deleteColumnController.deleteColumn
);

module.exports = router;
