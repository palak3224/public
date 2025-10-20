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
        path: "services/finance-and-tax/advance-tax-calculation",
        element: <AdvanceTaxCalculation />,
      },
      {
        path: "services/finance-and-tax/capital-gains-tax-advisory",
        element: <CapitalGainsTaxAdvisory />,
      },
      {
        path: "services/finance-and-tax/handling-tax-notices",
        element: <HandlingTaxNotices />,
      },
      {
        path: "services/finance-and-tax/itr-filing-for-businesses",
        element: <ITRFilingForBusinesses />,
      },
      {
        path: "services/finance-and-tax/itr-filing-for-huf",
        element: <ITRFilingForHUF />,
      },
      {
        path: "services/finance-and-tax/itr-filing-for-individuals",
        element: <ITRFilingForIndividuals />,
      },
      {
        path: "services/finance-and-tax/tds-tcs-return-filing",
        element: <TDSTCSReturnFiling />,
      },
      {
        path: "services/finance-and-tax/tax-planning-and-savings-advisory",
        element: <TaxPlanningAndSavingsAdvisory />,
      },
      {
        path: "services/finance-and-tax/tax-refund-status",
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
    ],
  },
]);

export default router;
