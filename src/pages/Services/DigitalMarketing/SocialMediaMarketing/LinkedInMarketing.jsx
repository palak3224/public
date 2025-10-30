import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Send, UserCheck } from 'lucide-react';

const LinkedInMarketing = () => {
  const approach = [
    {
      icon: UserCheck,
      title: "Profile Optimization",
      description: "Optimizing your LinkedIn profile to attract and engage your target audience."
    },
    {
      icon: Send,
      title: "Sponsored InMail Campaigns",
      description: "Running targeted Sponsored InMail campaigns to reach key decision-makers directly."
    },
    {
      icon: Briefcase,
      title: "Thought Leadership Content Strategy",
      description: "Developing and executing a content strategy that establishes you as a thought leader in your industry."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <Briefcase className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <Send className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              LinkedIn Marketing for B2B
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Establish Authority and Generate Leads
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            B2B marketing thrives on LinkedIn — we craft personalized campaigns that generate leads and establish authority.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-800">How We Grow Your B2B Network</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
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
              src="https://media.licdn.com/dms/image/v2/D4D12AQEli5TQjmuGFQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1675247083720?e=2147483647&v=beta&t=0byMluff1jZp5M5lLbbMtibnT28eesCl20K3FQlvCKc" 
              alt="LinkedIn Marketing"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why LinkedIn for B2B?</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Connect with Professionals and Decision-Makers
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              LinkedIn is the world's largest professional network, making it the ideal platform for B2B marketing. We help you connect with key decision-makers, generate high-quality leads, and build your brand's authority in your industry.
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
                Ready to Grow Your B2B Network?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you leverage the power of LinkedIn to generate leads and grow your business.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Grow My B2B Network
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

export default LinkedInMarketing;