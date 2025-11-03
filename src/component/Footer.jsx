
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Finance & Tax', link: '/services/finance-and-tax' },
    { name: 'Technology Solutions', link: '/services/technology-solutions' },
    { name: 'Digital Marketing', link: '/services/digital-marketing' },
    { name: 'Consultancy & HR', link: '/services/consultancy-and-hr' },
  ];

  const companyLinks = [
    { name: 'About Us', link: '/about' },
    { name: 'Team', link: '/team' },
    { name: 'Careers', link: '/careers' },
  ];

  const quickLinks = [
    { name: 'Privacy Policy', link: '/legal' },
    { name: 'Terms of Use', link: '/legal' },
    { name: 'FAQs', link: '/faq' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/amoollogo.jpg" alt="Amool Logo" className="h-16" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for comprehensive finance, technology, and digital marketing solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "#eb6126" }} aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "#eb6126" }} aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "#eb6126" }} aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "#eb6126" }} aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#eb6126" }}>Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "#eb6126" }} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#eb6126" }}>Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "#eb6126" }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#eb6126" }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "#eb6126" }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} Amool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
