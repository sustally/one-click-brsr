const express = require("express");
const router = express.Router();
const deleteRowController = require("../../../controllers/tableController/deleteRowController/deleteRow.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.delete("/delete/:tableId", verifyToken, deleteRowController.deleteRow);

module.exports = router;
