import React from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



import {defaultConfig} from './Data/defaultConfig';
import Navbar from './Header/Navbar.js';

import Hero from './Main/Hero.js';
import About from './Main/About.js';
import Order from './Main/Order.js';
import Contact from './Main/Contact.js';

import Footer from './Footer/Footer.js';



function App({config=defaultConfig}) {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [currentConfig, setCurrentConfig] = useState(defaultConfig);

      useEffect(() => {
        // Initialize Element SDK
        if (window.elementSdk) {
          window.elementSdk.init({
            defaultConfig,
            onConfigChange: async (newConfig) => {
              config = { ...config, ...newConfig };
              setCurrentConfig({ ...config });
              
              // Update DOM elements directly
              const heroHeadline = document.getElementById('hero-headline');
              if (heroHeadline && config.hero_headline) {
                const words = config.hero_headline.split(' ');
                const lastWord = words.pop();
                heroHeadline.innerHTML = `<span class="text-white">${words.join(' ')}</span><br/><span class="shimmer-text">${lastWord}</span>`;
              }
              
              const heroTagline = document.getElementById('hero-tagline');
              if (heroTagline) heroTagline.textContent = config.hero_tagline || defaultConfig.hero_tagline;
              
              const aboutTitle = document.getElementById('about-title');
              if (aboutTitle) aboutTitle.textContent = config.about_title || defaultConfig.about_title;
              
              const aboutDesc = document.getElementById('about-description');
              if (aboutDesc) aboutDesc.textContent = config.about_description || defaultConfig.about_description;
              
              const zelleInfo = document.getElementById('zelle-info');
              if (zelleInfo) zelleInfo.textContent = config.zelle_info || defaultConfig.zelle_info;
              
              const contactEmail = document.getElementById('contact-email');
              if (contactEmail) {
                contactEmail.textContent = config.contact_email || defaultConfig.contact_email;
                contactEmail.href = `mailto:${config.contact_email || defaultConfig.contact_email}`;
              }
            },
            mapToCapabilities: (cfg) => ({
              recolorables: [
                {
                  get: () => cfg.background_color || defaultConfig.background_color,
                  set: (value) => {
                    config.background_color = value;
                    window.elementSdk.setConfig({ background_color: value });
                  }
                },
                {
                  get: () => cfg.secondary_color || defaultConfig.secondary_color,
                  set: (value) => {
                    config.secondary_color = value;
                    window.elementSdk.setConfig({ secondary_color: value });
                  }
                },
                {
                  get: () => cfg.text_color || defaultConfig.text_color,
                  set: (value) => {
                    config.text_color = value;
                    window.elementSdk.setConfig({ text_color: value });
                  }
                },
                {
                  get: () => cfg.primary_color || defaultConfig.primary_color,
                  set: (value) => {
                    config.primary_color = value;
                    window.elementSdk.setConfig({ primary_color: value });
                  }
                },
                {
                  get: () => cfg.accent_color || defaultConfig.accent_color,
                  set: (value) => {
                    config.accent_color = value;
                    window.elementSdk.setConfig({ accent_color: value });
                  }
                }
              ],
              borderables: [],
              fontEditable: {
                get: () => cfg.font_family || defaultConfig.font_family,
                set: (value) => {
                  config.font_family = value;
                  window.elementSdk.setConfig({ font_family: value });
                }
              },
              fontSizeable: undefined
            }),
            mapToEditPanelValues: (cfg) => new Map([
              ["hero_headline", cfg.hero_headline || defaultConfig.hero_headline],
              ["hero_tagline", cfg.hero_tagline || defaultConfig.hero_tagline],
              ["about_title", cfg.about_title || defaultConfig.about_title],
              ["about_description", cfg.about_description || defaultConfig.about_description],
              ["zelle_info", cfg.zelle_info || defaultConfig.zelle_info],
              ["contact_email", cfg.contact_email || defaultConfig.contact_email]
            ])
          });
        }
      }, []);




  return (
    <div className="w-full min-h-full bg-black overflow-auto">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} config={currentConfig} />
      <main>
        <Hero config={currentConfig} />
        <About config={currentConfig} />
        <Order config={currentConfig} />
        <Contact config={currentConfig} />
      </main>
      <Footer config={currentConfig} />
    </div>
  );
}

export default App;
