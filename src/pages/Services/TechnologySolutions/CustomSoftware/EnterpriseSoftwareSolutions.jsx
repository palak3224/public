import React from 'react';
import { ArrowRight, Database, TrendingUp, Shield, Network, BarChart3, GitBranch, Lock, Cloud, Workflow, Activity, Zap, CheckCircle, Users, Globe, Cpu } from 'lucide-react';

const EnterpriseSoftwareSolutions = () => {
  const coreFeatures = [
    {
      icon: GitBranch,
      title: "Scalable Enterprise Frameworks",
      description: "Built on robust, modular architectures that grow with your organization. Our enterprise frameworks support high transaction volumes, multi-tenancy, and distributed systems while maintaining performance and reliability across all business units.",
      features: ["Microservices architecture", "Load balancing & auto-scaling", "Multi-region deployment", "High availability design"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics and Reporting",
      description: "Transform raw data into actionable insights with live dashboards, customizable reports, and predictive analytics. Empower decision-makers with instant visibility into KPIs, operational metrics, and business intelligence.",
      features: ["Live BI dashboards", "Custom report builder", "Predictive analytics", "Data visualization tools"]
    },
    {
      icon: Cloud,
      title: "Secure Cloud Deployment",
      description: "Enterprise-grade security combined with cloud flexibility. We implement zero-trust architectures, end-to-end encryption, and compliance frameworks while ensuring seamless deployment across AWS, Azure, or Google Cloud platforms.",
      features: ["End-to-end encryption", "Compliance ready (SOC 2, ISO)", "Disaster recovery", "Multi-cloud support"]
    }
  ];

  const integrationCapabilities = [
    {
      icon: Database,
      title: "ERP Integration",
      description: "Seamlessly connect with SAP, Oracle, Microsoft Dynamics, or custom ERP systems."
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate complex business processes across departments and systems."
    },
    {
      icon: Network,
      title: "System Connectivity",
      description: "Unified data flow between CRM, HRM, finance, and operational systems."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track system health, performance metrics, and business operations live."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Productivity",
      description: "Streamline operations and eliminate bottlenecks with intelligent automation."
    },
    {
      icon: Users,
      title: "Better Collaboration",
      description: "Connect teams, departments, and locations with unified communication platforms."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance with international data standards."
    },
    {
      icon: Zap,
      title: "Faster Decision Making",
      description: "Real-time data access and analytics for informed business decisions."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Deploy across regions with multi-language and multi-currency support."
    },
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description: "Leverage machine learning for predictive analytics and process optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40"></div>
        {/* Tech Architecture Visual Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-blue-900 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-blue-900 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-40 right-40 w-48 h-48 border-2 border-blue-900 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Enterprise Solutions
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Enterprise Software Solutions
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Enterprise systems designed to boost collaboration, data flow, and productivity. We integrate ERP, BI dashboards, and workflow automation platforms customized for your organization — creating a unified digital ecosystem that drives operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Sub-sections */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Core Capabilities</h2>
            <h3 className="text-4xl font-bold text-slate-900">Enterprise-Grade Features</h3>
          </div>

          <div className="space-y-8">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
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
                      {feature.features.map((item, idx) => (
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

      {/* Integration Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Integration Power</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Seamless System Connectivity</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Connect all your business systems into one unified platform for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationCapabilities.map((capability, index) => (
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
            <h3 className="text-4xl font-bold text-slate-900">Why Organizations Choose Us</h3>
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

      {/* Network Visualization Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Enterprise Architecture</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">Built for Scale & Performance</h3>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Our enterprise solutions are architected to handle millions of transactions while maintaining security and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">99.9%</div>
                <div className="text-slate-600 font-medium">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">10M+</div>
                <div className="text-slate-600 font-medium">Transactions/Day</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">&lt;100ms</div>
                <div className="text-slate-600 font-medium">Response Time</div>
              </div>
            </div>
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
            Transform Your Enterprise Operations
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            See how our enterprise solutions can streamline your business processes, enhance collaboration, and drive measurable ROI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a Demo
              <ArrowRight size={20} />
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              Download Brochure
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSoftwareSolutions;