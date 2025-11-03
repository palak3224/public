import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("finance");
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  // ==============================
  // 💼 All Services (Finance + Tech)
  // ==============================
  const services = {
    finance: {
      title: "Finance & Tax Services",
      path: "/services/finance-and-tax",
      items: [
        {
          parent: "Income Tax Services",
          children: [
            { name: "Advance Tax Calculation", path: "/services/finance-and-tax/income-tax/advance-tax-calculation" },
            { name: "Capital Gains Tax Advisory", path: "/services/finance-and-tax/income-tax/capital-gains-tax-advisory" },
            { name: "Handling Tax Notices", path: "/services/finance-and-tax/income-tax/handling-tax-notices" },
            { name: "ITR Filing for Businesses", path: "/services/finance-and-tax/income-tax/itr-filing-for-businesses" },
            { name: "ITR Filing for HUF", path: "/services/finance-and-tax/income-tax/itr-filing-for-huf" },
            { name: "ITR Filing for Individuals", path: "/services/finance-and-tax/income-tax/itr-filing-for-individuals" },
            { name: "TDS/TCS Return Filing", path: "/services/finance-and-tax/income-tax/tds-tcs-return-filing" },
            { name: "Tax Planning & Savings Advisory", path: "/services/finance-and-tax/income-tax/tax-planning-and-savings-advisory" },
            { name: "Tax Refund Status", path: "/services/finance-and-tax/income-tax/tax-refund-status" },
          ],
        },
        {
          parent: "GST Services",
          children: [
            { name: "Annual GST Return Filing", path: "/services/finance-and-tax/gst/annual-gst-return-filing" },
            { name: "E-Way Bill & E-Invoicing Solutions", path: "/services/finance-and-tax/gst/e-way-bill-and-e-invoicing-solutions" },
            { name: "GST Audit & Assessment Support", path: "/services/finance-and-tax/gst/gst-audit-and-assessment-support" },
            { name: "GST Reconciliation", path: "/services/finance-and-tax/gst/gst-reconciliation" },
            { name: "GST Registration Services", path: "/services/finance-and-tax/gst/gst-registration-services" },
            { name: "GST Return Filing", path: "/services/finance-and-tax/gst/gst-return-filing" },
            { name: "Input Tax Credit Advisory", path: "/services/finance-and-tax/gst/input-tax-credit-advisory" },
          ],
        },
        {
          parent: "Business Compliance & Advisory",
          children: [
            { name: "Accounting & Bookkeeping Service", path: "/services/finance-and-tax/business-compliance/accounting-and-bookkeeping-service" },
            { name: "LLP Registration", path: "/services/finance-and-tax/business-compliance/llp-registration" },
            { name: "One Person Company Registration", path: "/services/finance-and-tax/business-compliance/one-person-company-registration" },
            { name: "Private Limited Company Registration", path: "/services/finance-and-tax/business-compliance/private-limited-company-registration" },
            { name: "ROC Filings & Annual Compliance", path: "/services/finance-and-tax/business-compliance/roc-filings-and-annual-compliance" },
          ],
        },
      ],
    },

    technology: {
      title: "Technology Solutions",
      path: "/services/technology-solutions",
      items: [
        {
          parent: "Custom Software Development",
          children: [
            { name: "Enterprise Software Solutions", path: "/services/technology-solutions/custom-software/enterprise-software-solutions" },
            { name: "CRM Software Development", path: "/services/technology-solutions/custom-software/crm-software-development" },
            { name: "ERP Software Implementation", path: "/services/technology-solutions/custom-software/erp-software-implementation" },
          ],
        },
        {
          parent: "Website Development",
          children: [
            { name: "Corporate Website Design", path: "/services/technology-solutions/website-development/corporate-website-design" },
            { name: "E-commerce Website Development", path: "/services/technology-solutions/website-development/ecommerce-website-development" },
            { name: "Website Maintenance & Support", path: "/services/technology-solutions/website-development/website-maintenance-and-support" },
          ],
        },
        {
          parent: "Mobile App Development",
          children: [
            { name: "Android App Development", path: "/services/technology-solutions/mobile-app-development/android-app-development" },
            { name: "iOS App Development", path: "/services/technology-solutions/mobile-app-development/ios-app-development" },
            { name: "Hybrid App Development", path: "/services/technology-solutions/mobile-app-development/hybrid-app-development" },
          ],
        },
        {
          parent: "UI/UX Design Services",
          children: [
            { name: "UI/UX Design", path: "/services/technology-solutions/ui-ux-design-services" },
          ],
        },
        {
          parent: "Technology Stack",
          children: [
            { name: "Technology Stack", path: "/services/technology-solutions/tech-stack" },
          ],
        },
      ],
    },

    digital: {
  title: "Digital Marketing & Growth Services",
  path: "/services/digital-marketing",
  items: [
    {
      parent: "SEO Services",
      children: [
        { name: "On-Page SEO", path: "/services/digital-marketing/seo/on-page-seo" },
        { name: "Technical SEO", path: "/services/digital-marketing/seo/technical-seo" },
        { name: "Off-Page SEO", path: "/services/digital-marketing/seo/off-page-seo" },
        { name: "Local SEO", path: "/services/digital-marketing/seo/local-seo" },
        { name: "E-commerce SEO", path: "/services/digital-marketing/seo/ecommerce-seo" },
      ],
    },
    {
      parent: "Social Media Marketing",
      children: [
        { name: "Social Media Strategy", path: "/services/digital-marketing/social-media/strategy" },
        { name: "Facebook & Instagram Marketing", path: "/services/digital-marketing/social-media/facebook-instagram" },
        { name: "LinkedIn Marketing", path: "/services/digital-marketing/social-media/linkedin" },
      ],
    },
    {
      parent: "Paid Advertising",
      children: [
        { name: "Google Ads Management", path: "/services/digital-marketing/paid-advertising/google-ads" },
        { name: "Social Media Advertising", path: "/services/digital-marketing/paid-advertising/social-ads" },
      ],
    },
    {
      parent: "Content Marketing",
      children: [
        { name: "Content Marketing", path: "/services/digital-marketing/content-marketing" },
      ],
    },
    {
      parent: "Case Studies",
      children: [
        { name: "Our Case Studies", path: "/services/digital-marketing/case-studies" },
      ],
    },
  ],
    },

    consultancy: {
      title: "Consultancy & HR Solutions",
      path: "/services/consultancy-and-hr",
      items: [
        {
          parent: "Business Consultancy",
          children: [
            { name: "Startup Advisory Services", path: "/services/consultancy-and-hr/business-consultancy/startup-advisory-services" },
            { name: "Business Plan Development", path: "/services/consultancy-and-hr/business-consultancy/business-plan-development" },
            { name: "Financial Projections & CMA Reports", path: "/services/consultancy-and-hr/business-consultancy/financial-projections-and-cma-reports" },
            { name: "Project Financing & Loan Syndication", path: "/services/consultancy-and-hr/business-consultancy/project-financing-and-loan-syndication" },
          ],
        },
        {
          parent: "Recruitment & Staffing",
          children: [
            { name: "Recruitment & Staffing", path: "/services/consultancy-and-hr/recruitment-and-staffing" },
            { name: "Permanent Staffing", path: "/services/consultancy-and-hr/recruitment-and-staffing/permanent-staffing" },
            { name: "Temporary / Contract Staffing", path: "/services/consultancy-and-hr/recruitment-and-staffing/temporary-contract-staffing" },
          ],
        },
        {
          parent: "HR Management",
          children: [
            { name: "HR Policy Formulation", path: "/services/consultancy-and-hr/hr-management/hr-policy-formulation" },
            { name: "Payroll Management Services", path: "/services/consultancy-and-hr/hr-management/payroll-management-services" },
          ],
        },
      ],
    },

  };

  // ===========================
  // 🧭 Menu Event Handlers
  // ===========================
  const handleServicesEnter = () => {
    setIsServicesOpen(true);
    setActiveCategory("finance");
  };

  const handleServicesLeave = () => {
    setIsServicesOpen(false);
  };

  // ===========================
  // 🧱 Render Component
  // ===========================
  return (
    <nav className="bg-white w-full py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Navbar Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-full h-10 md:w-full md:h-20 rounded-lg overflow-hidden">
              <img
                src="/amoollogo.jpg"
                alt="Amool Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: "#b02d33" }}>Home</Link>
            <Link to="/about" className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: "#b02d33" }}>About Us</Link>

            {/* Mega Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleServicesEnter}
                className="font-semibold hover:opacity-80 transition-opacity flex items-center gap-1 text-sm xl:text-base"
                style={{ color: "#b02d33" }}
              >
                Services
                <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <>
                  {/* Overlay */}
                  <div className="fixed inset-0 bg-black bg-opacity-20 z-40" onClick={handleServicesLeave} />

                  {/* Mega Menu */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col md:flex-row z-50 w-[95vw] md:w-auto max-w-[1000px]"
                    onMouseLeave={handleServicesLeave}
                  >
                    {/* Left Sidebar */}
                    <div className="w-full md:w-56 lg:w-72 bg-gray-50 rounded-t-lg md:rounded-l-lg p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                      <h3 className="text-xs font-bold uppercase tracking-wider mb-3 md:mb-4 text-gray-500">
                        Service Categories
                      </h3>
                      {Object.entries(services).map(([key, service]) => (
                        <div
                          key={key}
                          onMouseEnter={() => setActiveCategory(key)}
                          onClick={() => setActiveCategory(key)}
                          className={`cursor-pointer px-3 md:px-4 py-2 md:py-3 rounded-md font-semibold transition-all flex items-center justify-between group mb-1 md:mb-2 text-sm md:text-base ${
                            activeCategory === key ? "shadow-sm" : "hover:bg-white"
                          }`}
                          style={{
                            color: activeCategory === key ? "#eb6126" : "#b02d33",
                            backgroundColor: activeCategory === key ? "#fff" : "transparent",
                          }}
                        >
                          <span className="truncate pr-2">{service.title}</span>
                          <ArrowUpRight className={`w-3 h-3 md:w-4 md:h-4 flex-shrink-0 transition-opacity ${activeCategory === key ? "opacity-100" : "opacity-0"}`} />
                        </div>
                      ))}
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-[450px] lg:w-[700px] p-4 md:p-6 lg:p-8 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
                      <Link to={services[activeCategory]?.path || "#"}>
                        <h2
                          className="text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 hover:opacity-80 transition-opacity"
                          style={{ color: "#b02d33", borderColor: "#eb6126" }}
                        >
                          {services[activeCategory]?.title}
                        </h2>
                      </Link>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {services[activeCategory]?.items.map((item, idx) => (
                          <div key={idx} className="space-y-2 md:space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#eb6126" }}>
                                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                              <h3 className="font-bold text-xs md:text-sm" style={{ color: "#b02d33" }}>
                                {item.parent}
                              </h3>
                            </div>

                            {item.children.length > 0 ? (
                              <ul className="space-y-1.5 md:space-y-2 ml-8 md:ml-10">
                                {item.children.map((child, i) => (
                                  <li key={i}>
                                    <Link
                                      to={child.path}
                                      className="text-xs hover:opacity-70 transition-all flex items-start gap-1 group"
                                      style={{ color: "#6b7280" }}
                                    >
                                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#eb6126" }}>→</span>
                                      <span className="group-hover:translate-x-1 transition-transform">{child.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs ml-8 md:ml-10 text-gray-500">Coming soon</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link to="/team" className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: "#b02d33" }}>Our Team</Link>
            <Link to="/contact" className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: "#b02d33" }}>Contact Us</Link>
            <Link to="/careers" className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: "#b02d33" }}>Careers</Link>
          </div>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-white font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#eb6126" }}>
              Get Started
            </button>
            <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: "#b02d33" }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ===========================
            📱 Mobile Navigation
        ============================ */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="font-semibold py-2 hover:opacity-80 transition-opacity" style={{ color: "#b02d33" }}>Home</Link>
              <Link to="/about" className="font-semibold py-2 hover:opacity-80 transition-opacity" style={{ color: "#b02d33" }}>About Us</Link>

              {/* Mobile Services Menu */}
              <div>
                <button
                  onClick={() => setOpenMobileMenu(openMobileMenu === "services" ? null : "services")}
                  className="font-semibold hover:opacity-80 transition-opacity flex items-center justify-between w-full py-2"
                  style={{ color: "#b02d33" }}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileMenu === "services" ? "rotate-180" : ""}`} />
                </button>

                {openMobileMenu === "services" && (
                  <div className="ml-4 mt-2 space-y-3">
                    {Object.entries(services).map(([key, service]) => (
                      <div key={key}>
                        <button
                          onClick={() => setOpenMobileSubmenu(openMobileSubmenu === key ? null : key)}
                          className="font-semibold text-sm flex items-center justify-between w-full py-2"
                          style={{ color: "#eb6126" }}
                        >
                          {service.title}
                          <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubmenu === key ? "rotate-180" : ""}`} />
                        </button>

                        {openMobileSubmenu === key && (
                          <div className="ml-3 mt-2 space-y-2">
                            {service.items.map((item, idx) => (
                              <div key={idx}>
                                <Link
                                  to={service.path}
                                  className="block text-sm font-medium py-1"
                                  style={{ color: "#b02d33" }}
                                >
                                  {item.parent}
                                </Link>
                                {item.children.length > 0 && (
                                  <div className="ml-3 mt-1 space-y-1">
                                    {item.children.map((child, childIdx) => (
                                      <Link
                                        key={childIdx}
                                        to={child.path}
                                        className="block text-xs py-1"
                                        style={{ color: "#6b7280" }}
                                      >
                                        → {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/team" className="font-semibold py-2 hover:opacity-80 transition-opacity" style={{ color: "#b02d33" }}>Our Team</Link>
              <Link to="/contact" className="font-semibold py-2 hover:opacity-80 transition-opacity" style={{ color: "#b02d33" }}>Contact Us</Link>
              <Link to="/careers" className="font-semibold py-2 hover:opacity-80 transition-opacity" style={{ color: "#b02d33" }}>Careers</Link>

              <button className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-full sm:hidden mt-4" style={{ backgroundColor: "#eb6126" }}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
