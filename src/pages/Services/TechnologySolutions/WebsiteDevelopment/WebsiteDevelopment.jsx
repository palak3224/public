import React from 'react';
import { ArrowRight, Monitor, ShoppingCart, Settings, Zap, Search, Shield, Smartphone, Globe, Clock, CheckCircle, Users, TrendingUp, Heart, Layout, CreditCard, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: Monitor,
      title: "Corporate Websites",
      description: "Professional, brand-aligned websites that establish credibility and drive business growth. Our corporate websites are designed to engage visitors, communicate your value proposition, and generate qualified leads through intuitive user experiences and compelling content architecture.",
      features: ["Responsive design", "SEO-optimized structure", "Content management system", "Lead capture forms"],
      link: "/services/technology-solutions/website-development/corporate-website-design"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "High-converting online stores built to scale with your business. We develop secure, user-friendly e-commerce solutions with seamless payment integration, inventory management, and mobile-optimized shopping experiences that drive sales and customer loyalty.",
      features: ["Payment gateway integration", "Inventory management", "Mobile shopping optimized", "Analytics dashboard"],
      link: "/services/technology-solutions/website-development/e-commerce-platforms"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Comprehensive website care to ensure optimal performance, security, and reliability. Our maintenance plans include regular updates, security monitoring, performance optimization, and technical support to keep your digital presence running smoothly.",
      features: ["Security updates", "Performance optimization", "Regular backups", "Technical support"],
      link: "/services/technology-solutions/website-development/website-maintenance-and-support"
    }
  ];

  const benefits = [
    {
      icon: Search,
      title: "SEO-Optimized",
      description: "Built with search engine best practices to maximize visibility and organic traffic."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast loading times and smooth user interactions across all devices."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and reliable hosting infrastructure."
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Responsive designs that provide exceptional experiences on any screen size."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Websites optimized for international audiences and multiple languages."
    },
    {
      icon: Clock,
      title: "24/7 Uptime",
      description: "Robust hosting solutions ensuring your website is always accessible."
    }
  ];

  const childPages = [
    {
      icon: Layout,
      title: "Corporate Website Design",
      description: "Professional websites that build trust and drive business growth",
      link: "/services/technology-solutions/website-development/corporate-website-design",
      features: ["Brand-aligned design", "Lead generation", "Content management", "SEO optimization"]
    },
    {
      icon: CreditCard,
      title: "E-commerce Website Development",
      description: "Online stores that convert visitors into loyal customers",
      link: "/services/technology-solutions/website-development/ecommerce-website-development",
      features: ["Payment integration", "Inventory management", "Mobile commerce", "Analytics"]
    },
    {
      icon: Headphones,
      title: "Website Maintenance & Support",
      description: "Comprehensive care to keep your website running flawlessly",
      link: "/services/technology-solutions/website-development/website-maintenance-and-support",
      features: ["Security updates", "Performance optimization", "Regular backups", "Technical support"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competitive landscape to create a comprehensive website strategy."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create pixel-perfect mockups and interactive prototypes that align with your brand identity."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Expert developers bring designs to life with clean code, followed by rigorous testing across all devices and browsers."
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We handle the deployment process and provide ongoing optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40"></div>
        {/* Visual Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-blue-900 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-blue-900 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-40 right-40 w-48 h-48 border-2 border-blue-900 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Web Development
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Website Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              As a full-service web agency, Amool builds high-performance, SEO-friendly websites that engage, convert, and represent your brand identity online — creating digital experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Website Showcase Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Work</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Designed to Convert, Built to Perform</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Modern websites that combine stunning aesthetics with cutting-edge functionality
            </p>
          </div>

          {/* Website Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
              alt="Modern Website Design"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">40%+</div>
              <div className="text-slate-600 font-medium">Avg. Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2.1s</div>
              <div className="text-slate-600 font-medium">Avg. Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      {/* <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive Web Solutions</h3>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = service.link}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <service.icon className="text-blue-900" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
                        {service.title}
                      </h4>
                      <ArrowRight className="text-blue-900 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-blue-900 flex-shrink-0" size={18} />
                          <span className="text-slate-700 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Child Pages Navigation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Explore Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900">Specialized Web Solutions</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {childPages.map((page, index) => (

              <Link to={page.link}  key={index}>
              
              <div 
    
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer bg-gradient-to-b from-slate-50 to-white"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                    <page.icon className="text-blue-900" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                    {page.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    {page.description}
                  </p>
                  <div className="space-y-2 w-full">
                    {page.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="text-blue-900 flex-shrink-0" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-blue-900 font-semibold text-sm">
                    Learn more
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">How We Build Exceptional Websites</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="text-4xl font-bold text-blue-900 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {process.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900">Built for Performance & Growth</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                    <benefit.icon className="text-blue-900" size={26} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and create a website that truly represents your brand while driving measurable business results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get a Free Site Consultation
              <ArrowRight size={20} />
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              View Portfolio
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;