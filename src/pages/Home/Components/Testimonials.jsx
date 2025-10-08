import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Amool Enterprises transformed our tax compliance process. Their expertise saved us both time and money, allowing us to focus on growing our business.",
      name: "Rajesh Kumar",
      company: "Tech Innovations Pvt Ltd",
      role: "CEO"
    },
    {
      quote: "The website they developed for us is not only beautiful but also performs exceptionally well. Our online presence has increased significantly.",
      name: "Priya Sharma",
      company: "Fashion Forward",
      role: "Founder"
    },
    {
      quote: "Their digital marketing strategies doubled our online visibility within 6 months. The team is professional, responsive, and result-oriented.",
      name: "Amit Patel",
      company: "Green Solutions",
      role: "Marketing Director"
    },
    {
      quote: "Excellent HR consultancy services! They helped us build a strong team and implement efficient processes. Highly recommend their expertise.",
      name: "Neha Gupta",
      company: "Retail Ventures",
      role: "HR Manager"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ backgroundColor: '#f9fafb' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span style={{ color: '#b02d33' }}>What Our </span>
            <span style={{ color: '#eb6126' }}>Clients Say</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#eb6126' }}></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4" style={{ borderColor: '#b02d33' }}>
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eb6126' }}>
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Quote Text */}
            <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Client Info */}
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-1" style={{ color: '#b02d33' }}>
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-lg font-semibold" style={{ color: '#eb6126' }}>
                {testimonials[currentIndex].role}
              </p>
              <p className="text-gray-600">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border-2 bg-white"
            style={{ borderColor: '#b02d33', color: '#b02d33' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: currentIndex === index ? '#b02d33' : '#e5e7eb'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full border-2 bg-white"
            style={{ borderColor: '#eb6126', color: '#eb6126' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}