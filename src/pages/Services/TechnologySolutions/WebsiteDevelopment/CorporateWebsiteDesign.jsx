import React from 'react';
import { ArrowRight, Building, Shield, Zap, Users, Target, CheckCircle, Globe, Layout } from 'lucide-react';

const CorporateWebsiteDesign = () => {
  const features = [
    {
      icon: Building,
      title: "Professional Design",
      description: "Crafting corporate websites that exude trust and authority. Our designs reflect your brand's professionalism while ensuring intuitive user experiences that engage visitors and build credibility.",
      highlights: ["Brand-aligned visuals", "Professional aesthetics", "Trust-building elements", "Industry-specific design"]
    },
    {
      icon: Layout,
      title: "Tailored Layouts",
      description: "Custom layouts designed for clarity and accessibility. We structure your content to guide visitors seamlessly through your value proposition, services, and calls-to-action.",
      highlights: ["User-centric navigation", "Accessibility compliance", "Mobile-optimized", "Clear information hierarchy"]
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast websites that load quickly and perform reliably. We optimize every element to ensure smooth user experiences that keep visitors engaged and improve conversion rates.",
      highlights: ["Optimized loading speed", "SEO-friendly structure", "Reliable hosting", "Performance monitoring"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Brand Authority",
      description: "Establish your company as an industry leader with professional design"
    },
    {
      icon: Users,
      title: "Trust Building",
      description: "Create credibility and confidence with polished, professional presentation"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Convert visitors into qualified leads with strategic call-to-actions"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Reach international audiences with multi-language and localization support"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology Solutions",
      result: "45% increase in qualified leads",
      description: "Transformed their digital presence with a modern, trust-building website"
    },
    {
      company: "FinSecure Partners",
      industry: "Financial Services",
      result: "60% faster load times",
      description: "Redesigned for security and professionalism in the financial sector"
    },
    {
      company: "HealthFirst Group",
      industry: "Healthcare",
      result: "3x more engagement",
      description: "Created an accessible, trustworthy platform for healthcare services"
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
                Corporate Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Corporate Website Design
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              We create visually strong corporate websites centered around trust, professionalism, and brand authority. Tailored layouts ensure clarity, accessibility, and fast performance — establishing your digital presence with impact.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-900">Designed for Corporate Excellence</h3>
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

      {/* Case Studies Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold text-slate-900">Trusted by Industry Leaders</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-2xl font-bold text-blue-900 mb-2">{study.company}</div>
                <div className="text-sm text-slate-500 mb-4 font-medium">{study.industry}</div>
                <div className="text-lg font-bold text-slate-900 mb-3">{study.result}</div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {study.description}
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
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Business Impact</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Corporate Websites Matter</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Ready to Build Your Corporate Presence?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's create a corporate website that establishes your authority, builds trust, and drives business growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Build Your Corporate Presence
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

export default CorporateWebsiteDesign;