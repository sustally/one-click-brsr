const express = require("express");
const router = express.Router();
const updateBrsrReportController = require("../../../controllers/brsrReportController/updateBrsrReportController/updateBrsrReport.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.put(
  "/update/:brsrReportId",
  verifyToken,
  updateBrsrReportController.updateBrsrReport
);

module.exports = router;
