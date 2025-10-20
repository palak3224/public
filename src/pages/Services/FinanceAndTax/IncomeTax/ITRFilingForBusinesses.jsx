
import React, { useState } from 'react';
import { Briefcase, FileCheck, UserCheck, Shield, CheckCircle, Building, Users } from 'lucide-react';

export default function ITRFilingForBusinesses() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: FileCheck,
      title: "Compliance with Latest Tax Norms",
      description: "We ensure your ITR filing complies with the latest audit and presumptive taxation schemes for AY 2025-26."
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Customized Advisory Per Industry",
      description: "Receive tax planning advice tailored to your specific business sector and income sources for optimal liability."
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Digital Filing with Documentation Support",
      description: "End-to-end digital filing process with complete support for profit & loss statements and documentation."
    },
    {
      id: 4,
      icon: Shield,
      title: "Notice Handling & Response Management",
      description: "Our service includes assistance with handling and responding to any tax notices you may receive after filing."
    }
  ];

  const businessTypes = [
    { title: "Sole Proprietorship", description: "For individual business owners.", icon: UserCheck },
    { title: "Partnership Firms", description: "For businesses with multiple partners.", icon: Users },
    { title: "Professionals", description: "For doctors, lawyers, consultants, etc.", icon: Briefcase },
    { title: "Small Businesses", description: "Under presumptive tax schemes.", icon: Building }
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the new audit exemption limits for AY 2025-26?",
      answer: "The audit exemption limits have been updated based on turnover and the percentage of digital transactions. Our experts can assess your eligibility based on the latest criteria."
    },
    {
      id: 2,
      question: "How to calculate taxable income under presumptive schemes?",
      answer: "Under schemes like 44AD or 44ADA, income is calculated as a percentage of your turnover or gross receipts, simplifying compliance. We can help you determine if you are eligible and calculate the liability."
    },
    {
      id: 3,
      question: "What documents are needed for professional income?",
      answer: "Typically, you need a consolidated P&L statement, bank statements, and records of all professional receipts and expenses. We provide a detailed checklist tailored to your profession."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#b02d33' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(235, 97, 38, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(235, 97, 38, 0.4) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: '#eb6126' }}
                >
                  Business & Professional Tax
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Expert ITR Filing for Businesses & Professionals
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                File your business and professional income tax returns with our expert CA assistance. Ensure accurate profit calculations and meet audit requirements for AY 2025.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Maximize Compliance</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Optimize Liability</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Business Tax Filing"
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: '#b02d33' }}>
              Overview
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#eb6126' }}></div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Businesses and professionals face complex tax regulations, including presumptive taxation and audit thresholds that change annually. For AY 2025-26, new audit exemptions and updated turnover limits apply.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Amool Enterprises offers personalized ITR filing, profit & loss statement checks, and tax planning tailored to your business sector—ensuring timely, error-free filing with optimized tax liability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Who We Serve
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#b02d33' }}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-lg p-8 shadow-md transition-all duration-300"
                style={{
                  transform: hoveredBenefit === benefit.id ? 'translateX(8px)' : 'translateX(0)',
                  borderLeft: hoveredBenefit === benefit.id ? '4px solid #eb6126' : '4px solid #b02d33'
                }}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-6"
                    style={{ 
                      backgroundColor: hoveredBenefit === benefit.id ? '#eb6126' : '#b02d33',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#b02d33' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                style={{
                  borderLeft: activeFaq === faq.id ? '4px solid #eb6126' : '4px solid transparent'
                }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-semibold pr-4" style={{ color: '#b02d33' }}>
                    {faq.question}
                  </span>
                  <span 
                    className="flex-shrink-0 text-2xl font-bold transition-transform duration-300"
                    style={{ 
                      color: '#eb6126',
                      transform: activeFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: activeFaq === faq.id ? '500px' : '0px'
                  }}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#b02d33' }}>
            File Your Business ITR With Our Expert Team
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ensure timely and accurate ITR filing for your business or profession.
          </p>
          <button 
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 shadow-lg"
            style={{ backgroundColor: '#b02d33' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#eb6126';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 24px rgba(176, 45, 51, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b02d33';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            File Your Business ITR Today
          </button>
        </div>
      </div>
    </div>
  );
}
