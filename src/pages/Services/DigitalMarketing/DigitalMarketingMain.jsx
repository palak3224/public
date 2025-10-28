import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Share2, Target, FileText, TrendingUp, Users, BarChart3, Zap } from 'lucide-react';

const DigitalMarketingMain = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Rank higher on Google with technical SEO, keyword research, and content optimization strategies.",
      link: "/services/digital-marketing/seo",
      color: "from-sky-400 to-cyan-500"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build engaged communities and drive brand loyalty across Facebook, Instagram, LinkedIn, and more.",
      link: "/services/digital-marketing/social-media",
      color: "from-blue-400 to-sky-500"
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Maximize ROI with Google Ads, Facebook Ads, and targeted campaigns that convert.",
      link: "/services/digital-marketing/paid-advertising",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Engage your audience with compelling blogs, videos, and content that tells your brand story.",
      link: "/services/digital-marketing/content-marketing",
      color: "from-sky-500 to-blue-400"
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: "Data-driven strategies for measurable growth" },
    { icon: Users, text: "Targeted campaigns that reach your ideal audience" },
    { icon: BarChart3, text: "Real-time analytics and transparent reporting" },
    { icon: Zap, text: "Agile optimization for maximum performance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        {/* Animated Analytics Visuals */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Digital Marketing & Growth Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Grow Your Brand Online
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Amool Enterprises helps businesses grow through data-driven digital marketing. We blend SEO, social media, paid campaigns, and content strategies to maximize visibility, traffic, and conversions.
          </p>
          <button className="bg-white text-sky-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition-all duration-300 shadow-2xl hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3">
            Boost My Brand Online
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Performance-Driven Marketing That Delivers Results
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            In today's digital landscape, visibility is everything. Our comprehensive marketing solutions combine strategic planning, creative execution, and continuous optimization to help you reach the right audience, at the right time, with the right message.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Solutions</h2>
            <h3 className="text-4xl font-bold text-slate-800">Marketing Services We Offer</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="bg-white rounded-2xl p-10 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 h-full group cursor-pointer"
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === index ? '0 20px 40px rgba(14, 165, 233, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sky-600 font-semibold group-hover:gap-3 transition-all duration-200">
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section with Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-slate-800 mb-6">
                Marketing Excellence Backed by Data
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                We don't believe in one-size-fits-all solutions. Every campaign is tailored to your business goals, target audience, and industry dynamics. Our team combines creativity with analytics to ensure every marketing dollar works harder for you.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-sky-600 mb-2">150+</div>
                  <div className="text-slate-600 font-medium">Successful Campaigns</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-sky-600 mb-2">3x</div>
                  <div className="text-slate-600 font-medium">Average ROI Increase</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Digital Marketing Analytics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-800">What Sets Us Apart</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Accelerate Your Online Growth?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create a customized digital marketing strategy that drives traffic, generates leads, and grows your revenue.
              </p>
              <Link to="/services/digital-marketing/case-studies">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Get Free Marketing Audit
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default DigitalMarketingMain;