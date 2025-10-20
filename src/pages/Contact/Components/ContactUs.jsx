import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, FileText } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    'Tax Consultation',
    'GST Filing & Returns',
    'Advance Tax Calculation',
    'Business Registration',
    'Software Development',
    'Digital Marketing',
    'HR Consultancy',
    'Other'
  ];

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: 'Corporate Address',
      details: ['Amool Enterprises', '1st Floor, Adarsh Nagar', 'Yavatmal – 445001', 'Maharashtra, India']
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone',
      details: ['+91-9673777456'],
      link: 'tel:+919673777456'
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email',
      details: ['info@amoolenterprises.com'],
      link: 'mailto:info@amoolenterprises.com'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map Background */}
      <div 
        className="relative h-80 flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(176, 45, 51, 0.85), rgba(176, 45, 51, 0.85)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            We'd Love to Hear from You
          </h1>
          <p className="text-xl text-white opacity-90">
            Whether you're ready to start a project or simply want to learn more about our services, our teams are one message away.
          </p>
        </div>
      </div>

      {/* Main Content Section - Two Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Panel - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#b02d33' }}>
                Send Us a Message
              </h2>
              <div className="w-20 h-1 rounded" style={{ backgroundColor: '#eb6126' }}></div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  onFocus={(e) => e.target.style.borderColor = '#b02d33'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#b02d33'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#b02d33'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                  onFocus={(e) => e.target.style.borderColor = '#b02d33'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
                  onFocus={(e) => e.target.style.borderColor = '#b02d33'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                style={{ backgroundColor: '#b02d33' }}
                onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#eb6126')}
                onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#b02d33')}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Corporate Info & Locations */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer"
                  style={{
                    transform: hoveredCard === info.id ? 'translateX(8px)' : 'translateX(0)',
                    borderLeft: hoveredCard === info.id ? '4px solid #eb6126' : '4px solid #b02d33'
                  }}
                  onMouseEnter={() => setHoveredCard(info.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                      style={{ 
                        backgroundColor: hoveredCard === info.id ? '#eb6126' : '#b02d33'
                      }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#b02d33' }}>
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-700 hover:underline block"
                          style={{ color: hoveredCard === info.id ? '#eb6126' : undefined }}
                        >
                          {info.details[0]}
                        </a>
                      ) : (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 leading-relaxed">
                            {detail}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button
                className="w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
                style={{ backgroundColor: '#eb6126' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#b02d33';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#eb6126';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Consultation Call</span>
              </button>

              <button
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
                style={{ 
                  backgroundColor: 'white',
                  color: '#b02d33',
                  border: '2px solid #b02d33'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#b02d33';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#b02d33';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <FileText className="w-5 h-5" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800"
                  alt="Office location map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-lg font-semibold">Yavatmal, Maharashtra</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center" style={{ backgroundColor: '#fff5f2' }}>
                <p className="text-sm font-semibold" style={{ color: '#b02d33' }}>
                  Visit Our Office in Yavatmal, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CTA Section */}
      <div className="py-16" style={{ backgroundColor: '#b02d33' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how Amool Enterprises can help transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919673777456"
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              style={{ backgroundColor: '#eb6126', color: 'white' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#b02d33';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#eb6126';
                e.target.style.color = 'white';
              }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a 
              href="mailto:info@amoolenterprises.com"
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              style={{ 
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#b02d33';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}