const express = require("express");
const router = express.Router();
const generateForgotPasswordOtpController = require("../../../controllers/userController/generateForgotPasswordOtpController/generateForgotPasswordOtp.controller");

router.post(
  "/forgot/password/:email",
  generateForgotPasswordOtpController.generateForgotPasswordOtp
);

module.exports = router;
