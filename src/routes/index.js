const express = require("express");
const app = express();

//------------------------- Super Admin Routes -----------------------
const createSuperAdminRoute = require("./superAdminRoutes/createSuperAdminRoute/createSuperAdmin.route");
const loginSuperAdminRoute = require("./superAdminRoutes/loginSuperAdminRoute/loginSuperAdmin.route");
const createUserRoute = require("./userRoutes/createUserRoute/createUser.route");

//------------------------- Super Admin Routes -----------------------
app.use("/superAdmin", createSuperAdminRoute);
app.use("/superAdmin", loginSuperAdminRoute);
app.use("/superAdmin", createUserRoute);

module.exports = app;
