const mongoose = require("mongoose");

const productsServicesSchema = new mongoose.Schema({
  businessActivities: [
    {
      SNo: {
        type: String,
      },
      descriptionOfMainActivity: {
        type: String,
      },
      descriptionOfBusinessActivity: {
        type: String,
      },
      percentageOfTurnover: {
        type: Number,
      },
    },
  ],
  productsAndServices: [
    {
      SNo: {
        type: Number,
      },
      productOrService: {
        type: String,
      },
      nicCode: {
        type: String,
      },
      percentageOfTotalTurnover: {
        type: Number,
      },
    },
  ],
});

module.exports = productsServicesSchema;
