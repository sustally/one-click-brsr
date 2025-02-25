const express = require("express");
const router = express.Router();
const createBrsrReportController = require("../../../controllers/brsrReportController/createBrsrReportController/createBrsrReport.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post(
  "/create",
  verifyToken,
  createBrsrReportController.createBrsrReport
);

module.exports = router;
