import React from 'react';
import { ArrowRight, Smartphone, Zap, Palette, Rocket, CheckCircle, Shield, Users, TrendingUp, Cpu, Camera, CreditCard } from 'lucide-react';

const IOSAppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native iOS Solutions",
      description: "Built with Swift and SwiftUI for premium native experiences. Our iOS apps leverage the full power of Apple's ecosystem, delivering exceptional performance, smooth animations, and seamless integration with iOS features.",
      highlights: ["Swift development", "SwiftUI framework", "Native performance", "Human Interface"]
    },
    {
      icon: Zap,
      title: "Optimized for Performance",
      description: "Lightning-fast applications with efficient memory management and optimized rendering. We ensure your app runs smoothly across all Apple devices, from iPhone to iPad, delivering buttery-smooth 60fps experiences.",
      highlights: ["60 FPS animations", "Efficient memory usage", "Battery optimization", "Fast loading times"]
    },
    {
      icon: Palette,
      title: "Human Interface Excellence",
      description: "Beautiful, intuitive interfaces following Apple's Human Interface Guidelines. Create engaging user experiences with consistent design patterns, meaningful animations, and accessible interactions that feel native to iOS.",
      highlights: ["HIG compliance", "Dark mode support", "Accessibility features", "Consistent UI patterns"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Built to grow with your user base and feature requirements"
    },
    {
      icon: Shield,
      title: "App Store Ready",
      description: "Fully compliant with Apple App Store guidelines and policies"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for maximum engagement and retention"
    },
    {
      icon: TrendingUp,
      title: "Premium Performance",
      description: "Optimized for speed and efficiency across all Apple devices"
    },
    {
      icon: Cpu,
      title: "Hardware Integration",
      description: "Leverage device capabilities like Face ID, ARKit, and Apple Pay"
    },
    {
      icon: Zap,
      title: "Seamless Experience",
      description: "Perfect integration with iOS ecosystem and services"
    }
  ];

  const appleFeatures = [
    {
      icon: Shield,
      title: "Face ID Integration",
      description: "Secure authentication using Apple's facial recognition technology"
    },
    {
      icon: Camera,
      title: "ARKit Capabilities",
      description: "Augmented reality experiences that blend digital with physical world"
    },
    {
      icon: CreditCard,
      title: "Apple Pay Integration",
      description: "Secure, convenient payment processing for your app"
    },
    {
      icon: Cpu,
      title: "Core ML Integration",
      description: "Machine learning capabilities for intelligent app features"
    }
  ];

  const techStack = [
    {
      name: "Swift",
      description: "Powerful, intuitive programming language for Apple platforms",
      features: ["Type safety", "Modern syntax", "Performance optimized"]
    },
    {
      name: "SwiftUI",
      description: "Declarative framework for building user interfaces",
      features: ["Declarative syntax", "Live preview", "State management"]
    },
    {
      name: "Xcode",
      description: "Complete development environment with powerful tools",
      features: ["Interface Builder", "Debugging tools", "Simulator"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "UI/UX Design",
      description: "Human Interface Guidelines and user-centric interfaces"
    },
    {
      step: "02",
      title: "Development",
      description: "Clean architecture with Swift and modern frameworks"
    },
    {
      step: "03",
      title: "Testing",
      description: "Comprehensive testing across devices and scenarios"
    },
    {
      step: "04",
      title: "App Store Deployment",
      description: "Optimized listing and smooth store submission"
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
                iOS Development
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              iOS App Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Intuitive apps built for iOS users using Swift, SwiftUI, and Apple's best features like Face ID, ARKit, and Apple Pay. Create premium mobile experiences that delight users in Apple's ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* iOS Development Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Development Excellence</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Crafted for Apple's Ecosystem</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Leveraging the latest iOS development tools and Apple's best practices
            </p>
          </div>

          {/* iOS Development Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop" 
              alt="iOS App Development"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">1.8B+</div>
              <div className="text-slate-600 font-medium">Active Apple Devices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">28%</div>
              <div className="text-slate-600 font-medium">Global Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2M+</div>
              <div className="text-slate-600 font-medium">Apps on App Store</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Swift Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-900">Native iOS Excellence</h3>
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

      {/* Apple Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Apple Ecosystem</h2>
            <h3 className="text-4xl font-bold text-slate-900">Leverage Apple's Best Features</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appleFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                  <feature.icon className="text-blue-900" size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Technology Stack</h2>
            <h3 className="text-4xl font-bold text-slate-900">Modern iOS Development</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {tech.name}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">From Concept to App Store</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
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
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why iOS?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Premium Mobile Experiences</h3>
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
            Ready to Build Your iOS App?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's create a premium iOS application that stands out in the App Store and delivers exceptional user experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Let's Design Your iOS App
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

export default IOSAppDevelopment;