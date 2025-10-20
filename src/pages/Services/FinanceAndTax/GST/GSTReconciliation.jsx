import React, { useState } from 'react';
import { GitCompare, Search, ShieldAlert, Repeat, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function GSTReconciliation() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: GitCompare,
      title: "Detailed comparison of purchase data with GST returns",
      description: "We perform a line-by-line comparison of your purchase data with GSTR-2A/2B to ensure accuracy."
    },
    {
      id: 2,
      icon: Search,
      title: "Identification and resolution of discrepancies",
      description: "Our team identifies any mismatches and helps you resolve them with your vendors."
    },
    {
      id: 3,
      icon: ShieldAlert,
      title: "Reduction in ITC denial risks",
      description: "By ensuring accurate reconciliation, we help you minimize the risk of Input Tax Credit (ITC) denial."
    },
    {
      id: 4,
      icon: Repeat,
      title: "Continuous compliance monitoring",
      description: "We provide continuous monitoring of your GST compliance to keep you updated and compliant."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How to reconcile GSTR-2B with purchase ledger?",
      answer: "Reconciling GSTR-2B with your purchase ledger involves matching each invoice in your books with the corresponding entry in the GSTR-2B. This can be done using our automated tools to save time and ensure accuracy."
    },
    {
      id: 2,
      question: "What if vendor data is incorrect?",
      answer: "If a vendor has uploaded incorrect data, you should communicate with them to make the necessary corrections in their GSTR-1. Our team can assist you in this process to ensure a smooth resolution."
    },
    {
      id: 3,
      question: "Can ITC be claimed on unmatched invoices?",
      answer: "As per the current GST rules, ITC can only be claimed if the invoice is present in your GSTR-2B. Therefore, it is crucial to reconcile your data and resolve any discrepancies to claim the full ITC you are eligible for."
    }
  ];

  const keyDeadlines = [
    { label: "GSTR-2B vs Books", amount: "Monthly", status: "Essential" },
    { label: "ITC Claims", amount: "Accurate", status: "Verified" }
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
                    GST Compliance
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#b02d33' }}>
                  GST Reconciliation (GSTR-2A/2B vs. Books)
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Match your purchase records with GSTR-2A/2B data for optimized input tax credit claims and audit defense.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyDeadlines.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-t-4" style={{ borderTopColor: '#eb6126' }}>
                    <div className="text-sm font-semibold text-gray-500 mb-2">{item.label}</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#b02d33' }}>
                      {item.amount}
                    </div>
                    <div className="text-xs font-medium" style={{ color: '#eb6126' }}>{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-069243544344?w=800"
                  alt="GST Reconciliation"
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
                  GST reconciliation between GSTR-2A/2B auto-populated data and your purchase books is critical to avoid ITC denial and scrutiny. For 2025, enhanced data analytics increase compliance checks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our service identifies mismatches, helps correct vendor returns, and ensures your books and returns align flawlessly for smooth GST audits.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#b02d33' }}>
                <GitCompare className="w-12 h-12 mx-auto mb-4" style={{ color: '#eb6126' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>GSTR-2A/2B</div>
                <div className="text-gray-600">vs. Books</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#eb6126' }}>
                <ShieldAlert className="w-12 h-12 mx-auto mb-4" style={{ color: '#b02d33' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>ITC</div>
                <div className="text-gray-600">Protection</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#eb6126' }}>
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#eb6126' }} />
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Accurate GST reconciliation is not just a compliance requirement but also a crucial step in protecting your Input Tax Credit and avoiding unnecessary tax liabilities.
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
              Ensure accurate ITC claims with our reconciliation service
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
              { step: "01", title: "Data Import", desc: "We import your purchase data and GSTR-2A/2B from the GST portal." },
              { step: "02", title: "Reconciliation", desc: "Our automated tools perform a quick and accurate reconciliation." },
              { step: "03", title: "Discrepancy Report", desc: "We provide a detailed report of all discrepancies found." },
              { step: "04", title: "Resolution Support", desc: "We assist you in resolving the discrepancies with your vendors." }
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
            Ensure Accurate ITC Claims With Our Reconciliation Service
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't let discrepancies in your GST data lead to loss of Input Tax Credit. Get started with our reconciliation service today.
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
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}