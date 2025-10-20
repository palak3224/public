
import React, { useState } from 'react';
import { Users, FilePlus, Shield, BookOpen, CheckCircle, Landmark } from 'lucide-react';

export default function ITRFilingForHUF() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Users,
      title: "Specialized Filing for HUF & AOP",
      description: "Our services are tailored to the unique legal and tax structures of Hindu Undivided Families and AOPs."
    },
    {
      id: 2,
      icon: FilePlus,
      title: "Accurate Income & Exemption Claims",
      description: "We ensure correct attribution of income and claim all eligible exemptions to optimize your tax liability."
    },
    {
      id: 3,
      icon: Shield,
      title: "Compliance with Audit & Disclosure Norms",
      description: "Stay compliant with all audit requirements and disclosure standards applicable for AY 2025-26."
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Expert Filing & Documentation Support",
      description: "Receive complete support from our experts in preparing and filing your returns with all necessary documents."
    }
  ];

  const entityTypes = [
    { 
      title: "Hindu Undivided Family (HUF)", 
      description: "A separate legal entity for tax purposes, comprising all lineal descendants of a common ancestor.",
      icon: Landmark
    },
    { 
      title: "Association of Persons (AOP)", 
      description: "An entity formed when two or more persons join for a common purpose with the objective to earn income.",
      icon: Users
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How to get a separate PAN for an HUF or AOP?",
      answer: "An application in Form 49A needs to be submitted to the Income Tax Department. We can manage this entire process for you, from application to PAN card receipt."
    },
    {
      id: 2,
      question: "What incomes are taxable under an HUF?",
      answer: "Income from ancestral property, family business, or investments made from HUF funds are taxable. Personal income of members is not included."
    },
    {
      id: 3,
      question: "Are there specific exemptions for AOPs?",
      answer: "Yes, exemptions for AOPs depend on the constitution and profit-sharing ratios of the members. We can advise on the specific benefits applicable to your AOP."
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
                  Specialized Tax Filing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ITR Filing for HUF & AOP
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Ensure compliant and optimized ITR filing for Hindu Undivided Families and Association of Persons with expert support for AY 2025.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Strategic Filing</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Maximized Benefits</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556742522-003284a14b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="HUF & AOP Tax Filing"
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
                HUFs and AOPs have distinct tax filing requirements and benefits, including separate PAN and specific income sources. For AY 2025-26, updated reporting for joint family income and enhanced exemption limits are in effect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help you prepare accurate tax returns reflecting complex income streams and asset holdings, maximizing benefits while adhering to regulatory guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Entity Types Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Understanding the Entities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {entityTypes.map((entity, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" style={{ backgroundColor: '#eb6126' }}>
                    <entity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#b02d33' }}>{entity.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{entity.description}</p>
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
            Hassle-Free Filing for Your HUF or AOP
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Consult with our tax specialists to ensure compliant and optimized tax filing.
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
            Consult With Our Specialists
          </button>
        </div>
      </div>
    </div>
  );
}
