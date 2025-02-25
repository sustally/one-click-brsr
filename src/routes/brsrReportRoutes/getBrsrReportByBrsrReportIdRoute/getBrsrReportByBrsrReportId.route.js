const express = require("express");
const router = express.Router();
const getBrsrReportByBrsrReportIdController = require("../../../controllers/brsrReportController/getBrsrReportByBrsrReportIdController/getBrsrReportByBrsrReportId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/:brsrReportId",
  verifyToken,
  getBrsrReportByBrsrReportIdController.getBrsrReportByBrsrReportId
);

module.exports = router;
