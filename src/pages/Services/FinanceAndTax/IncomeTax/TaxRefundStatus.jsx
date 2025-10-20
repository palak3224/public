
import React, { useState } from 'react';
import { Search, Wrench, HelpCircle, CheckCircle, Clock, UserCheck, FileWarning } from 'lucide-react';

export default function TaxRefundStatus() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Clock,
      title: "Real-Time Refund Tracking & Updates",
      description: "We use the latest tools to track your refund status in real-time and keep you informed at every step."
    },
    {
      id: 2,
      icon: Wrench,
      title: "Assistance for Glitch & Rectification",
      description: "Our team helps resolve any technical glitches or discrepancies by filing rectification requests on your behalf."
    },
    {
      id: 3,
      icon: HelpCircle,
      title: "Expert Guidance for Refund Claims",
      description: "Receive expert guidance on tax adjustments and making a successful claim for your rightful refund."
    },
    {
      id: 4,
      icon: UserCheck,
      title: "Support Till Refund Receipt",
      description: "We provide end-to-end support, from tracking your refund to ensuring it is successfully credited to your account."
    }
  ];

  const processSteps = [
    { title: "Real-Time Tracking", icon: Search },
    { title: "Liaison with IT Department", icon: UserCheck },
    { title: "Rectification Filing", icon: FileWarning },
    { title: "Refund Confirmation", icon: CheckCircle }
  ];

  const faqs = [
    {
      id: 1,
      question: "How can I check my ITR refund status?",
      answer: "You can check your refund status on the official Income Tax portal using your PAN and assessment year. Our service includes doing this for you and providing regular updates."
    },
    {
      id: 2,
      question: "What causes income tax refund delays?",
      answer: "Delays can be caused by incorrect bank details, discrepancies in the ITR form, or pending verification. We help identify and resolve these issues to expedite your refund."
    },
    {
      id: 3,
      question: "Can I claim interest on a delayed refund?",
      answer: "Yes, the Income Tax Department is liable to pay interest under Section 244A if the refund is more than 10% of the tax determined. The interest is calculated from the beginning of the assessment year."
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
                  Expert Refund Assistance
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Track and Expedite Your Income Tax Refund
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Check your refund status, resolve delays, and claim your rightful tax refunds with Amool Enterprises’ expert assistance for AY 2025.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Resolve Delays</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Hassle-Free</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1614028674022-3c864a3a4a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Tax Refund"
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
                Taxpayers awaiting refunds often face delays and procedural hurdles. Using the latest Annual Information Statement and refund monitoring tools, our team tracks refunds in real-time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We expedite processing via liaison with the IT department and assist in rectification if discrepancies arise. Experience hassle-free refund management for AY 2025.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Our Refund Assistance Process
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
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
            Track and Claim Your Refund With Expert Support
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you get your hard-earned money back without the hassle.
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
            Get Refund Support
          </button>
        </div>
      </div>
    </div>
  );
}
