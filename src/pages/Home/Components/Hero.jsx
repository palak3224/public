import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Tax & Finance Solutions",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=800&fit=crop&q=80",
      alt: "Professional tax planning and financial management services"
    },
    {
      title: "Technology & Software Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
      alt: "Custom software development and technology solutions"
    },
    {
      title: "Digital Marketing Excellence",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=800&fit=crop&q=80",
      alt: "Strategic digital marketing and online growth services"
    },
    {
      title: "Business Consultancy & HR",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=80",
      alt: "Expert business consulting and human resources management"
    },
    {
      title: "GST & Compliance Services",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&q=80",
      alt: "Complete GST filing and regulatory compliance solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #fff5f3 0%, #ffe8e0 50%, #ffd5cc 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8" style={{ minHeight: '500px' }}>
            <h1 className="text-6xl font-bold leading-tight">
              <span style={{ color: '#b02d33' }}>Simplifying Your </span>
              <span style={{ color: '#eb6126' }}>Finances, Technology, </span>
              <span style={{ color: '#b02d33' }}>and Growth</span>
            </h1>
            
            <p className="text-2xl text-gray-700 leading-relaxed">
              Comprehensive solutions for individuals and businesses. Integrated services under one roof.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="px-8 py-4 text-white font-semibold rounded-lg text-lg"
                style={{ backgroundColor: '#b02d33' }}
              >
                Schedule a Free Consultation
              </button>
              <button 
                className="px-8 py-4 font-semibold rounded-lg text-lg border-2"
                style={{ 
                  color: '#eb6126',
                  borderColor: '#eb6126'
                }}
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative">
            <div 
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ minHeight: '500px' }}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover pointer-events-none"
                style={{ minHeight: '500px' }}
              />
              {/* <div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none"
                style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                }}
              >
                <h3 className="text-2xl font-bold">
                  {slides[currentSlide].title}
                </h3>
              </div> */}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border-2 bg-white"
                style={{ borderColor: '#b02d33', color: '#b02d33' }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: currentSlide === index ? '#b02d33' : '#e5e7eb'
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
      </div>
    </div>
  );
}