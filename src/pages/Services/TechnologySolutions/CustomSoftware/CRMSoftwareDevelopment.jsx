import React from 'react';
import { ArrowRight, LayoutDashboard, Zap, Mail, MessageSquare, Phone, Users, TrendingUp, Target, BarChart3, Bell, Calendar, Filter, PieChart, LineChart, Settings, Workflow, Bot, Heart, CheckCircle } from 'lucide-react';

const CRMSoftwareDevelopment = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Custom Dashboards",
      description: "Design personalized dashboards that display exactly what your team needs. From sales pipelines to customer insights, create views that match your workflow with drag-and-drop widgets, real-time data visualization, and role-based access controls.",
      highlights: ["Drag-and-drop interface", "Real-time data sync", "Custom KPI tracking", "Multi-user views"]
    },
    {
      icon: Zap,
      title: "Automation for Sales and Service",
      description: "Eliminate repetitive tasks and accelerate your sales cycle with intelligent automation. From lead scoring to follow-up reminders, automated workflows ensure no opportunity falls through the cracks while your team focuses on building relationships.",
      highlights: ["Lead scoring & routing", "Automated follow-ups", "Task assignment", "Pipeline management"]
    },
    {
      icon: MessageSquare,
      title: "Integration with Email, SMS, WhatsApp",
      description: "Connect with customers on their preferred channels. Our CRM integrates seamlessly with email platforms, SMS gateways, and WhatsApp Business API, enabling unified communication tracking and automated multi-channel campaigns from a single interface.",
      highlights: ["Email synchronization", "SMS campaigns", "WhatsApp Business", "Unified inbox"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Enhanced Customer Retention",
      description: "Build lasting relationships with personalized engagement strategies."
    },
    {
      icon: Target,
      title: "Improved Lead Tracking",
      description: "Never lose a lead with comprehensive tracking across all touchpoints."
    },
    {
      icon: TrendingUp,
      title: "Increased Sales Efficiency",
      description: "Accelerate your sales cycle with automated workflows and insights."
    },
    {
      icon: Users,
      title: "Better Team Collaboration",
      description: "Keep your entire team aligned with shared customer visibility."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make informed choices with real-time analytics and reporting."
    },
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Leverage machine learning for predictive analytics and recommendations."
    }
  ];

  const aiCapabilities = [
    {
      icon: Bot,
      title: "AI Lead Scoring",
      description: "Automatically prioritize leads based on conversion probability"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast sales trends and customer behavior patterns"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get intelligent alerts for high-priority customer actions"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "AI-driven workflows that adapt to your business needs"
    }
  ];

  const dashboardFeatures = [
    { icon: PieChart, label: "Sales Analytics" },
    { icon: LineChart, label: "Revenue Tracking" },
    { icon: Users, label: "Customer Insights" },
    { icon: Calendar, label: "Activity Timeline" },
    { icon: Filter, label: "Advanced Filters" },
    { icon: Settings, label: "Custom Reports" }
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
                CRM Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              CRM Software Development
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mb-8">
              Build customer engagement using CRM systems powered by automation and AI. Amool's CRM platforms enhance retention, lead tracking, and communication efficiency — creating meaningful connections that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Visual Intelligence</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Dashboard That Works For You</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Visualize your entire customer journey with intuitive dashboards designed for action
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
              alt="CRM Dashboard Analytics"
              className="w-full h-auto"
            />
          </div>

          {/* Dashboard Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dashboardFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-3 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="text-blue-900" size={22} />
                </div>
                <div className="text-sm font-semibold text-slate-900">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Key Features</h2>
            <h3 className="text-4xl font-bold text-slate-900">Powerful CRM Capabilities</h3>
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

      {/* Customer Journey Section with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Customer Journey</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Map Every Touchpoint, Maximize Every Opportunity
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Visualize and optimize your entire customer journey from first contact to loyal advocate. Our CRM tracks every interaction, identifies bottlenecks, and surfaces opportunities for engagement at each stage.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Lead Capture", desc: "Automatic lead import from multiple sources" },
                  { label: "Nurture & Engage", desc: "Personalized communication workflows" },
                  { label: "Convert & Close", desc: "Sales pipeline management and tracking" },
                  { label: "Retain & Grow", desc: "Post-sale engagement and upsell automation" }
                ].map((stage, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{stage.label}</div>
                      <div className="text-sm text-slate-600">{stage.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop" 
                alt="Customer Journey Analytics"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">AI-Powered</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Intelligence That Learns & Adapts</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Leverage artificial intelligence to transform your customer relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                  <capability.icon className="text-blue-900" size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {capability.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {capability.description}
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
            <h3 className="text-4xl font-bold text-slate-900">Why Choose Amool CRM</h3>
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

      {/* Integration Channels */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Communication Channels</h2>
            <h3 className="text-4xl font-bold text-slate-900">Connect Everywhere Your Customers Are</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email Integration", desc: "Sync with Gmail, Outlook, and custom SMTP" },
              { icon: MessageSquare, title: "SMS Campaigns", desc: "Bulk messaging with personalization and tracking" },
              { icon: Phone, title: "WhatsApp Business", desc: "Official API integration for business messaging" }
            ].map((channel, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                  <channel.icon className="text-blue-900" size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {channel.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {channel.desc}
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
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our CRM solution can streamline your sales process, enhance customer engagement, and drive revenue growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Talk to a CRM Expert
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMSoftwareDevelopment;