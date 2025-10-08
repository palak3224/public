import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ExternalLink } from "lucide-react";

const Footer = () => {
  const services = {
    finance: {
      title: "Finance & Tax",
      items: [
        "Income Tax Services",
        "GST Services",
        "Business Compliance",
        "Tax Planning"
      ]
    },
    technology: {
      title: "Technology",
      items: [
        "Software Development",
        "Website Development",
        "Mobile App Development",
        "ERP Solutions"
      ]
    },
    marketing: {
      title: "Digital Marketing",
      items: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "PPC Services"
      ]
    },
    consultancy: {
      title: "Consultancy",
      items: [
        "Startup Advisory",
        "HR Solutions",
        "Recruitment",
        "Business Strategy"
      ]
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info - Takes 3 columns on large screens */}
          <div className="lg:col-span-3">
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl"
                style={{ backgroundColor: "#b02d33" }}
              >
                AW
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Your trusted partner for comprehensive finance, technology, and digital marketing solutions. Empowering businesses to grow and succeed.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#eb6126" }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#eb6126" }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#eb6126" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#eb6126" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services - Takes 4 columns on large screens */}
          <div className="lg:col-span-4">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: "#eb6126" }}>
              Our Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {Object.entries(services).map(([key, service]) => (
                <div key={key}>
                  <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: "#b02d33" }}>
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={`/services/${key}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors flex items-start gap-1 group"
                        >
                          <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: "#eb6126" }} />
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: "#eb6126" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm md:text-base transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "#eb6126" }} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes 3 columns on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ color: "#eb6126" }}>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#b02d33" }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm md:text-base">
                    123 Business Street, Suite 100<br />
                    Indore, Madhya Pradesh 452001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#b02d33" }}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+911234567890" className="text-gray-400 hover:text-white text-sm md:text-base transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#b02d33" }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:info@example.com" className="text-gray-400 hover:text-white text-sm md:text-base transition-colors">
                    info@example.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6 md:mt-8">
              <h4 className="font-semibold mb-3 text-sm md:text-base">Subscribe to Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-opacity-50"
                  style={{ borderColor: "#b02d33" }}
                />
                <button
                  className="px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                  style={{ backgroundColor: "#eb6126" }}
                >
                  Subscribe
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2025 AW Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;