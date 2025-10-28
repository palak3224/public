import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Globe, Smartphone, Palette, Code, CheckCircle, Users, Shield, Zap, TrendingUp } from 'lucide-react';

const TechnologySolutions = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Scalable, secure, and business-specific software solutions, including enterprise, CRM, and ERP systems.",
      link: "/services/technology-solutions/custom-software",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    },
    {
      title: "Website Development",
      description: "From corporate websites to e-commerce stores and maintenance, we deliver high-performance websites.",
      link: "/services/technology-solutions/website-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      title: "Mobile App Development",
      description: "Native and hybrid mobile apps built for performance, usability, and cross-platform reach.",
      link: "/services/technology-solutions/mobile-app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      title: "UI/UX Design Services",
      description: "Create user experiences that combine functionality, creativity, and intuitive design.",
      link: "/services/technology-solutions/ui-ux-design-services",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      title: "Technology Stack",
      description: "Discover the technologies we use to build reliable, scalable, and future-ready digital products.",
      link: "/services/technology-solutions/tech-stack",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    }
  ];

  const features = [
    { icon: Settings, text: "Custom-built software tailored to your business" },
    { icon: Globe, text: "Modern and scalable web solutions" },
    { icon: Smartphone, text: "Cross-platform mobile app development" },
    { icon: Palette, text: "User-focused UI/UX design" }
  ];

  const whyChooseUs = [
    { icon: Users, text: "Experienced developers across multiple domains and technologies" },
    { icon: Code, text: "Agile and transparent project management" },
    { icon: Shield, text: "Focus on scalability, security, and user satisfaction" },
    { icon: Zap, text: "Continuous support and maintenance post-deployment" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Technology Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Technology & Software Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Empower your business with cutting-edge technology tailored to your goals. From custom software to mobile apps, web development, and UX design — we build digital solutions that drive real results.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get a Free Consultation
                <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-all duration-200 shadow-sm hover:shadow-md">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Overview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">About Us</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Our Technology Solutions division delivers end-to-end digital transformation — from conceptualization to deployment. Whether you need robust software systems, scalable web applications, intuitive mobile experiences, or modern UI/UX — our team ensures innovation, performance, and security at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <feature.icon className="text-blue-900" size={32} />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed px-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">What We Offer</h2>
            <h3 className="text-4xl font-bold text-slate-900">Our Services</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <div 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="h-52 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-blue-900 font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                      Learn More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Advantages</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Technology Solutions?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Partner with a team that prioritizes your success through expertise, transparency, and dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-5 items-start p-7 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                  <item.icon className="text-blue-900" size={26} />
                </div>
                <p className="text-slate-700 pt-3 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
            <TrendingUp className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
          <p className="text-2xl text-blue-50 leading-relaxed font-light max-w-3xl mx-auto">
            Built and deployed ERP system for a retail client that improved inventory accuracy by <span className="font-bold text-white">40%</span> and reduced costs by <span className="font-bold text-white">25%</span>.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ready to innovate your business with modern technology?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can transform your digital presence and drive your business forward.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Schedule a Free Consultation
              <ArrowRight size={20} />
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-all duration-200 shadow-sm hover:shadow-md">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologySolutions;