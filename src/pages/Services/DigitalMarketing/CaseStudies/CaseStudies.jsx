import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart, TrendingUp, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce SEO: 200% Increase in Organic Traffic",
      challenge: "A struggling e-commerce store with low organic visibility and declining sales.",
      solution: "We performed a complete SEO audit, optimized product pages, and built high-quality backlinks.",
      results: "200% increase in organic traffic and a 150% increase in online sales within 6 months."
    },
    {
      title: "Social Media Advertising: 5x Return on Ad Spend",
      challenge: "A local business struggling to reach new customers and generate leads.",
      solution: "We launched a targeted social media advertising campaign on Facebook and Instagram.",
      results: "Achieved a 5x return on ad spend and a 300% increase in qualified leads."
    },
    {
      title: "Content Marketing: From 0 to 100,000 Monthly Visitors",
      challenge: "A new B2B startup with no online presence or brand awareness.",
      solution: "We developed a comprehensive content marketing strategy and created high-quality blog content.",
      results: "Grew organic traffic from 0 to 100,000 monthly visitors in one year."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <BarChart className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <TrendingUp className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Case Studies
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Proven Results, Real-World Success
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Explore our case studies to see how we've helped businesses like yours achieve their marketing goals and drive real results.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4"><strong className="text-slate-700">Challenge:</strong> {study.challenge}</p>
                <p className="text-slate-600 leading-relaxed mb-4"><strong className="text-slate-700">Solution:</strong> {study.solution}</p>
                <p className="text-slate-600 leading-relaxed"><strong className="text-slate-700">Results:</strong> {study.results}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image and Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://trafficthinktank.com/wp-content/uploads/2024/02/seo-case-studies-featured-image.png" 
              alt="Case Studies"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Get a Personalized Consultation</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              See How We Can Help Your Business
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Contact us today for a free consultation and to learn more about how our digital marketing services can help you achieve your business goals. We can provide more detailed case studies relevant to your industry.
            </p>
            <Link to="/contact">
              <button className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                Request a Consultation
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;
