const express = require("express");
const router = express.Router();
const createXmlFileController = require("../../../controllers/brsrReportController/createXmlFileController/createXmlFile.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post(
  "/create/:brsrReportId",
  verifyToken,
  createXmlFileController.createXmlFile
);

module.exports = router;
