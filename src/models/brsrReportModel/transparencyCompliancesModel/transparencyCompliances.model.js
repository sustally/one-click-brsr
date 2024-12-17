const mongoose = require("mongoose");

const transparencyDisclosuresSchema = new mongoose.Schema({
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
});

module.exports = transparencyDisclosuresSchema;
