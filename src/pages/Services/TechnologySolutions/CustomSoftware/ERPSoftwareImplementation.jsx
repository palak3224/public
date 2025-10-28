import React from 'react';
import { ArrowRight, Workflow, Shield, Cloud, CheckCircle, Database, Users, FileText, DollarSign, Package, BarChart3, Settings, Lock, Zap } from 'lucide-react';

const ERPSoftwareImplementation = () => {
  const timeline = [
    {
      phase: "Plan",
      title: "Discovery & Planning",
      description: "We analyze your current workflows, identify pain points, and design an ERP roadmap tailored to your business needs.",
      icon: FileText,
      details: ["Requirement gathering", "Process mapping", "Gap analysis", "Timeline planning"]
    },
    {
      phase: "Customize",
      title: "Configuration & Customization",
      description: "Our experts customize SAP, Odoo, or Oracle to match your specific workflows, policies, and compliance requirements.",
      icon: Settings,
      details: ["Module configuration", "Custom workflows", "Integration setup", "User roles design"]
    },
    {
      phase: "Launch",
      title: "Deployment & Training",
      description: "We deploy your ERP system with minimal disruption, provide comprehensive training, and ensure a smooth transition.",
      icon: Zap,
      details: ["Data migration", "User training", "Go-live support", "Performance monitoring"]
    }
  ];

  const deliverables = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive tasks across departments — from invoice approval to inventory management — reducing manual errors and accelerating operations.",
      highlights: ["Automated workflows", "Smart notifications", "Task scheduling", "Document automation"]
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure your data with granular permission controls. Define user roles, access levels, and approval hierarchies to maintain compliance and data integrity.",
      highlights: ["Custom user roles", "Permission management", "Audit trails", "Compliance ready"]
    },
    {
      icon: Cloud,
      title: "Cloud Hosting and Integration",
      description: "Deploy on AWS, Azure, or Google Cloud with seamless integration to your existing systems — CRM, accounting software, and third-party tools.",
      highlights: ["Multi-cloud support", "API integrations", "Real-time sync", "Scalable infrastructure"]
    }
  ];

  const departments = [
    { icon: DollarSign, name: "Finance", desc: "Accounting & budgeting" },
    { icon: Users, name: "HR", desc: "Employee management" },
    { icon: Package, name: "Inventory", desc: "Stock & supply chain" },
    { icon: BarChart3, name: "Operations", desc: "Analytics & reporting" }
  ];

  const benefits = [
    { icon: Database, title: "Unified Data", desc: "Single source of truth across all departments" },
    { icon: Zap, title: "Real-Time Insights", desc: "Live dashboards and instant reporting" },
    { icon: Lock, title: "Enhanced Security", desc: "Enterprise-grade data protection" },
    { icon: CheckCircle, title: "Compliance Ready", desc: "Meet industry regulations effortlessly" }
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
                ERP Implementation
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              ERP Software Implementation
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Our ERP implementation connects departments — finance, HR, inventory — into one real-time system. We customize SAP, Odoo, and Oracle according to your workflows, creating a unified digital backbone for your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Implementation Process</h2>
            <h3 className="text-4xl font-bold text-slate-900">Plan → Customize → Launch</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" style={{top: '80px'}}></div>
            
            {timeline.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                  {/* Phase Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {step.phase}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center mb-6 mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-110">
                      <step.icon className="text-blue-900" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-blue-900 flex-shrink-0" size={16} />
                        <span className="text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Key Deliverables</h2>
            <h3 className="text-4xl font-bold text-slate-900">What You Get</h3>
          </div>

          <div className="space-y-8">
            {deliverables.map((deliverable, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <deliverable.icon className="text-blue-900" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                      {deliverable.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {deliverable.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {deliverable.highlights.map((item, idx) => (
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

      {/* Connected Departments */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Unified System</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Connect All Your Departments</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Break down silos and create seamless data flow across your entire organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                  <dept.icon className="text-blue-900" size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {dept.name}
                </h4>
                <p className="text-slate-600 text-sm">
                  {dept.desc}
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
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Business Impact</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Choose Our ERP Implementation</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-5 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                  <benefit.icon className="text-blue-900" size={26} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.desc}
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
            Ready to Unify Your Business Operations?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our ERP implementation can streamline your processes, connect your teams, and drive operational excellence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Start Your ERP Integration
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPSoftwareImplementation;