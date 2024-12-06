const express = require("express");
const app = express();

//------------------------- Super Admin Routes -----------------------
const createSuperAdminRoute = require("./superAdminRoutes/createSuperAdminRoute/createSuperAdmin.route");
const loginSuperAdminRoute = require("./superAdminRoutes/loginSuperAdminRoute/loginSuperAdmin.route");
const createUserRoute = require("./userRoutes/createUserRoute/createUser.route");

//-------------------------- User -------------------------------------
const generateCreatePasswordOtpRoute = require("./userRoutes/generateCreatePasswordOtpRoute/generateCreatePasswordOtp.route");
const verifyCreatePasswordOtpRoute = require("./userRoutes/verifyCreatePasswordOtpRoute/verifyCreatePasswordOtp.route");
const generateForgotPasswordOtpRoute = require("./userRoutes/generateForgotPasswordOtpRoute/generateForgotPasswordOtp.route");
const loginUserRoute = require("./userRoutes/loginUserRoute/loginUser.route");

//------------------------------- Variable ------------------------------
const createVariableRoute = require("./variableRoutes/createVariableRoute/createVariable.route");
const getVariableByUserIdRoute = require("./variableRoutes/getVariableByUserIdRoute/getVariableByUserId.route");
const getVariableByVariableIdRoute = require("./variableRoutes/getVariableByVariableIdRoute/getVariableByVariableId.route");
const updateVariableRoute = require("./variableRoutes/updateVariableRoute/updateVariable.route");

//------------------------- Super Admin Routes -----------------------
app.use("/superAdmin", createSuperAdminRoute);
app.use("/superAdmin", loginSuperAdminRoute);
app.use("/superAdmin", createUserRoute);

//----------------------------- User -----------------------------------
app.use("/user", generateCreatePasswordOtpRoute);
app.use("/user", verifyCreatePasswordOtpRoute);
app.use("/user", generateForgotPasswordOtpRoute);
app.use("/user", loginUserRoute);

//----------------------------- Variable ----------------------------------
app.use("/variable", createVariableRoute);
app.use("/variable", getVariableByUserIdRoute);
app.use("/variable", getVariableByVariableIdRoute);
app.use("/variable", updateVariableRoute);

module.exports = app;
