
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BarChart, Target } from 'lucide-react';

const BusinessPlanDevelopment = () => {
  const services = [
    {
      icon: FileText,
      title: "Comprehensive Business Plans",
      description: "We create detailed business plans that cover every aspect of your business, from marketing to financials."
    },
    {
      icon: BarChart,
      title: "Financial Projections",
      description: "Developing realistic financial projections to guide your business and attract investors."
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "In-depth market analysis to identify opportunities and create a winning strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <FileText className="text-indigo-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <BarChart className="text-indigo-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Business Plan Development
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your Roadmap to Success
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            A well-crafted business plan is your roadmap to success. We help you create a comprehensive business plan that will guide your decisions and attract investors.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">What We Include in Your Business Plan</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
              alt="Business Plan Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Why a Business Plan is Crucial</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              A Blueprint for Your Vision
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              A business plan is more than just a document; it's a blueprint for your vision. It helps you stay focused, make informed decisions, and communicate your vision to stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Business Plan?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you create a business plan that will set you up for success. Get in touch with us today.
              </p>
              <Link to="/contact">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Create My Business Plan
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

export default BusinessPlanDevelopment;
