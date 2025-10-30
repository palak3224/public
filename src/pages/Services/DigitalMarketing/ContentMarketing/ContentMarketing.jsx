import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Edit, Video, FileText } from 'lucide-react';

const ContentMarketing = () => {
  const services = [
    {
      icon: Edit,
      title: "Blog & Article Writing",
      description: "We create high-quality, SEO-optimized blog posts and articles that attract and engage your target audience."
    },
    {
      icon: Video,
      title: "Video & Infographic Creation",
      description: "We produce engaging videos and infographics that tell your brand's story and drive social shares."
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "We develop a comprehensive content strategy that aligns with your business goals and marketing funnel."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Edit className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Video className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Content Marketing
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Tell Your Story, Build Your Brand
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            We create valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">What We Offer</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
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
              src="https://www.digitalvidya.com/blog/wp-content/uploads/2017/06/Content_marketing_services.webp" 
              alt="Content Marketing"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why Content Marketing?</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Build Trust and Authority with Your Audience
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.
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
                Ready to Start Your Content Marketing?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you create a content marketing strategy that will attract, engage, and convert your target audience.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Get a Free Consultation
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

export default ContentMarketing;
