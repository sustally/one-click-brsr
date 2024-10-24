const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const httpStatus = require("http-status");
const config = require("./config/config");
const morgan = require("./config/morgan");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");

const app = express();

// Logging middleware for requests in non-test environments
if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// Parse JSON request body and handle large payloads
app.use(express.json({ limit: "100mb" })); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Prevent cross-site scripting attacks
app.use(xss());

// Prevent NoSQL injection attacks
app.use(mongoSanitize());

// Enable GZIP compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Static file serving (Make sure `client/out` exists)
app.use(express.static(path.resolve(__dirname, "public")));

/* Front end build */
app.use(express.static(path.join(__dirname, "client/out")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/out", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/out", "[slug].html"));
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
