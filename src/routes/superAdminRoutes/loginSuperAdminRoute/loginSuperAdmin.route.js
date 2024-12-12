const express = require("express");
const router = express.Router();
const loginSuperAdminController = require("../../../controllers/superAdminController/loginSuperAdminController/loginSupeAdmin.controller");

router.post("/login", loginSuperAdminController.loginSuperAdmin);

module.exports = router;
