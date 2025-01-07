const express = require("express");
const router = express.Router();
const getSourceDataBySourceDataIdController = require("../../../controllers/sourceDataController/getSourceDataBySourceDataIdController/getSourceDataBySourceDataId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/get/:sourceDataId",
  verifyToken,
  getSourceDataBySourceDataIdController.getSourceDataBySourceDataId
);

module.exports = router;
