
import React, { useState } from 'react';
import { User, FileText, ShieldCheck, Calendar, CheckCircle, TrendingDown, Home, Heart } from 'lucide-react';

export default function ITRFilingForIndividuals() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "CA-Reviewed Filing for Error-Free Returns",
      description: "Our chartered accountants review every return to ensure accuracy and compliance, minimizing future notices."
    },
    {
      id: 2,
      icon: TrendingDown,
      title: "Claim All Salary-Related Deductions",
      description: "We help you claim all eligible deductions like HRA, 80C, 80D, and standard deduction to maximize your refund."
    },
    {
      id: 3,
      icon: FileText,
      title: "Support for New Disclosure Requirements",
      description: "Get expert help with reporting capital gains and virtual assets income as per the latest ITR forms."
    },
    {
      id: 4,
      icon: Calendar,
      title: "Timely Filing to Avoid Penalties",
      description: "We ensure your ITR is filed by the 15th September 2025 deadline to avoid interest under Section 234A."
    }
  ];

  const deductions = [
    { title: "House Rent Allowance (HRA)", icon: Home },
    { title: "Section 80C Investments", icon: TrendingDown },
    { title: "Medical Insurance (80D)", icon: Heart },
    { title: "Standard Deduction", icon: FileText }
  ];

  const faqs = [
    {
      id: 1,
      question: "What documents do I need to file my ITR?",
      answer: "You will need your Form 16, bank statements, rent receipts (if claiming HRA), and proofs of investment for deductions (like ELSS, PPF, insurance)."
    },
    {
      id: 2,
      question: "What’s new in ITR filing for FY 2024-25?",
      answer: "For AY 2025-26, there is detailed reporting for capital gains, mandatory disclosure of virtual assets income, and updated tax slabs. The deadline for salaried individuals is 15th September 2025."
    },
    {
      id: 3,
      question: "Can I file my return after the deadline?",
      answer: "Yes, you can file a belated return, but it may attract a late filing fee and you might lose the ability to carry forward certain losses. It's always best to file on time."
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
                  For Salaried Employees
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Effortless ITR Filing for Individuals
              </h1>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                Simplify your income tax filing with our expert CA assistance. Maximize your refund and meet the new 2025 deadlines with confidence.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>Maximize Refund</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#eb6126' }} />
                  <span>CA-Reviewed</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1521788216445-4103a4faf5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="ITR Filing for Individuals"
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
              Service Overview
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#eb6126' }}></div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For AY 2025–26, the Income Tax Department has updated ITR forms and extended filing deadlines to 15th September 2025 for salaried individuals. Amool Enterprises helps you comply with new reporting norms while maximizing deductions and refunds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our service covers Form 16 verification, reporting virtual assets income if applicable, and claiming recent tax rebates under the updated tax slabs effective FY 2025-26.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Deductions Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Key Deductions We Help You Claim
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {deductions.map((item, index) => (
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

      {/* Key Features Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Key Features
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
            Upload Your Form 16 and File Hassle-Free
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let our experts handle your tax filing while you relax.
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
            Upload Form 16 Now
          </button>
        </div>
      </div>
    </div>
  );
}
