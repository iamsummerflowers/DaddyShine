import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import {defaultConfig} from '../Data/defaultConfig';
import { useState, useEffect } from 'react';


function Navbar({ mobileMenuOpen, setMobileMenuOpen, config=defaultConfig }) {

      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Order', href: '#order' },
        { name: 'Contact', href: '#contact' }
      ];

      const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      };

  return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
                <img 
                  src={config.popcorn_icon_url} 
                  alt="Popcorn" 
                  className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110"
                  loading="lazy"
                  onerror="console.error('Image failed to load:', this.src); this.style.background='#DAA520'; this.alt='Popcorn icon';"
                />
                <span className="font-poppins font-bold text-xl md:text-2xl shimmer-text">
                  Daddy Shines
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-medium text-white/80 hover:text-gold transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <a
                  href="#order"
                  onClick={(e) => scrollToSection(e, '#order')}
                  className="px-5 py-2 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all gold-glow-hover"
                >
                  Order Now
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gold"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
            <div className="bg-dark-gray/95 backdrop-blur-md px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block py-2 text-white/80 hover:text-gold transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                onClick={(e) => scrollToSection(e, '#order')}
                className="block w-full text-center px-5 py-3 bg-gold text-black font-semibold rounded-full mt-4"
              >
                Order Now
              </a>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;