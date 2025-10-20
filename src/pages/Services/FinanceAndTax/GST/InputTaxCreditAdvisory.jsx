import React, { useState } from 'react';
import { Target, FileText, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function InputTaxCreditAdvisory() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Target,
      title: "Accurate ITC tracking and reconciliation",
      description: "We help you track and reconcile your Input Tax Credit (ITC) accurately to ensure you claim the right amount."
    },
    {
      id: 2,
      icon: FileText,
      title: "Detailed advice on eligibility and restrictions",
      description: "Our experts provide detailed advice on ITC eligibility and restrictions to keep you compliant."
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "Help with ITC mismatches and reversal calculation",
      description: "We assist you in handling ITC mismatches and calculating reversals to avoid penalties."
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Support during GST audit on ITC claims",
      description: "We provide comprehensive support during GST audits to defend your ITC claims."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What purchases qualify for ITC?",
      answer: "Generally, you can claim ITC on goods and services used for business purposes. However, there are certain restrictions, such as on goods and services for personal consumption, and on certain motor vehicles."
    },
    {
      id: 2,
      question: "How to handle ITC mismatches in GSTR-2B?",
      answer: "ITC mismatches in GSTR-2B should be immediately communicated to the supplier for correction. If the supplier fails to correct the invoice, you may have to reverse the ITC claimed."
    },
    {
      id: 3,
      question: "When is ITC reversal compulsory?",
      answer: "ITC reversal is compulsory in cases such as non-payment to the supplier within 180 days, goods used for non-business purposes, and when the supplier has not paid the tax to the government."
    }
  ];

  const keyDeadlines = [
    { label: "ITC Reconciliation", amount: "Monthly", status: "Crucial" },
    { label: "GSTR-2B vs Books", amount: "Essential", status: "Match" }
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
                  Input Tax Credit (ITC) Advisory
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Expert guidance to claim and reconcile Input Tax Credit accurately. Avoid denial during GST audits with Amool Enterprises.
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
                  alt="Input Tax Credit Advisory"
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
                  Claiming ITC is a crucial benefit for GST-registered businesses but requires strict compliance. In 2025, GST authorities focus keenly on ITC mismatches with GSTR-2B data.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We help identify eligible ITC, perform monthly reconciliation, and assist in rectifying errors with suppliers to ensure maximum credit claims without penalties.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#b02d33' }}>
                <Target className="w-12 h-12 mx-auto mb-4" style={{ color: '#eb6126' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>Accurate</div>
                <div className="text-gray-600">ITC Claims</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-l-4" style={{ borderLeftColor: '#eb6126' }}>
                <ShieldCheck className="w-12 h-12 mx-auto mb-4" style={{ color: '#b02d33' }} />
                <div className="text-3xl font-bold mb-2" style={{ color: '#b02d33' }}>Audit</div>
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
                  Maximizing your Input Tax Credit requires careful planning and execution. Our advisory services can help you navigate the complexities of ITC and optimize your GST benefits.
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
              Maximize your GST benefits with our expert ITC advisory
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
              { step: "01", title: "ITC Review", desc: "We review your purchases to identify all eligible Input Tax Credit." },
              { step: "02", title: "Reconciliation", desc: "We reconcile your ITC with GSTR-2B to identify any mismatches." },
              { step: "03", title: "Advisory", desc: "We provide detailed advice on how to handle mismatches and other ITC-related issues." },
              { step: "04", title: "Compliance", desc: "We ensure your ITC claims are fully compliant with GST laws and regulations." }
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
            Optimize Your ITC Claims—Consult Our Experts Today
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't lose out on the Input Tax Credit you are entitled to. Contact us today for a consultation and let our experts help you maximize your GST benefits.
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
            Consult Now
          </button>
        </div>
      </div>
    </div>
  );
}