
import React, { useState } from 'react';
import { Rocket, FileText, ShieldCheck, Briefcase, CheckCircle, Users, FilePlus, Scale } from 'lucide-react';

export default function LLPRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: "Quick and Error-Free Online Registration",
      description: "Our streamlined digital process ensures your LLP is registered quickly and without errors, fully online."
    },
    {
      id: 2,
      icon: FileText,
      title: "Customized LLP Agreement Drafting",
      description: "We draft a comprehensive LLP agreement tailored to your business needs and partner roles."
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Post-Registration Statutory Compliance",
      description: "Receive full support for post-registration compliance, including PAN, TAN, and bank account setup."
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Assistance with Tax Registrations",
      description: "We help you with necessary tax registrations like GST to ensure your new LLP is ready for business."
    }
  ];

  const features = [
    { icon: Users, label: "Limited Liability", color: "#b02d33" },
    { icon: FilePlus, label: "Easy to Form", color: "#eb6126" },
    { icon: Scale, label: "Less Compliance", color: "#b02d33" },
    { icon: ShieldCheck, label: "Separate Legal Entity", color: "#eb6126" }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the minimum number of partners for an LLP?",
      answer: "An LLP must have a minimum of two partners. There is no maximum limit on the number of partners. At least two partners must be designated partners, with at least one being a resident of India."
    },
    {
      id: 2,
      question: "How is an LLP different from a Private Limited Company?",
      answer: "An LLP offers the limited liability of a company but with the flexibility of a partnership. Compliance requirements for an LLP are significantly lower than for a Pvt Ltd company, making it easier and cheaper to manage."
    },
    {
      id: 3,
      question: "What are the ongoing LLP compliance requirements?",
      answer: "LLPs must file an Annual Return (Form 11) and a Statement of Account & Solvency (Form 8) with the MCA each financial year. Income tax returns must also be filed annually."
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
                <span className="text-white font-semibold text-sm tracking-wide">Fast & Compliant Setup</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                LLP Registration Services
              </h1>

              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">
                Start your Limited Liability Partnership with professional support. Efficient online LLP registration and compliance advisory.
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
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="LLP Registration"
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
              The Smart Choice for Modern Businesses
            </h2>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4" style={{ borderTopColor: '#b02d33' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Limited Liability Partnership (LLP) offers the flexibility of a partnership with the significant advantage of limited liability, previously only available to private limited companies. It's an ideal structure for small to medium-sized businesses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We handle the entire LLP incorporation process under the Indian LLP Act, 2008, from DIN/DSC registration to document drafting and form submission, ensuring your business is legally compliant with MCA norms in 2025.
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
              Key Benefits of LLP Registration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A flexible and secure business structure for entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
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

      {/* Registration Process Section */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Our Registration Process
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "DIN/DSC Registration", desc: "We handle the application for Director Identification Number and Digital Signature Certificate.", icon: Users },
              { title: "Document Drafting", desc: "Preparation of all necessary legal documents, including the LLP Agreement.", icon: FileText },
              { title: "Form Submission", desc: "Filing of all required forms with the Ministry of Corporate Affairs (MCA).", icon: FilePlus },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl group"
                style={{ borderTop: '4px solid #b02d33' }}
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
            Register Your LLP Hassle-Free
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let our experts guide you through the entire process for a fast and compliant setup.
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
            Register Your LLP Today
          </button>
        </div>
      </div>
    </div>
  );
}
