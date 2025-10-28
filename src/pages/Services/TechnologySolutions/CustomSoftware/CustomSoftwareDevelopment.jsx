import React from 'react';
import { ArrowRight, Search, Layers, Code, Link2, Cloud, CheckCircle, Wrench, Target, Users, Zap, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftwareDevelopment = () => {
  const offerings = [
    {
      icon: Search,
      title: "Requirement Analysis & Consulting",
      description: "We begin by deeply understanding your business model, workflow, and pain points. Our team collaborates with your stakeholders to identify process gaps and define precise software requirements that solve real problems."
    },
    {
      icon: Layers,
      title: "Software Architecture & Design",
      description: "Our architects design high-performance and scalable solutions using proven design principles. We focus on flexibility, maintainability, and seamless integration with your existing systems."
    },
    {
      icon: Code,
      title: "Custom Application Development",
      description: "From web-based platforms to standalone desktop or enterprise-grade applications, we build custom software tailored to your exact business logic and operational needs — using modern frameworks, APIs, and secure architectures."
    },
    {
      icon: Link2,
      title: "API Integration & Automation",
      description: "We enable efficient data exchange between systems by building or integrating RESTful APIs, third-party tools, and automation flows — reducing manual work and ensuring data consistency."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description: "We deliver cloud-ready or fully hosted software with scalability, data security, and performance monitoring. Whether you prefer AWS, Azure, or Google Cloud, we design deployment strategies aligned with your IT policies."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Testing",
      description: "Every project undergoes rigorous functional, performance, and security testing. Our QA engineers ensure your software runs flawlessly across platforms and use cases before deployment."
    },
    {
      icon: Wrench,
      title: "Maintenance & Continuous Support",
      description: "We offer ongoing updates, bug fixes, performance monitoring, and feature enhancements to keep your software modern, reliable, and future-ready."
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Every line of code is written to solve your unique business challenge."
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description: "Quick iterations, transparent process, and consistent communication."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced full-stack developers, architects, and QA engineers."
    },
    {
      icon: Award,
      title: "Technology Excellence",
      description: "Expertise across modern frameworks, databases, and cloud infrastructure."
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      description: "We focus on sustainable growth and evolving your systems over time."
    }
  ];

  const relatedServices = [
    {
      title: "Enterprise Software Solutions",
      description: "Comprehensive enterprise-level software systems for large organizations.",
      link: "/services/technology-solutions/custom-software/enterprise-software-solutions"
    },
    {
      title: "CRM Software Development",
      description: "Custom CRM solutions to manage customer relationships effectively.",
      link: "/services/technology-solutions/custom-software/crm-software-development"
    },
    {
      title: "ERP Software Implementation",
      description: "Integrated ERP systems for streamlined business operations.",
      link: "/services/technology-solutions/custom-software/erp-software-implementation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Custom Software Development
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Custom Software Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Every business is unique — and so are its challenges. Our Custom Software Development services are designed to build solutions that perfectly align with your business goals, operations, and customer experiences. We develop software applications that are scalable, secure, and adaptable to evolving business needs, using modern technologies and agile methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">What We Offer</h2>
            <h3 className="text-4xl font-bold text-slate-900">Key Offerings</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                    <offering.icon className="text-blue-900" size={26} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                      {offering.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Advantages</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Choose Us</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                  <item.icon className="text-blue-900" size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Explore More</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Related Solutions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              If you're exploring enterprise-level integrations, you might also be interested in our related services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Link to={service.link} key={index}>
                              <div 
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-blue-900 font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                  Learn More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-200" />
                </span>
              </div>
              </Link>
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
            Let's build software that transforms your business
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Talk to our team today to discuss your project scope, technology options, and implementation roadmap.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;