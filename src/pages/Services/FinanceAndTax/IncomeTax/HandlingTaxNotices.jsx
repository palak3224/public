
import React, { useState } from 'react';
import { FileText, ShieldCheck, Users, AlertTriangle, CheckCircle, MailWarning } from 'lucide-react';

export default function HandlingTaxNotices() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: FileText,
      title: "Quick Assessment of Notice Type",
      description: "Our experts quickly analyze the notice to understand its implications and the required course of action."
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Accurate Response Drafting",
      description: "We prepare and draft precise, well-documented responses to address the queries raised by the tax department."
    },
    {
      id: 3,
      icon: Users,
      title: "Liaison with Tax Officers",
      description: "We represent you before the tax authorities and manage all communication under the faceless assessment scheme."
    },
    {
      id: 4,
      icon: AlertTriangle,
      title: "Reduction of Legal Risks & Penalties",
      description: "Our professional guidance helps you avoid penalties and legal complications arising from incorrect responses."
    }
  ];

  const processSteps = [
    { step: "1", title: "Notice Analysis", description: "We analyze the notice to determine the reason and urgency." },
    { step: "2", title: "Document Collation", description: "We assist you in gathering all necessary documents and proofs." },
    { step: "3", title: "Response Drafting", description: "A detailed, factual response is drafted by our tax experts." },
    { step: "4", title: "Representation", description: "We file the response and represent you before the authorities." }
  ];

  const faqs = [
    {
      id: 1,
      question: "How to respond to a notice under Section 143(2)?",
      answer: "A notice under Section 143(2) means your return has been selected for scrutiny. It requires a careful and detailed response. Our team will prepare all necessary documentation and represent you."
    },
    {
      id: 2,
      question: "What documents are required for income tax scrutiny?",
      answer: "This depends on the notice, but commonly required documents include bank statements, proof of investments, salary slips, and details of assets. We will provide a specific list based on your notice."
    },
    {
      id: 3,
      question: "What happens if I ignore a notice?",
      answer: "Ignoring a tax notice can lead to penalties, prosecution, and a best-judgment assessment by the tax officer, which may result in a higher tax liability. It is crucial to respond in a timely manner."
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
                  Expert Tax Resolution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Income Tax Notice & Scrutiny Support
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Facing an income tax notice? Amool Enterprises offers expert assistance to resolve scrutiny cases and notices efficiently and without stress.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Avoid Penalties</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Stress-Free Process</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Tax Notice"
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
                Income tax notices and scrutiny are increasingly common as the government expands data analytics. Our tax experts provide end-to-end support from notice analysis, document preparation, response drafting, to representing you before tax authorities under the new Faceless Assessment framework implemented in 2025.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Avoid penalties and stress with our professional guidance, ensuring every query from the tax department is handled meticulously.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            How We Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center transition-all duration-300 hover:shadow-xl"
                style={{ borderTop: '4px solid #b02d33' }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>
                  {item.title}
                </h3>
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

      {/* Special Focus Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start md:items-center space-x-6">
              <div className="flex-shrink-0">
                <MailWarning className="w-16 h-16 text-white" style={{ color: '#eb6126' }} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Faceless Assessment Framework 2025
                </h2>
                <p className="text-lg text-white opacity-90 leading-relaxed">
                  With the new faceless assessment scheme, all communication is digital. Our team is proficient in navigating the government portal to ensure your case is presented clearly and effectively.
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
            Get Professional Help For Your Tax Notice
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Don't let a tax notice cause you stress. Let our experts handle it for you.
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
            Address Your Notice Today
          </button>
        </div>
      </div>
    </div>
  );
}
