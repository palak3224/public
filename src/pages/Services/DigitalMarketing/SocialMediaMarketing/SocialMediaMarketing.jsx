import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BarChart3, Megaphone, ThumbsUp, Linkedin, Instagram } from 'lucide-react';

const SocialMediaMarketing = () => {
  const subpages = [
    {
      icon: Megaphone,
      title: "Social Media Strategy",
      description: "Developing a comprehensive social media strategy that aligns with your business goals and target audience.",
      link: "/services/digital-marketing/social-media/strategy"
    },
    {
      icon: Instagram,
      title: "Facebook & Instagram Marketing",
      description: "Creating and managing engaging content and ad campaigns on the world's largest social media platforms.",
      link: "/services/digital-marketing/social-media/facebook-instagram"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Marketing",
      description: "Building your professional brand, generating leads, and establishing thought leadership on LinkedIn.",
      link: "/services/digital-marketing/social-media/linkedin"
    }
  ];

  const sections = [
    {
      icon: Users,
      title: "Consistent Branding",
      description: "Ensuring your brand's voice and visual identity are consistent across all social media platforms."
    },
    {
      icon: BarChart3,
      title: "KPIs and Analytics Dashboards",
      description: "Tracking key performance indicators and providing detailed analytics to measure the success of your campaigns."
    },
    {
      icon: ThumbsUp,
      title: "Audience Growth Campaigns",
      description: "Implementing strategies to grow your follower base and build a community of loyal customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <ThumbsUp className="text-blue-500" size={32} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Users className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30">
              Social Media Marketing (SMM)
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Turning Followers into Customers
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-12">
            Amool Enterprises shapes brand stories across social platforms — building communities, driving engagement, and turning followers into customers.
          </p>
        </div>
      </section>

      {/* Subpages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-800">Specialized Social Media Services</h3>
          </div>
          <div className="flex flex-col gap-6">
            {subpages.map((page, index) => (
              <Link key={index} to={page.link}>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-8">
                  <div className={`w-20 h-20 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <page.icon className="text-white" size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{page.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{page.description}</p>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight className="text-sky-500" size={24} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              A Strategic Approach to Social Media
            </h3>
            <ul className="space-y-6">
              {sections.map((section, index) => (
                <li key={index} className="p-6 border-l-4 border-sky-500 bg-sky-50 rounded-lg flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{section.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{section.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg" 
              alt="Social Media Marketing"
              className="w-full h-full object-cover"
            />
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
                Ready to Plan Your Social Strategy?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you create a social media strategy that will grow your brand and engage your audience.
              </p>
              <Link to="/contact">
                <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
                  Plan My Social Strategy
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

export default SocialMediaMarketing;