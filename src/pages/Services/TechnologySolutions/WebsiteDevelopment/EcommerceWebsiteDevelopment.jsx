import React from 'react';
import { ArrowRight, ShoppingCart, CreditCard, Smartphone, Zap, BarChart3, Package, Bot, CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';

const EcommerceWebsiteDevelopment = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Headless E-commerce Architectures",
      description: "Modern headless commerce solutions that provide flexibility, scalability, and superior performance. Separate your frontend presentation from backend commerce operations for faster load times and better user experiences.",
      highlights: ["API-first architecture", "Omnichannel selling", "Fast content delivery", "Easy integrations"]
    },
    {
      icon: Bot,
      title: "AI-Based Recommendations",
      description: "Intelligent product recommendations that drive sales and increase average order value. Our AI algorithms analyze customer behavior to suggest relevant products and personalize shopping experiences.",
      highlights: ["Personalized suggestions", "Behavior analysis", "Cross-selling", "Upsell opportunities"]
    },
    {
      icon: BarChart3,
      title: "Inventory & Analytics Dashboards",
      description: "Comprehensive dashboards that provide real-time insights into your business performance. Track inventory, sales, customer behavior, and marketing effectiveness from a single interface.",
      highlights: ["Real-time analytics", "Inventory tracking", "Sales reporting", "Customer insights"]
    }
  ];

  const highlights = [
    {
      icon: CreditCard,
      title: "Secure Payment Integrations",
      description: "Multiple payment gateways with PCI compliance and fraud protection"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Shopping",
      description: "Optimized experiences that convert on all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast storefronts that reduce bounce rates and increase sales"
    },
    {
      icon: Users,
      title: "Personalized UX",
      description: "Tailored shopping experiences that adapt to individual customer preferences"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect customer data and transactions"
    },
    {
      icon: Package,
      title: "Order Management",
      description: "Streamlined inventory, shipping, and fulfillment operations"
    }
  ];

  const checkoutFlow = [
    {
      step: "01",
      title: "Cart & Review",
      description: "Customers easily add items and review their selections with clear pricing"
    },
    {
      step: "02",
      title: "Shipping & Details",
      description: "Streamlined forms for shipping information and contact details"
    },
    {
      step: "03",
      title: "Payment & Security",
      description: "Multiple secure payment options with SSL encryption"
    },
    {
      step: "04",
      title: "Confirmation & Tracking",
      description: "Instant order confirmation with tracking information and next steps"
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
                E-commerce Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              E-commerce Website Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Our e-commerce sites empower sales with personalized UX, secure payment integrations, and mobile-first shopping experiences — creating digital storefronts that convert visitors into loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* Store Demo Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Store Demo</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Modern E-commerce Experiences</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Beautiful, high-converting storefronts designed to drive sales and customer loyalty
            </p>
          </div>

          {/* E-commerce Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
              alt="Modern E-commerce Store"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">35%+</div>
              <div className="text-slate-600 font-medium">Avg. Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2.8s</div>
              <div className="text-slate-600 font-medium">Avg. Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Mobile Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Payment Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Core Features</h2>
            <h3 className="text-4xl font-bold text-slate-900">Advanced E-commerce Capabilities</h3>
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

      {/* Checkout Flow Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Checkout Experience</h2>
            <h3 className="text-4xl font-bold text-slate-900">Optimized Conversion Flow</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkoutFlow.map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
              >
                <div className="text-4xl font-bold text-blue-900 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Highlights Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900">E-commerce Excellence</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                    <highlight.icon className="text-blue-900" size={26} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {highlight.description}
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
            Ready to Launch Your Store Online?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's build an e-commerce platform that drives sales, engages customers, and grows your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Launch Your Store Online
              <ArrowRight size={20} />
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              View Demo Store
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceWebsiteDevelopment;