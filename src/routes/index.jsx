import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/Components/About";
import App from "../App";
import Team from "@/pages/Team/Team";
import FinanceAndTax from "@/pages/Services/FinanceAndTax/FinanceAndTax";
import AdvanceTaxCalculation from "@/pages/Services/FinanceAndTax/IncomeTax/AdvanceTaxCalculation";
import CapitalGainsTaxAdvisory from "@/pages/Services/FinanceAndTax/IncomeTax/CapitalGainsTaxAdvisory";
import HandlingTaxNotices from "@/pages/Services/FinanceAndTax/IncomeTax/HandlingTaxNotices";
import ITRFilingForBusinesses from "@/pages/Services/FinanceAndTax/IncomeTax/ITRFilingForBusinesses";
import ITRFilingForHUF from "@/pages/Services/FinanceAndTax/IncomeTax/ITRFilingForHUF";
import ITRFilingForIndividuals from "@/pages/Services/FinanceAndTax/IncomeTax/ITRFilingForIndividuals";
import TDSTCSReturnFiling from "@/pages/Services/FinanceAndTax/IncomeTax/TDSTCSReturnFiling";
import TaxPlanningAndSavingsAdvisory from "@/pages/Services/FinanceAndTax/IncomeTax/TaxPlanningAndSavingsAdvisory";
import TaxRefundStatus from "@/pages/Services/FinanceAndTax/IncomeTax/TaxRefundStatus";
import AnnualGSTReturnFiling from "@/pages/Services/FinanceAndTax/GST/AnnualGSTReturnFiling";
import EWayBillAndEInvoicingSolutions from "@/pages/Services/FinanceAndTax/GST/EWayBillAndEInvoicingSolutions";
import GSTAuditAndAssessmentSupport from "@/pages/Services/FinanceAndTax/GST/GSTAuditAndAssessmentSupport";
import GSTReconciliation from "@/pages/Services/FinanceAndTax/GST/GSTReconciliation";
import GSTRegistrationServices from "@/pages/Services/FinanceAndTax/GST/GSTRegistrationServices";
import GSTReturnFiling from "@/pages/Services/FinanceAndTax/GST/GSTReturnFiling";
import InputTaxCreditAdvisory from "@/pages/Services/FinanceAndTax/GST/InputTaxCreditAdvisory";
import AccountingAndBookkeepingService from "@/pages/Services/FinanceAndTax/BusinessCompliance/AccountingAndBookkeepingService";
import LLPRegistration from "@/pages/Services/FinanceAndTax/BusinessCompliance/LLPRegistration";
import OnePersonCompanyRegistration from "@/pages/Services/FinanceAndTax/BusinessCompliance/OnePersonCompanyRegistration";
import PrivateLimitedCompanyRegistration from "@/pages/Services/FinanceAndTax/BusinessCompliance/PrivateLimitedCompanyRegistration";
import ROCFilingsAndAnnualCompliance from "@/pages/Services/FinanceAndTax/BusinessCompliance/ROCFilingsAndAnnualCompliance";

// 💻 Technology Solutions
import TechnologySolutions from "@/pages/Services/TechnologySolutions/TechnologySolutions";

// Custom Software
import CustomSoftwareDevelopment from "@/pages/Services/TechnologySolutions/CustomSoftware/CustomSoftwareDevelopment";
import EnterpriseSoftwareSolutions from "@/pages/Services/TechnologySolutions/CustomSoftware/EnterpriseSoftwareSolutions";
import CRMSoftwareDevelopment from "@/pages/Services/TechnologySolutions/CustomSoftware/CRMSoftwareDevelopment";
import ERPSoftwareImplementation from "@/pages/Services/TechnologySolutions/CustomSoftware/ERPSoftwareImplementation";

// Website Development
import WebsiteDevelopment from "@/pages/Services/TechnologySolutions/WebsiteDevelopment/WebsiteDevelopment";
import CorporateWebsiteDesign from "@/pages/Services/TechnologySolutions/WebsiteDevelopment/CorporateWebsiteDesign";
import EcommerceWebsiteDevelopment from "@/pages/Services/TechnologySolutions/WebsiteDevelopment/EcommerceWebsiteDevelopment";
import WebsiteMaintenanceAndSupport from "@/pages/Services/TechnologySolutions/WebsiteDevelopment/WebsiteMaintenanceAndSupport";

// Mobile App Development
import MobileAppDevelopment from "@/pages/Services/TechnologySolutions/MobileAppDevelopment/MobileAppDevelopment";
import AndroidAppDevelopment from "@/pages/Services/TechnologySolutions/MobileAppDevelopment/AndroidAppDevelopment";
import IOSAppDevelopment from "@/pages/Services/TechnologySolutions/MobileAppDevelopment/IOSAppDevelopment";
import HybridAppDevelopment from "@/pages/Services/TechnologySolutions/MobileAppDevelopment/HybridAppDevelopment";

// UI/UX Design
import UIUXDesignServices from "@/pages/Services/TechnologySolutions/UIUXDesign/UIUXDesignServices";

// Technology Stack
import TechnologyStack from "@/pages/Services/TechnologySolutions/TechStack/TechnologyStack";


// 🧭 Digital Marketing & Growth Services
import DigitalMarketingMain from "@/pages/Services/DigitalMarketing/DigitalMarketingMain";

// SEO
import SEO from "@/pages/Services/DigitalMarketing/SEO/SEO";
import OnPageSEO from "@/pages/Services/DigitalMarketing/SEO/OnPageSEO";
import TechnicalSEO from "@/pages/Services/DigitalMarketing/SEO/TechnicalSEO";
import OffPageSEO from "@/pages/Services/DigitalMarketing/SEO/OffPageSEO";
import LocalSEO from "@/pages/Services/DigitalMarketing/SEO/LocalSEO";
import EcommerceSEO from "@/pages/Services/DigitalMarketing/SEO/EcommerceSEO";

// Social Media Marketing
import SocialMediaMarketing from "@/pages/Services/DigitalMarketing/SocialMediaMarketing/SocialMediaMarketing";
import SocialMediaStrategy from "@/pages/Services/DigitalMarketing/SocialMediaMarketing/SocialMediaStrategy";
import FacebookInstagramMarketing from "@/pages/Services/DigitalMarketing/SocialMediaMarketing/FacebookInstagramMarketing";
import LinkedInMarketing from "@/pages/Services/DigitalMarketing/SocialMediaMarketing/LinkedInMarketing";

// Paid Advertising
import PaidAdvertising from "@/pages/Services/DigitalMarketing/PaidAdvertising/PaidAdvertising";
import GoogleAdsManagement from "@/pages/Services/DigitalMarketing/PaidAdvertising/GoogleAdsManagement";
import SocialMediaAdvertising from "@/pages/Services/DigitalMarketing/PaidAdvertising/SocialMediaAdvertising";

// Content Marketing
import ContentMarketing from "@/pages/Services/DigitalMarketing/ContentMarketing/ContentMarketing";

// Case Studies
import CaseStudies from "@/pages/Services/DigitalMarketing/CaseStudies/CaseStudies";

// 🧠 Consultancy & HR Solutions
import ConsultancyAndHRMain from "@/pages/Services/ConsultancyAndHR/ConsultancyAndHRMain";

// Business Consultancy
import StartupAdvisoryServices from "@/pages/Services/ConsultancyAndHR/BusinessConsultancy/StartupAdvisoryServices";
import BusinessPlanDevelopment from "@/pages/Services/ConsultancyAndHR/BusinessConsultancy/BusinessPlanDevelopment";
import FinancialProjectionsAndCMAReports from "@/pages/Services/ConsultancyAndHR/BusinessConsultancy/FinancialProjectionsAndCMAReports";
import ProjectFinancingAndLoanSyndication from "@/pages/Services/ConsultancyAndHR/BusinessConsultancy/ProjectFinancingAndLoanSyndication";

// Recruitment & Staffing
import RecruitmentAndStaffing from "@/pages/Services/ConsultancyAndHR/RecruitmentAndStaffing/RecruitmentAndStaffing";
import PermanentStaffing from "@/pages/Services/ConsultancyAndHR/RecruitmentAndStaffing/PermanentStaffing";
import TemporaryContractStaffing from "@/pages/Services/ConsultancyAndHR/RecruitmentAndStaffing/TemporaryContractStaffing";

// HR Management
import HRPolicyFormulation from "@/pages/Services/ConsultancyAndHR/HRManagement/HRPolicyFormulation";
import PayrollManagementServices from "@/pages/Services/ConsultancyAndHR/HRManagement/PayrollManagementServices";



import Contact from "@/pages/Contact/Components/Contact";
import Career from "@/pages/Career/Components/Career";
import FAQ from "@/pages/FAQ/FAQ";
import Testimonials from "@/pages/TestimonialsAndClientSuccess/Testimonials";
import LegalAndPolicies from "@/pages/LegalAndPolicies/LegalAndPolicies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "team", element: <Team /> },
      {
        path: "services/finance-and-tax",
        element: <FinanceAndTax />,
      },
      {
        path: "services/finance-and-tax/income-tax/advance-tax-calculation",
        element: <AdvanceTaxCalculation />,
      },
      {
        path: "services/finance-and-tax/income-tax/capital-gains-tax-advisory",
        element: <CapitalGainsTaxAdvisory />,
      },
      {
        path: "services/finance-and-tax/income-tax/handling-tax-notices",
        element: <HandlingTaxNotices />,
      },
      {
        path: "services/finance-and-tax/income-tax/itr-filing-for-businesses",
        element: <ITRFilingForBusinesses />,
      },
      {
        path: "services/finance-and-tax/income-tax/itr-filing-for-huf",
        element: <ITRFilingForHUF />,
      },
      {
        path: "services/finance-and-tax/income-tax/itr-filing-for-individuals",
        element: <ITRFilingForIndividuals />,
      },
      {
        path: "services/finance-and-tax/income-tax/tds-tcs-return-filing",
        element: <TDSTCSReturnFiling />,
      },
      {
        path: "services/finance-and-tax/income-tax/tax-planning-and-savings-advisory",
        element: <TaxPlanningAndSavingsAdvisory />,
      },
      {
        path: "services/finance-and-tax/income-tax/tax-refund-status",
        element: <TaxRefundStatus />,
      },
      {
        path: "services/finance-and-tax/gst/annual-gst-return-filing",
        element: <AnnualGSTReturnFiling />,
      },
      {
        path: "services/finance-and-tax/gst/e-way-bill-and-e-invoicing-solutions",
        element: <EWayBillAndEInvoicingSolutions />,
      },
      {
        path: "services/finance-and-tax/gst/gst-audit-and-assessment-support",
        element: <GSTAuditAndAssessmentSupport />,
      },
      {
        path: "services/finance-and-tax/gst/gst-reconciliation",
        element: <GSTReconciliation />,
      },
      {
        path: "services/finance-and-tax/gst/gst-registration-services",
        element: <GSTRegistrationServices />,
      },
      {
        path: "services/finance-and-tax/gst/gst-return-filing",
        element: <GSTReturnFiling />,
      },
      {
        path: "services/finance-and-tax/gst/input-tax-credit-advisory",
        element: <InputTaxCreditAdvisory />,
      },
      {
        path: "services/finance-and-tax/business-compliance/accounting-and-bookkeeping-service",
        element: <AccountingAndBookkeepingService />,
      },
      {
        path: "services/finance-and-tax/business-compliance/llp-registration",
        element: <LLPRegistration />,
      },
      {
        path: "services/finance-and-tax/business-compliance/one-person-company-registration",
        element: <OnePersonCompanyRegistration />,
      },
      {
        path: "services/finance-and-tax/business-compliance/private-limited-company-registration",
        element: <PrivateLimitedCompanyRegistration />,
      },
      {
        path: "services/finance-and-tax/business-compliance/roc-filings-and-annual-compliance",
        element: <ROCFilingsAndAnnualCompliance />,
      },

      // TECHNOLOGY SOLUTIONS ROUTES
      {
        path: "services/technology-solutions",
        element: <TechnologySolutions />,
      },
      {
        path: "services/technology-solutions/custom-software",
        element: <CustomSoftwareDevelopment />,
      },
      {
        path: "services/technology-solutions/custom-software/enterprise-software-solutions",
        element: <EnterpriseSoftwareSolutions />,
      },
      {
        path: "services/technology-solutions/custom-software/crm-software-development",
        element: <CRMSoftwareDevelopment />,
      },
      {
        path: "services/technology-solutions/custom-software/erp-software-implementation",
        element: <ERPSoftwareImplementation />,
      },
      {
        path: "services/technology-solutions/website-development",
        element: <WebsiteDevelopment />,
      },
      {
        path: "services/technology-solutions/website-development/corporate-website-design",
        element: <CorporateWebsiteDesign />,
      },
      {
        path: "services/technology-solutions/website-development/ecommerce-website-development",
        element: <EcommerceWebsiteDevelopment />,
      },
      {
        path: "services/technology-solutions/website-development/website-maintenance-and-support",
        element: <WebsiteMaintenanceAndSupport />,
      },
      {
        path: "services/technology-solutions/mobile-app-development",
        element: <MobileAppDevelopment />,
      },
      {
        path: "services/technology-solutions/mobile-app-development/android-app-development",
        element: <AndroidAppDevelopment />,
      },
      {
        path: "services/technology-solutions/mobile-app-development/ios-app-development",
        element: <IOSAppDevelopment />,
      },
      {
        path: "services/technology-solutions/mobile-app-development/hybrid-app-development",
        element: <HybridAppDevelopment />,
      },
      {
        path: "services/technology-solutions/ui-ux-design-services",
        element: <UIUXDesignServices />,
      },
      {
        path: "services/technology-solutions/tech-stack",
        element: <TechnologyStack />,
      },

      // DIGITAL MARKETING & GROWTH SERVICES
      {
        path: "services/digital-marketing",
        element: <DigitalMarketingMain />,
      },

      // SEO
      {
        path: "services/digital-marketing/seo",
        element: <SEO />,
      },
      {
        path: "services/digital-marketing/seo/on-page-seo",
        element: <OnPageSEO />,
      },
      {
        path: "services/digital-marketing/seo/technical-seo",
        element: <TechnicalSEO />,
      },
      {
        path: "services/digital-marketing/seo/off-page-seo",
        element: <OffPageSEO />,
      },
      {
        path: "services/digital-marketing/seo/local-seo",
        element: <LocalSEO />,
      },
      {
        path: "services/digital-marketing/seo/ecommerce-seo",
        element: <EcommerceSEO />,
      },

      // Social Media Marketing
      {
        path: "services/digital-marketing/social-media",
        element: <SocialMediaMarketing />,
      },
      {
        path: "services/digital-marketing/social-media/strategy",
        element: <SocialMediaStrategy />,
      },
      {
        path: "services/digital-marketing/social-media/facebook-instagram",
        element: <FacebookInstagramMarketing />,
      },
      {
        path: "services/digital-marketing/social-media/linkedin",
        element: <LinkedInMarketing />,
      },

      // Paid Advertising
      {
        path: "services/digital-marketing/paid-advertising",
        element: <PaidAdvertising />,
      },
      {
        path: "services/digital-marketing/paid-advertising/google-ads",
        element: <GoogleAdsManagement />,
      },
      {
        path: "services/digital-marketing/paid-advertising/social-ads",
        element: <SocialMediaAdvertising />,
      },

      // Content Marketing
      {
        path: "services/digital-marketing/content-marketing",
        element: <ContentMarketing />,
      },

      // Case Studies
      {
        path: "services/digital-marketing/case-studies",
        element: <CaseStudies />,
      },

      // CONSULTANCY & HR SOLUTIONS ROUTES
      {
        path: "services/consultancy-and-hr",
        element: <ConsultancyAndHRMain />,
      },

      // Business Consultancy
      {
        path: "services/consultancy-and-hr/business-consultancy/startup-advisory-services",
        element: <StartupAdvisoryServices />,
      },
      {
        path: "services/consultancy-and-hr/business-consultancy/business-plan-development",
        element: <BusinessPlanDevelopment />,
      },
      {
        path: "services/consultancy-and-hr/business-consultancy/financial-projections-and-cma-reports",
        element: <FinancialProjectionsAndCMAReports />,
      },
      {
        path: "services/consultancy-and-hr/business-consultancy/project-financing-and-loan-syndication",
        element: <ProjectFinancingAndLoanSyndication />,
      },

      // Recruitment & Staffing
      {
        path: "services/consultancy-and-hr/recruitment-and-staffing",
        element: <RecruitmentAndStaffing />,
      },
      {
        path: "services/consultancy-and-hr/recruitment-and-staffing/permanent-staffing",
        element: <PermanentStaffing />,
      },
      {
        path: "services/consultancy-and-hr/recruitment-and-staffing/temporary-contract-staffing",
        element: <TemporaryContractStaffing />,
      },

      // HR Management
      {
        path: "services/consultancy-and-hr/hr-management/hr-policy-formulation",
        element: <HRPolicyFormulation />,
      },
      {
        path: "services/consultancy-and-hr/hr-management/payroll-management-services",
        element: <PayrollManagementServices />,
      },



      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "legal",
        element: <LegalAndPolicies />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "careers",
        element: <Career />,
      },
    ],
  },
]);

export default router;
