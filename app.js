const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
});

mongoose.connection.on("error", (error) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (connected) => {
  console.log("connected with data base....");
});

app.use(express.static(path.resolve(__dirname, "public")));
/* Front end build */
app.use(express.static(path.join(__dirname, "client/out")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/out", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/out", "[slug].html"));
});

module.exports = app;
