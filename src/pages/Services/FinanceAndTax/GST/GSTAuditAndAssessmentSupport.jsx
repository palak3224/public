
import React, { useState } from 'react';
import { FileText, Shield, Users, Laptop, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function GSTAuditAndAssessmentSupport() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: FileText,
      title: "Preparation and filing of self-certified GSTR-9C audits",
      description: "We prepare and file your self-certified GSTR-9C, ensuring compliance with the latest 2025 guidelines."
    },
    {
      id: 2,
      icon: Shield,
      title: "Detailed reconciliation of invoices and tax payments",
      description: "Our team conducts a thorough reconciliation of your invoices and tax payments to ensure accuracy."
    },
    {
      id: 3,
      icon: Users,
      title: "Assistance in assessment notices and hearings",
      description: "We provide expert assistance in responding to assessment notices and representing you in hearings."
    },
    {
      id: 4,
      icon: Laptop,
      title: "Digital interface liaison with GST authorities",
      description: "We act as your digital interface, liaising with GST authorities to resolve queries efficiently."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Who requires a GST audit in 2025?",
      answer: "Businesses with an aggregate turnover exceeding ₹5 crores in a financial year are required to file a self-certified GSTR-9C. This has replaced the earlier requirement of a CA-certified audit report."
    },
    {
      id: 2,
      question: "What documents are required for GST audit?",
      answer: "The key documents required for a GST audit include your GSTR-9, GSTR-3B, GSTR-1, audited financial statements, and a reconciliation statement of the tax paid and tax payable."
    },
    {
      id: 3,
      question: "How to respond to GST assessment notices?",
      answer: "It is crucial to respond to GST assessment notices within the stipulated time frame. Our team can help you draft a detailed response with all the necessary documents and information to address the queries raised by the tax authorities."
    }
  ];

  const keyDeadlines = [
    { label: "GSTR-9C Turnover", amount: "₹5 Crores", status: "Self-Certified" },
    { label: "Faceless Assessment", amount: "Online", status: "Efficient" }
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
                  GST Audit & Assessment Support
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Amool Enterprises provides expert GST audit services and assessment support with compliance to latest 2025 guidelines for businesses over ₹5 Crore turnover.
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
                  alt="GST Audit and Assessment"
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
                  As per 2025 GST audit rules, businesses with turnover above ₹5 Crore must submit a self-certified GSTR-9C, replacing CA certification. Our services include comprehensive audit preparation, reconciliation, and report filing ensuring full compliance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We also assist in GST assessments by tax authorities, helping resolve queries under the faceless scheme efficiently and cost-effectively.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#b02d33' }}>
                <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#eb6126' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>GSTR-9C</div>
                <div className="text-gray-600">Self-Certified</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#eb6126' }}>
                <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#b02d33' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>Assessment</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: '#eb6126' }}>
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#eb6126' }} />
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  The shift to self-certified GSTR-9C places a greater responsibility on businesses to ensure the accuracy of their GST data. Our expert team can help you navigate this new requirement with confidence.
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
              Ensure compliant and hassle-free GST audits and assessments
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
              { step: "01", title: "Data Review", desc: "We review your financial data and GST returns for accuracy." },
              { step: "02", title: "Reconciliation", desc: "We perform a detailed reconciliation to identify any discrepancies." },
              { step: "03", title: "Audit Report", desc: "We prepare the self-certified GSTR-9C audit report." },
              { step: "04", title: "Assessment Support", desc: "We provide support in case of any GST assessment notices." }
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
            Get Expert GST Audit Support for Seamless Compliance
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ensure your business is fully compliant with the latest GST audit requirements. Contact us today for a consultation.
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
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
