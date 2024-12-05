const express = require("express");
const router = express.Router();
const createSuperAdminController = require("../../../controllers/superAdminController/createSuperAdminController/createSuperAdmin.controller");
const { verifyToken } = require("../../../middlewares/jwt");

router.post(
  "/create",
  verifyToken,
  createSuperAdminController.createSuperAdmin
);

module.exports = router;
