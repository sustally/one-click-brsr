const express = require("express");
const router = express.Router();
const generateCreatePasswordOtpController = require("../../../controllers/userController/generateCreatePasswordOtpController/generateCreatePasswordOtp.controller");

router.post(
  "/generate/password/:email",
  generateCreatePasswordOtpController.generateCreatePasswordOtp
);

module.exports = router;
