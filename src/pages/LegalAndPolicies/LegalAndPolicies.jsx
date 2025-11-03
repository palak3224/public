import React from 'react';
import { Shield, FileText, AlertTriangle, CircleDollarSign, Cookie } from 'lucide-react';

const policies = [
  {
    id: 'privacy-policy',
    icon: Shield,
    title: 'Privacy Policy',
    content: 'This policy defines our practices regarding data collection, the use of cookies, information from analytics tools, and outlines your rights under the IT Act and GDPR alignment. We are committed to protecting your personal information and ensuring transparency in how we handle your data.'
  },
  {
    id: 'terms-of-use',
    icon: FileText,
    title: 'Terms of Use',
    content: 'These terms govern your use of our website and services. It covers intellectual property rights, limitations of liability, and the acceptable use of our platform. By accessing our website, you agree to abide by these terms.'
  },
  {
    id: 'disclaimer',
    icon: AlertTriangle,
    title: 'Disclaimer',
    content: 'The content provided on our website, especially in the Knowledge Hub and through our tools, is for general informational purposes only. It does not constitute professional advice, and you should not rely on it as such. We disclaim all liability for any actions taken based on the content.'
  },
  {
    id: 'refund-policy',
    icon: CircleDollarSign,
    title: 'Refund & Cancellation Policy',
    content: 'This policy outlines the terms for refunds and cancellations for our paid services, deposits, and subscription models. Please review it carefully before making a purchase.'
  },
  {
    id: 'cookie-policy',
    icon: Cookie,
    title: 'Cookie Policy',
    content: 'This policy explains how we use cookies to enhance your browsing experience. It includes information on the types of cookies we use, why we use them, and how you can manage your consent preferences and opt-out.'
  }
];

const LegalAndPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-80 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.7), rgba(176, 45, 51, 0.7)), url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal & Policies
          </h1>
          <p className="text-lg text-white/90">Our commitment to transparency and compliance.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sticky Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#b02d33' }}>Policies</h2>
              <ul>
                {policies.map((policy) => (
                  <li key={policy.id} className="mb-2">
                    <a 
                      href={`#${policy.id}`}
                      className="flex items-center p-2 rounded-lg hover:bg-red-50"
                      style={{ color: '#b02d33' }}
                    >
                      <policy.icon className="w-5 h-5 mr-3" />
                      {policy.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policy Content */}
          <div className="md:col-span-3">
            {policies.map((policy) => (
              <div key={policy.id} id={policy.id} className="mb-16 scroll-mt-24">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: '#b02d33' }}>
                    <policy.icon className="w-6 h-6 mr-3" />
                    {policy.title}
                  </h3>
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <p>{policy.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAndPolicies;