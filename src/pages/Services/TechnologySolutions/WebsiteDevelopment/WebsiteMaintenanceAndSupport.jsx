import React from 'react';
import { ArrowRight, Settings, Shield, Zap, Clock, BarChart3, RefreshCw, Database, CheckCircle, Activity, Server, Heart } from 'lucide-react';

const WebsiteMaintenanceAndSupport = () => {
  const services = [
    {
      icon: Settings,
      title: "Bug Fixing",
      description: "Rapid response and resolution for any website issues or errors. Our team quickly identifies and fixes bugs to ensure your website operates smoothly and provides a seamless user experience for your visitors.",
      highlights: ["24/7 monitoring", "Quick response times", "Error resolution", "Performance optimization"]
    },
    {
      icon: RefreshCw,
      title: "Version Updates",
      description: "Keep your website secure and up-to-date with the latest software versions. We manage all core updates, plugin updates, and security patches to protect your site from vulnerabilities.",
      highlights: ["Security patches", "Feature updates", "Compatibility testing", "Scheduled updates"]
    },
    {
      icon: Shield,
      title: "SEO Audits, Security & Backups",
      description: "Comprehensive protection and optimization services. Regular SEO audits improve visibility, security measures protect against threats, and automated backups ensure data safety.",
      highlights: ["Regular SEO analysis", "Security scanning", "Automated backups", "Malware protection"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Uptime",
      description: "Continuous monitoring to ensure your website is always accessible"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Regular optimization to maintain lightning-fast loading speeds"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Proactive security measures to protect against threats and attacks"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Continuous improvements to maintain and boost search rankings"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Regular backups and recovery plans to safeguard your content"
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Real-time tracking of website health and user experience"
    }
  ];

  const maintenanceStats = [
    {
      metric: "99.9%",
      label: "Uptime Guarantee",
      icon: Server
    },
    {
      metric: "< 2h",
      label: "Average Response Time",
      icon: Clock
    },
    {
      metric: "24/7",
      label: "Monitoring & Support",
      icon: Activity
    },
    {
      metric: "100%",
      label: "Client Satisfaction",
      icon: Heart
    }
  ];

  const monitoringFeatures = [
    {
      title: "Real-time Performance",
      description: "Continuous tracking of loading speeds and user experience metrics"
    },
    {
      title: "Security Scanning",
      description: "Automated malware detection and vulnerability assessments"
    },
    {
      title: "SEO Health Checks",
      description: "Regular audits to maintain and improve search engine rankings"
    },
    {
      title: "Backup Management",
      description: "Automated daily backups with easy restoration options"
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
                Maintenance & Support
              </span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Website Maintenance & Support
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Keep your website running 24/7 with consistent upgrades, monitoring, and security management — ensuring optimal performance, security, and reliability for your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Visualization Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Monitoring Dashboard</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Real-time Website Health Monitoring</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive monitoring and analytics to keep your website performing at its best
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
              alt="Website Monitoring Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {maintenanceStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4">
                  <stat.icon className="text-blue-900" size={28} />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.metric}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive Maintenance Solutions</h3>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:scale-105">
                      <service.icon className="text-blue-900" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.highlights.map((item, idx) => (
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

      {/* Monitoring Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Proactive Monitoring</h2>
            <h3 className="text-4xl font-bold text-slate-900">Always Watching, Always Protecting</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <CheckCircle className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Peace of Mind</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Professional Maintenance Matters</h3>
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
            Keep Your Website Running Flawlessly
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Choose a maintenance plan that fits your needs and ensure your website remains secure, fast, and reliable 24/7.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Maintenance Plan
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-sm">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMaintenanceAndSupport;