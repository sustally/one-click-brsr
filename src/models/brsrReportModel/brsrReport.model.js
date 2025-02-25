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
    EMailOfTheCompany: {
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
      type: Number,
    },
    NameOfContactPerson: {
      type: String,
    },
    ContactNumberOfContactPerson: {
      type: String,
    },
    EMailOfContactPerson: {
      type: String,
    },
    ReportingBoundary: {
      type: String,
    },
    WhetherTheCompanyHasUndertakenReasonableAssuranceOfTheBRSRCore: {
      type: Boolean,
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
      type: Boolean,
    },
    WhetherNameOfTheCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherYearOfIncorporationIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherAddressOfRegisteredOfficeOfCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherAddressOfCorporateOfficeOfCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherEMailOfTheCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherTelephoneOfCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherWebsiteOfCompanyIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfFinancialYearForWhichReportingIsBeingDoneIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTheStockExchangeWhereTheCompanyIsListedIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherValueOfSharesPaidUpIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherNameAndContactDetailsOfTheContactPersonInCaseOfAnyQueriesOnTheBRSRReportIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherReportingBoundaryIsAssuredByAssurer: {
      type: Boolean,
    },
    TypeOfAssuranceForDetailsOfProductsOrServices: {
      type: String,
    },
    WhetherDetailsOfBusinessActivitiesAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherProductsOrServicesSoldByTheEntityAccountingForNinetyPercentOfTheTurnoverIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForDetailsOfOperations: {
      type: String,
    },
    WhetherDetailsOfNumberOfLocationsWherePlantsAndOrOperationsOrOfficesOfTheEntityAreSituatedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherMarketsServedByTheEntityIsAssuredByAssurer: {
      type: Boolean,
    },
    TypeOfAssuranceForDetailsOfEmployees: {
      type: String,
    },
    WhetherDetailsOfEmployeesAsAtTheEndOfFinancialYearIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherParticipationOrInclusionOrRepresentationOfWomenIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherTurnoverRateForPermanentEmployeesAndWorkersDiscloseTrendsForPastThreeYearsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForDetailsOfHoldingSubsidiaryAndAssociateCompaniesIncludingJointVentures:
      {
        type: String,
      },
    WhetherNamesOfHoldingSubsidiaryAssociateCompaniesJointVenturesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForDetailsOfCSR: {
      type: String,
    },
    WhetherCSRIsApplicableAsPerSection135OfCompaniesAct2013IsAssuredByAssurer: {
      type: Boolean,
    },
    TypeOfAssuranceForTransparencyAndDisclosuresCompliances: {
      type: String,
    },
    WhetherComplaintsOrGrievancesOnAnyOfThePrinciplesUnderTheNationalGuidelinesOnResponsibleBusinessConductIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherOverviewOfTheEntitysMaterialResponsibleBusinessConductIssuesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForSectionBManagementAndProcessDisclosures: {
      type: String,
    },
    TypeOfAssuranceForPolicyAndManagementProcesses: {
      type: String,
    },
    AssurerHasAssuredWhetherYourEntitysPolicyOrPoliciesCoverEachPrincipleAndItsCoreElementsOfTheNGRBCs:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHasTranslatedThePolicyIntoProcedures: {
      type: Boolean,
    },
    AssurerHasAssuredWhetherTheEnlistedPoliciesExtendToYourValueChainPartners: {
      type: Boolean,
    },
    WhetherNameOfTheNationalAndInternationalCodesOrCertificationsOrLabelsOrStandardsAdoptedByYourEntityAndMappedToEachPrincipleIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherSpecificCommitmentsGoalsAndTargetsSetByTheEntityWithDefinedTimelinesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherPerformanceOfTheEntityAgainstTheSpecificCommitmentsGoalsAndTargetsAlongWithReasonsInCaseTheSameAreNotMetIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForGovernanceLeadershipAndOversight: {
      type: String,
    },
    WhetherStatementByDirectorResponsibleForTheBusinessResponsibilityReportHighlightingESGRelatedChallengesTargetsAndAchievementsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTheHighestAuthorityResponsibleForImplementationAndOversightOfTheBusinessResponsibilityPolicyIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHaveASpecifiedCommitteeOfTheBoardOrDirectorResponsibleForDecisionMakingOnSustainabilityRelatedIssues:
      {
        type: Boolean,
      },
    WhetherPerformanceAgainstAbovePoliciesAndFollowUpActionIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherComplianceWithStatutoryRequirementsOfRelevanceToThePrinciplesAndRectificationOfAnyNonCompliancesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHasCarriedOutIndependentAssessmentEvaluationOfTheWorkingOfItsPoliciesByAnExternalAgency:
      {
        type: Boolean,
      },
    WhetherReasonsIfPoliciesNotCoverEachPrincipleAndItsCoreElementsOfTheNGRBCsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForSectionCPrincipleWisePerformanceDisclosures: {
      type: String,
    },
    TypeOfAssuranceForPrinciple1EssentialIndicators: {
      type: String,
    },
    WhetherPercentageCoverageByTrainingAndAwarenessProgramsOnAnyOfThePrinciplesDuringTheFinancialYearForBODOrKMPOrEmployeeOrWorkerIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfFinesOrPenaltiesOrPunishmentOrAwardOrCompoundingFeesOrSettlementIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTheAppealOrRevisionPreferredInCasesWhereMonetaryOrNonMonetaryActionHasBeenAppealedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsAndWeblinkOfAnAntiCorruptionOrAntiBriberyPolicyIsPlaceIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherNumberOfDirectorsOrKMPsOrEmployeesOrWorkersAgainstWhomDisciplinaryActionWasTakenByAnyLawEnforcementAgencyForTheChargesOfBriberyOrCorruptionIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfComplaintsWithRegardToConflictOfInterestIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayOnIssuesRelatedToFinesOrPenaltiesOrActionTakenByRegulatorsOrLawEnforcementAgenciesOrJudicialInstitutionsOnCasesOfCorruptionAndConflictsOfInterestIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherNumberOfDaysOfAccountsPayablesIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForNumberOfDaysOfAccountsPayables: {
      type: String,
    },
    RemarksForAssuranceOfNumberOfDaysOfAccountsPayables: {
      type: String,
    },
    WhetherDetailsOfConcentrationOfPurchasesAndSalesWithTradingHousesDealersAndRelatedPartiesAlongWithLoansAndAdvancesAndInvestmentsWithRelatedPartiesIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
      },
    WhetherTheEntityHaveProcessesInPlaceToAvoidOrManageConflictOfInterestsInvolvingMembersOfTheBoardIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple2EssentialIndicators: {
      type: String,
    },
    WhetherPercentageOfRAndDAndCapitalExpenditureInvestmentsInSpecificTechnologiesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherTheEntityHaveProceduresInPlaceForSustainableSourcingAndPercentageOfInputsWereSourcedSustainablyIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDescribeTheProcessesInPlaceToSafelyReclaimYourProductsForReusingRecyclingAndDisposingAtTheEndOfLifeForPlasticsIncludingPackagingEWasteHazardousWasteAndOtherWasteIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheWasteCollectionPlanIsInLineWithTheExtendedProducerResponsibilityPlanSubmittedToPollutionControlBoardsAndStepsTakenToAddressTheWasteCollectionPlanIfNotSubmitted:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple2LeadershipIndicators: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityConductedLifeCyclePerspectiveOrAssessmentsForAnyOfItsProductsOrForItsServices:
      {
        type: Boolean,
      },
    WhetherDetailsOfSignificantSocialOrEnvironmentalConcernsFromProductionOrDisposalOfProductOrServiceWithActionTakenToMitigateTheSameIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfPercentageOfRecycledOrReusedInputMaterialToTotalMaterialByValueUsedInProductionOrProvidingServicesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherTheProductsAndPackagingReclaimedAtEndOfLifeOfProductsAmountReusedOrRecycledOrSafelyDisposedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfReclaimedProductsAndTheirPackagingMaterialsForEachProductCategoryIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple3EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfMeasuresForTheWellBeingOfEmployeesAndWorkersAndSpendingOnItIsAssuredByAssurer:
      {
        type: Boolean,
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
      type: Boolean,
    },
    WhetherThePremisesOrOfficesOfTheEntityAccessibleToDifferentlyAbledEmployeesAndWorkersAndStepsAreBeingTakenByTheEntityIfThePremisesOrOfficesOfTheEntityNotAccessibleIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHaveAnEqualOpportunityPolicyAsPerTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: Boolean,
      },
    WhetherReturnToWorkAndRetentionRatesOfPermanentEmployeesAndWorkersThatTookParentalLeaveIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherIsThereAMechanismAvailableToReceiveAndRedressGrievancesForTheFollowingCategoriesOfEmployeesAndWorker:
      {
        type: Boolean,
      },
    WhetherMembershipOfEmployeesAndWorkerInAssociationsOrUnionsRecognisedByTheListedEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTrainingGivenToEmployeesAndWorkersIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfPerformanceAndCareerDevelopmentReviewsOfEmployeesAndWorkerIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherHealthAndSafetyManagementSystemIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfSafetyRelatedIncidentsIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForDetailsOfSafetyRelatedIncidents: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfSafetyRelatedIncidents: {
      type: String,
    },
    WhetherMeasuresTakenByTheEntityToEnsureASafeAndHealthyWorkPlaceIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfComplaintsMadeByEmployeesAndWorkersIsAssuredByAssurerAsPerP3:
      {
        type: Boolean,
      },
    WhetherAssessmentsOfYourPlantsAndOfficesThatWereAssessedForTheYearP3IsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOfYourPlantsAndOfficesThatWereAssessedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple3LeadershipIndicators: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityExtendAnyLifeInsuranceOrAnyCompensatoryPackageInTheEventOfDeathOfEmployees:
      {
        type: Boolean,
      },
    WhetherDetailsOfMeasuresUndertakenByTheEntityToEnsureThatStatutoryDuesHaveBeenDeductedAndDepositedByTheValueChainPartnersIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfNumberOfEmployeesOrWorkersHavingSufferedHighConsequenceWorkRelatedInjuryOrIllHealthOrFatalitiesWhoOrWhoseFamilyMembersAreRehabilitatedAndPlacedInSuitableEmploymentIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityProvideTransitionAssistanceProgramsToFacilitateContinuedEmployabilityAndTheManagementOfCareerEndingsResultingFromRetirementOrTerminationOfEmployment:
      {
        type: Boolean,
      },
    WhetherDetailsOnAssessmentOfValueChainPartnersP3IsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfAnyCorrectiveActionTakenOrUnderwayToAddressSafetyRelatedIncidentsOnAssessmentOfValueChainPartnersIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple4EssentialIndicators: {
      type: String,
    },
    WhetherTheProcessesForIdentifyingKeyStakeholderGroupsOfTheEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherListStakeholderGroupsIdentifiedAsKeyForYourEntityAndTheFrequencyOfEngagementWithEachStakeholderGroupIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple4LeadershipIndicators: {
      type: String,
    },
    WhetherTheProcessesForConsultationBetweenStakeholdersAndTheBoardOnEconomicEnvironmentalAndSocialTopicsOrIfConsultationIsDelegatedHowIsFeedbackFromSuchConsultationsProvidedToTheBoardIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherStakeholderConsultationIsUsedToSupportTheIdentificationAndManagementOfEnvironmentalAndSocialTopics:
      {
        type: Boolean,
      },
    WhetherDetailsOfInstancesOfEngagementWithAndActionsTakenToAddressTheConcernsOfVulnerableOrMarginalizedStakeholderGroupsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple5EssentialIndicators: {
      type: String,
    },
    WhetherEmployeesAndWorkersWhoHaveBeenProvidedTrainingOnHumanRightsIssuesAndPoliciesOfTheEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfMinimumWagesPaidToEmployeesAndWorkersIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfMedianOfRemunerationOrSalaryOrWagesAndWagesPaidToFemaleIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
      },
    WhetherTheInternalMechanismsInPlaceToRedressGrievancesRelatedToHumanRightsIssuesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfComplaintsMadeByEmployeesAndWorkersIsAssuredByAssurerAsPerP5:
      {
        type: Boolean,
      },
    WhetherComplaintsFiledUnderTheSexualHarassmentOfWomenAtWorkplaceIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
      },
    WhetherHumanRightsRequirementsFormPartOfYourBusinessAgreementsAndContractsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherAssessmentsOfYourPlantsAndOfficesThatWereAssessedForTheYearP5IsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfPlantAndOfficeIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple5LeadershipIndicators: {
      type: String,
    },
    WhetherDetailsOfABusinessProcessBeingModifiedOrIntroducedAsAResultOfAddressingHumanRightsGrievancesOrComplaintsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTheScopeAndCoverageOfAnyHumanRightsDueDiligenceConductedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherThePremiseOrOfficeOfTheEntityAccessibleToDifferentlyAbledVisitorsAsPerTheRequirementsOfTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: Boolean,
      },
    WhetherDetailsOnAssessmentOfValueChainPartnersP5IsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfValueChainPartnerIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple6EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfTotalEnergyConsumptionInJoulesOrMultiplesAndEnergyIntensityIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
      },
    WhetherDetailsOfTheDisclosuresRelatedToWaterWithdrawalIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForDetailsOfTheDisclosuresRelatedToWaterWithdrawal: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfTheDisclosuresRelatedToWaterWithdrawal: {
      type: String,
    },
    WhetherDetailsOfTheDisclosuresRelatedToWaterDischargedIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForDetailsOfTheDisclosuresRelatedToWaterDischarged: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfTheDisclosuresRelatedToWaterDischarged: {
      type: String,
    },
    WhetherTheEntityImplementedAMechanismForZeroLiquidDischargeIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfAirEmissionsOtherThanGhgEmissionsByTheEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfGreenHouseGasEmissionsAndItsIntensityIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForDetailsOfGreenHouseGasEmissionsAndItsIntensity: {
      type: String,
    },
    RemarksForAssuranceOfDetailsOfGreenHouseGasEmissionsAndItsIntensity: {
      type: String,
    },
    AssurerHasAssuredWhetherTheEntityHaveAnyProjectRelatedToReducingGreenHouseGasEmission:
      {
        type: Boolean,
      },
    WhetherDetailsRelatedToWasteManagementByTheEntityIsAssuredByAssurer: {
      type: Boolean,
    },
    AssuranceSubTypeForDetailsRelatedToWasteManagementByTheEntity: {
      type: String,
    },
    RemarksForAssuranceOfDetailsRelatedToWasteManagementByTheEntity: {
      type: String,
    },
    WhetherDetailsOfWasteManagementPracticesAdoptedInYourEstablishmentsAndTheStrategyAdoptedByCompanyToReduceUsageOfHazardousAndToxicChemicalsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfOperationsOrOfficesInOrAroundEcologicallySensitiveAreasWhereEnvironmentalApprovalsOrClearancesAreRequiredIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfEnvironmentalImpactAssessmentsOfProjectsUndertakenByTheEntityBasedOnApplicableLawsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityCompliantWithTheApplicableEnvironmentalLaw:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple6LeadershipIndicators: {
      type: String,
    },
    WhetherWaterWithdrawalOrConsumptionAndDischargeInAreasOfWaterStressInKilolitresIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTotalScope3EmissionsAndItsIntensityIsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfSignificantDirectAndIndirectImpactOfTheEntityOnBiodiversityInSuchAreasAlongWithPreventionAndRemediationActivitiesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherTheEntityHasUndertakenAnySpecificInitiativesOrUsedInnovativeTechnologyOrSolutionsToImproveResourceEfficiencyIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHaveABusinessContinuityAndDisasterManagementPlan:
      {
        type: Boolean,
      },
    WhetherDiscloseAnySignificantAdverseImpactToTheEnvironmentArisingFromTheValueChainOfTheEntityWhatMitigationOrAdaptationMeasuresHaveBeenTakenByTheEntityInThisRegardIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherPercentageOfValueChainPartnersByValueOfBusinessDoneWithSuchPartnersThatWereAssessedForEnvironmentalImpactsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple7EssentialIndicators: {
      type: String,
    },
    WhetherTheEntityIsAMemberOfOrAffiliatedToTradeAndIndustryChambersOrAssociationsDeterminedBasedOnTheTotalMembersOfSuchBodyIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfCorrectiveActionTakenOrUnderwayOnAnyIssuesRelatedToAntiCompetitiveConductByTheEntityBasedOnAdverseOrdersFromRegulatoryAuthoritiesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple7LeadershipIndicators: {
      type: String,
    },
    WhetherDetailsOfPublicPolicyPositionsAdvocatedByTheEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    TypeOfAssuranceForPrinciple8EssentialIndicators: {
      type: String,
    },
    WhetherDetailsOfSocialImpactAssessmentsOfProjectsUndertakenByTheEntityBasedOnApplicableLawsIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfProjectsForWhichOngoingRehabilitationAndResettlementIsBeingUndertakenByEntityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDescribeTheMechanismsToReceiveAndRedressGrievancesOfTheCommunityIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherPercentageOfInputMaterialInputsToTotalInputsByValueSourcedFromSuppliersIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
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
        type: Boolean,
      },
    WhetherDetailsOfCSRProjectsUndertakenInDesignatedAspirationalDistrictsAsIdentifiedByGovernmentBodiesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherAPreferentialProcurementPolicyWherePreferenceToPurchaseFromSuppliersComprisingMarginalizedOrVulnerableGroupsAndItsPercentageOfTotalProcurementByValueDoesItConstituteIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfTheBenefitsDerivedAndSharedFromTheIntellectualPropertiesOwnedOrAcquiredIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfCorrectiveActionsTakenOrUnderwayBasedOnAnyAdverseOrderInIntellectualPropertyRelatedDisputesWhereinUsageOfTraditionalKnowledgeIsInvolvedIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfBeneficiariesOfCSRProjectsIsAssuredByAssurer: {
      type: Boolean,
    },
    TypeOfAssuranceForPrinciple9EssentialIndicators: {
      type: String,
    },
    WhetherTheMechanismsInPlaceToReceiveAndRespondToConsumerComplaintsAndFeedbackIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherTurnoverOfProductsAndOrServicesAsAPercentageOfTurnoverFromAllProductsOrServiceThatCarryInformationAboutAsAPercentageToTotalTurnoverIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDetailsOfNumberOfConsumerComplaintsP9IsAssuredByAssurer: {
      type: Boolean,
    },
    WhetherDetailsOfInstancesOfProductRecallsOnAccountOfSafetyIssuesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityHaveAFrameworkOrPolicyOnCyberSecurityAndRisksRelatedToDataPrivacy:
      {
        type: Boolean,
      },
    WhetherDetailsOfAnyCorrectiveActionsTakenOrUnderwayOnIssuesRelatingToAdvertisingAndDeliveryOfEssentialServicesOrCyberSecurityAndDataPrivacyOrRecallsOrPenaltyOrActionTakenByRegulatoryAuthoritiesOnSafetyOfProductsOrServicesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherDataBreachesInformationLikeNumberOfInstancesOfDataBreachesAlongWithImpactAndPercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomersIsAssuredByAssurer:
      {
        type: Boolean,
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
        type: Boolean,
      },
    WhetherStepsTakenToInformAndEducateConsumersAboutSafeAndResponsibleUsageOfProductsAndOrServicesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    WhetherMechanismsInPlaceToInformConsumersOfAnyRiskOfDisruptionOrDiscontinuationOfEssentialServicesIsAssuredByAssurer:
      {
        type: Boolean,
      },
    AssurerHasAssuredWhetherTheEntityDisplayProductInformationOnTheProductOverAndAboveWhatIsMandatedAsPerLocalLaws:
      {
        type: Boolean,
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
      type: Boolean,
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
          type: Boolean,
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
          type: Boolean,
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
        type: Number,
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
        type: Number,
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
      type: Number,
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
      type: Boolean,
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
      type: Boolean,
    },
    WhetherTheWasteCollectionPlanIsInLineWithTheExtendedProducerResponsibilityPlanSubmittedToPollutionControlBoards:
      {
        type: Boolean,
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
      type: Boolean,
    },
    ResultsCommunicatedInPublicDomain: {
      type: Boolean,
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
          type: Number,
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
        type: Boolean,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForPermanentWorkers:
      {
        type: Boolean,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForPermanentWorkersExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentWorkers:
      {
        type: Boolean,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentWorkersExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForPermanentEmployees:
      {
        type: Boolean,
      },
    DetailsOfMechanismAvailableToReceiveAndRedressGrievancesForPermanentEmployeesExplanatoryTextBlock:
      {
        type: String,
      },
    IsThereAMechanismAvailableToReceiveAndRedressGrievancesForOtherThanPermanentEmployees:
      {
        type: Boolean,
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
        type: Boolean,
      },
    DoesTheEntityExtendAnyLifeInsuranceOrAnyCompensatoryPackageInTheEventOfDeathOfWorkers:
      {
        type: Boolean,
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
        type: Boolean,
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
    ChannelsOfCommunication: [
      {
        type: String,
      },
    ],
    DetailsOfOtherChannelsOfCommunication: [
      {
        type: String,
      },
    ],
    FrequencyOfEngagement: [
      {
        type: String,
      },
    ],
    DetailsOfOtherFrequencyOfEngagement: [
      {
        type: String,
      },
    ],
    PurposeAndScopeOfEngagementIncludingKeyTopicsAndConcernsRaisedDuringSuchEngagement:
      [
        {
          type: String,
        },
      ],
    TotalNumberOfEmployeesOrWorkersForTrainingOnHumanRightsIssues: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesOrWorkersCoveredForProvidedTrainingOnHumanRightsIssues: [
      {
        type: Number,
      },
    ],
    PercentageOfEmployeesOrWorkersCoveredForProvidedTrainingOnHumanRightsIssues:
      [
        {
          type: Number,
        },
      ],
    NumberOfEmployeesOrWorkersRelatedToMinimumWages: [
      {
        type: Number,
      },
    ],
    PercentageOfEmployeesOrWorkersRelatedToMinimumWages: [
      {
        type: Number,
      },
    ],
    NumberOfBoardOfDirectorsForRemunerationOrSalaryOrWages: [
      {
        type: Number,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfBoardOfDirectors: [
      {
        type: Number,
      },
    ],
    NumberOfKeyManagerialPersonnelForRemunerationOrSalaryOrWages: [
      {
        type: Number,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfKeyManagerialPersonnel: [
      {
        type: Number,
      },
    ],
    NumberOfEmployeesOtherThanBodAndKMPForRemunerationOrSalaryOrWages: [
      {
        type: Number,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfEmployeesOtherThanBodAndKMP: [
      {
        type: Number,
      },
    ],
    NumberOfWorkersForRemunerationOrSalaryOrWages: [
      {
        type: Number,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfWorkers: [
      {
        type: Number,
      },
    ],
    GrossWagesPaidToFemale: [
      {
        type: Number,
      },
    ],
    TotalWagesPaid: [
      {
        type: Number,
      },
    ],
    PercentageOfGrossWagesPaidToFemaleToTotalWagesPaid: [
      {
        type: Number,
      },
    ],
    DoYouHaveAFocalPointResponsibleForAddressingHumanRightsImpactsOrIssuesCausedOrContributedToByTheBusiness:
      {
        type: Boolean,
      },
    DescribeTheInternalMechanismsInPlaceToRedressGrievancesRelatedToHumanRightsIssuesExplanatoryTextBlock:
      {
        type: String,
      },
    RemarksforComplaintsExplanatoryTextBlock: [
      {
        type: String,
      },
    ],
    TotalComplaintsReportedUnderSexualHarassmentOfWomenAtWorkplace: [
      {
        type: Number,
      },
    ],
    NumberOfFemaleEmployeesOrWorkers: [
      {
        type: Number,
      },
    ],
    PercentageOfComplaintsInRespectOfNumberOfEmployeesOrWorker: [
      {
        type: Number,
      },
    ],
    ComplaintsOnPOSHUpHeld: [
      {
        type: Number,
      },
    ],
    MechanismsToPreventAdverseConsequencesToTheComplainantInDiscriminationAndHarassmentCasesExplanatoryTextBlock:
      {
        type: String,
      },
    DoHumanRightsRequirementsFormPartOfYourBusinessAgreementsAndContracts: {
      type: String,
    },
    PercentageOfChildLabourOfYourPlantsAndOfficesThatWereAssessedP5: {
      type: Number,
    },
    PercentageOfForcedLabourOrInvoluntaryLabourOfYourPlantsAndOfficesThatWereAssessedP5:
      {
        type: Number,
      },
    PercentageOfSexualHarassmentOfYourPlantsAndOfficesThatWereAssessedP5: {
      type: Number,
    },
    PercentageOfDiscriminationAtWorkPlaceOfYourPlantsAndOfficesThatWereAssessedP5:
      {
        type: Number,
      },
    PercentageOfWagesOfYourPlantsAndOfficesThatWereAssessedP5: {
      type: Number,
    },
    DetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfPlantAndOfficeExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfABusinessProcessBeingModifiedOrIntroducedAsAResultOfAddressingHumanRightsGrievancesOrComplaintsExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfTheScopeAndCoverageOfAnyHumanRightsDueDiligenceConductedExplanatoryTextBlock:
      {
        type: String,
      },
    IsThePremiseOrOfficeOfTheEntityAccessibleToDifferentlyAbledVisitorsAsPerTheRequirementsOfTheRightsOfPersonsWithDisabilitiesAct2016:
      {
        type: Boolean,
      },
    PercentageOfSexualHarassmentOfValueChainPartnersP5: {
      type: Number,
    },
    PercentageOfDiscriminationAtWorkPlaceOfValueChainPartnersP5: {
      type: Number,
    },
    PercentageOfChildLabourOfValueChainPartnersP5: {
      type: Number,
    },
    PercentageOfForcedLabourOrInvoluntaryLabourOfValueChainPartnersP5: {
      type: Number,
    },
    PercentageOfWagesOfValueChainPartnersP5: {
      type: Number,
    },
    DetailsOfAnyCorrectiveActionsTakenOrUnderwayToAddressSignificantRisksOrConcernsArisingFromTheAssessmentsOfValueChainPartnerExplanatoryTextBlock:
      {
        type: String,
      },
    NotesPrinciple5ExplanatoryTextBlock: {
      type: String,
    },
    WhetherDetailsOfTotalEnergyConsumptionAndEnergyIntensityApplicableToTheCompany:
      {
        type: Boolean,
      },
    RevenueFromOperations: [
      {
        type: Number,
      },
    ],
    TotalElectricityConsumptionFromRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalFuelConsumptionFromRenewableSources: [
      {
        type: Number,
      },
    ],
    EnergyConsumptionThroughOtherSourcesFromRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalEnergyConsumedFromRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalElectricityConsumptionFromNonRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalFuelConsumptionFromNonRenewableSources: [
      {
        type: Number,
      },
    ],
    EnergyConsumptionThroughOtherSourcesFromNonRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalEnergyConsumedFromNonRenewableSources: [
      {
        type: Number,
      },
    ],
    TotalEnergyConsumedFromRenewableAndNonRenewableSources: [
      {
        type: Number,
      },
    ],
    EnergyIntensityPerRupeeOfTurnover: [
      {
        type: Number,
      },
    ],
    EnergyIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: Number,
      },
    ],
    EnergyIntensityInTermOfPhysicalOutput: [
      {
        type: Number,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForEnergyConsumptionUnderLeadershipIndicators:
      {
        type: Boolean,
      },
    NameOfTheExternalAgencyThatUndertookIndependentAssessmentOrEvaluationOrAssuranceForEnergyConsumptionExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveAnySitesOrFacilitiesIdentifiedAsDesignatedConsumersUnderThePerformanceAchieveAndTradeSchemeOfTheGovernmentOfIndia:
      {
        type: Boolean,
      },
    NotesPrinciple6ExplanatoryTextBlock: {
      type: String,
    },
    WaterWithdrawalBySurfaceWater: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByGroundwater: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByThirdPartyWater: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalBySeawaterOrDesalinatedWater: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByOthers: [
      {
        type: Number,
      },
    ],
    TotalVolumeOfWaterWithdrawal: [
      {
        type: Number,
      },
    ],
    TotalVolumeOfWaterConsumption: [
      {
        type: Number,
      },
    ],
    WaterIntensityPerRupeeOfTurnover: [
      {
        type: Number,
      },
    ],
    WaterIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: Number,
      },
    ],
    WaterIntensityInTermOfPhysicalOutput: [
      {
        type: Number,
      },
    ],
    AnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWaterWithdrawal:
      {
        type: Boolean,
      },
    NameOfTheExternalAgencyInCaseAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWaterWithdrawalExplanatoryTextBlock:
      {
        type: String,
      },
    WaterDischargeToSurfaceWater: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSurfaceWaterWithOutTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSurfaceWaterWithTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwater: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwaterWithOutTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwaterWithTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawater: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawaterWithOutTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawaterWithTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdParties: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithoutTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthers: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthersWithoutTreatment: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthersWithTreatment: [
      {
        type: Number,
      },
    ],
    TotalWaterDischargedInKilolitres: [
      {
        type: Number,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWaterDischarged:
      {
        type: String,
      },
    NameOfTheExternalAgencyThatUndertookIndependentAssessmentOrEvaluationOrAssuranceForWaterDischargedExplanatoryTextBlock:
      {
        type: String,
      },
    HasTheEntityImplementedAMechanismForZeroLiquidDischarge: {
      type: String,
    },
    DetailsOfCoverageAndImplementationIfForZeroLiquidDischargeExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherDetailsOfAirEmissionsOtherThanGhgEmissionsByTheEntityIsApplicableToTheCompany:
      {
        type: String,
      },
    NOx: [
      {
        type: Number,
      },
    ],
    SOx: [
      {
        type: Number,
      },
    ],
    ParticulateMatter: [
      {
        type: Number,
      },
    ],
    PersistentOrganicPollutants: [
      {
        type: Number,
      },
    ],
    VolatileOrganicCompounds: [
      {
        type: Number,
      },
    ],
    HazardousAirPollutants: [
      {
        type: Number,
      },
    ],
    IndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAirEmissionsOtherThanGHGEmissions:
      {
        type: Boolean,
      },
    NameOfTheExternalAgencyIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAirEmissionsOtherThanGHGEmissionsExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherDetailsOfGreenHouseGasEmissionsAndItsIntensityIsApplicableToTheCompany:
      {
        type: Boolean,
      },
    TotalScope1Emissions: [
      {
        type: Number,
      },
    ],
    TotalScope2Emissions: [
      {
        type: Number,
      },
    ],
    TotalScope1AndScope2EmissionsIntensityPerRupeeOfTurnover: [
      {
        type: Number,
      },
    ],
    TotalScope1AndScope2EmissionsIntensityPerRupeeOfTurnoverAdjustedForPurchasingPowerParity:
      [
        {
          type: Number,
        },
      ],
    TotalScope1AndScope2EmissionsIntensityInTermOfPhysicalOutput: [
      {
        type: Number,
      },
    ],
    WhetherAnyIndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForGreenHouseGasEmissions:
      {
        type: Boolean,
      },
    NameOfTheExternalAgencyThatUndertookIndependentAssessmentOrEvaluationOrAssuranceForGreenHouseGasEmissionsExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveAnyProjectRelatedToReducingGreenHouseGasEmission: {
      type: String,
    },
    DetailsOfProjectRelatedToReducingGreenHouseGasEmissionExplanatoryTextBlock:
      {
        type: String,
      },
    PlasticWaste: [
      {
        type: Number,
      },
    ],
    EWaste: [
      {
        type: Number,
      },
    ],
    BioMedicalWaste: [
      {
        type: Number,
      },
    ],
    ConstructionAndDemolitionWaste: [
      {
        type: Number,
      },
    ],
    BatteryWaste: [
      {
        type: Number,
      },
    ],
    RadioactiveWaste: [
      {
        type: Number,
      },
    ],
    OtherHazardousWaste: [
      {
        type: Number,
      },
    ],
    OtherNonHazardousWasteGenerated: [
      {
        type: Number,
      },
    ],
    TotalWasteGenerated: [
      {
        type: Number,
      },
    ],
    WasteIntensityPerRupeeOfTurnover: [
      {
        type: Number,
      },
    ],
    WasteIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: Number,
      },
    ],
    WasteIntensityInTermOfPhysicalOutput: [
      {
        type: Number,
      },
    ],
    WasteRecoveredThroughRecycled: [
      {
        type: Number,
      },
    ],
    WasteRecoveredThroughReUsed: [
      {
        type: Number,
      },
    ],
    WasteRecoveredThroughOtherRecoveryOperations: [
      {
        type: Number,
      },
    ],
    TotalWasteRecovered: [
      {
        type: Number,
      },
    ],
    WasteDisposedByIncineration: [
      {
        type: Number,
      },
    ],
    WasteDisposedByLandfilling: [
      {
        type: Number,
      },
    ],
    WasteDisposedByOtherDisposalOperations: [
      {
        type: Number,
      },
    ],
    TotalWasteDisposed: [
      {
        type: Number,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWasteManagement:
      {
        type: Boolean,
      },
    NameOfTheExternalAgencyThatUndertookIndependentAssessmentOrEvaluationOrAssuranceRelatedToWasteManagementExplanatoryTextBlock:
      {
        type: String,
      },
    DetailsOfWasteManagementPracticesAdoptedInYourEstablishmentsAndTheStrategyAdoptedByCompanyToReduceUsageOfHazardousAndToxicChemicalsExplanatoryTextBlock:
      {
        type: String,
      },
    LocationOfOperationsOrOffices: [
      {
        type: String,
      },
    ],
    TypeOfOperations: [
      {
        type: String,
      },
    ],
    WhetherTheConditionsOfEnvironmentalApprovalOrClearanceAreBeingCompliedWith:
      [
        {
          type: Boolean,
        },
      ],
    IsTheEntityCompliantWithTheApplicableEnvironmentalLaw: {
      type: Boolean,
    },
    IndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAreasOfWaterStress:
      {
        type: Boolean,
      },
    WhetherTotalScope3EmissionsAndItsIntensityIsApplicableToTheCompany: {
      type: Boolean,
    },
    TotalScope3Emissions: [
      {
        type: Number,
      },
    ],
    TotalScope3EmissionsPerRupeeOfTurnover: [
      {
        type: Number,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForTotalScope3Emissions:
      {
        type: Boolean,
      },
    DetailsOfSignificantDirectAndIndirectImpactOfTheEntityOnBiodiversityInSuchAreasAlongWithPreventionAndRemediationActivitiesExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveABusinessContinuityAndDisasterManagementPlan: {
      type: Boolean,
    },
    DisclosureWebLinkOfEntityAtWhichBusinessContinuityAndDisasterManagementPlanIsPlaced:
      {
        type: String,
      },
    DiscloseAnySignificantAdverseImpactToTheEnvironmentArisingFromTheValueChainOfTheEntityWhatMitigationOrAdaptationMeasuresHaveBeenTakenByTheEntityInThisRegardExplanatoryTextBlock:
      {
        type: String,
      },
    PercentageOfValueChainPartnersByValueOfBusinessDoneWithSuchPartnersThatWereAssessedForEnvironmentalImpacts:
      {
        type: Number,
      },
    InitiativeUndertaken: [
      {
        type: String,
      },
    ],
    WebLinkForDetailsOfInitiativeTakenByEntity: [
      {
        type: String,
      },
    ],
    OutcomeOfTheInitiative: [
      {
        type: String,
      },
    ],
    CorrectiveActionTakenForInitiative: [
      {
        type: String,
      },
    ],
    NameOfTheArea: {
      type: String,
    },
    NatureOfOperations: {
      type: String,
    },
    WaterWithdrawalBySurfaceWaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByGroundwaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByThirdPartyWaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalBySeawaterOrDesalinatedWaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterWithdrawalByOthersPerArea: [
      {
        type: Number,
      },
    ],
    TotalVolumeOfWaterWithdrawalPerArea: [
      {
        type: Number,
      },
    ],
    TotalVolumeOfWaterConsumptionPerArea: [
      {
        type: Number,
      },
    ],
    WaterIntensityPerRupeeOfTurnoverPerArea: [
      {
        type: Number,
      },
    ],
    WasteIntensityTheRelevantMetricMayBeSelectedByTheEntityPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSurfaceWaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSurfaceWaterWithOutTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSurfaceWaterWithTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwaterWithOutTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToGroundwaterWithTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawaterPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawaterWithOutTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToSeawaterWithTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdPartiesPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithoutTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthersPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthersWithoutTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    WaterDischargeToOthersWithTreatmentPerArea: [
      {
        type: Number,
      },
    ],
    TotalWaterDischargedInKilolitresPerArea: [
      {
        type: Number,
      },
    ],
    NumberOfAffiliationsWithTradeAndIndustryChambersOrAssociations: {
      type: Number,
    },
    NotesPrinciple7ExplanatoryTextBlock: {
      type: String,
    },
    NameOfTheTradeAndIndustryChambersOrAssociations: [
      {
        type: String,
      },
    ],
    ReachOfTradeAndIndustryChambersOrAssociations: [
      {
        type: String,
      },
    ],
    DescribeTheMechanismsToReceiveAndRedressGrievancesOfTheCommunityExplanatoryTextBlock:
      {
        type: String,
      },
    PercentageOfDirectlySourcedFromMSMEsOrSmallProducers: [
      {
        type: Number,
      },
    ],
    PercentageOfSourcedDirectlyFromWithinTheDistrictAndNeighbouringDistricts: [
      {
        type: Number,
      },
    ],
    DiscloseWagesPaidToPersonsEmployed: [
      {
        type: Number,
      },
    ],
    TotalWageCost: [
      {
        type: Number,
      },
    ],
    PercentageOfJobCreation: [
      {
        type: Number,
      },
    ],
    NotesPrinciple8ExplanatoryTextBlock: {
      type: String,
    },
    CSRProject: [
      {
        type: String,
      },
    ],
    NumberOfPersonsBenefittedFromCSRProjects: [
      {
        type: Number,
      },
    ],
    PercentageOfBeneficiariesFromVulnerableAndMarginalizedGroups: [
      {
        type: Number,
      },
    ],
    StateOfCSRProjectsUndertaken: [
      {
        type: String,
      },
    ],
    AspirationalDistrictOfCSRProjectsUndertaken: [
      {
        type: String,
      },
    ],
    AmountSpentForCSRProjectsUndertaken: [
      {
        type: Number,
      },
    ],
    DoYouHaveAPreferentialProcurementPolicyWhereYouGivePreferenceToPurchaseFromSuppliersComprisingMarginalizedOrVulnerableGroups:
      {
        type: String,
      },
    FromWhichMarginalizedOrVulnerableGroupsDoYouProcure: {
      type: String,
    },
    WhatPercentageOfTotalProcurementByValueDoesItConstitute: {
      type: Number,
    },
    DescribeTheMechanismsInPlaceToReceiveAndRespondToConsumerComplaintsAndFeedbackExplanatoryTextBlock:
      {
        type: String,
      },
    EnvironmentalAndSocialParametersRelevantToTheProductAsAPercentageToTotalTurnover:
      {
        type: Number,
      },
    SafeAndResponsibleUsageAsAPercentageToTotalTurnover: {
      type: Number,
    },
    RecyclingAndOrSafeDisposalAsAPercentageToTotalTurnover: {
      type: Number,
    },
    ConsumerComplaintsReceivedDuringTheYear: [
      {
        type: Number,
      },
    ],
    ConsumerComplaintsPendingResolutionAtEndOfYear: [
      {
        type: Number,
      },
    ],
    RemarkForConsumerComplaints: [
      {
        type: String,
      },
    ],
    NumberOfVoluntaryRecalls: {
      type: Number,
    },
    ReasonsForVoluntaryRecall: {
      type: String,
    },
    NumberOfForcedRecalls: {
      type: Number,
    },
    ReasonsForForcedRecall: {
      type: String,
    },
    DoesTheEntityHaveAFrameworkOrPolicyOnCyberSecurityAndRisksRelatedToDataPrivacy:
      {
        type: Boolean,
      },
    WebLinkOfThePolicyOnCyberSecurityAndRisksRelatedToDataPrivacy: {
      type: String,
    },
    DetailsOfAnyCorrectiveActionsTakenOrUnderwayOnIssuesRelatingToAdvertisingAndDeliveryOfEssentialServicesOrCyberSecurityAndDataPrivacyOrRecallsOrPenaltyOrActionTakenByRegulatoryAuthoritiesOnSafetyOfProductsOrServicesExplanatoryTextBlock:
      {
        type: String,
      },
    NumberOfInstancesOfDataBreachesAlongWithImpact: {
      type: Number,
    },
    PercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomers:
      {
        type: Number,
      },
    DetailsOfImpactOfDataBreachesExplanatoryTextBlock: {
      type: String,
    },
    WeblinkWhereInformationOnProductsAndServicesOfTheEntityCanBeAccessedExplanatoryTextBlock:
      {
        type: String,
      },
    StepsTakenToInformAndEducateConsumersAboutSafeAndResponsibleUsageOfProductsAndOrServicesExplanatoryTextBlock:
      {
        type: String,
      },
    MechanismsInPlaceToInformConsumersOfAnyRiskOfDisruptionOrDiscontinuationOfEssentialServicesExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityDisplayProductInformationOnTheProductOverAndAboveWhatIsMandatedAsPerLocalLaws:
      {
        type: String,
      },
    DidYourEntityCarryOutAnySurveyWithRegardToConsumerSatisfactionRelatingToTheMajorProductsOrServicesOfTheEntitySignificantLocationsOfOperationOfTheEntityOrTheEntityAsAWhole:
      {
        type: Boolean,
      },
    TheEntityHasNotApplicableProductInformationOnTheProductOverAndAboveWhatIsMandatedAsPerLocalLawsExplanatoryTextBlock:
      {
        type: String,
      },
    NotesPrinciple9ExplanatoryTextBlock: {
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
