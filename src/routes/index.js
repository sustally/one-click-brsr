const express = require("express");
const app = express();

//------------------------- Super Admin Routes -----------------------
const createSuperAdminRoute = require("./superAdminRoutes/createSuperAdminRoute/createSuperAdmin.route");

//------------------------- Super Admin Routes -----------------------
app.use("/superAdmin", createSuperAdminRoute);
module.exports = app;
