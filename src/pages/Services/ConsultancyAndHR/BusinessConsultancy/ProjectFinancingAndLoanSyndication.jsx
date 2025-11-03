
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Handshake, FileCheck } from 'lucide-react';

const ProjectFinancingAndLoanSyndication = () => {
  const services = [
    {
      icon: Landmark,
      title: "Project Financing",
      description: "We help you secure the financing you need for your projects, from initial planning to financial closure."
    },
    {
      icon: Handshake,
      title: "Loan Syndication",
      description: "Arranging and managing loan syndication to fund large-scale projects with multiple lenders."
    },
    {
      icon: FileCheck,
      title: "Debt Restructuring",
      description: "Expert advice on debt restructuring to improve your financial stability and cash flow."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Landmark className="text-indigo-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Handshake className="text-indigo-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Project Financing & Loan Syndication
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Funding Your Vision
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            We specialize in project financing and loan syndication, helping you secure the capital you need to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">How We Can Help</h3>
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
              src="https://navi.com/blog/wp-content/uploads/2022/06/Loan-Syndication-1.jpg" 
              alt="Project Financing"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">Why Work With Us</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Your Partner in Project Financing
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Securing financing for large projects can be complex. Our team has the expertise and network to guide you through the process, from structuring the deal to financial closure.
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
                Ready to Fund Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you secure the financing you need for your next big project. Contact our experts today.
              </p>
              <Link to="/contact">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Fund My Project
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

export default ProjectFinancingAndLoanSyndication;
