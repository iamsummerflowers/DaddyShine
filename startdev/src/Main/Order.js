import React from 'react';
import '../App.css';

import {defaultConfig} from '../Data/defaultConfig';


function Order({config=defaultConfig}) {

      const products = [
        {
          name: "Classic Butter",
          description: "Rich, creamy butter perfection",
          price: "$12",
          popular: true
        },
        {
          name: "Caramel Crunch",
          description: "Sweet caramel with a satisfying crunch",
          price: "$14",
          popular: false
        },
        {
          name: "Cheesy Delight",
          description: "Bold, savory cheese flavor",
          price: "$12",
          popular: false
        },
        {
          name: "Party Pack",
          description: "Mix of all three flavors",
          price: "$32",
          popular: true
        }
      ];


  return (
        <section id="order" className="relative py-24 bg-dark-gray">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #DAA520 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4">
                Order Now
              </span>
              <h2 
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
                style={{ fontFamily: `${config.font_family}, Poppins, sans-serif` }}
              >
                Choose Your <span className="text-gold">Flavor</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Select your favorites and place your order via Zelle. Fast, easy, and delicious!
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl transition-all hover:-translate-y-2 ${
                    product.popular 
                      ? 'bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold' 
                      : 'bg-black/50 border border-white/10 hover:border-gold/50'
                  }`}
                >
                  {product.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-black text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  )}
                  <img 
                    src={config.popcorn_icon_url} 
                    alt="Popcorn" 
                    className="w-12 h-12 mb-4"
                    loading="lazy"
                    onerror="console.error('Image failed to load:', this.src);"
                  />
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">{product.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{product.description}</p>
                  <div className="font-poppins font-bold text-2xl text-gold">{product.price}</div>
                </div>
              ))}
            </div>

            {/* Payment Info */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-black/50 border-2 border-gold rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="font-poppins font-bold text-2xl text-white mb-2">Pay with Zelle</h3>
                <p className="text-white/70 mb-6">Quick, secure, and easy payment</p>
                
                <div className="bg-gold/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gold mb-2">Send payment to:</p>
                  <p id="zelle-info" className="font-mono text-lg text-white font-semibold">{config.zelle_info}</p>
                </div>

                <div className="text-left space-y-3 text-white/70">
                  <p className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">1</span>
                    </span>
                    Select your favorite flavors and note the total
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">2</span>
                    </span>
                    Send payment via Zelle with your order details in the memo
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">3</span>
                    </span>
                    Include your name, address, and contact info
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">4</span>
                    </span>
                    Sit back and wait for your delicious popcorn to arrive!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Order;