import React from 'react';
import { ArrowRight, Smartphone, Zap, Layout, Users, CheckCircle, Shield, Globe, Cpu, Clock } from 'lucide-react';

const MobileAppDevelopment = () => {
  const subPages = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications built with Kotlin and Jetpack Compose for optimal performance and seamless user experiences.",
      link: "/services/technology-solutions/mobile-app-development/android-app-development",
      features: ["Material Design", "Play Store Optimization", "Offline Capabilities", "Google Services Integration"]
    },
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "Native iOS apps developed with Swift and SwiftUI, delivering premium experiences for Apple's ecosystem.",
      link: "/services/technology-solutions/mobile-app-development/ios-app-development",
      features: ["UIKit & SwiftUI", "App Store Optimization", "Apple Ecosystem", "Privacy Focused"]
    },
    {
      icon: Globe,
      title: "Hybrid App Development",
      description: "Cross-platform solutions using React Native and Flutter for maximum reach with native-like performance.",
      link: "/services/technology-solutions/mobile-app-development/hybrid-app-development",
      features: ["Cross-Platform", "Faster Development", "Cost Effective", "Unified Codebase"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast apps with smooth animations and responsive interfaces that keep users engaged.",
      highlights: ["60 FPS animations", "Fast loading times", "Smooth scrolling", "Optimized performance"]
    },
    {
      icon: Shield,
      title: "Rock-Solid Stability",
      description: "Robust applications with comprehensive testing and error handling for reliable user experiences.",
      highlights: ["Crash-free sessions", "Automated testing", "Error monitoring", "Quality assurance"]
    },
    {
      icon: Layout,
      title: "Exceptional UX",
      description: "Intuitive user interfaces designed with human-centered principles for maximum engagement and satisfaction.",
      highlights: ["User research", "Intuitive navigation", "Accessibility", "Beautiful interfaces"]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "User Engagement",
      description: "Keep users coming back with engaging experiences and valuable features"
    },
    {
      icon: Cpu,
      title: "Native Performance",
      description: "Leverage device capabilities for fast, responsive app experiences"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access millions of users through app stores worldwide"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your business is always accessible in users' pockets"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with app store compliance"
    },
    {
      icon: Zap,
      title: "Offline Capabilities",
      description: "Functionality that works even without internet connection"
    }
  ];

  const platforms = [
    {
      name: "React Native",
      users: "2M+ Developers",
      description: "Cross-platform framework by Facebook"
    },
    {
      name: "Flutter",
      users: "500K+ Apps",
      description: "Google's UI toolkit for native apps"
    },
    {
      name: "Swift",
      users: "iOS & macOS",
      description: "Apple's powerful programming language"
    },
    {
      name: "Kotlin",
      users: "Android First",
      description: "Modern language for Android development"
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
                Mobile Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Mobile App Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              We design mobile applications that bring your business directly into users' hands. Whether native or hybrid, each app blends speed, stability, and great user experience — creating digital products that users love.
            </p>
          </div>
        </div>
      </section>

      {/* App Mockups Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">App Showcase</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Beautiful, Functional Mobile Experiences</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Modern app interfaces designed for engagement and conversion across all devices
            </p>
          </div>

          {/* App Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop" 
              alt="Mobile App Development"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100M+</div>
              <div className="text-slate-600 font-medium">App Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">4.8/5</div>
              <div className="text-slate-600 font-medium">Avg. Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">99.5%</div>
              <div className="text-slate-600 font-medium">Crash-Free Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Apps Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subpages Navigation */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900">Choose Your Platform</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subPages.map((page, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer bg-white"
                onClick={() => window.location.href = page.link}
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
                  <div className="space-y-2 w-full mb-4">
                    {page.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="text-blue-900 flex-shrink-0" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-blue-900 font-semibold text-sm">
                    Explore {page.title.split(' ')[0]}
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Promise</h2>
            <h3 className="text-4xl font-bold text-slate-900">Speed, Stability & Great UX</h3>
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

      {/* Platforms Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Technology Stack</h2>
            <h3 className="text-4xl font-bold text-slate-900">Modern Development Platforms</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                  {platform.name}
                </h4>
                <div className="text-blue-900 font-semibold mb-2">{platform.users}</div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {platform.description}
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
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Mobile First?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Transform Your Business with Mobile</h3>
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's create a mobile experience that engages users and drives business growth across all platforms.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Build My App
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

export default MobileAppDevelopment;