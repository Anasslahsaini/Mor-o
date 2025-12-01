import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-morco-dark pt-32 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Big M Background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="font-display font-bold text-[40vw] text-white">M</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              JOIN THE MISSION.
            </h2>
            <div className="flex border-b border-white/30 pb-4 max-w-md">
              <input 
                type="email" 
                placeholder="ENTER EMAIL COORDINATES" 
                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none font-sans tracking-widest uppercase text-sm"
              />
              <button className="text-white font-bold uppercase text-sm hover:text-morco-ice interactive">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm text-gray-400 uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-morco-ice transition-colors font-display text-lg interactive">Shop</a></li>
              <li><a href="#" className="text-white hover:text-morco-ice transition-colors font-display text-lg interactive">Lookbook</a></li>
              <li><a href="#" className="text-white hover:text-morco-ice transition-colors font-display text-lg interactive">About Us</a></li>
              <li><a href="#" className="text-white hover:text-morco-ice transition-colors font-display text-lg interactive">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm text-gray-400 uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-sans interactive">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-sans interactive">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-sans interactive">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
          <h1 className="font-display font-bold text-9xl md:text-[12rem] leading-none tracking-tighter text-white -ml-2 md:-ml-4 opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default select-none">
            {BRAND_NAME.replace('.', '')}
          </h1>
          <div className="text-right mt-8 md:mt-0">
            <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mb-2">
              © 2025 Morço Inc. <br/>
              Est. Earth / Orbit
            </p>
            <p className="font-mono text-[10px] text-gray-600 uppercase">
              Powered by WooCommerce Headless API
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
