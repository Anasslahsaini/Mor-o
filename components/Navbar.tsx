import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-morco-blue/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="font-display font-bold text-3xl tracking-tighter text-white interactive z-50">
          {BRAND_NAME}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="font-sans text-sm tracking-widest text-white/80 hover:text-white transition-colors uppercase interactive relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 z-50">
          <button className="relative interactive group">
            <ShoppingBag className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-morco-blue text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
          </button>
          
          <button 
            className="md:hidden interactive text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-morco-blue z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="font-display text-4xl text-white font-bold interactive"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;