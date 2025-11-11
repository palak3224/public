import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calculator, Building2, TrendingUp, Shield, Clock, Users, CheckCircle } from 'lucide-react';

const FinanceAndTax = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const coreServices = [
    {
      id: 1,
      icon: FileText,
      title: "Income Tax Services",
      description: "ITR filing for salaried, business, and HUF/AOP; tax planning; notices; refund help; advance tax filing.",
      features: ["Individual ITR Filing", "Business Tax Returns", "Tax Planning", "Notice Management", "Refund Assistance"]
    },
    {
      id: 2,
      icon: Calculator,
      title: "GST Services",
      description: "GST registration, monthly/annual returns, GSTR reconciliation, audits, and input credit solutions.",
      features: ["GST Registration", "Monthly/Annual Returns", "GSTR Reconciliation", "GST Audits", "Input Credit"]
    },
    {
      id: 3,
      icon: Building2,
      title: "Business Advisory & Compliance",
      description: "Company/LLP/OPC registration, ROC filing, accounting, and bookkeeping.",
      features: ["Company Registration", "LLP/OPC Setup", "ROC Compliance", "Accounting Services", "Bookkeeping"]
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: Shield,
      title: "Qualified CAs and tax specialists"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Transparent pricing and timely process"
    },
    {
      id: 3,
      icon: Clock,
      title: "100% secure digital workflow"
    },
    {
      id: 4,
      icon: Users,
      title: "Proven track record across industries"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.8), rgba(176, 45, 51, 0.8)), url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Finance & Tax Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-95">
            Expert tax filing, GST, business registration, and advisory for growth-focused businesses and professionals
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#b02d33' }}>
            One-Stop Finance, GST, and Compliance Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Amool Enterprises offers end-to-end financial and tax services for businesses and individuals. From income tax return (ITR) filing to GST compliance, capital gains advisory, and business registrations, our experts streamline your compliance and help you save time and money.
          </p>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  transform: hoveredService === service.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredService === service.id ? '0 12px 24px rgba(176, 45, 51, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: hoveredService === service.id ? '#eb6126' : '#b02d33',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#b02d33' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#eb6126' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#b02d33' }}>
                Why Choose Us?
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex items-start p-6 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: hoveredBenefit === benefit.id ? '#fff5f2' : 'transparent',
                      transform: hoveredBenefit === benefit.id ? 'translateX(8px)' : 'translateX(0)'
                    }}
                    onMouseEnter={() => setHoveredBenefit(benefit.id)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: hoveredBenefit === benefit.id ? '#eb6126' : '#b02d33',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-gray-800 ml-4 font-medium">
                      {benefit.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600" 
                alt="Professional tax services"
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl opacity-90">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Highlight Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Comprehensive Tax & Compliance Support
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: '#fff5f2' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#b02d33' }}>
                For Individuals
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Salaried employee ITR filing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Capital gains tax advisory</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>HUF and AOP tax returns</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Tax refund assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Income tax notice management</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: '#fff5f2' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#b02d33' }}>
                For Businesses
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Business tax return filing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>GST compliance and filing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Company and LLP registration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>Accounting and bookkeeping</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#eb6126' }}></span>
                  <span>ROC annual compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started with India's Most Reliable Tax & Compliance Partner
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Trusted by startups, SMEs, and enterprises across industries
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg text-white font-medium text-lg transition-colors"
            style={{ backgroundColor: '#eb6126' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d55520'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#eb6126'}
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinanceAndTax;