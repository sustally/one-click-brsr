const express = require("express");
const router = express.Router();
const addRowController = require("../../../controllers/tableController/addRowController/addRow.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/create/:tableId", verifyToken, addRowController.addRow);

module.exports = router;
