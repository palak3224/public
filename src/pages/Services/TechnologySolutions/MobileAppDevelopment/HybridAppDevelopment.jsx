import React from 'react';
import { ArrowRight, Smartphone, Zap, Code, DollarSign, CheckCircle, Shield, Users, TrendingUp, Cpu, Globe, Clock } from 'lucide-react';

const HybridAppDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Single Codebase",
      description: "Build once, deploy everywhere with a unified codebase that works across Android and iOS. Our hybrid apps deliver native-like performance while significantly reducing development time and costs.",
      highlights: ["Write once, run anywhere", "Consistent codebase", "Faster development", "Easier maintenance"]
    },
    {
      icon: Zap,
      title: "Faster Build Times",
      description: "Accelerate your time-to-market with rapid development cycles. Hybrid frameworks enable simultaneous development for both platforms, cutting deployment time by up to 50% compared to native development.",
      highlights: ["Rapid prototyping", "Simultaneous deployment", "Quick iterations", "Faster updates"]
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Maximize your budget without compromising quality. Hybrid development eliminates the need for separate iOS and Android teams, reducing development costs by 30-40% while maintaining high performance standards.",
      highlights: ["Reduced development cost", "Single team required", "Lower maintenance", "Better ROI"]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Reach both Android and iOS users with a single application"
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Launch your app simultaneously on both major platforms"
    },
    {
      icon: Users,
      title: "Consistent Experience",
      description: "Uniform user experience across all devices and platforms"
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Significant savings compared to separate native development"
    },
    {
      icon: Cpu,
      title: "Native Performance",
      description: "Near-native performance with optimized hybrid frameworks"
    },
    {
      icon: Shield,
      title: "Easy Maintenance",
      description: "Single codebase simplifies updates and bug fixes"
    }
  ];

  const frameworks = [
    {
      name: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications",
      features: ["Dart language", "Widget-based", "Hot reload", "Native performance"]
    },
    {
      name: "React Native",
      description: "Facebook's framework for building native apps with React",
      features: ["JavaScript/TypeScript", "React ecosystem", "Live reload", "Large community"]
    },
    {
      name: "Ionic",
      description: "Cross-platform apps with web technologies and native features",
      features: ["Web technologies", "Capacitor runtime", "UI components", "Progressive apps"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Framework Selection",
      description: "Choose the right hybrid framework for your project needs"
    },
    {
      step: "02",
      title: "Unified Development",
      description: "Single codebase development for both platforms"
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Cross-platform testing and performance optimization"
    },
    {
      step: "04",
      title: "Store Deployment",
      description: "Simultaneous deployment to both app stores"
    }
  ];

  const platformStats = [
    {
      metric: "85%",
      label: "Code Reusability",
      description: "Shared code between Android and iOS"
    },
    {
      metric: "40%",
      label: "Cost Savings",
      description: "Compared to separate native development"
    },
    {
      metric: "50%",
      label: "Faster Development",
      description: "Reduced time-to-market"
    },
    {
      metric: "100%",
      label: "Platform Coverage",
      description: "Android and iOS from single codebase"
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
                Hybrid Development
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Hybrid App Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Amool develops hybrid apps with Flutter, React Native, and Ionic — faster build times, lower costs, and consistent performance across devices. Reach both Android and iOS users with a single, powerful codebase.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Platform Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Cross-Platform Solution</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">One Codebase, Multiple Platforms</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Build for Android and iOS simultaneously with modern hybrid frameworks
            </p>
          </div>

          {/* Cross-Platform Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop" 
              alt="Cross-Platform App Development"
              className="w-full h-auto"
            />
          </div>

          {/* Platform Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
                <div className="text-slate-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-900">Hybrid Development Excellence</h3>
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

      {/* Frameworks Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Technology Stack</h2>
            <h3 className="text-4xl font-bold text-slate-900">Modern Hybrid Frameworks</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {framework.name}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {framework.description}
                </p>
                <div className="space-y-2">
                  {framework.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="text-blue-900 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">Streamlined Cross-Platform Development</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Hybrid?</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Smart Development Choice</h3>
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
            Ready to Go Cross-Platform?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how hybrid app development can help you reach both Android and iOS users faster and more cost-effectively.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Discuss Cross-Platform Options
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

export default HybridAppDevelopment;