import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";

import {defaultConfig} from '../Data/defaultConfig';

function Footer({config=defaultConfig}) {

      const currentYear = new Date().getFullYear();
      
      const scrollToSection = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      };

  
    return (
        <footer className="bg-black border-t border-[#DAA520]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src={config.popcorn_icon_url} 
                    alt="Popcorn" 
                    className="w-10 h-10"
                    loading="lazy"
                    onerror="console.error('Image failed to load:', this.src);"
                  />
                  <span className="font-poppins font-bold text-2xl shimmer-text">Daddy Shines</span>
                </div>
                <p className="text-white/60 mb-6 max-w-sm">
                  Premium artisan popcorn crafted with love. Experience the golden standard of gourmet snacking.
                </p>
                <div className="flex gap-3">
                  {['instagram', 'facebook', 'twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#DAA520] hover:text-black hover:border-[#DAA520] transition-all"
                    >
                      {social === 'instagram' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {social === 'facebook' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                      {social === 'twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-poppins font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Home', href: '#home' },
                    { name: 'About', href: '#about' },
                    { name: 'Order', href: '#order' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-white/60 hover:text-[#DAA520] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-poppins font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href={`mailto:${config.contact_email}`} 
                      className="text-white/60 hover:text-gold transition-colors"
                    >
                      {config.contact_email}
                    </a>
                  </li>
                  <li className="text-white/60">
                    Response within 24 hours
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="w-fit  mx-auto text-white/40 text-sm">
                © {currentYear} Daddy Shines. All rights reserved.
              </p>
              {/* <div className="flex gap-6 text-sm">
                <a href="#" onClick={(e) => e.preventDefault()} className="text-white/40 hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-white/40 hover:text-gold transition-colors">Terms of Service</a>
              </div> */}
            </div>
          </div>
        </footer>
    );
  }
  
  export default Footer;