import React from 'react';
import '../App.css';

import {defaultConfig} from '../Data/defaultConfig';

function About({config=defaultConfig}) {

      const features = [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          ),
          title: "Premium Kernels",
          description: "Only the finest, hand-selected kernels make it into our batches"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
          title: "Made with Love",
          description: "Every batch is crafted with the same care as our family recipe"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          ),
          title: "Perfect Gift",
          description: "Beautifully packaged and ready to delight anyone"
        }
      ];



  return (
        <section id="about" className="relative py-24 bg-cream">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                <span className="inline-block px-4 py-1 bg-gold/20 text-gold-light rounded-full text-sm font-semibold mb-4" style={{ color: '#B8860B' }}>
                  About Us
                </span>
                <h2 
                  id="about-title"
                  className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-black mb-6"
                  style={{ fontFamily: `${config.font_family}, Poppins, sans-serif` }}
                >
                  {config.about_title}
                </h2>
                <p 
                  id="about-description"
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                >
                  {config.about_description}
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  What started in a small kitchen has grown into a passion for sharing the joy of perfect popcorn. 
                  We use only the finest ingredients, time-honored techniques, and a whole lot of heart.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="font-poppins font-bold text-2xl sm:text-3xl text-gold">100%</div>
                    <div className="text-sm text-gray-600">Natural</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="font-poppins font-bold text-2xl sm:text-3xl text-gold">5★</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="font-poppins font-bold text-2xl sm:text-3xl text-gold">1K+</div>
                    <div className="text-sm text-gray-600">Happy Fans</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl text-black mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}

export default About;