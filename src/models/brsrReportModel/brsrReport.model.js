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
    year: {
      type: String,
    },
    corporateIdentityNumber: {
      type: String,
    },
    nameOfTheCompany: {
      type: String,
    },
    dateOfIncorporation: {
      type: String,
    },
    addressOfRegisteredOfficeOfCompany: {
      type: String,
    },
    emailOfTheCompany: {
      type: String,
    },
    telephoneOfCompany: {
      type: String,
    },
    websiteOfCompany: {
      type: String,
    },
    dateOfFinancialYear: {
      type: String,
    },
    nameOfStockExchangeWhereTheCompanyIsListed: {
      type: String,
    },
    valueOfSharesPaidUp: {
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
