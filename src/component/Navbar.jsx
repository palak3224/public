import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("finance");
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const services = {
    finance: {
      title: "Finance & Tax Services",
      items: [
        {
          parent: "Income Tax Services",
          children: [
            "ITR Filing for Individuals (Salaried)",
            "ITR Filing for Businesses & Professionals",
            "ITR Filing for HUF & AOP",
            "Capital Gains Tax Advisory",
            "Tax Planning & Savings Advisory",
          ],
        },
        {
          parent: "GST Services",
          children: [
            "GST Registration Services",
            "GST Return Filing (GSTR-1, GSTR-3B)",
            "GST Audit & Assessment Support",
          ],
        },
        {
          parent: "Business Compliance & Advisory",
          children: [
            "Private Limited Company Registration",
            "LLP Registration",
            "ROC Filings & Annual Compliance",
          ],
        },
      ],
    },
    technology: {
      title: "Technology Solutions",
      items: [
        {
          parent: "Custom Software Development",
          children: [
            "Enterprise Software Solutions",
            "CRM Software Development",
            "ERP Software Implementation",
          ],
        },
        {
          parent: "Website Development",
          children: [
            "Corporate Website Design",
            "E-commerce Website Development",
            "Website Maintenance & Support",
          ],
        },
        {
          parent: "Mobile App Development",
          children: [
            "Android App Development",
            "iOS App Development",
            "Hybrid App Development",
          ],
        },
      ],
    },
    marketing: {
      title: "Digital Marketing Services",
      items: [
        {
          parent: "SEO Optimization",
          children: [
            "On-Page SEO",
            "Off-Page SEO",
            "Technical SEO",
            "Local SEO",
          ],
        },
        {
          parent: "Social Media Marketing",
          children: [
            "Facebook & Instagram Ads",
            "LinkedIn Marketing",
            "Content Strategy",
          ],
        },
      ],
    },
    consultancy: {
      title: "Consultancy & HR Solutions",
      items: [
        {
          parent: "Startup Advisory Services",
          children: [],
        },
        {
          parent: "Recruitment & Staffing",
          children: ["Permanent Staffing", "Contract Staffing"],
        },
      ],
    },
  };

  const handleServicesEnter = () => {
    setIsServicesOpen(true);
    setActiveCategory("finance");
  };

  const handleServicesLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white w-full py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Navbar Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
  <div className="w-full h-10 md:w-full md:h-20 rounded-lg overflow-hidden">
    <img
      src="/amoollogo.jpg" // 🔁 Replace this with your actual image path or URL
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base"
              style={{ color: "#b02d33" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base"
              style={{ color: "#b02d33" }}
            >
              About Us
            </Link>

            {/* Services Mega Dropdown with Sticky Behavior */}
            <div className="relative">
              <button
                onMouseEnter={handleServicesEnter}
                className="font-semibold hover:opacity-80 transition-opacity flex items-center gap-1 text-sm xl:text-base"
                style={{ color: "#b02d33" }}
              >
                Services
                <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <>
                  {/* Overlay to close dropdown when clicking outside */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={handleServicesLeave}
                  />
                  
                  {/* Mega Menu Dropdown - Responsive */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col md:flex-row z-50 w-[95vw] md:w-auto max-w-[1000px]"
                    onMouseLeave={handleServicesLeave}
                  >
                    {/* Left Sidebar - Main Categories */}
                    <div className="w-full md:w-56 lg:w-72 bg-gray-50 rounded-t-lg md:rounded-l-lg md:rounded-tr-none p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                      <h3 className="text-xs font-bold uppercase tracking-wider mb-3 md:mb-4" style={{ color: "#6b7280" }}>
                        Service Categories
                      </h3>
                      {Object.entries(services).map(([key, service]) => (
                        <div
                          key={key}
                          onMouseEnter={() => setActiveCategory(key)}
                          onClick={() => setActiveCategory(key)}
                          className={`cursor-pointer px-3 md:px-4 py-2 md:py-3 rounded-md font-semibold transition-all flex items-center justify-between group mb-1 md:mb-2 text-sm md:text-base ${
                            activeCategory === key 
                              ? "shadow-sm" 
                              : "hover:bg-white"
                          }`}
                          style={{ 
                            color: activeCategory === key ? "#eb6126" : "#b02d33",
                            backgroundColor: activeCategory === key ? "#fff" : "transparent"
                          }}
                        >
                          <span className="truncate pr-2">{service.title}</span>
                          <ArrowUpRight className={`w-3 h-3 md:w-4 md:h-4 flex-shrink-0 transition-opacity ${activeCategory === key ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                      ))}
                    </div>

                    {/* Right Content - Service Details */}
                    <div className="w-full md:w-[450px] lg:w-[700px] p-4 md:p-6 lg:p-8 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
                      <h2 
                        className="text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6 pb-2 md:pb-3 border-b-2"
                        style={{ color: "#b02d33", borderColor: "#eb6126" }}
                      >
                        {services[activeCategory]?.title}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {services[activeCategory]?.items.map((item, idx) => (
                          <div key={idx} className="space-y-2 md:space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#eb6126" }}>
                                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                              <h3
                                className="font-bold text-xs md:text-sm"
                                style={{ color: "#b02d33" }}
                              >
                                {item.parent}
                              </h3>
                            </div>
                            
                            {item.children.length > 0 ? (
                              <ul className="space-y-1.5 md:space-y-2 ml-8 md:ml-10">
                                {item.children.map((child, i) => (
                                  <li key={i}>
                                    <a
                                      href={`/services/${activeCategory}/${item.parent
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}/${child
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="text-xs hover:opacity-70 transition-all flex items-start gap-1 group"
                                      style={{ color: "#6b7280" }}
                                    >
                                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#eb6126" }}>→</span>
                                      <span className="group-hover:translate-x-1 transition-transform">{child}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs ml-8 md:ml-10" style={{ color: "#6b7280" }}>
                                Coming soon
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              to="/team"
              className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base"
              style={{ color: "#b02d33" }}
            >
              Our Team
            </Link>
            <a
              href="/contact"
              className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base"
              style={{ color: "#b02d33" }}
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="font-semibold hover:opacity-80 transition-opacity text-sm xl:text-base"
              style={{ color: "#b02d33" }}
            >
              Careers
            </a>
          </div>

          {/* CTA + Mobile Button */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden sm:block text-white font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#eb6126" }}
            >
              Get Started
            </button>

            <button
              className="block lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: "#b02d33" }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="/"
                className="font-semibold hover:opacity-80 transition-opacity py-2"
                style={{ color: "#b02d33" }}
              >
                Home
              </a>
              <a
                href="/about"
                className="font-semibold hover:opacity-80 transition-opacity py-2"
                style={{ color: "#b02d33" }}
              >
                About Us
              </a>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === "services" ? null : "services"
                    )
                  }
                  className="font-semibold hover:opacity-80 transition-opacity flex items-center justify-between w-full py-2"
                  style={{ color: "#b02d33" }}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileMenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMobileMenu === "services" && (
                  <div className="ml-4 mt-2 space-y-3">
                    {Object.entries(services).map(([key, service]) => (
                      <div key={key}>
                        <button
                          onClick={() =>
                            setOpenMobileSubmenu(
                              openMobileSubmenu === key ? null : key
                            )
                          }
                          className="font-semibold text-sm flex items-center justify-between w-full py-2"
                          style={{ color: "#eb6126" }}
                        >
                          {service.title}
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${
                              openMobileSubmenu === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openMobileSubmenu === key && (
                          <div className="ml-3 mt-2 space-y-2">
                            {service.items.map((item, idx) => (
                              <div key={idx}>
                                <a
                                  href={`/services/${key}/${item.parent
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block text-sm font-medium py-1"
                                  style={{ color: "#b02d33" }}
                                >
                                  {item.parent}
                                </a>
                                {item.children.length > 0 && (
                                  <div className="ml-3 mt-1 space-y-1">
                                    {item.children.map((child, childIdx) => (
                                      <a
                                        key={childIdx}
                                        href={`/services/${key}/${item.parent
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}/${child
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        className="block text-xs py-1"
                                        style={{ color: "#6b7280" }}
                                      >
                                        → {child}
                                      </a>
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

              <a
                href="/team"
                className="font-semibold hover:opacity-80 transition-opacity py-2"
                style={{ color: "#b02d33" }}
              >
                Our Team
              </a>
              <a
                href="/contact"
                className="font-semibold hover:opacity-80 transition-opacity py-2"
                style={{ color: "#b02d33" }}
              >
                Contact Us
              </a>
              <a
                href="/careers"
                className="font-semibold hover:opacity-80 transition-opacity py-2"
                style={{ color: "#b02d33" }}
              >
                Careers
              </a>

              <button
                className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-full sm:hidden mt-4"
                style={{ backgroundColor: "#eb6126" }}
              >
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