import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          className="py-16 px-8 sm:px-12 rounded-3xl text-center"
          style={{ 
            backgroundColor: '#b02d33',
            width: '70%',
            margin: '0 auto'
          }}
        >
          {/* Heading */}
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          {/* Description Text */}
          <p className="text-xl text-white mb-8 leading-relaxed">
            Let's discuss your goals. Get a personalized quote or a free 30-minute consultation with our experts.
          </p>

          {/* CTA Button */}
          <button 
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-lg text-white"
            style={{ backgroundColor: '#eb6126' }}
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}