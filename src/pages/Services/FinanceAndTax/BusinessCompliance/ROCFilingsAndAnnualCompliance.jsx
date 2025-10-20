
import React, { useState } from 'react';
import { FileCheck, Shield, Calendar, Info, CheckCircle, AlertTriangle, FileText, BarChart3 } from 'lucide-react';

export default function ROCFilingsAndAnnualCompliance() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: FileCheck,
      title: "Comprehensive Preparation & Filing",
      description: "We handle the complete preparation and filing of all mandatory ROC returns, including MGT-7 and AOC-4."
    },
    {
      id: 2,
      icon: Shield,
      title: "Coordination with Tax Audit Compliance",
      description: "Seamless coordination with tax audit requirements under new 2025 regulations to ensure consistency."
    },
    {
      id: 3,
      icon: Calendar,
      title: "Timely Submissions to Avoid Penalties",
      description: "Our proactive approach ensures all deadlines are met, protecting you from heavy penalties and legal notices."
    },
    {
      id: 4,
      icon: Info,
      title: "Expert Advisory on Companies Act Changes",
      description: "Stay informed about and compliant with the latest changes in the Companies Act and MCA circulars."
    }
  ];

  const heroFeatures = [
    { icon: Shield, label: "Stay Compliant", color: "#b02d33" },
    { icon: AlertTriangle, label: "Avoid Penalties", color: "#eb6126" },
    { icon: Calendar, label: "Meet Deadlines", color: "#b02d33" },
    { icon: FileCheck, label: "Accurate Filings", color: "#eb6126" }
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the main ROC filing deadlines?",
      answer: "Key deadlines include filing Form AOC-4 (Financial Statements) within 30 days of the AGM and Form MGT-7 (Annual Return) within 60 days of the AGM. We manage this calendar for you."
    },
    {
      id: 2,
      question: "How do you prepare Form MGT-7 and AOC-4?",
      answer: "We prepare these forms based on your audited financial statements and records of board and shareholder meetings. Our process ensures all data is accurate and correctly formatted for MCA submission."
    },
    {
      id: 3,
      question: "What are the penalties for non-filing?",
      answer: "Non-filing of ROC forms leads to significant daily penalties. For example, a penalty of ₹100 per day per form applies until the default continues. It can also lead to the disqualification of directors."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #b02d33 0%, #8a1f28 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" style={{ backgroundColor: '#eb6126' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#eb6126' }}></div>
                <span className="text-white font-semibold text-sm tracking-wide">Stay Legally Compliant</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                ROC Filings & Annual Compliance
              </h1>

              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">
                Ensure timely ROC filings and annual compliance. Avoid penalties with expert preparation of annual reports and statutory documentation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {heroFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-opacity-20 cursor-pointer"
                  >
                    <feature.icon 
                      className="w-6 h-6 flex-shrink-0" 
                      style={{ color: 'white' }}
                    />
                    <span className="text-white font-medium text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="ROC Filings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              </div>
              <div 
                className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full opacity-30 blur-3xl"
                style={{ backgroundColor: '#eb6126' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
                <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#b02d33' }}>Overview</span>
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Meet Your Statutory Obligations
            </h2>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4" style={{ borderTopColor: '#b02d33' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every company in India must file annual returns with the Registrar of Companies (ROC) to remain compliant. For 2025, stricter deadlines and enhanced disclosures, including updated tax audit reports, are in effect.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Amool Enterprises ensures your Annual Return (Form MGT-7), Financial Statements (Form AOC-4), and other required documents are filed accurately and on time, protecting you from penalties and legal risks.
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#fff5f2' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#b02d33' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#eb6126' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Why Choose Us for Annual Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(benefit.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-start space-x-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6"
                    style={{ 
                      backgroundColor: hoveredFeature === benefit.id ? '#eb6126' : '#b02d33'
                    }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" 
                        style={{ color: hoveredFeature === benefit.id ? '#eb6126' : '#b02d33' }}>
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

      {/* Key Filings Section */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Key Filings We Handle
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Form AOC-4", desc: "Filing of financial statements.", icon: BarChart3 },
              { title: "Form MGT-7", desc: "Filing of the company's annual return.", icon: FileText },
              { title: "Tax Audit Reports", desc: "Coordination and filing of tax audit reports.", icon: FileCheck },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-red-100">
                    <service.icon 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: '#b02d33' }} 
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b02d33' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-20 md:py-28" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  borderLeft: activeFaq === faq.id ? '6px solid #eb6126' : '6px solid #b02d33'
                }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between transition-all duration-300"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-xl font-bold pr-6" style={{ color: '#b02d33' }}>
                    {faq.question}
                  </span>
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: activeFaq === faq.id ? '#eb6126' : '#b02d33',
                      transform: activeFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: activeFaq === faq.id ? '600px' : '0px'
                  }}
                >
                  <div className="px-8 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#b02d33' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(235, 97, 38, 0.8) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(235, 97, 38, 0.8) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
            style={{ backgroundColor: '#eb6126' }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Manage Your ROC & Annual Compliance
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hire our experts to handle your annual filings accurately and on time, so you can focus on your business.
          </p>
          <button 
            className="px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl"
            style={{ 
              backgroundColor: '#eb6126',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#b02d33';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#eb6126';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Manage Your Compliance
          </button>
        </div>
      </div>
    </div>
  );
}
