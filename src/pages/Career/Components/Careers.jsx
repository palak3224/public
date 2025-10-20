import React, { useState } from 'react';
import { Briefcase, Users, BookOpen, Award, Clock, Heart, TrendingUp, Filter } from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const departments = ['All', 'Tech', 'Marketing', 'HR', 'Operations'];

  const benefits = [
    {
      icon: Clock,
      title: "Flexible Hybrid Model",
      description: "Work from office or home based on your comfort and project needs"
    },
    {
      icon: BookOpen,
      title: "Learning Allowances",
      description: "Annual budget for courses, certifications, and professional development"
    },
    {
      icon: Heart,
      title: "Inclusive Culture",
      description: "Diverse, collaborative environment where every voice matters"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career paths with mentorship and regular skill enhancement"
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Tech",
      location: "Indore / Hybrid",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Indore / Hybrid",
      type: "Full-time",
      experience: "1-3 years"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Tech",
      location: "Indore / Remote",
      type: "Full-time",
      experience: "2-5 years"
    },
    {
      id: 4,
      title: "HR Business Partner",
      department: "HR",
      location: "Indore",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      id: 5,
      title: "Operations Manager",
      department: "Operations",
      location: "Indore",
      type: "Full-time",
      experience: "4-6 years"
    },
    {
      id: 6,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "1-2 years"
    },
    {
      id: 7,
      title: "Tax Consultant",
      department: "Operations",
      location: "Indore",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      id: 8,
      title: "React Native Developer",
      department: "Tech",
      location: "Indore / Remote",
      type: "Full-time",
      experience: "2-3 years"
    }
  ];

  const internships = [
    {
      title: "Software Development Intern",
      duration: "3-6 months",
      department: "Tech"
    },
    {
      title: "Digital Marketing Intern",
      duration: "3-6 months",
      department: "Marketing"
    },
    {
      title: "HR Operations Intern",
      duration: "3-4 months",
      department: "HR"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      quote: "At Amool, I've grown from a junior dev to leading projects. The learning culture here is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      name: "Rahul Verma",
      role: "Marketing Lead",
      quote: "The flexibility and trust given to employees makes Amool a truly special place to work.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.7), rgba(176, 45, 51, 0.7)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Build Your Future with<br />Amool Enterprises
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            We believe innovation begins with people. Join a team that values curiosity, collaboration, and growth.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're a developer, strategist, or designer, Amool offers opportunities to shape tomorrow's digital experiences.
          </p>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Voices from Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: '#b02d33' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Why Work with Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300"
                style={{
                  transform: hoveredCard === `benefit-${index}` ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === `benefit-${index}` ? '0 12px 24px rgba(176, 45, 51, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(`benefit-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ 
                    backgroundColor: hoveredCard === `benefit-${index}` ? '#eb6126' : '#b02d33',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b02d33' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="py-16 md:py-24" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#b02d33' }}>
            Current Openings
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Explore opportunities across departments
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter className="w-6 h-6 self-center" style={{ color: '#b02d33' }} />
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300"
                style={{
                  backgroundColor: selectedDepartment === dept ? '#b02d33' : 'white',
                  color: selectedDepartment === dept ? 'white' : '#b02d33',
                  border: `2px solid ${selectedDepartment === dept ? '#b02d33' : '#e5e7eb'}`
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  transform: hoveredCard === `job-${job.id}` ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === `job-${job.id}` ? '0 12px 24px rgba(176, 45, 51, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(`job-${job.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="w-10 h-10" style={{ color: '#b02d33' }} />
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: '#eb6126' }}
                  >
                    {job.department}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b02d33' }}>
                  {job.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📍 {job.location}</p>
                  <p>⏰ {job.type}</p>
                  <p>💼 {job.experience}</p>
                </div>
                <button 
                  className="w-full mt-6 py-2 rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: hoveredCard === `job-${job.id}` ? '#eb6126' : '#b02d33',
                    color: 'white'
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Internship Programs */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#b02d33' }}>
            Internship Programs
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Short-term training opportunities for students and new graduates to kickstart their careers
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md text-center transition-all duration-300"
                style={{
                  transform: hoveredCard === `intern-${index}` ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === `intern-${index}` ? '0 12px 24px rgba(176, 45, 51, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                  borderTop: `4px solid ${hoveredCard === `intern-${index}` ? '#eb6126' : '#b02d33'}`
                }}
                onMouseEnter={() => setHoveredCard(`intern-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#b02d33' }}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#b02d33' }}>
                  {internship.title}
                </h3>
                <p className="text-gray-600 mb-2">{internship.duration}</p>
                <span 
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: '#fff5f2',
                    color: '#b02d33'
                  }}
                >
                  {internship.department}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Join our team and be part of something extraordinary
          </p>
          <button 
            className="px-8 py-3 rounded-lg text-white font-medium text-lg transition-all duration-300"
            style={{ backgroundColor: '#eb6126' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#d55520';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#eb6126';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Submit Your Application
          </button>
          <p className="text-white mt-4 opacity-75">
            Or email your resume to <span className="font-semibold">careers@amoolenterprises.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}