import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-morco-dark border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 border border-white/20 p-2">
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop" 
                alt="Space Station View" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Offset Box */}
            <div className="absolute top-8 left-8 w-full h-full border border-morco-blue/50 -z-0"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-black border border-white/20 p-6 max-w-xs hidden md:block">
              <p className="font-mono text-xs text-morco-blue">
                COORDINATES: <br/>
                45.9231° N, 6.8697° E
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-morco-blue font-mono text-xs uppercase tracking-widest mb-2 block">The Mission</span>
              <h2 className="font-display font-bold text-5xl text-white leading-tight">
                ADAPT TO <br/>
                THE EXTREME.
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 font-sans leading-relaxed">
              <p>
                Morço isn't just a brand; it's a survival mechanism. Born from the convergence of alpine durability and aerospace engineering, we create garments designed for the harsh realities of both the powdery slopes of Earth and the cold vacuum of orbit.
              </p>
              <p>
                Our "WordPress" of design philosophy allows for modularity—layering systems that snap together like bulkhead doors. We don't just dress you; we equip you.
              </p>
            </div>

            <div className="pt-4">
               <button className="border-b-2 border-white text-white font-bold uppercase tracking-widest pb-1 hover:text-morco-blue hover:border-morco-blue transition-colors interactive">
                 Read Our Manifesto
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;