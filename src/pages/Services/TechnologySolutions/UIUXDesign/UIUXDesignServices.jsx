import React from 'react';
import { ArrowRight, Layout, Users, Zap, CheckCircle, Shield, TrendingUp, Cpu, Palette, Target, Heart, Globe } from 'lucide-react';

const UIUXDesignServices = () => {
  const features = [
    {
      icon: Layout,
      title: "Interactive Wireframes",
      description: "Transform ideas into tangible blueprints with detailed wireframes that map out user flows and functionality. Our wireframes serve as the foundation for intuitive, user-centered design that drives engagement and conversion.",
      highlights: ["User flow mapping", "Information architecture", "Interaction design", "Functionality planning"]
    },
    {
      icon: Palette,
      title: "High-Fidelity Prototypes",
      description: "Bring designs to life with interactive prototypes that simulate the final product experience. Test usability, gather feedback, and refine interactions before development begins, saving time and resources.",
      highlights: ["Interactive mockups", "User testing ready", "Animation preview", "Stakeholder feedback"]
    },
    {
      icon: Users,
      title: "Usability Testing",
      description: "Validate design decisions with real users through comprehensive usability testing. Gather actionable insights to optimize user experience, improve conversion rates, and ensure accessibility for all users.",
      highlights: ["User research", "A/B testing", "Accessibility audits", "Conversion optimization"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Conversion",
      description: "Data-driven designs that guide users toward desired actions"
    },
    {
      icon: Heart,
      title: "Better Engagement",
      description: "Intuitive interfaces that keep users coming back"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Inclusive designs that work for all users"
    },
    {
      icon: Zap,
      title: "Faster Development",
      description: "Clear specifications that streamline implementation"
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Validated designs that minimize costly changes later"
    },
    {
      icon: Target,
      title: "Business Alignment",
      description: "Designs that support your strategic objectives"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Research",
      description: "Deep dive into user needs, business goals, and market analysis",
      icon: Users
    },
    {
      step: "02",
      title: "Wireframe",
      description: "Create structural blueprints and user flow diagrams",
      icon: Layout
    },
    {
      step: "03",
      title: "Design",
      description: "Develop visual interfaces and interactive prototypes",
      icon: Palette
    },
    {
      step: "04",
      title: "Test",
      description: "Conduct usability testing and gather user feedback",
      icon: CheckCircle
    },
    {
      step: "05",
      title: "Launch",
      description: "Deliver final assets and support implementation",
      icon: Zap
    }
  ];

  const designPrinciples = [
    {
      title: "User-Centered",
      description: "Every decision starts with understanding user needs and behaviors"
    },
    {
      title: "Data-Driven",
      description: "Design choices backed by research, analytics, and testing"
    },
    {
      title: "Accessible",
      description: "Inclusive designs that work for people of all abilities"
    },
    {
      title: "Consistent",
      description: "Cohesive experiences that build trust and familiarity"
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
                Design Services
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              UI/UX Design Services
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              We craft intuitive user experiences backed by real data and usability testing. Every design decision focuses on conversion, engagement, and accessibility — creating digital products that users love and businesses thrive on.
            </p>
          </div>
        </div>
      </section>

      {/* Design Showcase Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Design Excellence</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Beautiful, Functional Interfaces</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Interactive designs that combine aesthetics with usability and business objectives
            </p>
          </div>

          {/* Design Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop" 
              alt="UI/UX Design Process"
              className="w-full h-auto"
            />
          </div>

          {/* Design Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">45%</div>
              <div className="text-slate-600 font-medium">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">68%</div>
              <div className="text-slate-600 font-medium">Faster Task Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">92%</div>
              <div className="text-slate-600 font-medium">User Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Accessibility Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive Design Solutions</h3>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <feature.icon className="text-blue-900" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((item, idx) => (
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
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">Proven Design Workflow</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                  <step.icon className="text-blue-900" size={28} />
                </div>
                <div className="text-2xl font-bold text-blue-900 mb-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Principles</h2>
            <h3 className="text-4xl font-bold text-slate-900">Design That Delivers Results</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <CheckCircle className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {principle.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Business Impact</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Invest in UX Design?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
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
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's analyze your current user experience and identify opportunities for improvement that drive engagement and conversion.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Request a UX Audit
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

export default UIUXDesignServices;