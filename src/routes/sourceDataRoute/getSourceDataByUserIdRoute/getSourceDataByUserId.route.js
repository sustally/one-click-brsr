const express = require("express");
const router = express.Router();
const getSourceDataByUserIdController = require("../../../controllers/sourceDataController/getSourceDataByUserIdController/getSourceDataByUserId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/get/list",
  verifyToken,
  getSourceDataByUserIdController.getSourceDataByUserId
);

module.exports = router;
