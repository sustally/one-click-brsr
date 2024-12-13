const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const brsrReportSchema = new mongoose.Schema(
  {
    brsrReportId: {
      type: String,
      unique: true,
    },
    userId: {
      type: String,
    },
    GeneralDisclosures: {
      detailsOfTheListedEntity: {
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
      },
      productsServices: {
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
      },
      operations: {
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
      },
      employees: {
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
      },
      holdingSubsidiaryAndAssociateCompanies: {
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
      },
      csrDetails: {
        whetherCSR: {
          type: String,
        },
        Turnover: {
          type: String,
        },
        netWorth: {
          type: String,
        },
      },
      transparencyAndDisclosuresCompliances: {
        nationalGuidelinesOnResponsibleBusinessConduct: [
          {
            stakeholderGroupFromWhomComplaintIsReceived: {
              type: String,
            },
            grievanceRedressalMechanismInPlace: {
              type: String,
            },
            currentFinancialYear: {
              numberOfComplaintsFiledDuringTheYear: {
                type: String,
              },
              numberOfComplaintsPendingResolutionAtCloseOfTheYear: {
                type: String,
              },
              remarks: {
                type: String,
              },
            },
            previousFinancialYear: {
              numberOfComplaintsFiledDuringTheYear: {
                type: String,
              },
              numberOfComplaintsPendingResolutionAtCloseOfTheYear: {
                type: String,
              },
              remarks: {
                type: String,
              },
            },
          },
        ],
        overviewOfTheEntityMaterialResponsibleBusinessConductIssues: [
          {
            SNo: {
              type: String,
            },
            materialIssueIdentified: {
              type: String,
            },
            indicateWhetherRiskOrOpportunity: {
              type: String,
            },
            rationaleForIdentifyingTheRiskOpportunity: {
              type: String,
            },
            inCaseOfRiskApproachToAdaptOrMitigate: {
              type: String,
            },
            financialImplicationsOfTheRiskOrOpportunity: {
              type: String,
            },
          },
        ],
      },
    },
    managementAndProcessDisclosure: {},
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
brsrReportSchema.plugin(toJSON);
brsrReportSchema.plugin(paginate);

brsrReportSchema.pre("save", function (next) {
  if (this.isNew) {
    const { brsrReportId } = this;
    if (!brsrReportId || typeof brsrReportId !== "string") {
      this.brsrReportId = uuid();
    }
    this._md = {
      ...this._md,
      createdBy: this.brsrReportId,
      createdDtm: new Date(),
    };
  }
  next();
});

const BRSRReport = mongoose.model("BRSRReport", brsrReportSchema);

module.exports = BRSRReport;
