import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenSquare, Link2, Users, Award } from 'lucide-react';

const OffPageSEO = () => {
  const tactics = [
    {
      icon: PenSquare,
      title: "Guest Posting & Outreach",
      description: "Securing high-quality backlinks from authoritative websites in your industry through strategic outreach and content placement."
    },
    {
      icon: Link2,
      title: "Industry-Specific Backlinks",
      description: "Acquiring relevant backlinks from industry-specific directories, forums, and publications to enhance your topical authority."
    },
    {
      icon: Users,
      title: "PR & Influencer Collaborations",
      description: "Leveraging relationships with influencers and media outlets to earn valuable mentions and links."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Off-Page SEO & Link Building
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Building Trust and Authority
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            We build credible backlinks through ethical, white-hat practices — improving trust and authority for your domain.
          </p>
        </div>
      </section>

      {/* Tactics Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Tactics</h2>
            <h3 className="text-4xl font-bold text-slate-800">Ethical & Effective Link Building</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tactics.map((tactic, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <tactic.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {tactic.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {tactic.description}
                </p>
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
              src="https://rankmybiz.co/wp-content/uploads/2022/12/off-page-seo.png" 
              alt="Off-Page SEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why Off-Page SEO is Important</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Building Your Digital Reputation
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Off-page SEO helps build your website's authority and reputation. By acquiring high-quality backlinks, you signal to search engines that your content is valuable and trustworthy, which can lead to higher rankings and more organic traffic.
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
                Ready to Build Your Authority?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you build a strong backlink profile and improve your domain authority.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Start Link Building
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

export default OffPageSEO;