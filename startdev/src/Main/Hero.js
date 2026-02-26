import React from 'react';
import '../App.css';

import {defaultConfig} from '../Data/defaultConfig';


function Hero({config=defaultConfig}) {

      const scrollToOrder = (e) => {
        e.preventDefault();
        document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
      };


  return (
        <section id="home" className="relative min-h-screen flex items-center justify-center popcorn-pattern overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
          </div>

          <div className="w-fit relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
            {/* Badge */}
            <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-[#DAA520]/10 border border-[#DAA520]/30 rounded-full mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse"></span>
              <span className="w-fit text-[#DAA520] text-sm font-medium">Premium Quality</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-headline"
              className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s', fontFamily: `${config.font_family}, Poppins, sans-serif` }}
            >
              <span className="text-white">{config.hero_headline?.split(' ').slice(0, -1).join(' ') || 'Premium Artisan'}</span>
              <br />
              <span className="shimmer-text">{config.hero_headline?.split(' ').slice(-1)[0] || 'Popcorn'}</span>
            </h1>

            {/* Tagline */}
            <p 
              id="hero-tagline"
              className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {config.hero_tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="#order"
                onClick={scrollToOrder}
                className="w-fit px-8 py-4 bg-[#DAA520] text-black font-bold text-lg rounded-full hover:bg-[#FFD700] transition-all transform hover:scale-105 gold-glow-hover flex items-center gap-2"
              >
                <img 
                  src={config.popcorn_icon_url} 
                  alt="Popcorn" 
                  className="w-5 h-5"
                  loading="lazy"
                  onerror="console.error('Image failed to load:', this.src);"
                />
                Order Now
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-fit px-8 py-4 border-2 border-[#DAA520]/50 text-[#DAA520] font-semibold text-lg rounded-full hover:bg-[#DAA520]/10 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Decorative Popcorn */}
            {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 opacity-50">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gold rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div> */}
          </div>
        </section>
  );
}

export default Hero;