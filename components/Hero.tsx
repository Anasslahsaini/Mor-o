import React, { useRef, useState } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center perspective-container overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        
        {/* Text Content - Left */}
        <div 
          className="order-2 md:order-1 transition-transform duration-200 ease-out"
          style={{ transform: `rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg)` }}
        >
          <div className="space-y-2 mb-6">
             <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/20">
               <span className="font-sans text-xs uppercase tracking-widest text-morco-ice">Fall / Winter 2025</span>
             </div>
          </div>
          <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter text-white mb-8">
            BEYOND <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">GRAVITY.</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            Engineered for the void. Styled for the streets. 
            Experience the fusion of deep space resilience and alpine aesthetics.
          </p>
          <div className="flex gap-4">
             <button className="bg-white text-morco-blue font-bold py-4 px-8 uppercase tracking-widest hover:bg-morco-ice transition-colors interactive">
               Shop Collection
             </button>
             <button className="border border-white/30 text-white font-bold py-4 px-8 uppercase tracking-widest hover:bg-white/10 transition-colors interactive">
               View Lookbook
             </button>
          </div>
        </div>

        {/* 3D Visual - Right */}
        <div 
          className="order-1 md:order-2 relative h-[500px] flex items-center justify-center transition-transform duration-200 ease-out preserve-3d"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
           {/* Floating elements simulating 3D */}
           <div className="absolute inset-0 bg-gradient-to-tr from-morco-blue to-transparent opacity-50 rounded-full blur-3xl transform translate-z-[-50px]"></div>
           
           {/* Main Image Card */}
           <div 
             className="relative z-20 w-3/4 h-3/4 bg-gray-900 border border-white/10 shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-500"
             style={{ transform: 'translateZ(50px)' }}
           >
              <img 
                src="https://images.unsplash.com/photo-1528669528766-3d2b271b8352?q=80&w=2070&auto=format&fit=crop" 
                alt="Snowboarder in space suit vibe" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-morco-blue/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-display font-bold text-3xl text-white">ZERO G.</p>
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">Series 001</p>
              </div>
           </div>

           {/* Floating Element Foreground */}
           <div 
             className="absolute -bottom-10 -left-10 z-30 w-48 h-48 bg-white/5 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between"
             style={{ transform: 'translateZ(100px)' }}
           >
              <span className="font-display text-4xl font-bold text-white">M.</span>
              <div className="w-full h-px bg-white/30"></div>
              <p className="font-sans text-xs text-gray-300">
                Temperature: -270°C <br/>
                Elevation: ∞
              </p>
           </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;