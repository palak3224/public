import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Holistic Approach",
      description: "All your business needs, managed centrally."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certified Experts",
      description: "Team of CAs, CFAs, Developers, and Marketers."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Client-Centric Process",
      description: "We listen, we strategize, we deliver."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Proven Track Record",
      description: "10+ years of experience, 500+ satisfied clients."
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#b02d33' }}>
            Why Choose Amool Enterprises?
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#eb6126' }}></div>
          <p className="text-2xl text-gray-700">
            Expertise You Can Rely On
          </p>
        </div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-white rounded-lg shadow-md"
            >
              <div 
                className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#b02d33' : '#eb6126'
                }}
              >
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: index % 2 === 0 ? '#b02d33' : '#eb6126' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}