
import React, { useState } from 'react';
import { PiggyBank, Calendar, Sparkles, Crosshair, CheckCircle, TrendingUp, Shield, Landmark } from 'lucide-react';

export default function TaxPlanningAndSavingsAdvisory() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: PiggyBank,
      title: "Personalized Tax-Saving Investment Plans",
      description: "We create bespoke investment plans using PF, ELSS, NPS, and insurance to maximize your tax savings."
    },
    {
      id: 2,
      icon: Calendar,
      title: "Year-Round Advisory for Changing Tax Laws",
      description: "Our experts provide continuous advice to keep you updated with the latest tax regulations and opportunities."
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Identification of New Deductions & Rebates",
      description: "We proactively identify new and updated deductions and rebates for AY 2025-26 to reduce your liability."
    },
    {
      id: 4,
      icon: Crosshair,
      title: "Integration with Your Financial Goals",
      description: "Our tax planning strategies are aligned with your long-term financial goals for holistic growth."
    }
  ];

  const investmentAvenues = [
    { title: "Provident Fund (PF)", icon: Landmark },
    { title: "ELSS Mutual Funds", icon: TrendingUp },
    { title: "National Pension System (NPS)", icon: PiggyBank },
    { title: "Insurance Policies", icon: Shield }
  ];

  const faqs = [
    {
      id: 1,
      question: "Which investments qualify for 80C deductions?",
      answer: "Common 80C investments include Employee Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), life insurance premiums, and National Savings Certificates (NSC), up to a limit of ₹1.5 lakh."
    },
    {
      id: 2,
      question: "How to plan taxes for freelance income?",
      answer: "Freelancers can claim various business-related expenses and opt for the presumptive taxation scheme under Section 44ADA. We help you structure your finances for maximum tax efficiency."
    },
    {
      id: 3,
      question: "Can NRIs avail tax-saving schemes?",
      answer: "Yes, NRIs can invest in certain tax-saving instruments like NPS and specific mutual funds. However, options like PPF are generally not available. We provide tailored advice for NRIs."
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
                  Smart Savings
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Tax Planning & Savings Advisory
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Tailored tax-saving plans and investment strategies following the latest budget provisions for maximum tax benefits and compliance.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Maximize Returns</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Proactive Planning</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1593697821252-8c913672b833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Tax Planning"
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
                Effective tax planning saves money and avoids last-minute rushes. We develop bespoke strategies using updated Section 80 deductions, rebate schemes, and allowable exemptions for AY 2025-26.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team optimizes your portfolio for tax efficiency across PF, ELSS, NPS, and insurance investments while ensuring compliance with changing legal frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Avenues Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Popular Tax-Saving Avenues
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentAvenues.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#b02d33' }}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>{item.title}</h3>
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
            Plan Your Taxes Proactively
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Don't wait until the last minute. Book a free consultation with our tax experts today.
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
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
