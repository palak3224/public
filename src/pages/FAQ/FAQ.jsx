import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'Services',
    questions: [
      {
        q: 'What industries does Amool serve?',
        a: 'We serve a wide range of industries, including IT, Finance, Startups, Manufacturing, and Retail.'
      },
      {
        q: 'Do you provide customized software or pre-built modules?',
        a: 'All our software solutions are fully customized based on client goals to ensure they meet the specific needs of your business.'
      }
    ]
  },
  {
    category: 'Payments & Process',
    questions: [
      {
        q: 'What are project timelines?',
        a: 'Project timelines vary depending on the scope and complexity of the project. On average, a project takes between 6 to 12 weeks to complete.'
      },
      {
        q: 'How can I get a cost estimate?',
        a: 'You can get a cost estimate by filling out our Quick Quote Form on the contact page. We will get back to you with a detailed proposal.'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        q: 'Do you offer post-launch support?',
        a: 'Yes, we offer 24x7 support and maintenance on all our projects to ensure they continue to run smoothly after launch.'
      }
    ]
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium" style={{ color: '#b02d33' }}>{faq.q}</h3>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          style={{ color: '#eb6126' }}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/90">Find quick answers to your questions about our services, process, and support.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderColor: '#b02d33' }}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {filteredFaqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <h2 className="text-2xl font-bold p-6" style={{ color: '#b02d33', backgroundColor: '#fff5f2' }}>
                {category.category}
              </h2>
              {category.questions.map((faq, qIndex) => (
                <AccordionItem
                  key={qIndex}
                  faq={faq}
                  isOpen={openIndex === `${catIndex}-${qIndex}`}
                  onClick={() => handleToggle(`${catIndex}-${qIndex}`)}
                />
              ))}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              <p>No questions found. Try a different search term.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Didn’t Find Your Answer?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Our team is here to help. Contact us for any further questions.
          </p>
          <Link to="/contact">
            <button 
              className="px-8 py-3 rounded-lg text-white font-medium text-lg transition-colors"
              style={{ backgroundColor: '#eb6126' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d55520'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#eb6126'}
            >
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;