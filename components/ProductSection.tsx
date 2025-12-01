import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, ScanLine, Heart, Eye } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="shop" className="relative py-24 z-10 overflow-hidden bg-black/90">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="w-full h-full" 
              style={{ 
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}>
         </div>
      </div>

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 mb-3">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-morco-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-morco-blue"></span>
              </span>
             <span className="text-white/60 font-mono text-xs tracking-[0.2em] uppercase">Sector 01 // Flight Gear</span>
           </div>
           <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter">
            LATEST DROPS.
           </h2>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block h-px w-24 bg-white/20"></div>
          <button 
            onClick={() => scroll('left')} 
            className="p-4 border border-white/20 hover:bg-morco-blue hover:border-morco-blue text-white transition-all rounded-full group interactive"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1"/>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="p-4 border border-white/20 hover:bg-morco-blue hover:border-morco-blue text-white transition-all rounded-full group interactive"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1"/>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-20 pb-16 snap-x snap-mandatory hide-scrollbar items-stretch"
      >
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[85vw] md:min-w-[450px] snap-center group relative h-[600px] flex-shrink-0 perspective-container select-none interactive"
          >
             <div className="relative w-full h-full bg-[#000a1f] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-morco-blue/50 group-hover:shadow-[0_0_30px_rgba(0,35,102,0.3)]">
                
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"/>
                </div>

                {/* WooCommerce Style Action Buttons (Top Right) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <button className="p-3 bg-black/50 backdrop-blur-md text-white hover:bg-morco-blue transition-colors rounded-full border border-white/10" title="Add to Wishlist">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-black/50 backdrop-blur-md text-white hover:bg-morco-blue transition-colors rounded-full border border-white/10" title="Quick View">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* HUD Elements */}
                <div className="absolute top-0 left-0 p-6 w-full flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                   <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Class</span>
                      <span className="font-sans text-xs font-bold border border-white/30 px-2 py-1 text-white bg-black/30 backdrop-blur-sm self-start">
                        {product.category}
                      </span>
                   </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="overflow-hidden mb-2">
                     <h3 className="font-display font-bold text-3xl text-white leading-none uppercase transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                       {product.name}
                     </h3>
                   </div>
                   
                   <div className="flex items-end justify-between mb-6">
                      <p className="font-sans text-gray-400 text-sm max-w-[70%] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {product.description}
                      </p>
                      <span className="font-display font-bold text-2xl text-morco-blue">
                        ${product.price}
                      </span>
                   </div>
                   
                   <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-[0.2em] hover:bg-morco-blue hover:text-white transition-colors flex items-center justify-center gap-3 group/btn opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                     <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform"/>
                     Add to Cart
                   </button>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30"/>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30"/>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30"/>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30"/>
             </div>
          </div>
        ))}
        
        {/* End Spacer */}
        <div className="min-w-[10vw] flex items-center justify-center snap-center">
            <span className="writing-vertical font-mono text-xs text-white/30 tracking-widest uppercase rotate-180">
                End of Sector
            </span>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;