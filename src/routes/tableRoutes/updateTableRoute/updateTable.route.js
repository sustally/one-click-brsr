const express = require("express");
const router = express.Router();
const updateTableController = require("../../../controllers/tableController/updateTableController/updateTable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.put("/update/:tableId", verifyToken, updateTableController.updateTable);

module.exports = router;
