import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function FeaturedInsights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      title: "Latest ITR Due Dates for FY 2025-26",
      date: "October 5, 2025",
      thumbnail: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop",
      category: "Tax & Finance"
    },
    {
      title: "Top 5 SEO Trends for 2026",
      date: "October 1, 2025",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "GST Compliance Checklist for Businesses",
      date: "September 28, 2025",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      category: "Tax & Finance"
    },
    {
      title: "Building Scalable Web Applications in 2025",
      date: "September 25, 2025",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      category: "Technology"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 2; i++) {
      posts.push(blogPosts[(currentIndex + i) % blogPosts.length]);
    }
    return posts;
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span style={{ color: '#b02d33' }}>From Our </span>
            <span style={{ color: '#eb6126' }}>Knowledge Hub</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#eb6126' }}></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {getVisiblePosts().map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg border-2"
                style={{ borderColor: index % 2 === 0 ? '#b02d33' : '#eb6126' }}
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: index % 2 === 0 ? '#b02d33' : '#eb6126' }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border-2 bg-white"
              style={{ borderColor: '#b02d33', color: '#b02d33' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: currentIndex === index ? '#b02d33' : '#e5e7eb'
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border-2 bg-white"
              style={{ borderColor: '#eb6126', color: '#eb6126' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}