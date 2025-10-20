import React, { useState } from 'react';
import { Calculator, Calendar, Shield, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdvanceTaxCalculation() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Calculator,
      title: "Accurate Quarterly Tax Liability Estimation",
      description: "Precise calculations based on real-time income projections and latest tax regulations"
    },
    {
      id: 2,
      icon: Calendar,
      title: "Timely Filing and Payment Compliance",
      description: "Never miss a deadline with our systematic quarterly payment reminders"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Digital Transactions & Capital Gains Focus",
      description: "Expert handling of digital income streams and capital gains under new provisions"
    },
    {
      id: 4,
      icon: Shield,
      title: "Online Payment Assistance & Acknowledgement",
      description: "Complete support through government portal with proper documentation"
    }
  ];

  const paymentSchedule = [
    { installment: "1st Installment", dueDate: "15th June", percentage: "15%" },
    { installment: "2nd Installment", dueDate: "15th September", percentage: "45%" },
    { installment: "3rd Installment", dueDate: "15th December", percentage: "75%" },
    { installment: "4th Installment", dueDate: "15th March", percentage: "100%" }
  ];

  const faqs = [
    {
      id: 1,
      question: "Who is liable to pay advance tax?",
      answer: "Individuals, businesses, and professionals whose estimated tax liability exceeds ₹10,000 in a financial year are required to pay advance tax. This includes salaried individuals with significant income from other sources, freelancers, and business owners."
    },
    {
      id: 2,
      question: "What are the payment due dates?",
      answer: "Advance tax is paid in four quarterly installments: 15% by June 15th, 45% by September 15th, 75% by December 15th, and 100% by March 15th of the financial year."
    },
    {
      id: 3,
      question: "How to revise advance tax payments if income changes?",
      answer: "You can recalculate your tax liability based on revised income estimates and adjust subsequent installments accordingly. Our experts help you reassess your liability and make necessary adjustments to avoid interest under Sections 234B/234C."
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
                  Tax Compliance Made Simple
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Advance Tax Calculation & Filing Services
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Avoid interest and penalties by calculating and paying advance tax on time. Amool Enterprises ensures accurate projections and timely compliance.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Accurate Projections</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Timely Filing</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679921489768-3abcefbe4a89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2724"
                alt="Tax calculation"
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
                Advance tax payments must be made quarterly by specified deadlines to avoid interest under Sections 234B/234C. For FY 2025-26, new provisions for digital income streams and presumptive taxpayers apply.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our experts project your tax liability based on real-time income, guide you on installment schedules, and assist in filing advance tax returns through the government portal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Schedule Timeline */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Quarterly Payment Schedule
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentSchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center transition-all duration-300 hover:shadow-xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderTop = '4px solid #eb6126';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderTop = '4px solid #b02d33';
                }}
                style={{ borderTop: '4px solid #b02d33', transition: 'all 0.3s' }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>
                  {schedule.installment}
                </h3>
                <p className="text-gray-600 font-semibold mb-2">{schedule.dueDate}</p>
                <p className="text-2xl font-bold" style={{ color: '#eb6126' }}>
                  {schedule.percentage}
                </p>
                <p className="text-sm text-gray-500 mt-1">of total liability</p>
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
                <AlertCircle className="w-16 h-16 text-white" style={{ color: '#eb6126' }} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Special Focus for FY 2025-26
                </h2>
                <p className="text-lg text-white opacity-90 leading-relaxed">
                  New provisions apply for digital income streams and presumptive taxpayers. Our experts stay updated with the latest regulations to ensure your advance tax calculations account for all applicable provisions, including special considerations for cryptocurrency, freelance income, and capital gains from investments.
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
            Calculate and File Your Advance Tax With Us Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let our experts handle your advance tax compliance and keep you penalty-free
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
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}