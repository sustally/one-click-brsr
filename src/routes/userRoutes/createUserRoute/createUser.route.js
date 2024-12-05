const express = require("express");
const router = express.Router();
const createUserController = require("../../../controllers/userController/createUserController/createUser.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post("/create/user", verifyToken, createUserController.createUser);

module.exports = router;
