import React, { useState } from 'react';

export default function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: 'Finance & Tax',
      description: 'I implement seamless ITR & GST compliance solutions with precision and care. Your financial records are managed efficiently, ensuring you meet all regulatory requirements without the hassle. Trust me to handle your tax complexities while you focus on growing your business.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
    },
    {
      title: 'Technology Solutions',
      description: 'I build custom software and websites that perform exceptionally. From responsive web applications to robust backend systems, every solution is crafted with attention to detail and optimized for speed, security, and user experience.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    },
    {
      title: 'Digital Marketing',
      description: 'I create data-driven strategies for online visibility that deliver real results. From SEO optimization to social media campaigns, every strategy is tailored to increase your reach, engage your audience, and drive meaningful conversions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Consultancy & HR',
      description: 'I provide expert guidance for strategic growth and human resource management. Whether you need organizational development, talent acquisition strategies, or HR compliance support, I offer insights that align with your business goals.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f8f8',
      padding: '80px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '80px',
          color: '#b02d33',
          letterSpacing: '-0.5px'
        }}>
          Your Partner in <span style={{ color: '#eb6126' }}>Progress</span>
        </h2>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Left Side - Accordion */}
          <div style={{
            paddingTop: '20px'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  paddingBottom: '28px',
                  marginBottom: '28px'
                }}
              >
                {/* Title Row */}
                <div
                  onClick={() => setActiveIndex(index)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingBottom: activeIndex === index ? '20px' : '0',
                    paddingTop: '8px'
                  }}
                >
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: '600',
                    color: activeIndex === index ? '#eb6126' : '#4a5568',
                    margin: '0',
                    transition: 'color 0.3s ease'
                  }}>
                    {service.title}
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke={activeIndex === index ? '#eb6126' : '#718096'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Description */}
                {activeIndex === index && (
                  <p style={{
                    fontSize: '17px',
                    color: '#4a5568',
                    lineHeight: '1.8',
                    margin: '0',
                    paddingRight: '20px'
                  }}>
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div style={{
            position: 'relative',
            width: '90%',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            {/* Image Overlay with Dots */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px'
            }}>
              {services.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: index === activeIndex ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: index === activeIndex ? '#eb6126' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}