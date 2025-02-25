const express = require("express");
const router = express.Router();
const verifyCreatePasswordOtpController = require("../../../controllers/userController/verifyCreatePasswordOtpController/verifyCreatePasswordOtp.controller");

router.post(
  "/verify/otp",
  verifyCreatePasswordOtpController.verifyCreatePasswordOtp
);

module.exports = router;
