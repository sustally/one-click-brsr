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
      type: String,
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
        type: String,
      },
    ],
    ProductOrServiceSoldByTheEntity: [
      {
        type: String,
      },
    ],
    NICCodeOfProductOrServiceSoldByTheEntity: [
      {
        type: String,
      },
    ],
    PercentageOfTotalTurnoverForProductOrServiceSold: [
      {
        type: String,
      },
    ],
    NumberOfLocations: [
      {
        type: String,
      },
    ],
    NumberOfStatesWhereMarketServedByTheEntity: {
      type: String,
    },
    NumberOfCountriesWhereMarketServedByTheEntity: {
      type: String,
    },
    PercentageOfContributionOfExportsInTheTotalTurnoverOfTheEntity: {
      type: String,
    },
    ABriefOnTypesOfCustomersExplanatoryTextBlock: {
      type: String,
    },
    NumberOfEmployeesOrWorkersIncludingDifferentlyAbled: [
      {
        type: String,
      },
    ],
    PercentageOfEmployeesOrWorkersIncludingDifferentlyAbled: [
      {
        type: String,
      },
    ],
    NumberOfDifferentlyAbledEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    PercentageOfDifferentlyAbledEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    TotalNumberOfBoardOfDirectors: {
      type: String,
    },
    NumberOfFemaleBoardOfDirectors: {
      type: String,
    },
    PercentageOfFemaleBoardOfDirectors: {
      type: String,
    },
    TotalNumberOfKeyManagementPersonnel: {
      type: String,
    },
    NumberOfFemaleKeyManagementPersonnel: {
      type: String,
    },
    PercentageOfFemaleKeyManagementPersonnel: {
      type: String,
    },
    TurnoverRate: [
      {
        type: String,
      },
    ],
    WhetherCSRIsApplicableAsPerSection135OfCompaniesAct2013: {
      type: String,
    },
    Turnover: {
      type: String,
    },
    NetWorth: {
      type: String,
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
        type: String,
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
        type: String,
      },
    ],
    NumberOfComplaintsPendingFromStakeHolderGroupResolutionAtTheEndOfYear: [
      {
        type: String,
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
        type: String,
      },
    ],
    TopicsOrPrinciplesCoveredUnderTheTrainingAndItsImpact: [
      {
        type: String,
      },
    ],
    PercentageOfPersonsInRespectiveCategoryCoveredByTheAwarenessProgrammes: [
      {
        type: String,
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
        type: String,
      },
    ],
    NumberOfKMPsAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: String,
      },
    ],
    NumberOfEmployeesAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: String,
      },
    ],
    NumberOfWorkersAgainstWhomDisciplinaryActionWasTaken: [
      {
        type: String,
      },
    ],
    NumberOfComplaintsReceivedInRelationToIssuesOfConflictOfInterestOfTheDirectors:
      [
        {
          type: String,
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
        type: String,
      },
    ],
    CostOfGoodsOrServicesProcuredDuringTheYear: [
      {
        type: String,
      },
    ],
    NumberOfDaysOfAccountsPayable: [
      {
        type: String,
      },
    ],
    AmountOfPurchasesFromTradingHouses: [
      {
        type: String,
      },
    ],
    AmountOfTotalPurchases: [
      {
        type: String,
      },
    ],
    NumberOfTradingHousesWherePurchasesAreMade: [
      {
        type: String,
      },
    ],
    AmountOfPurchasesFromTopTenTradingHouses: [
      {
        type: String,
      },
    ],
    AmountOfTotalPurchasesFromTradingHouses: [
      {
        type: String,
      },
    ],
    AmountOfSalesToDealersOrDistributors: [
      {
        type: String,
      },
    ],
    AmountOfTotalSales: [
      {
        type: String,
      },
    ],
    NumberOfDealersOrDistributorsToWhomSalesAreMade: [
      {
        type: String,
      },
    ],
    AmountOfSalesToTopTenDealersOrDistributors: [
      {
        type: String,
      },
    ],
    AmountOfTotalSalesToDealersOrDistributors: [
      {
        type: String,
      },
    ],
    AmountOfPurchasesFromRelatedParties: [
      {
        type: String,
      },
    ],
    AmountOfTotalPurchasesForShareOfRelatedPartyTransactions: [
      {
        type: String,
      },
    ],
    PercentageOfPurchasesFromRelatedPartiesInTotalPurchasesForShareOfRelatedPartyTransactions:
      [
        {
          type: String,
        },
      ],
    AmountOfSalesToRelatedParties: [
      {
        type: String,
      },
    ],
    AmountOfTotalSalesForShareOfRelatedPartyTransactions: [
      {
        type: String,
      },
    ],
    PercentageOfSalesToRelatedPartiesInTotalSalesForShareOfRelatedPartyTransactions:
      [
        {
          type: String,
        },
      ],
    AmountOfLoansAndAdvancesGivenToRelatedParties: [
      {
        type: String,
      },
    ],
    AmountOfTotalLoansAndAdvances: [
      {
        type: String,
      },
    ],
    PercentageOfLoansAndAdvancesGivenToRelatedPartiesInTotalLoansAndAdvances: [
      {
        type: String,
      },
    ],
    AmountOfInvestmentsInRelatedParties: [
      {
        type: String,
      },
    ],
    AmountOfTotalInvestments: [
      {
        type: String,
      },
    ],
    PercentageOfInvestmentsInRelatedPartiesInTotalInvestments: [
      {
        type: String,
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
      type: String,
    },
    PercentageOfRAndD: [
      {
        type: String,
      },
    ],
    DetailsOfImprovementsInEnvironmentalAndSocialImpactsDueToRAndD: {
      type: String,
    },
    PercentageOfCapex: [
      {
        type: String,
      },
    ],
    DetailsOfImprovementsInEnvironmentalAndSocialImpactsDueToCapex: {
      type: String,
    },
    DoesTheEntityHaveProceduresInPlaceForSustainableSourcing: {
      type: String,
    },
    PercentageOfInputsWereSourcedSustainably: {
      type: String,
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
      type: String,
    },
    NameOfProductOrServiceOfConductedLifecyclePerspective: {
      type: String,
    },
    PercentageOfTotalTurnoverContributedForConductedLifecyclePerspective: {
      type: String,
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
        type: String,
      },
    ],
    AmountOfReUsed: [
      {
        type: String,
      },
    ],
    AmountOfRecycled: [
      {
        type: String,
      },
    ],
    AmountOfSafelyDisposed: [
      {
        type: String,
      },
    ],
    NumberOfWellBeingOfEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    PercentageOfWellBeingOfEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    AmountOfCostIncurredOnWellBeingMeasures: [
      {
        type: String,
      },
    ],
    TotalRevenueOfTheCompany: [
      {
        type: String,
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
        type: String,
      },
    ],
    NumberOfEmployeesCoveredAsPercentageOfTotalWorker: [
      {
        type: String,
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
        type: String,
      },
    PercentageOfWorkingConditionsOfYourPlantsAndOfficesThatWereAssessedP3: {
      type: String,
    },
    NotesPrinciple3ExplanatoryTextBlock: {
      type: String,
    },
    ReturnToWorkRatePermanentEmployeesThatTookParentalLeave: [
      {
        type: String,
      },
    ],
    RetentionRatesPermanentEmployeesThatTookParentalLeave: [
      {
        type: String,
      },
    ],
    ReturnToWorkRatePermanentWorkersThatTookParentalLeave: [
      {
        type: String,
      },
    ],
    RetentionRatesPermanentWorkersThatTookParentalLeave: [
      {
        type: String,
      },
    ],
    TotalNumberOfEmployeesOrWorkersForMembership: [
      {
        type: String,
      },
    ],
    NumberOfEmployeesOrWorkersArePartOfAssociationsOrUnion: [
      {
        type: String,
      },
    ],
    PercentageOfEmployeesOrWorkersArePartOfAssociationsOrUnionOfTotalNumberOfEmployee:
      [
        {
          type: String,
        },
      ],
    NumberOfTrainedEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    PercentageOfTrainedEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    TotalNumberOfEmployeesOrWorkersForPerformanceAndCareerDevelopment: [
      {
        type: String,
      },
    ],
    NumberOfEmployeesOrWorkerForPerformanceAndCareerDevelopment: [
      {
        type: String,
      },
    ],
    PercentageOfEmployeesOrWorkerForPerformanceAndCareerDevelopment: [
      {
        type: String,
      },
    ],
    LostTimeInjuryFrequencyRatePerOneMillionPersonHoursWorked: [
      {
        type: String,
      },
    ],
    TotalRecordableWorkRelatedInjuries: [
      {
        type: String,
      },
    ],
    NumberOfFatalities: [
      {
        type: String,
      },
    ],
    HighConsequenceWorkRelatedInjuryOrIllHealthExcludingFatalities: [
      {
        type: String,
      },
    ],
    NumberOfComplaintsFiledDuringTheYear: [
      {
        type: String,
      },
    ],
    NumberOfComplaintsPendingResolutionAtTheEndOfYear: [
      {
        type: String,
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
        type: String,
      },
    ],
    NumberOfEmployeesOrWhoseFamilyMembersRehabilitatedAndPlacedInSuitableEmployment:
      [
        {
          type: String,
        },
      ],
    TotalNumberOfAffectedWorkers: [
      {
        type: String,
      },
    ],
    NumberOfWorkersOrWhoseFamilyMembersRehabilitatedAndPlacedInSuitableEmployment:
      [
        {
          type: String,
        },
      ],
    DoesTheEntityProvideTransitionAssistanceProgramsToFacilitateContinuedEmployabilityAndTheManagementOfCareerEndingsResultingFromRetirementOrTerminationOfEmployment:
      {
        type: String,
      },
    PercentageOfHealthAndSafetyPracticesOfValueChainPartnersP3: {
      type: String,
    },
    PercentageOfWorkingConditionsOfValueChainPartnersP3: {
      type: String,
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
        type: String,
      },
    ],
    NumberOfEmployeesOrWorkersCoveredForProvidedTrainingOnHumanRightsIssues: [
      {
        type: String,
      },
    ],
    PercentageOfEmployeesOrWorkersCoveredForProvidedTrainingOnHumanRightsIssues:
      [
        {
          type: String,
        },
      ],
    NumberOfEmployeesOrWorkersRelatedToMinimumWages: [
      {
        type: String,
      },
    ],
    PercentageOfEmployeesOrWorkersRelatedToMinimumWages: [
      {
        type: String,
      },
    ],
    NumberOfBoardOfDirectorsForRemunerationOrSalaryOrWages: [
      {
        type: String,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfBoardOfDirectors: [
      {
        type: String,
      },
    ],
    NumberOfKeyManagerialPersonnelForRemunerationOrSalaryOrWages: [
      {
        type: String,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfKeyManagerialPersonnel: [
      {
        type: String,
      },
    ],
    NumberOfEmployeesOtherThanBodAndKMPForRemunerationOrSalaryOrWages: [
      {
        type: String,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfEmployeesOtherThanBodAndKMP: [
      {
        type: String,
      },
    ],
    NumberOfWorkersForRemunerationOrSalaryOrWages: [
      {
        type: String,
      },
    ],
    MedianOfRemunerationOrSalaryOrWagesOfWorkers: [
      {
        type: String,
      },
    ],
    GrossWagesPaidToFemale: [
      {
        type: String,
      },
    ],
    TotalWagesPaid: [
      {
        type: String,
      },
    ],
    PercentageOfGrossWagesPaidToFemaleToTotalWagesPaid: [
      {
        type: String,
      },
    ],
    DoYouHaveAFocalPointResponsibleForAddressingHumanRightsImpactsOrIssuesCausedOrContributedToByTheBusiness:
      {
        type: String,
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
        type: String,
      },
    ],
    NumberOfFemaleEmployeesOrWorkers: [
      {
        type: String,
      },
    ],
    PercentageOfComplaintsInRespectOfNumberOfEmployeesOrWorker: [
      {
        type: String,
      },
    ],
    ComplaintsOnPOSHUpHeld: [
      {
        type: String,
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
      type: String,
    },
    PercentageOfForcedLabourOrInvoluntaryLabourOfYourPlantsAndOfficesThatWereAssessedP5:
      {
        type: String,
      },
    PercentageOfSexualHarassmentOfYourPlantsAndOfficesThatWereAssessedP5: {
      type: String,
    },
    PercentageOfDiscriminationAtWorkPlaceOfYourPlantsAndOfficesThatWereAssessedP5:
      {
        type: String,
      },
    PercentageOfWagesOfYourPlantsAndOfficesThatWereAssessedP5: {
      type: String,
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
        type: String,
      },
    PercentageOfSexualHarassmentOfValueChainPartnersP5: {
      type: String,
    },
    PercentageOfDiscriminationAtWorkPlaceOfValueChainPartnersP5: {
      type: String,
    },
    PercentageOfChildLabourOfValueChainPartnersP5: {
      type: String,
    },
    PercentageOfForcedLabourOrInvoluntaryLabourOfValueChainPartnersP5: {
      type: String,
    },
    PercentageOfWagesOfValueChainPartnersP5: {
      type: String,
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
        type: String,
      },
    RevenueFromOperations: [
      {
        type: String,
      },
    ],
    TotalElectricityConsumptionFromRenewableSources: [
      {
        type: String,
      },
    ],
    TotalFuelConsumptionFromRenewableSources: [
      {
        type: String,
      },
    ],
    EnergyConsumptionThroughOtherSourcesFromRenewableSources: [
      {
        type: String,
      },
    ],
    TotalEnergyConsumedFromRenewableSources: [
      {
        type: String,
      },
    ],
    TotalElectricityConsumptionFromNonRenewableSources: [
      {
        type: String,
      },
    ],
    TotalFuelConsumptionFromNonRenewableSources: [
      {
        type: String,
      },
    ],
    EnergyConsumptionThroughOtherSourcesFromNonRenewableSources: [
      {
        type: String,
      },
    ],
    TotalEnergyConsumedFromNonRenewableSources: [
      {
        type: String,
      },
    ],
    TotalEnergyConsumedFromRenewableAndNonRenewableSources: [
      {
        type: String,
      },
    ],
    EnergyIntensityPerRupeeOfTurnover: [
      {
        type: String,
      },
    ],
    EnergyIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: String,
      },
    ],
    EnergyIntensityInTermOfPhysicalOutput: [
      {
        type: String,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForEnergyConsumptionUnderLeadershipIndicators:
      {
        type: String,
      },
    NameOfTheExternalAgencyThatUndertookIndependentAssessmentOrEvaluationOrAssuranceForEnergyConsumptionExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveAnySitesOrFacilitiesIdentifiedAsDesignatedConsumersUnderThePerformanceAchieveAndTradeSchemeOfTheGovernmentOfIndia:
      {
        type: String,
      },
    NotesPrinciple6ExplanatoryTextBlock: {
      type: String,
    },
    WaterWithdrawalBySurfaceWater: [
      {
        type: String,
      },
    ],
    WaterWithdrawalByGroundwater: [
      {
        type: String,
      },
    ],
    WaterWithdrawalByThirdPartyWater: [
      {
        type: String,
      },
    ],
    WaterWithdrawalBySeawaterOrDesalinatedWater: [
      {
        type: String,
      },
    ],
    WaterWithdrawalByOthers: [
      {
        type: String,
      },
    ],
    TotalVolumeOfWaterWithdrawal: [
      {
        type: String,
      },
    ],
    TotalVolumeOfWaterConsumption: [
      {
        type: String,
      },
    ],
    WaterIntensityPerRupeeOfTurnover: [
      {
        type: String,
      },
    ],
    WaterIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: String,
      },
    ],
    WaterIntensityInTermOfPhysicalOutput: [
      {
        type: String,
      },
    ],
    AnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWaterWithdrawal:
      {
        type: String,
      },
    NameOfTheExternalAgencyInCaseAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWaterWithdrawalExplanatoryTextBlock:
      {
        type: String,
      },
    WaterDischargeToSurfaceWater: [
      {
        type: String,
      },
    ],
    WaterDischargeToSurfaceWaterWithOutTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToSurfaceWaterWithTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwater: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwaterWithOutTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwaterWithTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawater: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawaterWithOutTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawaterWithTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdParties: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithoutTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthers: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthersWithoutTreatment: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthersWithTreatment: [
      {
        type: String,
      },
    ],
    TotalWaterDischargedInKilolitres: [
      {
        type: String,
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
        type: String,
      },
    ],
    SOx: [
      {
        type: String,
      },
    ],
    ParticulateMatter: [
      {
        type: String,
      },
    ],
    PersistentOrganicPollutants: [
      {
        type: String,
      },
    ],
    VolatileOrganicCompounds: [
      {
        type: String,
      },
    ],
    HazardousAirPollutants: [
      {
        type: String,
      },
    ],
    IndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAirEmissionsOtherThanGHGEmissions:
      {
        type: String,
      },
    NameOfTheExternalAgencyIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAirEmissionsOtherThanGHGEmissionsExplanatoryTextBlock:
      {
        type: String,
      },
    WhetherDetailsOfGreenHouseGasEmissionsAndItsIntensityIsApplicableToTheCompany:
      {
        type: String,
      },
    TotalScope1Emissions: [
      {
        type: String,
      },
    ],
    TotalScope2Emissions: [
      {
        type: String,
      },
    ],
    TotalScope1AndScope2EmissionsIntensityPerRupeeOfTurnover: [
      {
        type: String,
      },
    ],
    TotalScope1AndScope2EmissionsIntensityPerRupeeOfTurnoverAdjustedForPurchasingPowerParity:
      [
        {
          type: String,
        },
      ],
    TotalScope1AndScope2EmissionsIntensityInTermOfPhysicalOutput: [
      {
        type: String,
      },
    ],
    WhetherAnyIndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForGreenHouseGasEmissions:
      {
        type: String,
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
        type: String,
      },
    ],
    EWaste: [
      {
        type: String,
      },
    ],
    BioMedicalWaste: [
      {
        type: String,
      },
    ],
    ConstructionAndDemolitionWaste: [
      {
        type: String,
      },
    ],
    BatteryWaste: [
      {
        type: String,
      },
    ],
    RadioactiveWaste: [
      {
        type: String,
      },
    ],
    OtherHazardousWaste: [
      {
        type: String,
      },
    ],
    OtherNonHazardousWasteGenerated: [
      {
        type: String,
      },
    ],
    TotalWasteGenerated: [
      {
        type: String,
      },
    ],
    WasteIntensityPerRupeeOfTurnover: [
      {
        type: String,
      },
    ],
    WasteIntensityPerRupeeOfTurnoverAdjustingForPurchasingPowerParity: [
      {
        type: String,
      },
    ],
    WasteIntensityInTermOfPhysicalOutput: [
      {
        type: String,
      },
    ],
    WasteRecoveredThroughRecycled: [
      {
        type: String,
      },
    ],
    WasteRecoveredThroughReUsed: [
      {
        type: String,
      },
    ],
    WasteRecoveredThroughOtherRecoveryOperations: [
      {
        type: String,
      },
    ],
    TotalWasteRecovered: [
      {
        type: String,
      },
    ],
    WasteDisposedByIncineration: [
      {
        type: String,
      },
    ],
    WasteDisposedByLandfilling: [
      {
        type: String,
      },
    ],
    WasteDisposedByOtherDisposalOperations: [
      {
        type: String,
      },
    ],
    TotalWasteDisposed: [
      {
        type: String,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForWasteManagement:
      {
        type: String,
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
          type: String,
        },
      ],
    IsTheEntityCompliantWithTheApplicableEnvironmentalLaw: {
      type: String,
    },
    IndicateIfAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForAreasOfWaterStress:
      {
        type: String,
      },
    WhetherTotalScope3EmissionsAndItsIntensityIsApplicableToTheCompany: {
      type: String,
    },
    TotalScope3Emissions: [
      {
        type: String,
      },
    ],
    TotalScope3EmissionsPerRupeeOfTurnover: [
      {
        type: String,
      },
    ],
    WhetherAnyIndependentAssessmentOrEvaluationOrAssuranceHasBeenCarriedOutByAnExternalAgencyForTotalScope3Emissions:
      {
        type: String,
      },
    DetailsOfSignificantDirectAndIndirectImpactOfTheEntityOnBiodiversityInSuchAreasAlongWithPreventionAndRemediationActivitiesExplanatoryTextBlock:
      {
        type: String,
      },
    DoesTheEntityHaveABusinessContinuityAndDisasterManagementPlan: {
      type: String,
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
        type: String,
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
        type: String,
      },
    ],
    WaterWithdrawalByGroundwaterPerArea: [
      {
        type: String,
      },
    ],
    WaterWithdrawalByThirdPartyWaterPerArea: [
      {
        type: String,
      },
    ],
    WaterWithdrawalBySeawaterOrDesalinatedWaterPerArea: [
      {
        type: String,
      },
    ],
    WaterWithdrawalByOthersPerArea: [
      {
        type: String,
      },
    ],
    TotalVolumeOfWaterWithdrawalPerArea: [
      {
        type: String,
      },
    ],
    TotalVolumeOfWaterConsumptionPerArea: [
      {
        type: String,
      },
    ],
    WaterIntensityPerRupeeOfTurnoverPerArea: [
      {
        type: String,
      },
    ],
    WasteIntensityTheRelevantMetricMayBeSelectedByTheEntityPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSurfaceWaterPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSurfaceWaterWithOutTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSurfaceWaterWithTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwaterPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwaterWithOutTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToGroundwaterWithTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawaterPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawaterWithOutTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToSeawaterWithTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdPartiesPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithoutTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeBySentToThirdPartiesWithTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthersPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthersWithoutTreatmentPerArea: [
      {
        type: String,
      },
    ],
    WaterDischargeToOthersWithTreatmentPerArea: [
      {
        type: String,
      },
    ],
    TotalWaterDischargedInKilolitresPerArea: [
      {
        type: String,
      },
    ],
    NumberOfAffiliationsWithTradeAndIndustryChambersOrAssociations: {
      type: String,
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
        type: String,
      },
    ],
    PercentageOfSourcedDirectlyFromWithinTheDistrictAndNeighbouringDistricts: [
      {
        type: String,
      },
    ],
    DiscloseWagesPaidToPersonsEmployed: [
      {
        type: String,
      },
    ],
    TotalWageCost: [
      {
        type: String,
      },
    ],
    PercentageOfJobCreation: [
      {
        type: String,
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
        type: String,
      },
    ],
    PercentageOfBeneficiariesFromVulnerableAndMarginalizedGroups: [
      {
        type: String,
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
        type: String,
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
      type: String,
    },
    DescribeTheMechanismsInPlaceToReceiveAndRespondToConsumerComplaintsAndFeedbackExplanatoryTextBlock:
      {
        type: String,
      },
    EnvironmentalAndSocialParametersRelevantToTheProductAsAPercentageToTotalTurnover:
      {
        type: String,
      },
    SafeAndResponsibleUsageAsAPercentageToTotalTurnover: {
      type: String,
    },
    RecyclingAndOrSafeDisposalAsAPercentageToTotalTurnover: {
      type: String,
    },
    ConsumerComplaintsReceivedDuringTheYear: [
      {
        type: String,
      },
    ],
    ConsumerComplaintsPendingResolutionAtEndOfYear: [
      {
        type: String,
      },
    ],
    RemarkForConsumerComplaints: [
      {
        type: String,
      },
    ],
    NumberOfVoluntaryRecalls: {
      type: String,
    },
    ReasonsForVoluntaryRecall: {
      type: String,
    },
    NumberOfForcedRecalls: {
      type: String,
    },
    ReasonsForForcedRecall: {
      type: String,
    },
    DoesTheEntityHaveAFrameworkOrPolicyOnCyberSecurityAndRisksRelatedToDataPrivacy:
      {
        type: String,
      },
    WebLinkOfThePolicyOnCyberSecurityAndRisksRelatedToDataPrivacy: {
      type: String,
    },
    DetailsOfAnyCorrectiveActionsTakenOrUnderwayOnIssuesRelatingToAdvertisingAndDeliveryOfEssentialServicesOrCyberSecurityAndDataPrivacyOrRecallsOrPenaltyOrActionTakenByRegulatoryAuthoritiesOnSafetyOfProductsOrServicesExplanatoryTextBlock:
      {
        type: String,
      },
    NumberOfInstancesOfDataBreachesAlongWithImpact: {
      type: String,
    },
    PercentageOfDataBreachesInvolvingPersonallyIdentifiableInformationOfCustomers:
      {
        type: String,
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
        type: String,
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
