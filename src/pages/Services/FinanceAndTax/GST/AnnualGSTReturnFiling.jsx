import React, { useState } from 'react';
import { FileText, Shield, Clock, TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AnnualGSTReturnFiling() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: FileText,
      title: "Thorough annual reconciliation of GST returns",
      description: "Complete reconciliation of monthly filings with annual returns ensuring accuracy and consistency across all submissions"
    },
    {
      id: 2,
      icon: Shield,
      title: "Audit assistance and report filing as per MCA guidelines",
      description: "Certified auditor support for GSTR-9C preparation in compliance with Ministry of Corporate Affairs standards"
    },
    {
      id: 3,
      icon: Clock,
      title: "Timely submission to avoid penalties",
      description: "Systematic process management to meet December 31, 2025 deadline and prevent costly late filing charges"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Expert advice on compliance improvements",
      description: "Strategic recommendations to enhance your GST compliance framework for future financial years"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Who must file GSTR-9 and GSTR-9C?",
      answer: "All registered GST taxpayers must file GSTR-9 annual return. However, GSTR-9C (reconciliation statement with auditor certification) is mandatory only for businesses with an aggregate turnover exceeding ₹5 crores in the financial year. This audit requirement ensures proper reconciliation between GSTR-9 and audited financial statements."
    },
    {
      id: 2,
      question: "What documents are needed for GST audit?",
      answer: "Essential documents include all monthly GSTR-1, GSTR-3B returns, purchase registers, sales registers, input tax credit ledgers, audited financial statements, bank statements, e-way bills, import-export documents, and reconciliation statements. Our team helps organize and verify all required documentation for a smooth audit process."
    },
    {
      id: 3,
      question: "What penalties occur for late filing?",
      answer: "Late filing of GSTR-9 attracts a penalty of ₹200 per day (₹100 CGST + ₹100 SGST) with a maximum cap of 0.25% of turnover. For GSTR-9C, delayed filing can result in similar penalties plus potential scrutiny from tax authorities. Non-filing may also lead to cancellation of GST registration in severe cases."
    }
  ];

  const keyDeadlines = [
    { label: "FY 2024-25", deadline: "December 31, 2025", status: "Upcoming" },
    { label: "Turnover Threshold for 9C", amount: "₹5 Crores", status: "Mandatory Audit" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#fff5f2' }}>
          <div className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554224311-beee460c201f?w=1600')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(20%)'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-12 h-1 rounded" style={{ backgroundColor: '#b02d33' }}></div>
                  <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#b02d33' }}>
                    GST Compliance 2025
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#b02d33' }}>
                  Annual GST Return Filing & Audit Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Compliance assured with annual GST return filing (GSTR-9, 9C) and audit support for FY 2024-25 by certified experts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyDeadlines.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-t-4" style={{ borderTopColor: '#eb6126' }}>
                    <div className="text-sm font-semibold text-gray-500 mb-2">{item.label}</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#b02d33' }}>
                      {item.deadline || item.amount}
                    </div>
                    <div className="text-xs font-medium" style={{ color: '#eb6126' }}>{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
                  alt="GST filing and audit"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 w-72 h-72 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: '#b02d33' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Overview
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For 2025, annual GST returns GSTR-9 and audit reports GSTR-9C must be filed by December 31, 2025. This detailed return reconciles monthly filings and requires certified auditor endorsement if turnover exceeds ₹5 crores.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Amool Enterprises provides audit-ready accounting reconciliation and thorough filing, ensuring compliance and smooth audit completion.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#b02d33' }}>
                <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#eb6126' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>GSTR-9</div>
                <div className="text-gray-600">Annual Return</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#eb6126' }}>
                <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#b02d33' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>GSTR-9C</div>
                <div className="text-gray-600">Audit Report</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#eb6126' }}>
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#eb6126' }} />
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Businesses with turnover exceeding ₹5 crores must file both GSTR-9 and GSTR-9C. The reconciliation statement must be certified by a Chartered Accountant or Cost Accountant as per MCA guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-20 md:py-28" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Comprehensive support for your annual GST compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer"
                style={{
                  transform: hoveredBenefit === benefit.id ? 'scale(1.03)' : 'scale(1)',
                  boxShadow: hoveredBenefit === benefit.id 
                    ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-start space-x-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: hoveredBenefit === benefit.id ? '#eb6126' : '#b02d33'
                    }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
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

      {/* Process Timeline Section */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Our Process
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Data Collection", desc: "Gather all monthly returns and financial records" },
              { step: "02", title: "Reconciliation", desc: "Match monthly filings with annual consolidated data" },
              { step: "03", title: "Audit Preparation", desc: "Prepare documentation for CA certification if required" },
              { step: "04", title: "Filing & Submission", desc: "Complete GSTR-9 and GSTR-9C filing before deadline" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start space-x-6 bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderLeft = '6px solid #eb6126';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderLeft = '6px solid transparent';
                }}
                style={{ borderLeft: '6px solid transparent', transition: 'all 0.3s' }}
              >
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#b02d33' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
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
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
                style={{
                  borderLeft: activeFaq === faq.id ? '6px solid #eb6126' : '6px solid #b02d33'
                }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <span className="text-xl font-bold pr-6" style={{ color: '#b02d33' }}>
                    {faq.question}
                  </span>
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-all duration-300"
                    style={{ 
                      backgroundColor: activeFaq === faq.id ? '#eb6126' : '#b02d33',
                      transform: activeFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: activeFaq === faq.id ? '500px' : '0px'
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
      <div className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#b02d33' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(235, 97, 38, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(235, 97, 38, 0.6) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <CheckCircle2 className="w-20 h-20 mx-auto mb-8 text-white" style={{ color: '#eb6126' }} />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prepare and File Your Annual GST Returns With Experts
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't risk penalties or audit complications. Let our certified professionals handle your GSTR-9 and GSTR-9C filing with precision and timeliness.
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
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#eb6126';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Schedule Consultation Today
          </button>
        </div>
      </div>
    </div>
  );
}