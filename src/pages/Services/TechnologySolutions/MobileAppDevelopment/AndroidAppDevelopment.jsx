import React from 'react';
import { ArrowRight, Smartphone, Zap, Palette, Rocket, CheckCircle, Shield, Users, TrendingUp, Cpu } from 'lucide-react';

const AndroidAppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native Android Solutions",
      description: "Built with Kotlin and Jetpack Compose for truly native experiences. Our Android apps leverage the full power of the Android platform, delivering exceptional performance, smooth animations, and seamless integration with device features.",
      highlights: ["Kotlin development", "Jetpack Compose", "Native performance", "Material Design"]
    },
    {
      icon: Zap,
      title: "Optimized for Performance",
      description: "Lightning-fast applications with efficient memory management and optimized rendering. We ensure your app runs smoothly across all Android devices, from budget phones to flagship models.",
      highlights: ["60 FPS animations", "Efficient memory usage", "Battery optimization", "Fast loading times"]
    },
    {
      icon: Palette,
      title: "Material Design Excellence",
      description: "Beautiful, intuitive interfaces following Google's Material Design principles. Create engaging user experiences with consistent design patterns, meaningful animations, and accessible interactions.",
      highlights: ["Material You", "Dark theme support", "Accessibility features", "Consistent UI patterns"]
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
      title: "Play Store Ready",
      description: "Fully compliant with Google Play Store guidelines and policies"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for maximum engagement and retention"
    },
    {
      icon: TrendingUp,
      title: "High Performance",
      description: "Optimized for speed and efficiency across all device types"
    },
    {
      icon: Cpu,
      title: "Hardware Integration",
      description: "Leverage device capabilities like camera, GPS, and sensors"
    },
    {
      icon: Zap,
      title: "Offline Functionality",
      description: "Robust apps that work seamlessly without internet connection"
    }
  ];

  const techStack = [
    {
      name: "Kotlin",
      description: "Modern, concise programming language for Android",
      features: ["Null safety", "Coroutines", "Extension functions"]
    },
    {
      name: "Jetpack Compose",
      description: "Modern toolkit for building native UI",
      features: ["Declarative UI", "Live preview", "State management"]
    },
    {
      name: "Android Studio",
      description: "Official IDE with powerful development tools",
      features: ["Visual layout editor", "APK analyzer", "Emulator"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "UI/UX Design",
      description: "Material Design principles and user-centric interfaces"
    },
    {
      step: "02",
      title: "Development",
      description: "Clean architecture with Kotlin and modern libraries"
    },
    {
      step: "03",
      title: "Testing",
      description: "Comprehensive testing across devices and scenarios"
    },
    {
      step: "04",
      title: "Play Store Deployment",
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
                Android Development
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Android App Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Native Android solutions built on Kotlin and Jetpack Compose — scalable, responsive, and optimized for performance. Create powerful mobile experiences that users love on the world's most popular mobile platform.
            </p>
          </div>
        </div>
      </section>

      {/* Android Studio Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Development Environment</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Built with Modern Android Tools</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Leveraging the latest Android development tools and best practices
            </p>
          </div>

          {/* Android Studio Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop" 
              alt="Android Studio Development"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2.5B+</div>
              <div className="text-slate-600 font-medium">Active Android Devices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">72%</div>
              <div className="text-slate-600 font-medium">Global Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">3M+</div>
              <div className="text-slate-600 font-medium">Apps on Play Store</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Kotlin Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-900">Native Android Excellence</h3>
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

      {/* Technology Stack Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Technology Stack</h2>
            <h3 className="text-4xl font-bold text-slate-900">Modern Android Development</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
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
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">From Concept to Play Store</h3>
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
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Android?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Powerful Mobile Experiences</h3>
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
            Ready to Build Your Android App?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's create a powerful Android application that stands out in the Play Store and delivers exceptional user experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Consult Android Experts
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

export default AndroidAppDevelopment;