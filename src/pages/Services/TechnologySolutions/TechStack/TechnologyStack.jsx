import React from 'react';
import { ArrowRight, Cpu, Database, Cloud, Brain, Zap, Server, Layout, CheckCircle, Shield, Globe, Rocket } from 'lucide-react';

const TechnologySolutions = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: Layout,
      description: "Modern frameworks for building responsive, interactive user interfaces",
      technologies: [
        { name: "React", description: "Library for building user interfaces" },
        { name: "Next.js", description: "React framework for production" },
        { name: "Vue", description: "Progressive JavaScript framework" },
        { name: "Angular", description: "Platform for building mobile and desktop apps" }
      ]
    },
    {
      category: "Backend",
      icon: Server,
      description: "Robust server-side technologies for scalable applications",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime built on Chrome's V8" },
        { name: "Python", description: "Versatile programming language for web and data" },
        { name: "PHP", description: "Server-side scripting language" },
        { name: ".NET", description: "Developer platform for building various apps" }
      ]
    },
    {
      category: "Database",
      icon: Database,
      description: "Reliable data storage solutions for any scale",
      technologies: [
        { name: "MongoDB", description: "Document-oriented NoSQL database" },
        { name: "PostgreSQL", description: "Powerful open-source relational database" },
        { name: "MySQL", description: "Popular open-source relational database" }
      ]
    },
    {
      category: "Cloud",
      icon: Cloud,
      description: "Scalable cloud infrastructure and services",
      technologies: [
        { name: "AWS", description: "Amazon Web Services cloud platform" },
        { name: "Azure", description: "Microsoft's cloud computing service" },
        { name: "GCP", description: "Google Cloud Platform services" }
      ]
    },
    {
      category: "AI/ML",
      icon: Brain,
      description: "Cutting-edge artificial intelligence and machine learning",
      technologies: [
        { name: "OpenAI", description: "AI research and deployment company" },
        { name: "TensorFlow", description: "Open-source machine learning framework" },
        { name: "LangChain", description: "Framework for LLM-powered applications" }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized tech stack for lightning-fast applications"
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "Architected to grow with your business needs"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security across all technologies"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Cloud infrastructure for worldwide deployment"
    },
    {
      icon: Cpu,
      title: "Innovation",
      description: "Latest technologies for competitive advantage"
    },
    {
      icon: CheckCircle,
      title: "Proven Reliability",
      description: "Battle-tested technologies trusted by industry leaders"
    }
  ];

  const techStats = [
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Average system reliability"
    },
    {
      metric: "<100ms",
      label: "Response Time",
      description: "Typical API response"
    },
    {
      metric: "10M+",
      label: "Users Supported",
      description: "Across all platforms"
    },
    {
      metric: "24/7",
      label: "Monitoring",
      description: "Proactive system oversight"
    }
  ];

  const integrationCapabilities = [
    {
      title: "Seamless Integration",
      description: "All technologies work together harmoniously"
    },
    {
      title: "Future-Proof",
      description: "Built with upgradability and new tech adoption in mind"
    },
    {
      title: "Best Practices",
      description: "Industry standards and modern development patterns"
    },
    {
      title: "Continuous Updates",
      description: "Regular technology stack evaluation and upgrades"
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
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Technology Stack
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Technology Stack
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Our solutions run on modern, proven technologies — blending speed, scalability, and innovation. We leverage the best tools for each project to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Showcase Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Technology Ecosystem</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Modern Tech Stack</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive technology solutions tailored to your project requirements
            </p>
          </div>

          {/* Technology Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop" 
              alt="Modern Technology Stack"
              className="w-full h-auto"
            />
          </div>

          {/* Tech Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {techStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
                <div className="text-slate-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Stack</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive Technology Solutions</h3>
          </div>

          <div className="space-y-12">
            {techStack.map((category, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <category.icon className="text-blue-900" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                      {category.category}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {category.description}
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.technologies.map((tech, idx) => (
                        <div 
                          key={idx}
                          className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group/tech"
                        >
                          <div className="text-lg font-semibold text-slate-900 mb-2 group-hover/tech:text-blue-900 transition-colors duration-200">
                            {tech.name}
                          </div>
                          <div className="text-sm text-slate-600">
                            {tech.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Integration</h2>
            <h3 className="text-4xl font-bold text-slate-900">Seamless Technology Integration</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <CheckCircle className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {capability.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Our Stack?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Technology That Delivers</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                  <benefit.icon className="text-blue-900" size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
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
            Ready to Build with Modern Technology?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our technology stack can bring your vision to life with speed, scalability, and innovation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explore Tech with Amool
              <ArrowRight size={20} />
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              View Case Studies
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologySolutions;