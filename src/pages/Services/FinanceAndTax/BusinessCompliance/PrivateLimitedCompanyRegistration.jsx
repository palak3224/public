
import React, { useState } from 'react';
import { Building, FileText, ShieldCheck, Users, CheckCircle, Laptop, Briefcase, FilePlus } from 'lucide-react';

export default function PrivateLimitedCompanyRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: Laptop,
      title: "End-to-End Online Company Registration",
      description: "A complete digital process from DSC/DIN issuance to final MCA approval, managed by our experts."
    },
    {
      id: 2,
      icon: FileText,
      title: "Legal Document Drafting",
      description: "We draft your MOA/AOA and other legal documents to be fully compliant with the Companies Act, 2013."
    },
    {
      id: 3,
      icon: Users,
      title: "Expert Advice on Structuring",
      description: "Receive expert guidance on director qualifications, share capital, and other structuring requirements."
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Post-Registration Compliance Support",
      description: "We assist with essential post-registration steps like GST, PAN, and bank account setup."
    }
  ];

  const heroFeatures = [
    { icon: ShieldCheck, label: "Liability Protection", color: "#b02d33" },
    { icon: Building, label: "Separate Legal Entity", color: "#eb6126" },
    { icon: Briefcase, label: "Higher Credibility", color: "#b02d33" },
    { icon: Users, label: "Easy Funding", color: "#eb6126" }
  ];

  const faqs = [
    {
      id: 1,
      question: "How long does company registration take?",
      answer: "With our streamlined digital process, a Private Limited Company can typically be registered within 7-10 working days, provided all documents are in order and there are no delays from the MCA."
    },
    {
      id: 2,
      question: "What documents are needed for registration?",
      answer: "You will need PAN cards, identity proofs (like Aadhaar or Voter ID), and address proofs for all directors and shareholders. You will also need proof of the registered office address (like a utility bill or rent agreement)."
    },
    {
      id: 3,
      question: "What are the ongoing compliance mandates for a Pvt Ltd company?",
      answer: "A Pvt Ltd company must conduct board meetings, maintain statutory registers, file annual returns with the ROC (AOC-4, MGT-7), and file annual income tax returns. We offer packages to manage all these compliances."
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
                <span className="text-white font-semibold text-sm tracking-wide">Quick & Compliant Setup 2025</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Private Limited Company Registration
              </h1>

              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">
                Register your Pvt Ltd company with expert support. Complete digital process, document preparation, and MCA approval.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {heroFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-opacity-20 cursor-pointer"
                  >
                    <feature.icon 
                      className="w-6 h-6 flex-shrink-0" 
                      style={{ color: 'white' }}
                    />
                    <span className="text-white font-medium text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Pvt Ltd Company Registration"
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
                <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#b02d33' }}>Service Overview</span>
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#eb6126' }}></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Build a Credible & Scalable Business
            </h2>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4" style={{ borderTopColor: '#b02d33' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Starting a Private Limited Company provides liability protection, increases your business's credibility, and makes it easier to raise funds. Our streamlined process covers everything from DSC and DIN issuance to MOA/AOA drafting per the Companies Act 2013 updates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We handle all MCA e-filing with compliance checks and support post-registration needs like GST and PAN registrations, ensuring a quick and digital approval process for 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#fff5f2' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#b02d33' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#eb6126' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive service for a seamless registration experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-start space-x-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6"
                    style={{ 
                      backgroundColor: hoveredFeature === feature.id ? '#eb6126' : '#b02d33'
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" 
                        style={{ color: hoveredFeature === feature.id ? '#eb6126' : '#b02d33' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
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

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "DSC & DIN", desc: "Securing Digital Signature and Director ID.", icon: Users },
              { title: "MOA/AOA Drafting", desc: "Drafting the charter documents.", icon: FileText },
              { title: "MCA Filing", desc: "Filing forms with the Ministry of Corporate Affairs.", icon: FilePlus },
              { title: "Post-Registration", desc: "Support for PAN, TAN, and GST registration.", icon: Briefcase },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-red-100">
                    <service.icon 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: '#b02d33' }} 
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b02d33' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
            Start Your Company Registration Easily With Us
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let our experts handle the complexities of company registration so you can focus on your business vision.
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
            Start Your Company Registration
          </button>
        </div>
      </div>
    </div>
  );
}
