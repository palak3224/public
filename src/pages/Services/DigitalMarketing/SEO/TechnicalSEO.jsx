import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Smartphone, FileCode, Shield, Code } from 'lucide-react';

const TechnicalSEO = () => {
  const focusAreas = [
    {
      icon: Zap,
      title: "Site Speed & Mobile Usability",
      description: "Optimizing for lightning-fast load times and a flawless mobile experience to improve user engagement and rankings."
    },
    {
      icon: FileCode,
      title: "Indexing Control",
      description: "Managing sitemaps and robots.txt to ensure search engines can efficiently crawl and index your most important pages."
    },
    {
      icon: Shield,
      title: "Security & HTTPS Compliance",
      description: "Implementing robust security protocols and ensuring HTTPS compliance to build trust with users and search engines."
    },
    {
      icon: Code,
      title: "Structured Data Improvements",
      description: "Enhancing schema markup to help search engines understand your content and improve your visibility in search results."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-16 bg-white/50 rounded-lg p-2 font-mono text-xs">
            <p className='text-black'>&lt;!-- Core Web Vitals: OK --&gt;</p>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-16 bg-white/50 rounded-lg p-2 font-mono text-xs">
            <p className='text-black'>&lt;!-- Mobile Usability: Pass --&gt;</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Technical SEO Audits & Implementation
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Enhancing Performance & Core Web Vitals
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Our technical SEO audits uncover indexing, speed, and crawl issues that impact ranking. We implement fixes to enhance performance and Core Web Vitals.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Focus</h2>
            <h3 className="text-4xl font-bold text-slate-800">A Diagnostic Approach to Technical SEO</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 shadow-lg`}>
                  <area.icon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image and Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/647e0023b20d25b22fa1f824_Technical%20SEO.webp" 
              alt="Technical SEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why Technical SEO is Crucial</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              A Strong Foundation for SEO Success
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Technical SEO ensures that your website can be efficiently crawled and indexed by search engines. A technically sound website provides a better user experience, which can lead to higher rankings and more organic traffic.
            </p>
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
                Ready to Improve Your Site's Health?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us perform a technical audit to identify and fix issues that are holding your website back.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Run a Technical Audit
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

export default TechnicalSEO;