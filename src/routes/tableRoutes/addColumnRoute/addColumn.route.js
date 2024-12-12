const express = require("express");
const router = express.Router();
const addColumnController = require("../../../controllers/tableController/addColumnController/addColumn.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/create/:tableId", verifyToken, addColumnController.addColumn);

module.exports = router;
