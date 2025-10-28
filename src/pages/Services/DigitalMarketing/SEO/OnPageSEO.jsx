import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, FileText, Link2, Code } from 'lucide-react';

const OnPageSEO = () => {
  const keySteps = [
    {
      icon: Search,
      title: "Keyword Analysis",
      description: "In-depth research to identify high-value keywords that your target audience is searching for."
    },
    {
      icon: FileText,
      title: "Content & Metadata Optimization",
      description: "Fine-tuning titles, meta descriptions, and content to improve relevance and click-through rates."
    },
    {
      icon: Link2,
      title: "Internal Link Structuring",
      description: "Creating a logical and hierarchical internal linking structure to distribute page authority and improve navigation."
    },
    {
      icon: Code,
      title: "Schema Markup Setup",
      description: "Implementing structured data to help search engines understand your content and display rich snippets."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-16 bg-white/50 rounded-lg p-2">
            <p className='text-black'>&lt;title&gt;Optimized Page Title&lt;/title&gt;</p>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-16 bg-white/50 rounded-lg p-2">
            <p className='text-black'>&lt;meta name="description" content="..."/&gt;</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              On-Page SEO Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Fine-Tuning for Higher Rankings
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            We fine-tune every on-page element — titles, meta descriptions, headings, and internal links — for higher rankings and perfect keyword balance.
          </p>
        </div>
      </section>

      {/* Key Steps Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-slate-800">Key Steps in On-Page SEO</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image and Why it Matters Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ3ETTZg7jlnguYXm7vN4hvZQpWhbKRey6Q&s" 
              alt="On-Page SEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why On-Page SEO Matters</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              The Foundation of Your SEO Strategy
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              On-Page SEO is the practice of optimizing individual web pages to rank higher and earn more relevant traffic in search engines. It's a critical part of any successful SEO strategy because it tells search engines all about your website and how it provides value to visitors.
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
                Ready to Optimize Your Site?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you improve your on-page SEO and climb the search engine rankings.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Optimize My Site
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

export default OnPageSEO;