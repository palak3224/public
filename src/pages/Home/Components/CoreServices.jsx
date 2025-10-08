import React, { useState, useEffect } from 'react';

export default function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      padding: isMobile ? '40px 20px' : '80px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <h2 style={{
          fontSize: isMobile ? '32px' : '48px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '80px',
          color: '#b02d33',
          letterSpacing: '-0.5px',
          lineHeight: '1.2'
        }}>
          Your Partner in <span style={{ color: '#eb6126' }}>Progress</span>
        </h2>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: isMobile ? '40px' : '60px',
          alignItems: 'start'
        }}>
          {/* Right Side - Image (shown first on mobile) */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '350px' : '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            order: isMobile ? -1 : 1
          }}>
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.3s ease'
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

          {/* Left Side - Accordion */}
          <div style={{
            paddingTop: isMobile ? '0' : '20px',
            order: isMobile ? 1 : 0
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  paddingBottom: isMobile ? '20px' : '28px',
                  marginBottom: isMobile ? '20px' : '28px'
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
                    fontSize: isMobile ? '20px' : '26px',
                    fontWeight: '600',
                    color: activeIndex === index ? '#eb6126' : '#4a5568',
                    margin: '0',
                    transition: 'color 0.3s ease'
                  }}>
                    {service.title}
                  </h3>
                  <svg
                    width={isMobile ? '20' : '24'}
                    height={isMobile ? '20' : '24'}
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
                    fontSize: isMobile ? '15px' : '17px',
                    color: '#4a5568',
                    lineHeight: '1.8',
                    margin: '0',
                    paddingRight: isMobile ? '0' : '20px'
                  }}>
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}