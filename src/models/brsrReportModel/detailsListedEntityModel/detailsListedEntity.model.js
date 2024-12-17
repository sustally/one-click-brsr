const mongoose = require("mongoose");

const detailsListedEntitySchema = new mongoose.Schema({
  corporateIdentityNumber: {
    type: String,
  },
  nameOfTheListedEntity: {
    type: String,
  },
  yearOfIncorporation: {
    type: String,
  },
  registeredOfficeAddress: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
  website: {
    type: String,
  },
  financialYear: {
    type: String,
  },
  nameOfTheStockExchange: {
    type: String,
  },
  paidUpCapital: {
    type: String,
  },
  nameAndContact: {
    type: String,
  },
  reportingBoundary: {
    type: String,
  },
  nameOfAssuranceProvider: {
    type: String,
  },
  typeOfAssuranceObtained: {
    type: String,
  },
});

module.exports = detailsListedEntitySchema;
