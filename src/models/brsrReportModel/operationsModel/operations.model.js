const mongoose = require("mongoose");

const operationsSchema = new mongoose.Schema({
  plantsLocations: [
    {
      location: {
        type: String,
      },
      numberOfPlants: {
        type: String,
      },
      numberOfOffices: {
        type: String,
      },
      total: {
        type: String,
      },
    },
  ],
  marketsServedByTheEntity: {
    numberOfLocations: [
      {
        locations: {
          type: String,
        },
        number: {
          type: String,
        },
      },
    ],
    contributionExportsPercentageTurnoverEntity: {
      type: String,
    },
    aBriefOnTypesOfCustomers: {
      type: String,
    },
  },
});

module.exports = operationsSchema;
