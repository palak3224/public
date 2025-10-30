import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DollarSign, Target, BarChart, Zap } from 'lucide-react';

const PaidAdvertising = () => {
  const childPages = [
    {
      icon: DollarSign,
      title: "Google Ads Management",
      description: "Maximizing your ROI with expert Google Ads campaign management.",
      link: "/services/digital-marketing/paid-advertising/google-ads"
    },
    {
      icon: Target,
      title: "Social Media Advertising",
      description: "Reaching your target audience with precision-targeted social media ad campaigns.",
      link: "/services/digital-marketing/paid-advertising/social-ads"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Immediate Traffic",
      description: "Drive immediate traffic to your website and landing pages with targeted ad campaigns."
    },
    {
      icon: BarChart,
      title: "Measurable ROI",
      description: "Track your return on investment with detailed analytics and performance metrics."
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach your ideal customers with advanced targeting options based on demographics, interests, and behavior."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <DollarSign className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Target className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Paid Advertising
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Immediate Results, Measurable ROI
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            We create and manage data-driven paid advertising campaigns that deliver immediate results and a measurable return on investment.
          </p>
        </div>
      </section>

      {/* Child Pages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Paid Advertising Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">A Results-Driven Approach to Paid Ads</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {childPages.map((page, index) => (
              <Link key={index} to={page.link}>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 h-full group cursor-pointer shadow-lg hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <page.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://blog.thomasnet.com/hubfs/shutterstock_630306113.jpg" 
              alt="Paid Advertising"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why Invest in Paid Advertising?</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Accelerate Your Growth
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Paid advertising is the fastest way to get your brand in front of your target audience. We help you create and manage campaigns that are optimized for conversions, so you can start seeing results right away.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-sky-500" size={22} />
                  <span className="text-slate-700">{benefit.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Launch Your Campaign?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you create and manage a paid advertising campaign that drives results.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidAdvertising;