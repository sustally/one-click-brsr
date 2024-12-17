const mongoose = require("mongoose");

const csrDetailsSchema = new mongoose.Schema({
  whetherCSR: {
    type: String,
  },
  Turnover: {
    type: String,
  },
  netWorth: {
    type: String,
  },
});

module.exports = csrDetailsSchema;
