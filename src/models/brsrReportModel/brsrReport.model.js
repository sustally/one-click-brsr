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
      type: Date,
      default: new Date(),
    },
    CorporateIdentityNumber: {
      type: String,
    },
    NameOfTheCompany: {
      type: String,
    },
    DateOfIncorporation: {
      type: String,
    },
    AddressOfRegisteredOfficeOfCompany: {
      type: String,
    },
    AddressOfCorporateOfficeOfCompany: {
      type: String,
    },
    EmailOfTheCompany: {
      type: String,
    },
    TelephoneOfCompany: {
      type: String,
    },
    WebsiteOfCompany: {
      type: String,
    },
    DateOfStartOfFinancialYear: {
      type: String,
    },
    DateOfEndOfFinancialYear: {
      type: String,
    },
    DateOfStartOfPreviousYear: {
      type: String,
    },
    DateOfEndOfPreviousYear: {
      type: String,
    },
    DateOfStartOfPriorToPreviousYear: {
      type: String,
    },
    DateOfEndOfPriorToPreviousYear: {
      type: String,
    },
    ValueOfSharesPaidUp: {
      type: String,
    },
    NameOfContactPerson: {
      type: String,
    },
    ContactNumberOfContactPerson: {
      type: String,
    },
    EmailOfContactPerson: {
      type: String,
    },
    ReportingBoundary: {
      type: String,
    },
    WhetherTheCompanyHasUndertakenReasonableAssuranceOfTheBRSRCore: {
      type: String,
    },
    NotesGeneralDisclosureExplanatoryTextBlock: {
      type: String,
    },
    NameOfTheCompanyOrLLPOrFirmOfAssuranceProvider: {
      type: String,
    },
    CompanyIDOrLLPIDOrFirmIDOfAssuranceProvider: {
      type: String,
    },
    TypeOfAssuranceObtain: {
      type: String,
    },
    TypeOfAssuranceForSectionAGeneralDisclosures: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfTheListedEntity: {
      type: String,
    },
    WhetherCorporateIdentityNumberIsAssuredByAssurer: {
      type: String,
    },
    WhetherNameOfTheCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherYearOfIncorporationIsAssuredByAssurer: {
      type: String,
    },
    WhetherAddressOfRegisteredOfficeOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherAddressOfCorporateOfficeOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherEMailOfTheCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherTelephoneOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherWebsiteOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfFinancialYearForWhichReportingIsBeingDoneIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheStockExchangeWhereTheCompanyIsListedIsAssuredByAssurer: {
      type: String,
    },
    WhetherValueOfSharesPaidUpIsAssuredByAssurer: {
      type: String,
    },
    WhetherNameAndContactDetailsOfTheContactPersonInCaseOfAnyQueriesOnTheBRSRReportIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherReportingBoundaryIsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfProductsOrServices: {
      type: String,
    },
    WhetherDetailsOfBusinessActivitiesAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherProductsOrServicesSoldByTheEntityAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForDetailsOfOperations: {
      type: String,
    },
    WhetherDetailsOfNumberOfLocationsWherePlantsAndOrOperationsOrOfficesOfTheEntityAreSituatedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherMarketsServedByTheEntityIsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfEmployees: {
      type: String,
    },
    WhetherDetailsOfEmployeesAsAtTheEndOfFinancialYearIsAssuredByAssurer: {
      type: String,
    },
    WhetherParticipationOrInclusionOrRepresentationOfWomenIsAssuredByAssurer: {
      type: String,
    },
    NameOfTheCompanyOrLLPOrFirmOfAssuranceProvider: {
      type: String,
    },
    CompanyIDOrLLPIDOrFirmIDOfAssuranceProvider: {
      type: String,
    },
    TypeOfAssuranceObtain: {
      type: String,
    },
    TypeOfAssuranceForSectionAGeneralDisclosures: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfTheListedEntity: {
      type: String,
    },
    WhetherCorporateIdentityNumberIsAssuredByAssurer: {
      type: String,
    },
    WhetherNameOfTheCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherYearOfIncorporationIsAssuredByAssurer: {
      type: String,
    },
    WhetherAddressOfRegisteredOfficeOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherAddressOfCorporateOfficeOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherEMailOfTheCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherTelephoneOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherWebsiteOfCompanyIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfFinancialYearForWhichReportingIsBeingDoneIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheStockExchangeWhereTheCompanyIsListedIsAssuredByAssurer: {
      type: String,
    },
    WhetherValueOfSharesPaidUpIsAssuredByAssurer: {
      type: String,
    },
    WhetherNameAndContactDetailsOfTheContactPersonInCaseOfAnyQueriesOnTheBRSRReportIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherReportingBoundaryIsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfProductsOrServices: {
      type: String,
    },
    WhetherDetailsOfBusinessActivitiesAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherProductsOrServicesSoldByTheEntityAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForDetailsOfOperations: {
      type: String,
    },
    WhetherDetailsOfNumberOfLocationsWherePlantsAndOrOperationsOrOfficesOfTheEntityAreSituatedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherMarketsServedByTheEntityIsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForDetailsOfEmployees: {
      type: String,
    },
    WhetherDetailsOfEmployeesAsAtTheEndOfFinancialYearIsAssuredByAssurer: {
      type: String,
    },
    WhetherParticipationOrInclusionOrRepresentationOfWomenIsAssuredByAssurer: {
      type: String,
    },
    WhetherTurnoverRateForPermanentEmployeesAndWorkersDiscloseTrendsForPastThreeYearsIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForDetailsOfHoldingSubsidiaryAndAssociateCompaniesIncludingJointVentures:
      {
        type: String,
      },
    WhetherNamesOfHoldingSubsidiaryAssociateCompaniesJointVenturesIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForDetailsOfCSR: {
      type: String,
    },
    WhetherCSRIsApplicableAsPerSection135OfCompaniesAct2013IsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForTransparencyAndDisclosuresCompliances: {
      type: String,
    },
    WhetherComplaintsOrGrievancesOnAnyOfThePrinciplesUnderTheNationalGuidelinesOnResponsibleBusinessConductIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherOverviewOfTheEntitysMaterialResponsibleBusinessConductIssuesIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForSectionBManagementAndProcessDisclosures: {
      type: String,
    },
    TypeOfAssuranceForPolicyAndManagementProcesses: {
      type: String,
    },
    AssurerHasAssuredWhetherYourEntitysPolicyOrPoliciesCoverEachPrincipleAndItsCoreElementsOfTheNGRBCs:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHasTranslatedThePolicyIntoProcedures: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEnlistedPoliciesExtendToYourValueChainPartners: {
      type: String,
    },
    WhetherNameOfTheNationalAndInternationalCodesOrCertificationsOrLabelsOrStandardsAdoptedByYourEntityAndMappedToEachPrincipleIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherSpecificCommitmentsGoalsAndTargetsSetByTheEntityWithDefinedTimelinesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherPerformanceOfTheEntityAgainstTheSpecificCommitmentsGoalsAndTargetsAlongWithReasonsInCaseTheSameAreNotMetIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForGovernanceLeadershipAndOversight: {
      type: String,
    },
    WhetherStatementByDirectorResponsibleForTheBusinessResponsibilityReportHighlightingESGRelatedChallengesTargetsAndAchievementsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheHighestAuthorityResponsibleForImplementationAndOversightOfTheBusinessResponsibilityPolicyIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHaveASpecifiedCommitteeOfTheBoardOrDirectorResponsibleForDecisionMakingOnSustainabilityRelatedIssues:
      {
        type: String,
      },
    WhetherPerformanceAgainstAbovePoliciesAndFollowUpActionIsAssuredByAssurer: {
      type: String,
    },
    WhetherComplianceWithStatutoryRequirementsOfRelevanceToThePrinciplesAndRectificationOfAnyNonCompliancesIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHasCarriedOutIndependentAssessmentEvaluationOfTheWorkingOfItsPoliciesByAnExternalAgency:
      {
        type: String,
      },
    WhetherReasonsIfPoliciesNotCoverEachPrincipleAndItsCoreElementsOfTheNGRBCsIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForSectionCPrincipleWisePerformanceDisclosures: {
      type: String,
    },
    TypeOfAssuranceForPrinciple1EssentialIndicators: {
      type: String,
    },
    WhetherPercentageCoverageByTrainingAndAwarenessProgramsOnAnyOfThePrinciplesDuringTheFinancialYearForBODOrKMPOrEmployeeOrWorkerIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfFinesOrPenaltiesOrPunishmentOrAwardOrCompoundingFeesOrSettlementIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheAppealOrRevisionPreferredInCasesWhereMonetaryOrNonMonetaryActionHasBeenAppealedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsAndWeblinkOfAnAntiCorruptionOrAntiBriberyPolicyIsPlaceIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherNumberOfDirectorsOrKMPsOrEmployeesOrWorkersAgainstWhomDisciplinaryActionWasTakenByAnyLawEnforcementAgencyForTheChargesOfBriberyOrCorruptionIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfComplaintsWithRegardToConflictOfInterestIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayOnIssuesRelatedToFinesOrPenaltiesOrActionTakenByRegulatorsOrLawEnforcementAgenciesOrJudicialInstitutionsOnCasesOfCorruptionAndConflictsOfInterestIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherNumberOfDaysOfAccountsPayablesIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForNumberOfDaysOfAccountsPayables: {
      type: String,
    },
    RemarksForAssuranceOfNumberOfDaysOfAccountsPayables: {
      type: String,
    },
    WhetherDetailsOfConcentrationOfPurchasesAndSalesWithTradingHousesDealersAndRelatedPartiesAlongWithLoansAndAdvancesAndInvestmentsWithRelatedPartiesIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForDetailsOfConcentrationOfPurchasesAndSalesWithTradingHousesDealersAndRelatedPartiesAlongWithLoansAndAdvancesAndInvestmentsWithRelatedParties:
      {
        type: String,
      },
    RemarksForAssuranceOfDetailsOfConcentrationOfPurchasesAndSalesWithTradingHousesDealersAndRelatedPartiesAlongWithLoansAndAdvancesAndInvestmentsWithRelatedParties:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple1LeadershipIndicators: {
      type: String,
    },
    WhetherAwarenessProgrammesConductedForValueChainPartnersOnAnyOfThePrinciplesDuringTheFinancialYearIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherTheEntityHaveProcessesInPlaceToAvoidOrManageConflictOfInterestsInvolvingMembersOfTheBoardIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple2EssentialIndicators: {
      type: String,
    },
    WhetherPercentageOfRAndDAndCapitalExpenditureInvestmentsInSpecificTechnologiesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherTheEntityHaveProceduresInPlaceForSustainableSourcingAndPercentageOfInputsWereSourcedSustainablyIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForPlasticsIncludingPackagingEWasteHazardousWasteAndOtherWasteIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheWasteCollectionPlanIsInLineWithTheExtendedProducerResponsibilityPlanSubmittedToPollutionControlBoardsAndStepsTakenToAddressTheWasteCollectionPlanIfNotSubmitted:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple2LeadershipIndicators: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityConductedLifeCyclePerspectiveOrAssessmentsForAnyOfItsProductsOrForItsServices:
      {
        type: String,
      },
    WhetherDetailsOfSignificantSocialOrEnvironmentalConcernsFromProductionOrDisposalOfProductOrServiceWithActionTakenToMitigateTheSameIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfPercentageOfRecycledOrReusedInputMaterialToTotalMaterialByValueUsedInProductionOrProvidingServicesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherTheProductsAndPackagingReclaimedAtEndOfLifeOfProductsAmountReusedOrRecycledOrSafelyDisposedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfReclaimedProductsAndTheirPackagingMaterialsForEachProductCategoryIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple3EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfMeasuresForTheWellBeingOfEmployeesAndWorkersAndSpendingOnItIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForDetailsOfMeasuresForTheWellBeingOfEmployeesAndWorkersAndSpendingOnIt:
      {
        type: String,
      },
    RemarksForAssuranceOfDetailsOfMeasuresForTheWellBeingOfEmployeesAndWorkersAndSpendingOnIt:
      {
        type: String,
      },
    WhetherDetailsOfRetirementBenefitsIsAssuredByAssurer: {
      type: String,
    },
    WhetherThePremisesOrOfficesOfTheEntityAccessibleToDifferentlyAbledEmployeesAndWorkersAndStepsAreBeingTakenByTheEntityIfThePremisesOrOfficesOfTheEntityNotAccessibleIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHaveAnEqualOpportunityPolicyAsPerTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: String,
      },
    WhetherReturnToWorkAndRetentionRatesOfPermanentEmployeesAndWorkersThatTookParentalLeaveIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherIsThereAMechanismAvailableToReceiveAndRedressGrievancesForTheFollowingCategoriesOfEmployeesAndWorker:
      {
        type: String,
      },
    WhetherMembershipOfEmployeesAndWorkerInAssociationsOrUnionsRecognisedByTheListedEntityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTrainingGivenToEmployeesAndWorkersIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfPerformanceAndCareerDevelopmentReviewsOfEmployeesAndWorkerIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherHealthAndSafetyManagementSystemIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfSafetyRelatedIncidentsIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForDetailsOfSafetyRelatedIncidents: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfSafetyRelatedIncidents: {
      type: String,
    },
    WhetherMeasuresTakenByTheEntityToEnsureASafeAndHealthyWorkPlaceIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfComplaintsMadeByEmployeesAndWorkersIsAssuredByAssurerAsPerP3:
      {
        type: String,
      },
    WhetherAssessmentsOfYourPlantsAndOfficesThatWereAssessedForTheYearP3IsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOfYourPlantsAndOfficesThatWereAssessedIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple3LeadershipIndicators: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityExtendAnyLifeInsuranceOrAnyCompensatoryPackageInTheEventOfDeathOfEmployees:
      {
        type: String,
      },
    WhetherDetailsOfMeasuresUndertakenByTheEntityToEnsureThatStatutoryDuesHaveBeenDeductedAndDepositedByTheValueChainPartnersIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfNumberOfEmployeesOrWorkersHavingSufferedHighConsequenceWorkRelatedInjuryOrIllHealthOrFatalitiesWhoOrWhoseFamilyMembersAreRehabilitatedAndPlacedInSuitableEmploymentIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityProvideTransitionAssistanceProgramsToFacilitateContinuedEmployabilityAndTheManagementOfCareerEndingsResultingFromRetirementOrTerminationOfEmployment:
      {
        type: String,
      },
    WhetherDetailsOnAssessmentOfValueChainPartnersP3IsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOnAssessmentOfValueChainPartnersIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple4EssentialIndicators: {
      type: String,
    },
    WhetherTheProcessesForIdentifyingKeyStakeholderGroupsOfTheEntityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherListStakeholderGroupsIdentifiedAsKeyForYourEntityAndTheFrequencyOfEngagementWithEachStakeholderGroupIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple4LeadershipIndicators: {
      type: String,
    },
    WhetherTheProcessesForConsultationBetweenStakeholdersAndTheBoardOnEconomicEnvironmentalAndSocialTopicsOrIfConsultationIsDelegatedHowIsFeedbackFromSuchConsultationsProvidedToTheBoardIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherStakeholderConsultationIsUsedToSupportTheIdentificationAndManagementOfEnvironmentalAndSocialTopics:
      {
        type: String,
      },
    WhetherDetailsOfInstancesOfEngagementWithAndActionsTakenToAddressTheConcernsOfVulnerableOrMarginalizedStakeholderGroupsIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple5EssentialIndicators: {
      type: String,
    },
    WhetherEmployeesAndWorkersWhoHaveBeenProvidedTrainingOnHumanRightsIssuesAndPoliciesOfTheEntityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfMinimumWagesPaidToEmployeesAndWorkersIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfMedianOfRemunerationOrSalaryOrWagesAndWagesPaidToFemaleIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForDetailsOfMedianOfRemunerationOrSalaryOrWagesAndWagesPaidToFemale:
      {
        type: String,
      },
    RemarksForAssuranceOfDetailsOfMedianOfRemunerationOrSalaryOrWagesAndWagesPaidToFemale:
      {
        type: String,
      },
    AssurerHasAssuredWhetherDoYouHaveAFocalPointResponsibleForAddressingHumanRightsImpactsOrIssuesCausedOrContributedToByTheBusiness:
      {
        type: String,
      },
    WhetherTheInternalMechanismsInPlaceToRedressGrievancesRelatedToHumanRightsIssuesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfComplaintsMadeByEmployeesAndWorkersIsAssuredByAssurerAsPerP5:
      {
        type: String,
      },
    WhetherComplaintsFiledUnderTheSexualHarassmentOfWomenAtWorkplaceIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForComplaintsFiledUnderTheSexualHarassmentOfWomenAtWorkplace:
      {
        type: String,
      },
    RemarksForAssuranceOfComplaintsFiledUnderTheSexualHarassmentOfWomenAtWorkplace:
      {
        type: String,
      },
    WhetherMechanismsToPreventAdverseConsequencesToTheComplainantInDiscriminationAndHarassmentCasesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherHumanRightsRequirementsFormPartOfYourBusinessAgreementsAndContractsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherAssessmentsOfYourPlantsAndOfficesThatWereAssessedForTheYearP5IsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfPlantAndOfficeIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple5LeadershipIndicators: {
      type: String,
    },
    WhetherDetailsOfABusinessProcessBeingModifiedOrIntroducedAsAResultOfAddressingHumanRightsGrievancesOrComplaintsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheScopeAndCoverageOfAnyHumanRightsDueDiligenceConductedIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherThePremiseOrOfficeOfTheEntityAccessibleToDifferentlyAbledVisitorsAsPerTheRequirementsOfTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: String,
      },
    WhetherDetailsOnAssessmentOfValueChainPartnersP5IsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfValueChainPartnerIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple6EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfTotalEnergyConsumptionInJoulesOrMultiplesAndEnergyIntensityIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForDetailsOfTotalEnergyConsumptionInJoulesOrMultiplesAndEnergyIntensity:
      {
        type: String,
      },
    RemarksForAssuranceOfDetailsOfTotalEnergyConsumptionInJoulesOrMultiplesAndEnergyIntensity:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHaveAnySitesOrFacilitiesIdentifiedAsDesignatedConsumersUnderThePerformanceAchieveAndTradeSchemeOfTheGovernmentOfIndia:
      {
        type: String,
      },
    WhetherDetailsOfTheDisclosuresRelatedToWaterWithdrawalIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForDetailsOfTheDisclosuresRelatedToWaterWithdrawal: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfTheDisclosuresRelatedToWaterWithdrawal: {
      type: String,
    },
    WhetherDetailsOfTheDisclosuresRelatedToWaterDischargedIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForDetailsOfTheDisclosuresRelatedToWaterDischarged: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfTheDisclosuresRelatedToWaterDischarged: {
      type: String,
    },
    WhetherTheEntityImplementedAMechanismForZeroLiquidDischargeIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfAirEmissionsOtherThanGhgEmissionsByTheEntityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfGreenHouseGasEmissionsAndItsIntensityIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForDetailsOfGreenHouseGasEmissionsAndItsIntensity: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfGreenHouseGasEmissionsAndItsIntensity: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityHaveAnyProjectRelatedToReducingGreenHouseGasEmission:
      {
        type: String,
      },
    WhetherDetailsRelatedToWasteManagementByTheEntityIsAssuredByAssurer: {
      type: String,
    },
    AssuranceSubTypeForDetailsRelatedToWasteManagementByTheEntity: {
      type: String,
    },
    RemarksForAssuranceOfDetailsRelatedToWasteManagementByTheEntity: {
      type: String,
    },
    WhetherDetailsOfWasteManagementPracticesAdoptedInYourEstablishmentsAndTheStrategyAdoptedByCompanyToReduceUsageOfHazardousAndToxicChemicalsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfOperationsOrOfficesInOrAroundEcologicallySensitiveAreasWhereEnvironmentalApprovalsOrClearancesAreRequiredIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfEnvironmentalImpactAssessmentsOfProjectsUndertakenByTheEntityBasedOnApplicableLawsIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityCompliantWithTheApplicableEnvironmentalLaw:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple6LeadershipIndicators: {
      type: String,
    },
    WhetherWaterWithdrawalOrConsumptionAndDischargeInAreasOfWaterStressInKilolitresIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTotalScope3EmissionsAndItsIntensityIsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfSignificantDirectAndIndirectImpactOfTheEntityOnBiodiversityInSuchAreasAlongWithPreventionAndRemediationActivitiesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherTheEntityHasUndertakenAnySpecificInitiativesOrUsedInnovativeTechnologyOrSolutionsToImproveResourceEfficiencyIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHaveABusinessContinuityAndDisasterManagementPlan:
      {
        type: String,
      },
    WhetherDiscloseAnySignificantAdverseImpactToTheEnvironmentArisingFromTheValueChainOfTheEntityWhatMitigationOrAdaptationMeasuresHaveBeenTakenByTheEntityInThisRegardIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherPercentageOfValueChainPartnersByValueOfBusinessDoneWithSuchPartnersThatWereAssessedForEnvironmentalImpactsIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple7EssentialIndicators: {
      type: String,
    },
    WhetherTheEntityIsAMemberOfOrAffiliatedToTradeAndIndustryChambersOrAssociationsDeterminedBasedOnTheTotalMembersOfSuchBodyIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfCorrectiveActionTakenOrUnderwayOnAnyIssuesRelatedToAntiCompetitiveConductByTheEntityBasedOnAdverseOrdersFromRegulatoryAuthoritiesIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple7LeadershipIndicators: {
      type: String,
    },
    WhetherDetailsOfPublicPolicyPositionsAdvocatedByTheEntityIsAssuredByAssurer:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple8EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfSocialImpactAssessmentsOfProjectsUndertakenByTheEntityBasedOnApplicableLawsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfProjectsForWhichOngoingRehabilitationAndResettlementIsBeingUndertakenByEntityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDescribeTheMechanismsToReceiveAndRedressGrievancesOfTheCommunityIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherPercentageOfInputMaterialInputsToTotalInputsByValueSourcedFromSuppliersIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForPercentageOfInputMaterialInputsToTotalInputsByValueSourcedFromSuppliers:
      {
        type: String,
      },
    RemarksForAssuranceOfPercentageOfInputMaterialInputsToTotalInputsByValueSourcedFromSuppliers:
      {
        type: String,
      },
    WhetherJobCreationInSmallerTownsDiscloseWagesPaidToPersonsEmployedIncludingEmployeesOrWorkersEmployedOnAPermanentOrNonPermanentOrOnContractBasisIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForJobCreationInSmallerTownsDiscloseWagesPaidToPersonsEmployedIncludingEmployeesOrWorkersEmployedOnAPermanentOrNonPermanentOrOnContractBasis:
      {
        type: String,
      },
    RemarksForAssuranceOfJobCreationInSmallerTownsDiscloseWagesPaidToPersonsEmployedIncludingEmployeesOrWorkersEmployedOnAPermanentOrNonPermanentOrOnContractBasis:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple8LeadershipIndicators: {
      type: String,
    },
    WhetherDetailsOfActionsTakenToMitigateAnyNegativeSocialImpactsIdentifiedInTheSocialImpactAssessmentsIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfCSRProjectsUndertakenInDesignatedAspirationalDistrictsAsIdentifiedByGovernmentBodiesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherAPreferentialProcurementPolicyWherePreferenceToPurchaseFromSuppliersComprisingMarginalizedOrVulnerableGroupsAndItsPercentageOfTotalProcurementByValueDoesItConstituteIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfTheBenefitsDerivedAndSharedFromTheIntellectualPropertiesOwnedOrAcquiredIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfCorrectiveActionsTakenOrUnderwayBasedOnAnyAdverseOrderInIntellectualPropertyRelatedDisputesWhereinUsageOfTraditionalKnowledgeIsInvolvedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfBeneficiariesOfCSRProjectsIsAssuredByAssurer: {
      type: String,
    },
    TypeOfAssuranceForPrinciple9EssentialIndicators: {
      type: String,
    },
    WhetherTheMechanismsInPlaceToReceiveAndRespondToConsumerComplaintsAndFeedbackIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherTurnoverOfProductsAndOrServicesAsAPercentageOfTurnoverFromAllProductsOrServiceThatCarryInformationAboutAsAPercentageToTotalTurnoverIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDetailsOfNumberOfConsumerComplaintsP9IsAssuredByAssurer: {
      type: String,
    },
    WhetherDetailsOfInstancesOfProductRecallsOnAccountOfSafetyIssuesIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityHaveAFrameworkOrPolicyOnCyberSecurityAndRisksRelatedToDataPrivacy:
      {
        type: String,
      },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayOnIssuesRelatingToAdvertisingAndDeliveryOfEssentialServicesOrCyberSecurityAndDataPrivacyOrRecallsOrPenaltyOrActionTakenByRegulatoryAuthoritiesOnSafetyOfProductsOrServicesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherDataBreachesInformationLikeNumberOfInstancesOfDataBreachesAlongWithImpactAndPercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomersIsAssuredByAssurer:
      {
        type: String,
      },
    AssuranceSubTypeForDataBreachesInformationLikeNumberOfInstancesOfDataBreachesAlongWithImpactAndPercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomers:
      {
        type: String,
      },
    RemarksForAssuranceOfDataBreachesInformationLikeNumberOfInstancesOfDataBreachesAlongWithImpactAndPercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomers:
      {
        type: String,
      },
    TypeOfAssuranceForPrinciple9LeadershipIndicators: {
      type: String,
    },
    WhetherWeblinkWhereInformationOnProductsAndServicesOfTheEntityCanBeAccessedIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherStepsTakenToInformAndEducateConsumersAboutSafeAndResponsibleUsageOfProductsAndOrServicesIsAssuredByAssurer:
      {
        type: String,
      },
    WhetherMechanismsInPlaceToInformConsumersOfAnyRiskOfDisruptionOrDiscontinuationOfEssentialServicesIsAssuredByAssurer:
      {
        type: String,
      },
    AssurerHasAssuredWhetherTheEntityDisplayProductInformationOnTheProductOverAndAboveWhatIsMandatedAsPerLocalLaws:
      {
        type: String,
      },
    NameOfStockExchangeWhereTheCompanyIsListed: [
      {
        type: String,
      },
    ],
    DescriptionOfMainActivity: [
      {
        type: String,
      },
    ],
    DescriptionOfBusinessActivity: [
      {
        type: String,
      },
    ],
    PercentageOfTotalTurnoverForBusinessActivities: [
      {
        type: Number,
      },
    ],
    ProductOrServiceSoldByTheEntity: [
      {
        type: String,
      },
    ],
    NICCodeOfProductOrServiceSoldByTheEntity: [
      {
        type: Number,
      },
    ],
    PercentageOfTotalTurnoverForProductOrServiceSold: [
      {
        type: Number,
      },
    ],
    NumberOfLocations: [
      {
        type: Number,
      },
    ],
    NumberOfStatesWhereMarketServedByTheEntity: {
      type: Number,
    },
    NumberOfCountriesWhereMarketServedByTheEntity: {
      type: Number,
    },
    PercentageOfContributionOfExportsInTheTotalTurnoverOfTheEntity: {
      type: Number,
    },
    ABriefOnTypesOfCustomersExplanatoryTextBlock: {
      type: String,
    },
    NumberOfEmployeesOrWorkersIncludingDifferentlyAbled: [
      {
        type: Number,
      },
    ],
    PercentageOfEmployeesOrWorkersIncludingDifferentlyAbled: [
      {
        type: Number,
      },
    ],
    NumberOfDifferentlyAbledEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    PercentageOfDifferentlyAbledEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    TotalNumberOfBoardOfDirectors: {
      type: Number,
    },
    NumberOfFemaleBoardOfDirectors: {
      type: Number,
    },
    PercentageOfFemaleBoardOfDirectors: {
      type: Number,
    },
    TotalNumberOfKeyManagementPersonnel: {
      type: Number,
    },
    NumberOfFemaleKeyManagementPersonnel: {
      type: Number,
    },
    PercentageOfFemaleKeyManagementPersonnel: {
      type: Number,
    },
    TurnoverRate: [
      {
        type: Number,
      },
    ],
    WhetherCSRIsApplicableAsPerSection135OfCompaniesAct2013: {
      type: String,
    },
    Turnover: {
      type: Number,
    },
    NetWorth: {
      type: Number,
    },
    NameOfTheHoldingOrSubsidiaryAssociateCompaniesOrJointVentures: [
      {
        type: String,
      },
    ],
    CategoryOfCompany: [
      {
        type: String,
      },
    ],
    PercentageOfSharesHeldByListedEntity: [
      {
        type: Number,
      },
    ],
    DoesCompanyParticipateInTheBusinessResponsibilityInitiativesOfTheListedEntity:
      [
        {
          type: String,
        },
      ],
    GrievanceRedressalMechanismInPlace: [
      {
        type: String,
      },
    ],
    WebLinkForGrievanceRedressPolicy: [
      {
        type: String,
      },
    ],
    NumberOfComplaintsFiledFromStakeHolderGroupDuringTheYear: [
      {
        type: Number,
      },
    ],
    NumberOfComplaintsPendingFromStakeHolderGroupResolutionAtTheEndOfYear: [
      {
        type: Number,
      },
    ],
    RemarksStakeHolderGroupFromWhomComplaintIsReceived: [
      {
        type: String,
      },
    ],
    NameOfStakeHolderGroup: [
      {
        type: String,
      },
    ],
    MaterialIssueIdentified: [
      {
        type: String,
      },
    ],
    IndicateWhetherRiskOrOpportunity: [
      {
        type: String,
      },
    ],
    RationaleForIdentifyingTheRiskOpportunity: [
      {
        type: String,
      },
    ],
    InCaseOfRiskApproachToAdaptOrMitigate: {
      type: String,
    },
    FinancialImplicationsOfTheRiskOrOpportunity: [
      {
        type: String,
      },
    ],
    WhetherYourEntitysPolicyOrPoliciesCoverEachPrincipleAndItsCoreElementsOfTheNGRBCs:
      [
        {
          type: String,
        },
      ],
    HasThePolicyBeenApprovedByTheBoard: [
      {
        type: String,
      },
    ],
    WebLinkOfThePoliciesExplanatoryTextBlock: [
      {
        type: String,
      },
    ],
    WhetherTheEntityHasTranslatedThePolicyIntoProcedures: [
      {
        type: String,
      },
    ],
    DoTheEnlistedPoliciesExtendToYourValueChainPartners: [
      {
        type: String,
      },
    ],
    NameOfTheNationalAndInternationalCodesOrCertificationsOrLabelsOrStandardsAdoptedByYourEntityAndMappedToEachPrincipleExplanatoryTextBlock:
      [
        {
          type: String,
        },
      ],
    SpecificCommitmentsGoalsAndTargetsSetByTheEntityWithDefinedTimelinesExplanatoryTextBlock:
      [
        {
          type: String,
        },
      ],
    PerformanceOfTheEntityAgainstTheSpecificCommitmentsGoalsAndTargetsAlongWithReasonsInCaseTheSameAreNotMetExplanatoryTextBlock:
      [
        {
          type: String,
        },
      ],
    StatementByDirectorResponsibleForTheBusinessResponsibilityReportHighlightingESGRelatedChallengesTargetsAndAchievementsExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfTheHighestAuthorityResponsibleForImplementationAndOversightOfTheBusinessResponsibilityPolicyExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveASpecifiedCommitteeOfTheBoardOrDirectorResponsibleForDecisionMakingOnSustainabilityRelatedIssues:
      {
        type: String,
      },
    DetailsOfSpecifiedCommitteeOfTheBoardOrDirectorResponsibleForDecisionMakingOnSustainabilityRelatedIssuesExplanatoryTextBlock:
      {
        type: String,
      },
    PerformanceAgainstAbovePoliciesAndFollowUpActionIndicateWhetherReviewWasUndertakenBy:
      [
        {
          type: String,
        },
      ],
    ComplianceWithStatutoryRequirementsOfRelevanceToThePrinciplesAndRectificationOfAnyNonCompliancesIndicateWhetherReviewWasUndertakenBy:
      [
        {
          type: String,
        },
      ],
    PerformanceAgainstAbovePoliciesAndFollowUpActionFrequency: [
      {
        type: String,
      },
    ],
    ComplianceWithStatutoryRequirementsOfRelevanceToThePrinciplesAndRectificationOfAnyNonCompliancesFrequency:
      [
        {
          type: String,
        },
      ],
    DescriptionOfOtherFrequencyForPerformanceAgainstAbovePoliciesAndFollowUpAction:
      [
        {
          type: String,
        },
      ],
    DescriptionOfOtherFrequencyForComplianceWithStatutoryRequirementsOfRelevanceToThePrinciplesAndRectificationOfAnyNonCompliances:
      [
        {
          type: String,
        },
      ],
    HasTheEntityCarriedOutIndependentAssessmentEvaluationOfTheWorkingOfItsPoliciesByAnExternalAgency:
      [
        {
          type: String,
        },
      ],
    NameOfTheAgencyIfTheEntityCarriedOutIndependentAssessmentEvaluationOfTheWorkingOfItsPoliciesByAnExternalAgencyExplanatoryTextBlock:
      [
        {
          type: String,
        },
      ],
    NotesManagementAndProcessDisclosuresExplanatoryTextBlock: {
      type: String,
    },
    TotalNumberOfTrainingAndAwarenessProgramsHeld: [
      {
        type: Number,
      },
    ],
    TopicsOrPrinciplesCoveredUnderTheTrainingAndItsImpact: [
      {
        type: String,
      },
    ],
    PercentageOfPersonsInRespectiveCategoryCoveredByTheAwarenessProgrammes: [
      {
        type: Number,
      },
    ],
    DoesTheEntityHaveAnAntiCorruptionOrAntiBriberyPolicy: {
      type: String,
    },
    AntiCorruptionOrAntiBriberyPolicyExplanatoryTextBlock: {
      type: String,
    },
    WebLinkAtAntiCorruptionOrAntiBriberyPolicyIsPlace: {
      type: String,
    },
    NumberOfDirectorsAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: Number,
      },
    ],
    NumberOfKMPsAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: Number,
      },
    ],
    NumberOfWorkersAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: Number,
      },
    ],
    NumberOfComplaintsReceivedInRelationToIssuesOfConflictOfInterestOfTheDirectors:
      [
        {
          type: Number,
        },
      ],
    RemarksInCaseComplaintsReceivedInRelationToIssuesOfConflictOfInterestOfTheDirectors:
      [
        {
          type: String,
        },
      ],
    NumberOfComplaintsReceivedInRelationToIssuesOfConflictOfInterestOfTheKMPs: [
      {
        type: String,
      },
    ],
    RemarksInCaseComplaintsReceivedInRelationToIssuesOfConflictOfInterestOfTheKmps:
      [
        {
          type: String,
        },
      ],
    DetailsOfAnyCorrectiveActionTakenOrUnderwayOnIssuesRelatedToFinesOrPenaltiesOrActionTakenByRegulatorsOrLawEnforcementAgenciesOrJudicialInstitutionsOnCasesOfCorruptionAndConflictsOfInterestExplanatoryTextBlock:
      {
        type: String,
      },
    AmountOfAccountsPayableDuringTheYear: [
      {
        type: Number,
      },
    ],
    CostOfGoodsOrServicesProcuredDuringTheYear: [
      {
        type: Number,
      },
    ],
    NumberOfDaysOfAccountsPayable: [
      {
        type: String,
      },
    ],
    AmountOfPurchasesFromTradingHouses: [
      {
        type: Number,
      },
    ],
    AmountOfTotalPurchases: [
      {
        type: Number,
      },
    ],
    NumberOfTradingHousesWherePurchasesAreMade: [
      {
        type: String,
      },
    ],
    AmountOfPurchasesFromTopTenTradingHouses: [
      {
        type: Number,
      },
    ],
    AmountOfTotalPurchasesFromTradingHouses: [
      {
        type: Number,
      },
    ],
    AmountOfSalesToDealersOrDistributors: [
      {
        type: Number,
      },
    ],
    AmountOfTotalSales: [
      {
        type: Number,
      },
    ],
    NumberOfDealersOrDistributorsToWhomSalesAreMade: [
      {
        type: Number,
      },
    ],
    AmountOfSalesToTopTenDealersOrDistributors: [
      {
        type: Number,
      },
    ],
    AmountOfTotalSalesToDealersOrDistributors: [
      {
        type: Number,
      },
    ],
    AmountOfPurchasesFromRelatedParties: [
      {
        type: Number,
      },
    ],
    AmountOfTotalPurchasesForShareOfRelatedPartyTransactions: [
      {
        type: Number,
      },
    ],
    PercentageOfPurchasesFromRelatedPartiesInTotalPurchasesForShareOfRelatedPartyTransactions:
      [
        {
          type: Number,
        },
      ],
    AmountOfSalesToRelatedParties: [
      {
        type: Number,
      },
    ],
    AmountOfTotalSalesForShareOfRelatedPartyTransactions: [
      {
        type: Number,
      },
    ],
    PercentageOfSalesToRelatedPartiesInTotalSalesForShareOfRelatedPartyTransactions:
      [
        {
          type: Number,
        },
      ],
    AmountOfLoansAndAdvancesGivenToRelatedParties: [
      {
        type: Number,
      },
    ],
    AmountOfTotalLoansAndAdvances: [
      {
        type: Number,
      },
    ],
    PercentageOfLoansAndAdvancesGivenToRelatedPartiesInTotalLoansAndAdvances: [
      {
        type: Number,
      },
    ],
    AmountOfInvestmentsInRelatedParties: [
      {
        type: Number,
      },
    ],
    AmountOfTotalInvestments: [
      {
        type: Number,
      },
    ],
    PercentageOfInvestmentsInRelatedPartiesInTotalInvestments: [
      {
        type: Number,
      },
    ],
    DoesTheEntityHaveProcessesInPlaceToAvoidOrManageConflictOfInterestsInvolvingMembersOfTheBoard:
      {
        type: String,
      },
    DetailsOfTheEntityHaveProcessesInPlaceToAvoidOrManageConflictOfInterestsInvolvingMembersOfTheBoardExplanatoryTextBlock:
      {
        type: String,
      },
    NotesPrinciple1ExplanatoryTextBlock: {
      type: String,
    },
    TotalNumberOfAwarenessProgrammesHeld: {
      type: String,
    },
    TopicsOrPrinciplesCoveredUnderTheTraining: {
      type: String,
    },
    PercentageOfValueChainPartnersCoveredUnderTheAwarenessProgrammes: {
      type: Number,
    },
    PercentageOfRAndD: [
      {
        type: Number,
      },
    ],
    DetailsOfImprovementsInEnvironmentalAndSocialImpactsDueToRAndD: {
      type: String,
    },
    PercentageOfCapex: [
      {
        type: Number,
      },
    ],
    DetailsOfImprovementsInEnvironmentalAndSocialImpactsDueToCapex: {
      type: String,
    },
    DoesTheEntityHaveProceduresInPlaceForSustainableSourcing: {
      type: String,
    },
    PercentageOfInputsWereSourcedSustainably: {
      type: Number,
    },
    DescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForPlasticsIncludingPackagingExplanatoryTextBlock:
      {
        type: String,
      },
    DescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForEWasteExplanatoryTextBlock:
      {
        type: String,
      },
    DescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForHazardousWasteExplanatoryTextBlock:
      {
        type: String,
      },
    DescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForOtherWasteExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherExtendedProducerResponsibilityIsApplicableToTheEntitySActivities: {
      type: String,
    },
    WhetherTheWasteCollectionPlanIsInLineWithTheExtendedProducerResponsibilityPlanSubmittedToPollutionControlBoards:
      {
        type: String,
      },
    HasTheEntityConductedLifeCyclePerspectiveOrAssessmentsForAnyOfItsProductsOrForItsServices:
      {
        type: String,
      },
    NotesPrinciple2ExplanatoryTextBlock: {
      type: String,
    },
    NICCodeOfProductOrServiceOfConductedLifecyclePerspective: {
      type: Number,
    },
    NameOfProductOrServiceOfConductedLifecyclePerspective: {
      type: String,
    },
    PercentageOfTotalTurnoverContributedForConductedLifecyclePerspective: {
      type: Number,
    },
    BoundaryForWhichTheLifeCyclePerspectiveOrAssessmentWasConducted: {
      type: String,
    },
    WhetherConductedByIndependentExternalAgency: {
      type: String,
    },
    ResultsCommunicatedInPublicDomain: {
      type: String,
    },
    IndicateInPutMaterial: [
      {
        type: String,
      },
    ],
    RecycledOrReUsedInPutMaterialToTotalMaterial: [
      {
        type: Number,
      },
    ],
    AmountOfReUsed: [
      {
        type: Number,
      },
    ],
    AmountOfRecycled: [
      {
        type: Number,
      },
    ],
    AmountOfSafelyDisposed: [
      {
        type: Number,
      },
    ],
    NumberOfWellBeingOfEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    PercentageOfWellBeingOfEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    AmountOfCostIncurredOnWellBeingMeasures: [
      {
        type: Number,
      },
    ],
    TotalRevenueOfTheCompany: [
      {
        type: Number,
      },
    ],
    PercentageOfCostIncurredOnWellBeingMeasuresWithRespectToTotalRevenueOfTheCompany:
      [
        {
          type: String,
        },
      ],
    NumberOfEmployeesCoveredAsPercentageOfTotalEmployees: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesCoveredAsPercentageOfTotalWorker: [
      {
        type: Number,
      },
    ],
    DeductedAndDepositedWithTheAuthority: [
      {
        type: String,
      },
    ],
    AreThePremisesOrOfficesOfTheEntityAccessibleToDifferentlyAbledEmployeesAndWorkers:
      {
        type: String,
      },
    DoesTheEntityHaveAnEqualOpportunityPolicyAsPerTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: String,
      },
    WebLinkOfEqualOppertunityPolicyTextBlock: {
      type: String,
    },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForTheFollowingCategoriesOfEmployeesAndWorker:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForPermanentWorkers:
      {
        type: String,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForPermanentWorkersExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentWorkers:
      {
        type: String,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentWorkersExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForPermanentEmployees:
      {
        type: String,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForPermanentEmployeesExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentEmployees:
      {
        type: String,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentEmployeesExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherAnOccupationalHealthAndSafetyManagementSystemHasBeenImplementedByTheEntity:
      {
        type: String,
      },
    DetailsOfOccupationalHealthAndSafetyManagementSystemExplanatoryTextBlock: {
      type: String,
    },
    DesclosureOfTheProcessesUsedToIdentifyWorkRelatedHazardsAndAssessRisksOnARoutineAndNonRoutineBasisByTheEntityExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherYouHaveProcessesForWorkersToReportTheWorkRelatedHazardsAndToRemoveThemselvesFromSuchRisks:
      {
        type: String,
      },
    DoTheEmployeesOrWorkerOfTheEntityHaveAccessToNonOccupationalMedicalAndHealthcareServices:
      {
        type: String,
      },
    DescribeTheMeasuresTakenByTheEntityToEnsureASafeAndHealthyWorkPlaceExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOfYourPlantsAndOfficesThatWereAssessedExplanatoryTextBlock:
      {
        type: String,
      },
    PercentageOfHealthAndSafetyPracticesOfYourPlantsAndOfficesThatWereAssessedP3:
      {
        type: Number,
      },
    PercentageOfWorkingConditionsOfYourPlantsAndOfficesThatWereAssessedP3: {
      type: Number,
    },
    NotesPrinciple3ExplanatoryTextBlock: {
      type: String,
    },
    ReturnToWorkRatePermanentEmployeesThatTookParentalLeave: [
      {
        type: Number,
      },
    ],
    RetentionRatesPermanentEmployeesThatTookParentalLeave: [
      {
        type: Number,
      },
    ],
    ReturnToWorkRatePermanentWorkersThatTookParentalLeave: [
      {
        type: Number,
      },
    ],
    RetentionRatesPermanentWorkersThatTookParentalLeave: [
      {
        type: Number,
      },
    ],
    TotalNumberOfEmployeesOrWorkersForMembership: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesOrWorkersArePartOfAssociationsOrUnion: [
      {
        type: Number,
      },
    ],
    PercentageOfEmployeesOrWorkersArePartOfAssociationsOrUnionOfTotalNumberOfEmployee:
      [
        {
          type: Number,
        },
      ],
    NumberOfTrainedEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    PercentageOfTrainedEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    TotalNumberOfEmployeesOrWorkersForPerformanceAndCareerDevelopment: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesOrWorkerForPerformanceAndCareerDevelopment: [
      {
        type: Number,
      },
    ],
    PercentageOfEmployeesOrWorkerForPerformanceAndCareerDevelopment: [
      {
        type: Number,
      },
    ],
    LostTimeInjuryFrequencyRatePerOneMillionPersonHoursWorked: [
      {
        type: Number,
      },
    ],
    TotalRecordableWorkRelatedInjuries: [
      {
        type: Number,
      },
    ],
    NumberOfFatalities: [
      {
        type: Number,
      },
    ],
    HighConsequenceWorkRelatedInjuryOrIllHealthExcludingFatalities: [
      {
        type: Number,
      },
    ],
    NumberOfComplaintsFiledDuringTheYear: [
      {
        type: Number,
      },
    ],
    NumberOfComplaintsPendingResolutionAtTheEndOfYear: [
      {
        type: Number,
      },
    ],
    DoesTheEntityExtendAnyLifeInsuranceOrAnyCompensatoryPackageInTheEventOfDeathOfEmployees:
      {
        type: String,
      },
    DoesTheEntityExtendAnyLifeInsuranceOrAnyCompensatoryPackageInTheEventOfDeathOfWorkers:
      {
        type: String,
      },
    DetailsOfMeasuresUndertakenByTheEntityToEnsureThatStatutoryDuesHaveBeenDeductedAndDepositedByTheValueChainPartnersExplanatoryTextBlock:
      {
        type: String,
      },
    TotalNumberOfAffectedEmployees: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesOrWhoseFamilyMembersRehabilitatedAndPlacedInSuitableEmployment:
      [
        {
          type: Number,
        },
      ],
    TotalNumberOfAffectedWorkers: [
      {
        type: Number,
      },
    ],
    NumberOfWorkersOrWhoseFamilyMembersRehabilitatedAndPlacedInSuitableEmployment:
      [
        {
          type: Number,
        },
      ],
    DoesTheEntityProvideTransitionAssistanceProgramsToFacilitateContinuedEmployabilityAndTheManagementOfCareerEndingsResultingFromRetirementOrTerminationOfEmployment:
      {
        type: String,
      },
    PercentageOfHealthAndSafetyPracticesOfValueChainPartnersP3: {
      type: Number,
    },
    PercentageOfWorkingConditionsOfValueChainPartnersP3: {
      type: Number,
    },
    DetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOnAssessmentOfValueChainPartnersExplanatoryTextBlock:
      {
        type: String,
      },
    DescribeTheProcessesForIdentifyingKeyStakeholderGroupsOfTheEntityExplanatoryTextBlock:
      {
        type: String,
      },
    ProvideTheProcessesForConsultationBetweenStakeholdersAndTheBoardOnEconomicEnvironmentalAndSocialTopicsOrIfConsultationIsDelegatedHowIsFeedbackFromSuchConsultationsProvidedToTheBoardExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherStakeholderConsultationIsUsedToSupportTheIdentificationAndManagementOfEnvironmentalAndSocialTopics:
      {
        type: String,
      },
    DetailsOfInstancesAsToHowTheInputsReceivedFromStakeholdersOnTheseTopicsWereIncorporatedIntoPoliciesAndActivitiesOfTheEntityExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfInstancesOfEngagementWithAndActionsTakenToAddressTheConcernsOfVulnerableMarginalizedStakeholderGroupsExplanatoryTextBlock:
      {
        type: String,
      },
    NotesPrinciple4ExplanatoryTextBlock: {
      type: String,
    },
    StakeholderGroup: [
      {
        type: String,
      },
    ],
    WhetherIdentifiedAsVulnerableAndMarginalizedGroup: [
      {
        type: String,
      },
    ],
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
