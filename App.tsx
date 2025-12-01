import React, { useState } from 'react';
import SpaceSnowBackground from './components/SpaceSnowBackground';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import CategorySection from './components/CategorySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
    setTimeout(() => {
      setIntroFinished(true);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-morco-blue selection:text-white overflow-hidden">
      
      {/* Background is always present but might change speed/opacity logic if we wanted */}
      <SpaceSnowBackground />

      {/* Intro Layer */}
      {!introFinished && (
        <IntroOverlay onEnter={handleEnter} />
      )}

      {/* Main Content Layer */}
      <div 
        className={`relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <Navbar />
        <main>
          <Hero />
          
          {/* Marquee Divider */}
          <div className="w-full bg-morco-blue text-white overflow-hidden py-3 z-20 relative border-y border-white/20">
            <div className="whitespace-nowrap animate-pulse-slow">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-bold text-lg uppercase mx-8">
                  Snow /// Space /// Street ///
                </span>
              ))}
            </div>
          </div>

          <CategorySection />
          
          <ProductSection />

          {/* Parallax Image Break - "Full Width Banner" style common in themes */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
             <div 
               className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop')" }}
             ></div>
             <div className="absolute inset-0 bg-black/40"></div>
             <div className="relative z-10 text-center p-12 border border-white/20 bg-black/40 backdrop-blur-sm max-w-3xl mx-4">
                <span className="text-morco-blue font-mono text-sm uppercase tracking-widest mb-4 block">Limited Edition</span>
                <h3 className="font-display font-bold text-5xl md:text-7xl mb-6 text-white">ATMOSPHERIC RE-ENTRY</h3>
                <p className="font-sans text-lg text-gray-200 mb-8 leading-relaxed">
                  Design that survives the plummet. Engineered for those who refuse to stay grounded.
                </p>
                <button className="bg-white text-black font-bold py-4 px-10 uppercase tracking-widest hover:bg-morco-blue hover:text-white transition-all">
                  Shop the Drop
                </button>
             </div>
          </section>

          <AboutSection />

        </main>
        <Footer />
      </div>

    </div>
  );
};

export default App;