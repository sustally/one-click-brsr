const express = require("express");
const router = express.Router();
const updateRowController = require("../../../controllers/tableController/updateRowController/updateRow.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.put("/update/:tableId", verifyToken, updateRowController.updateRow);

module.exports = router;
