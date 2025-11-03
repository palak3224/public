
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, UserPlus, TrendingUp, BarChart3, Zap } from 'lucide-react';

const ConsultancyAndHRMain = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Briefcase,
      title: "Business Consultancy",
      description: "Strategic guidance to help your business grow, from startup advisory to financial projections.",
      link: "/services/consultancy-hr/business-consultancy",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Comprehensive HR solutions, including policy formulation and payroll management.",
      link: "/services/consultancy-hr/hr-management",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: UserPlus,
      title: "Recruitment & Staffing",
      description: "Finding the right talent for your team, from temporary staffing to permanent placements.",
      link: "/services/consultancy-hr/recruitment-staffing",
      color: "from-violet-400 to-purple-500"
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: "Strategic insights for sustainable growth" },
    { icon: Users, text: "Building a strong and compliant workforce" },
    { icon: BarChart3, text: "Data-driven decisions for better outcomes" },
    { icon: Zap, text: "Streamlined processes for maximum efficiency" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-500 py-32 px-6 overflow-hidden">
        {/* Animated Visuals */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Consultancy & HR Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Strategic Solutions for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Amool Enterprises provides expert business consultancy and HR solutions to drive growth, efficiency, and compliance in your organization.
          </p>
          <Link to="/contact">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3">
              Get Expert Advice
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Your Partner in Growth and Human Capital
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We offer a holistic approach to business challenges, combining strategic consultancy with robust HR management to ensure your business is built on a solid foundation for success.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-800">Consultancy & HR Services We Offer</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="bg-white rounded-2xl p-10 border-2 border-slate-100 hover:border-purple-300 transition-all duration-300 h-full group cursor-pointer"
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === index ? '0 20px 40px rgba(128, 90, 213, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all duration-200">
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
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-slate-800 mb-6">
                Expertise That Drives Results
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Our team of experienced consultants and HR professionals provides tailored solutions to meet the unique needs of your business. We are committed to your success.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-slate-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-slate-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Consultancy and HR"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-800">What Sets Us Apart</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our consultancy and HR services can help you achieve your business goals.
              </p>
              <Link to="/contact">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Get a Free Consultation
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

export default ConsultancyAndHRMain;
