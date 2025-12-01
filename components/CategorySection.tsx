import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'EXO-SHELLS',
    subtitle: 'Vacuum Rated Outerwear',
    image: 'https://images.unsplash.com/photo-1551854838-255c27d8122d?auto=format&fit=crop&q=80&w=1000',
    colSpan: 'md:col-span-1'
  },
  {
    id: 2,
    title: 'THERMAL CORES',
    subtitle: 'Mid-Layer Insulation',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000',
    colSpan: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'ORBIT GEAR',
    subtitle: 'Technical Accessories',
    image: 'https://images.unsplash.com/photo-1522056615691-da7b8106c665?auto=format&fit=crop&q=80&w=1000',
    colSpan: 'md:col-span-1'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section id="collection" className="py-24 px-6 relative z-10 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
          <div>
            <span className="text-morco-blue font-mono text-xs uppercase tracking-widest mb-2 block">Sector 02</span>
            <h2 className="font-display font-bold text-4xl text-white">COLLECTIONS</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-morco-blue transition-colors font-sans text-sm uppercase tracking-widest">
            View Full Catalog <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`${cat.colSpan} group relative h-[500px] overflow-hidden border border-white/10 cursor-pointer interactive`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <span className="block text-gray-300 text-xs font-mono uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {cat.subtitle}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-display font-bold text-white uppercase italic transform origin-left transition-transform duration-300 group-hover:skew-x-12">
                    {cat.title}
                  </h3>
                  <div className="w-10 h-10 bg-morco-blue text-white flex items-center justify-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Decorative Border Lines */}
              <div className="absolute top-4 left-4 right-4 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute bottom-4 left-4 right-4 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;