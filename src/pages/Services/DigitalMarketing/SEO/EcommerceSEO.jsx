import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShoppingCart, Code, Search, Zap } from 'lucide-react';

const EcommerceSEO = () => {
  const workIncludes = [
    {
      icon: Search,
      title: "Product Keyword Mapping",
      description: "Identifying and mapping the best keywords for your product pages to attract high-intent buyers."
    },
    {
      icon: Code,
      title: "Rich Snippets & Schema",
      description: "Implementing structured data to create eye-catching rich snippets that improve click-through rates."
    },
    {
      icon: Zap,
      title: "Technical Fixes for Crawl Depth",
      description: "Optimizing your site structure to ensure search engines can easily find and index all of your product pages."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <ShoppingCart className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <Code className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              E-commerce SEO Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Product Visibility and Revenue Growth
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            E-commerce SEO focuses on product visibility and revenue growth. We optimize catalogs, product pages, and structured data for higher discovery and conversions.
          </p>
        </div>
      </section>

      {/* Work Includes Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Work Includes</h2>
            <h3 className="text-4xl font-bold text-slate-800">How We Optimize Your Store</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workIncludes.map((item, index) => (
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4btubpPysqUMpT4gzHQZ6yAEFe6fLX9gEmg&s" 
              alt="E-commerce SEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Why E-commerce SEO is Important</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Drive More Sales with Organic Traffic
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              E-commerce SEO helps you attract customers who are actively searching for your products. By optimizing your product pages and catalog, you can increase your visibility in search results and drive more organic traffic to your store.
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
                Ready to Rank Your Store?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you optimize your e-commerce store and increase your organic sales.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Rank My Store
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

export default EcommerceSEO;