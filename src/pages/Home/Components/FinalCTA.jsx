import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          className="py-10 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 rounded-2xl sm:rounded-3xl text-center"
          style={{ 
            backgroundColor: '#b02d33',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto'
          }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>

          {/* Description Text */}
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-7 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
            Let's discuss your goals. Get a personalized quote or a free 30-minute consultation with our experts.
          </p>

          {/* CTA Button */}
          <button 
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            style={{ backgroundColor: '#eb6126' }}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
