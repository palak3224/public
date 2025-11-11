import React, { useState, useEffect } from 'react';
import { Users, Award, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. Anmool Singhaniya",
      position: "Founder & CEO",
      description: "Steering the company's vision and integrated solution strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 2,
      name: "Mrs. Rohini Singhaniya",
      position: "Head of HR",
      description: "Leading talent acquisition, culture, and compliance for business agility.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      id: 3,
      name: "Mr. Badal",
      position: "Administration",
      description: "Managing operational infrastructure and process efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      id: 4,
      name: "Mrs. Yamini Paridhi",
      position: "Operations",
      description: "Overseeing workflow optimization and customer delivery.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
    },
    {
      id: 5,
      name: "Ms. Arohi Singhaniya",
      position: "Business Strategy & Sales",
      description: "Driving new business, partnerships, and client engagement.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    }
  ];

  const domainStrengths = [
    {
      title: "Regulatory & Tax Planning",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
    },
    {
      title: "Web & Software Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
    },
    {
      title: "SEO, Social Media, and Content Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
    },
    {
      title: "Recruitment, HR Policy, and Payroll",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
    },
    {
      title: "Sales Enablement and Business Growth",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      text: "One-stop expert team—no third-party dependencies."
    },
    {
      icon: Award,
      text: "Fast, transparent, and compliant project delivery."
    },
    {
      icon: Target,
      text: "Experience with startups, SMEs, and leading Indian enterprises."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domainStrengths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <div 
        className="relative py-20 md:py-28 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.75), rgba(176, 45, 51, 0.75)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the Team at Amool Enterprises
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-95 max-w-4xl mx-auto leading-relaxed">
            At Amool Enterprises, our leadership blends experience across finance, technology, HR, business strategy, and operational excellence. United by a commitment to innovation and client growth, our team ensures you get end-to-end solutions—seamless, secure, and scalable.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#b02d33' }}>
            Expert Services, Delivered by Specialists
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-12"
            style={{ backgroundColor: '#eb6126' }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  transform: hoveredCard === member.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === member.id 
                    ? '0 20px 40px rgba(176, 45, 51, 0.2)' 
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredCard === member.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-2"
                    style={{ backgroundColor: hoveredCard === member.id ? '#eb6126' : '#b02d33' }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>
                    {member.name}
                  </h3>
                  <p 
                    className="font-semibold mb-3"
                    style={{ color: '#eb6126' }}
                  >
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Domain Strengths Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Our Team's Domain Strengths
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {domainStrengths.map((domain, index) => (
                  <li 
                    key={index}
                    className="flex items-start transition-all duration-300"
                    style={{
                      transform: currentDomainIndex === index ? 'scale(1.05)' : 'scale(1)',
                      opacity: currentDomainIndex === index ? 1 : 0.6
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                      style={{ 
                        backgroundColor: currentDomainIndex === index ? '#eb6126' : '#b02d33',
                        transition: 'all 0.3s'
                      }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span 
                      className="text-lg font-semibold pt-2"
                      style={{ 
                        color: currentDomainIndex === index ? '#b02d33' : '#6b7280'
                      }}
                    >
                      {domain.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-lg h-96 rounded-lg overflow-hidden shadow-xl">
                {domainStrengths.map((domain, index) => (
                  <img
                    key={index}
                    src={domain.image}
                    alt={domain.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{
                      opacity: currentDomainIndex === index ? 1 : 0
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Clients Choose Us Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Why Clients Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl"
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
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Connect with our specialists and discover how we can help your business thrive
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg text-white font-medium text-lg transition-colors"
            style={{ backgroundColor: '#eb6126' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d55520'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#eb6126'}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}