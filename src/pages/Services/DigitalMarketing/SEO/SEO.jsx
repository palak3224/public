import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Sliders, Share2, Store, MapPin, BarChart3, Zap, CheckCircle } from 'lucide-react';

const SEO = () => {
  const childPages = [
    {
      icon: Sliders,
      title: "On-Page SEO",
      description: "Optimizing individual web pages to rank higher and earn more relevant traffic.",
      link: "/services/digital-marketing/seo/on-page-seo"
    },
    {
      icon: Search,
      title: "Technical SEO",
      description: "Improving the technical aspects of a website to help search engines crawl and index it more effectively.",
      link: "/services/digital-marketing/seo/technical-seo"
    },
    {
      icon: Share2,
      title: "Off-Page SEO",
      description: "Building a website's authority and reputation through link building and other external signals.",
      link: "/services/digital-marketing/seo/off-page-seo"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Increasing visibility for businesses that serve a specific geographic area.",
      link: "/services/digital-marketing/seo/local-seo"
    },
    {
      icon: Store,
      title: "E-commerce SEO",
      description: "Driving more organic traffic to your online store and product pages.",
      link: "/services/digital-marketing/seo/ecommerce-seo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <span className="absolute top-1/4 left-1/4 text-white/50 text-2xl font-bold">Keywords</span>
          <span className="absolute top-1/2 left-1/2 text-white/50 text-4xl font-bold">Analytics</span>
          <span className="absolute bottom-1/4 right-1/4 text-white/50 text-3xl font-bold">Ranking</span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Search Engine Optimization
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Get Found Faster
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Get found faster with advanced SEO strategies designed for long-term results. We optimize your website structure, content, and authority to help you outrank competitors on Google.
          </p>
        </div>
      </section>

      {/* Child Pages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our SEO Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">A Comprehensive Approach to SEO</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Image and Dashboard Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://www.reliablesoft.net/wp-content/uploads/2013/02/seo.jpg" 
              alt="SEO Strategy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Live Performance Tracking</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Monitor Your SEO Performance in Real-Time
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Our live performance tracking dashboard gives you a transparent view of your SEO progress. Track keyword rankings, organic traffic, and other key metrics to see the impact of our strategies.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">Keyword ranking updates</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">Organic traffic monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">Backlink profile analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">Competitor tracking</span>
              </li>
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
                Ready to Climb the Ranks?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us analyze your website and provide a comprehensive SEO audit, free of charge.
              </p>
              <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                Request a Free SEO Audit
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;