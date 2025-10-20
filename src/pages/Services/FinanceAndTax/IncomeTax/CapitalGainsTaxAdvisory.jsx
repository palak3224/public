
import React, { useState } from 'react';
import { BarChart, Home, Shield, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';

export default function CapitalGainsTaxAdvisory() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: BarChart,
      title: "In-depth Capital Gains Computation",
      description: "Accurate calculation of long-term and short-term gains for property, shares, and digital assets."
    },
    {
      id: 2,
      icon: Home,
      title: "Planning for Exemptions & Reinvestments",
      description: "Strategic advice on utilizing exemptions under Sections 54, 54EC, 54F to minimize your tax outgo."
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Advisory for Crypto & Digital Asset Gains",
      description: "Expert guidance on the latest tax implications and reporting for cryptocurrency and other digital assets."
    },
    {
      id: 4,
      icon: Shield,
      title: "Compliance with Latest Government Guidelines",
      description: "Ensuring your capital gains reporting is fully compliant with the evolving tax regulations for AY 2025."
    }
  ];

  const gainTypes = [
    { 
      title: "Short-Term Capital Gains (STCG)", 
      description: "Profits from assets held for a short period (e.g., less than 12 months for securities, 24 for property). Generally taxed at a higher rate.",
      icon: TrendingUp 
    },
    { 
      title: "Long-Term Capital Gains (LTCG)", 
      description: "Profits from assets held for a longer duration. Often taxed at a lower rate and may be eligible for indexation benefits.",
      icon: TrendingUp
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the updated rates for LTCG and STCG?",
      answer: "For AY 2025-26, LTCG on listed equities is taxed at 10% over ₹1 lakh, while STCG is at 15%. Rates for other assets vary. Our advisors provide precise details based on your specific asset."
    },
    {
      id: 2,
      question: "How to claim exemption on house property sale?",
      answer: "You can claim exemptions under Section 54 by reinvesting the capital gains in another residential property within specified timelines. We can guide you through the conditions and documentation."
    },
    {
      id: 3,
      question: "Are cryptocurrencies taxable as capital assets?",
      answer: "Yes, as per the latest guidelines, income from the transfer of Virtual Digital Assets (VDAs), including cryptocurrencies, is taxed at a flat rate of 30%. We help you report these gains accurately."
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
                  Investment Tax Strategy
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Capital Gains Tax Advisory
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Maximize your investment returns by minimizing tax liabilities. Get expert advice on capital gains for property, shares, and digital assets.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Maximize Gains</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Minimize Tax</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Capital Gains"
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
                Capital gains tax rules have evolved for AY 2025 with new indexation benefits and treatment for listed securities and digital assets. Our advisory helps investors plan transactions, calculate long- and short-term gains accurately, and explore exemptions under Sections 54, 54EC, 54F, etc.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide comprehensive guidance to legally minimize tax liabilities on asset sales, ensuring you comply with all new regulations and optimize your investment returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gain Types Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Understanding Capital Gains
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {gainTypes.map((gain, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" style={{ backgroundColor: '#eb6126' }}>
                    <gain.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#b02d33' }}>{gain.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{gain.description}</p>
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

      {/* Special Focus Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start md:items-center space-x-6">
              <div className="flex-shrink-0">
                <HelpCircle className="w-16 h-16 text-white" style={{ color: '#eb6126' }} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Focus on AY 2025-26
                </h2>
                <p className="text-lg text-white opacity-90 leading-relaxed">
                  The latest tax laws introduce new rules for indexation benefits and specific treatments for listed securities and digital assets. Our advisory is designed to help you navigate these changes and ensure full compliance.
                </p>
              </div>
            </div>
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
            Secure Your Investment Returns
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get expert capital gains advice to optimize your tax strategy and stay compliant.
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
            Get a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
