import React, { useState } from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: Target,
      title: "One-stop business solutions",
      description: "Tax, software, digital, and consultancy expertise."
    },
    {
      id: 2,
      icon: Award,
      title: "Transparent processes",
      description: "Reliable timelines and clear pricing."
    },
    {
      id: 3,
      icon: Users,
      title: "Trusted professionals",
      description: "Industry-certified experts driving results."
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Innovation for growth",
      description: "Modern tools and creative ideas for client success."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.7), rgba(176, 45, 51, 0.7)), url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Your Partner for Finance,<br />Technology & Growth
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#b02d33' }}>
              Overview
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Amool Enterprises empowers startups, SMEs, and enterprises with integrated finance, technology, digital marketing, and consultancy services for faster business growth and compliance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Established in 2016, Amool Enterprises delivers complete solutions for financial management, technology implementation, business growth, and strategic hiring—all tailored to help businesses succeed online and offline. Our multi-disciplinary team unifies finance, tech, marketing, and HR strategies under one roof, making us a preferred corporate partner for companies across industries.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" 
              alt="Team collaboration"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer"
                  style={{
                    transform: hoveredCard === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === feature.id ? '0 12px 24px rgba(176, 45, 51, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ 
                      backgroundColor: hoveredCard === feature.id ? '#eb6126' : '#b02d33',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#b02d33' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-xl overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600"
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#eb6126' }}
                >
                  <span className="text-white text-3xl font-bold">10+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#b02d33' }}>
              Our Mission
            </h2>
            <div 
              className="p-8 md:p-12 rounded-lg shadow-lg"
              style={{ backgroundColor: '#fff5f2' }}
            >
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                To help clients achieve compliance, efficiency, and sustainable growth with integrated solutions in finance, technology, marketing, and consultancy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Vision
            </h2>
            <div 
              className="p-8 md:p-12 rounded-lg shadow-lg bg-white"
            >
              <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#b02d33' }}>
                To be India's most trusted partner for business solutions—empowering measurable progress for every client.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Core Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eb6126';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02d33';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                1
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#b02d33' }}>
                Integrity
              </h3>
              <p className="text-gray-600">
                Building trust through honest and ethical practices in every interaction
              </p>
            </div>

            <div className="text-center group">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eb6126';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02d33';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                2
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#b02d33' }}>
                Innovation
              </h3>
              <p className="text-gray-600">
                Embracing cutting-edge solutions to drive business transformation
              </p>
            </div>

            <div className="text-center group">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eb6126';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02d33';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                3
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#b02d33' }}>
                Commitment to Client Success
              </h3>
              <p className="text-gray-600">
                Your success is our priority - we go above and beyond
              </p>
            </div>

            <div className="text-center group">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl font-bold transition-all duration-300"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eb6126';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b02d33';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                4
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#b02d33' }}>
                Adaptability
              </h3>
              <p className="text-gray-600">
                Staying agile and responsive to evolving market needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Let's discuss how we can help you achieve your business goals
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg text-white font-medium text-lg transition-colors"
            style={{ backgroundColor: '#eb6126' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d55520'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#eb6126'}
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}