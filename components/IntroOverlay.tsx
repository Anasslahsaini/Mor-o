import React, { useState } from 'react';

interface IntroOverlayProps {
  onEnter: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, 1500); // Wait for animation
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-morco-blue transition-opacity duration-1000 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background stars for intro */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 flex flex-col items-center transition-transform duration-700 ${isExiting ? 'scale-150' : 'scale-100'}`}>
        <h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-white mb-8">
          MORÇO.
        </h1>
        <p className="font-sans text-morco-ice text-sm md:text-lg tracking-[0.3em] mb-12 text-center uppercase">
          Atmosphere Breach Imminent
        </p>

        <button 
          onClick={handleEnter}
          className="group relative px-8 py-4 bg-transparent overflow-hidden interactive"
        >
          <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
          <div className="absolute inset-0 border border-white/30 skew-x-12 group-hover:skew-x-0 transition-transform duration-500"></div>
          <span className="relative font-display font-bold text-xl tracking-widest text-white group-hover:text-white transition-colors">
            INITIATE
          </span>
        </button>
      </div>
    </div>
  );
};

export default IntroOverlay;