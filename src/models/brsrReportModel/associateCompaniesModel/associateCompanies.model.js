const mongoose = require("mongoose");

const holdingSubsidiaryAssociateSchema = new mongoose.Schema({
  namesOfHolding: [
    {
      Sno: {
        type: String,
      },
      nameOfTheHolding: {
        type: String,
      },
      indicateWhetherHolding: {
        type: String,
      },
      percentageOfSharesHeldByListedEntity: {
        type: String,
      },
      businessResponsibilityInitiativesOfTheListedEntity: {
        type: String,
      },
    },
  ],
});

module.exports = holdingSubsidiaryAssociateSchema;
