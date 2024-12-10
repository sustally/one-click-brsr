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
const deleteVariableRoute = require("./variableRoutes/deleteVariableRoute/deleteVariable.route");

//---------------------------------- Table ------------------------------------------
const createTableRoute = require("./tableRoutes/createTableRoute/createTable.route");
const getTableByTableIdRoute = require("./tableRoutes/getTableByTableIdRoute/getTableByTableId.route");
const getTableByUserIdRoute = require("./tableRoutes/getTableByUserIdRoute/getTableByUserId.route");
const updateTableRoute = require("./tableRoutes/updateTableRoute/updateTable.route");
const deleteTableRoute = require("./tableRoutes/deleteTableRoute/deleteTable.route");

//--------------------------------------- Table Column ----------------------------------
const addColumnRoute = require("./tableRoutes/addColumnRoute/addColumn.route");

//******************************************************************************************************************************** */
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
app.use("/variable", deleteVariableRoute);

//------------------------------- Table -----------------------------------
app.use("/table", createTableRoute);
app.use("/table", getTableByTableIdRoute);
app.use("/table", getTableByUserIdRoute);
app.use("/table", updateTableRoute);
app.use("/table", deleteTableRoute);

//---------------------------------- Table Column --------------------------
app.use("/table/column", addColumnRoute);

module.exports = app;
