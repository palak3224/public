import React, { useState } from 'react';
import { BookOpen, TrendingUp, Shield, BarChart3, CheckCircle, FileCheck, Calculator, Clock } from 'lucide-react';

export default function AccountingAndBookkeepingService() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: BookOpen,
      title: "Customized bookkeeping aligned with Indian tax laws",
      description: "Tailored accounting systems that comply with GST, Income Tax, and MCA requirements for seamless regulatory adherence"
    },
    {
      id: 2,
      icon: Calculator,
      title: "Automated GST invoice management and reconciliation",
      description: "Streamlined digital processes for invoice tracking, input tax credit management, and monthly GST return preparation"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Monthly financial reports and bank statement matching",
      description: "Comprehensive MIS reports with accurate bank reconciliations to provide clear financial visibility"
    },
    {
      id: 4,
      icon: Shield,
      title: "Support for tax audits and compliance reviews",
      description: "Audit-ready documentation and expert assistance during tax audits and statutory compliance assessments"
    }
  ];

  const features = [
    { icon: FileCheck, label: "Daily Transaction Recording", color: "#b02d33" },
    { icon: TrendingUp, label: "Bank Reconciliation", color: "#eb6126" },
    { icon: Clock, label: "Real-time Updates", color: "#b02d33" },
    { icon: Shield, label: "Compliance Ready", color: "#eb6126" }
  ];

  const faqs = [
    {
      id: 1,
      question: "What accounting standards apply for Indian companies?",
      answer: "Indian companies must follow Indian Accounting Standards (Ind AS) or Accounting Standards (AS) as prescribed by the Ministry of Corporate Affairs. The applicable standard depends on the company's classification - listed companies and those above certain thresholds follow Ind AS, while smaller entities can follow AS. Additionally, all businesses must maintain books compliant with Income Tax Act provisions and GST regulations for proper tax filing and audit purposes."
    },
    {
      id: 2,
      question: "How can bookkeeping reduce errors in tax filings?",
      answer: "Systematic bookkeeping ensures accurate recording of all financial transactions, which forms the foundation for error-free tax returns. Proper categorization of income and expenses, timely reconciliation of accounts, and maintained supporting documents reduce discrepancies during GST and income tax filing. Regular bookkeeping also enables early detection of errors, proper input tax credit claims, and provides audit trails that minimize penalties and notices from tax authorities."
    },
    {
      id: 3,
      question: "What are the benefits of digital accounting software?",
      answer: "Digital accounting software offers real-time financial visibility, automated calculations, and reduced manual errors. Benefits include instant access to financial reports, seamless GST compliance with auto-populated returns, cloud-based data security, multi-user collaboration, and integration with banking systems for automatic reconciliation. It also provides analytical insights through dashboards, simplifies audit processes, and ensures data backup, making financial management more efficient and reliable for modern businesses."
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
                <span className="text-white font-semibold text-sm tracking-wide">Financial Clarity 2025</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Accurate Accounting & Bookkeeping Solutions
              </h1>

              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">
                Professional accounting services tailored for Indian businesses with real-time financial records to aid taxation and strategic decisions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-opacity-20 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      setHoveredFeature(idx);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      setHoveredFeature(null);
                    }}
                  >
                    <feature.icon 
                      className="w-6 h-6 flex-shrink-0 transition-colors duration-300" 
                      style={{ color: hoveredFeature === idx ? '#eb6126' : 'white' }}
                    />
                    <span className="text-white font-medium text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&q=80"
                  alt="Accounting and bookkeeping services"
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
              Your Financial Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 transition-all duration-300 hover:shadow-2xl"
              style={{ borderLeftColor: '#b02d33' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>Critical for Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Maintaining accurate books is essential for regulatory compliance and informed business decision-making in today's dynamic environment.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 transition-all duration-300 hover:shadow-2xl"
              style={{ borderLeftColor: '#eb6126' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#eb6126' }}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>Digital Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our digital accounting services are customized for Indian businesses in FY 2024-25, using latest compliance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4" style={{ borderTopColor: '#b02d33' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Amool Enterprises offers comprehensive accounting and bookkeeping services that adhere to GST, Income Tax, and MCA requirements. From daily transaction recording to bank reconciliation and MIS reports, our experts ensure your financial data is audit-ready and supports strategic growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our systematic approach transforms raw financial data into actionable insights, empowering you to make informed decisions while maintaining full regulatory compliance.
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting solutions designed for modern Indian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 cursor-pointer"
                style={{
                  transform: hoveredFeature === benefit.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredFeature === benefit.id 
                    ? '0 25px 50px rgba(176, 45, 51, 0.15)' 
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
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

      {/* Service Highlights */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Our Comprehensive Services
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Transaction Recording", desc: "Meticulous daily recording of all financial transactions with proper categorization", icon: FileCheck },
              { title: "Bank Reconciliation", desc: "Monthly matching of bank statements with book entries for accuracy", icon: CheckCircle },
              { title: "MIS Reports", desc: "Comprehensive management information reports for strategic insights", icon: BarChart3 },
              { title: "GST Management", desc: "Automated invoice processing and input tax credit reconciliation", icon: Calculator },
              { title: "Audit Support", desc: "Audit-ready documentation and expert assistance during reviews", icon: Shield },
              { title: "Compliance Tracking", desc: "Regular monitoring of regulatory requirements and deadlines", icon: Clock }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl group"
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
                <service.icon 
                  className="w-12 h-12 mb-4 transition-colors duration-300 group-hover:scale-110" 
                  style={{ color: '#b02d33' }} 
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b02d33' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <p className="text-xl text-gray-600">
              Everything you need to know about our accounting services
            </p>
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
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
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
            Streamline Your Accounting With Expert Bookkeeping Services
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let us handle your financial records while you focus on growing your business
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
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}