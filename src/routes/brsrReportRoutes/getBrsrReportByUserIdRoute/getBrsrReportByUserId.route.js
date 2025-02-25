const express = require("express");
const router = express.Router();
const getBrsrReportByUserIdController = require("../../../controllers/brsrReportController/getBrsrReportByUserIdController/getBrsrReportByUserId.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.get(
  "/list",
  verifyToken,
  getBrsrReportByUserIdController.getBrsrReportByUserId
);

module.exports = router;
