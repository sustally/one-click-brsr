const nodemailer = require("nodemailer");
const config = require("../../config/config");
const logger = require("../../config/logger");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
const dotenv = require("dotenv");
dotenv.config();

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== "test") {
  transport
    .verify()
    .then(() => logger.info("Connected to email server..."))
    .catch(() =>
      logger.error(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );
}

const sendEmail = async (to, subject, text) => {
  try {
    logger.info("send Email API called");
    const msg = { from: process.env.EMAIL_FROM, to, subject, text };
    await transport.sendMail(msg);
  } catch (error) {
    logger.error(`sendEmail => email service has error ::> ${error.message}`);
    console.error("sendEmail => email service has error ::> ", error.message);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const sendCreatePasswordOtp = async (emailSubject, to, otp) => {
  try {
    logger.info("send create password otp API called");
    const subject = emailSubject;
    const text = `Dear user,
    Welcome to one-click-brsr!
      To Create your password, please verify OTP :
      ${otp}`;
    await sendEmail(to, subject, text);
  } catch (error) {
    logger.error(
      `sendCreatePasswordOtp => email service has error ::> ${error.message}`
    );
    console.error(
      "sendCreatePasswordOtp => email service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const sendResetPasswordEmail = async (emailSubject, to, token, name) => {
  try {
    logger.info("send reset password email API called");
    const subject = emailSubject;
    const text = `Dear ${name},
      To reset your password, please enter this OTP :
      ${token.token}
      If you did not request any password resets, please check your account as soon as possible.`;
    await sendEmail(to, subject, text);
  } catch (error) {
    logger.error(
      `sendResetPasswordEmail => email service has error ::> ${error.message}`
    );
    console.error(
      "sendResetPasswordEmail => email service has error ::> ",
      error.message
    );
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  sendEmail,
  sendCreatePasswordOtp,
  sendResetPasswordEmail,
};
