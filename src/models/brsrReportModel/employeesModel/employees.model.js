const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  detailsAsAtTheEndOfFinancialYear: {
    employeesAndWorker: {
      employees: [
        {
          Sno: {
            type: String,
          },
          particulars: {
            type: String,
          },
          total: {
            type: String,
          },
          male: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
          female: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
        },
      ],
      workers: [
        {
          type: {
            type: String,
          },
          total: {
            type: String,
          },
          male: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
          female: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
        },
      ],
    },
    differentlyAbledEmployeesAndWorkers: {
      differentlyAbledEmployees: [
        {
          Sno: {
            type: String,
          },
          particulars: {
            type: String,
          },
          total: {
            type: String,
          },
          male: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
          female: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
        },
      ],
      differentlyAbledWorkers: [
        {
          type: {
            type: String,
          },
          total: {
            type: String,
          },
          male: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
          female: {
            number: {
              type: String,
            },
            percentage: {
              type: String,
            },
          },
        },
      ],
    },
    representationOfWomen: {
      boardOfDirectors: {
        total: {
          type: String,
        },
        noAndPercentageOfFemales: {
          number: {
            type: String,
          },
          percentage: {
            type: String,
          },
        },
      },
    },
    turnoverRateForPermanentEmployeesAndWorkers: {
      permanentEmployees: {
        turnoverRateInCurrentFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
        turnoverRateInPreviousFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
        turnoverRateInTheYearPriorToThePreviousFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
      },
      permanentWorkers: {
        turnoverRateInCurrentFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
        turnoverRateInPreviousFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
        turnoverRateInTheYearPriorToThePreviousFY: {
          male: {
            type: String,
          },
          female: {
            type: String,
          },
          total: {
            type: String,
          },
        },
      },
    },
  },
});

module.exports = employeesSchema;
