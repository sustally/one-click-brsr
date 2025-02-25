const express = require("express");
const router = express.Router();
const saveSourceDataController = require("../../../controllers/sourceDataController/saveSourceDataController/saveSourceData.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/save", verifyToken, saveSourceDataController.saveSourceData);

module.exports = router;
