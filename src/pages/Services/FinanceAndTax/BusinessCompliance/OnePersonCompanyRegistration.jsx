
import React, { useState } from 'react';
import { User, FileText, ShieldCheck, Bell, CheckCircle, Rocket, FilePlus, Landmark } from 'lucide-react';

export default function OnePersonCompanyRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: "Seamless Online Process",
      description: "From application to approval, we manage the entire OPC registration process online for a hassle-free experience."
    },
    {
      id: 2,
      icon: FileText,
      title: "Tailored MOA/AOA Drafting",
      description: "We draft your Memorandum and Articles of Association to ensure governance clarity and compliance."
    },
    {
      id: 3,
      icon: Landmark,
      title: "Post-Registration Services",
      description: "Our support continues after registration with assistance for GST, TAN, and other necessary registrations."
    },
    {
      id: 4,
      icon: Bell,
      title: "Timely Renewal & Compliance Reminders",
      description: "Never miss a deadline with our automated reminders for annual renewals and compliance filings."
    }
  ];

  const features = [
    { icon: User, label: "Single Owner", color: "#b02d33" },
    { icon: ShieldCheck, label: "Limited Liability", color: "#eb6126" },
    { icon: Landmark, label: "Separate Legal Entity", color: "#b02d33" },
    { icon: Rocket, label: "Easy to Start", color: "#eb6126" }
  ];

  const faqs = [
    {
      id: 1,
      question: "Who qualifies for OPC registration?",
      answer: "Only a natural person who is an Indian citizen and resident in India can form a One Person Company. A nominee must also be appointed during incorporation."
    },
    {
      id: 2,
      question: "Can an OPC be converted to a Private Limited Company?",
      answer: "Yes, an OPC can voluntarily convert into a Private Limited Company after two years from the date of incorporation, or mandatorily if its paid-up capital exceeds ₹50 lakh or its average annual turnover exceeds ₹2 crore."
    },
    {
      id: 3,
      question: "What are the key disclosure requirements for an OPC?",
      answer: "An OPC must mention ‘(One Person Company)’ in brackets below its name wherever it is printed or affixed. Financial statements must be signed by the one director and filed with the ROC."
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
                <span className="text-white font-semibold text-sm tracking-wide">Start Your Solo Venture</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                One Person Company (OPC) Registration
              </h1>

              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">
                Incorporate your OPC easily with our full registration and compliance support, in line with the latest MCA guidelines.
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="OPC Registration"
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
              Empower Your Solo Enterprise
            </h2>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4" style={{ borderTopColor: '#b02d33' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              An OPC provides a solo entrepreneur the benefits of limited liability and a separate legal entity status, combining the advantages of a company with the freedom of a sole proprietorship.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We assist with the entire OPC registration process, including DIN allotment, MOA/AOA drafting, and MCA filing as per 2025 regulatory guidelines, enabling single owners to build credible, compliant businesses with ease.
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
              Advantages of an OPC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A corporate structure designed for the individual entrepreneur.
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
              Our OPC Registration Process
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "DIN & DSC Allotment", desc: "Securing the Director Identification Number and Digital Signature.", icon: User },
              { title: "MOA/AOA Drafting", desc: "Drafting the charter documents that define the company’s scope and rules.", icon: FileText },
              { title: "MCA Filing", desc: "Submitting all required forms and documents to the Ministry of Corporate Affairs.", icon: FilePlus },
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
            Kickstart Your OPC Today
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get expert registration assistance and launch your solo venture with confidence.
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
            Start Your OPC Registration
          </button>
        </div>
      </div>
    </div>
  );
}
