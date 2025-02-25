const express = require("express");
const router = express.Router();
const loginUserController = require("../../../controllers/userController/loginUserController/loginUser.controller");

router.post("/login", loginUserController.loginUser);

module.exports = router;
