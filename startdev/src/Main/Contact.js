import React from 'react';
import '../App.css';

import {defaultConfig} from '../Data/defaultConfig';
import { useState, useEffect } from 'react';


function Contact({config=defaultConfig}) {

      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      };


  return (
       <section id="contact" className="relative py-24 bg-[#FFFEF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <span className="w-fit inline-block px-4 py-1 bg-[#DAA520]/20 rounded-full text-sm font-semibold mb-4" style={{ color: '#B8860B' }}>
                  Get in Touch
                </span>
                <h2 
                  className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-black mb-6"
                  style={{ fontFamily: `${config.font_family}, Poppins, sans-serif` }}
                >
                  Let's <span className="text-[#DAA520]">Connect</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Have questions about our popcorn or want to place a special order? 
                  We'd love to hear from you!
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#DAA520]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email us at</p>
                      <a 
                        id="contact-email"
                        href={`mailto:${config.contact_email}`} 
                        className="text-black font-semibold hover:text-[#DAA520] transition-colors"
                      >
                        {config.contact_email}
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#DAA520]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Response time</p>
                      <p className="text-black font-semibold">Within 24 hours</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="pt-6">
                    <p className="text-sm text-gray-500 mb-4">Follow us</p>
                    <div className="flex gap-3">
                      {['instagram', 'facebook', 'twitter'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#DAA520] hover:bg-[#DAA520] hover:text-black transition-all"
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
                </div>
              </div>

              {/* Contact Form */}
              {/* <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-poppins font-semibold text-2xl text-black mb-6">Send us a message</h3>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all text-black"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all text-black"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all resize-none text-black"
                      placeholder="Tell us about your order or question..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-black font-bold rounded-xl hover:bg-gold-light transition-all gold-glow-hover"
                  >
                    Send Message
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </section>
  );
}

export default Contact;