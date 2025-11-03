import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Our ERP implementation by Amool transformed operations by 40% efficiency.',
    company: 'TechVentures India Pvt Ltd',
    logo: 'https://placehold.co/100x40?text=TechVentures',
    rating: 5
  },
  {
    quote: 'Digital marketing campaigns increased traffic 3x within two months.',
    company: 'GreenAura Organics',
    logo: 'https://placehold.co/100x40?text=GreenAura',
    rating: 5
  },
  {
    quote: 'Consistent support and clear communication made software delivery seamless.',
    company: 'FinEdge Services',
    logo: 'https://placehold.co/100x40?text=FinEdge',
    rating: 5
  }
];

const caseStudies = [
  {
    title: 'E-commerce SEO Success',
    description: '200% increase in organic traffic for a leading e-commerce brand.',
    link: '/services/digital-marketing/case-studies'
  },
  {
    title: 'Social Media Campaign ROI',
    description: '5x return on ad spend for a local business.',
    link: '/services/digital-marketing/case-studies'
  },
  {
    title: 'B2B Content Marketing Growth',
    description: 'From 0 to 100,000 monthly visitors in one year.',
    link: '/services/digital-marketing/case-studies'
  }
];

const featuredLogos = [
  { name: 'Forbes', logo: 'https://placehold.co/120x50?text=Forbes' },
  { name: 'TechCrunch', logo: 'https://placehold.co/120x50?text=TechCrunch' },
  { name: 'Inc.', logo: 'https://placehold.co/120x50?text=Inc.' },
  { name: 'YourStory', logo: 'https://placehold.co/120x50?text=YourStory' },
  { name: 'The Economic Times', logo: 'https://placehold.co/120x50?text=The+Economic+Times' },
];

const AnimatedStat = ({ finalValue, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = finalValue;
          if (start === end) return;

          let duration = 2000;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [finalValue]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold" style={{ color: '#b02d33' }}>{count}+</p>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.7), rgba(176, 45, 51, 0.7)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Success Stories that Define Our Growth
          </h1>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Amool Enterprises has empowered hundreds of clients through technology, marketing, and consulting solutions designed for measurable growth. Here’s what they have to say about working with us.
        </p>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedStat finalValue={500} label="Clients Served" />
            <AnimatedStat finalValue={1200} label="Projects Completed" />
            <AnimatedStat finalValue={8} label="Years of Experience" />
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center relative">
                <Quote className="absolute top-4 left-4 w-12 h-12 text-gray-200" />
                <div className="flex justify-center my-4">
                  <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="h-10" />
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-semibold" style={{ color: '#b02d33' }}>- {testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Featured In Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            As Featured In
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {featuredLogos.map((item, index) => (
              <img key={index} src={item.logo} alt={item.name} className="h-10" />
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Highlights */}
      <div className="py-16" style={{ backgroundColor: '#fff5f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#b02d33' }}>
            Case Study Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#b02d33' }}>{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link to={study.link} className="font-semibold inline-flex items-center" style={{ color: '#eb6126' }}>
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services/digital-marketing/case-studies">
              <button 
                className="px-8 py-3 rounded-lg text-white font-medium text-lg transition-colors"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#d55520'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#b02d33'}
              >
                Read Full Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;