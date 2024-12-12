const express = require("express");
const router = express.Router();
const createTableController = require("../../../controllers/tableController/createTableController/createTable.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/create", verifyToken, createTableController.createTable);

module.exports = router;
