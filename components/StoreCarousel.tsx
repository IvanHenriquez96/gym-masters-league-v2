import React from 'react';
import { STORES } from '../constants';

export const StoreCarousel: React.FC = () => {
  // Duplicate the list to create a seamless loop effect
  const carouselItems = [...STORES, ...STORES, ...STORES];

  return (
    <div className="w-full py-8 overflow-hidden relative group">
      <h3 className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-6">
        Tiendas que nos apoyan
      </h3>
      
      {/* Gradient masks for fade effect on edges */}
      <div className="absolute top-0 left-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>

      <div className="flex w-max animate-scroll gap-12 md:gap-24 px-4">
        {carouselItems.map((store, index) => (
          <div 
            key={`${store.id}-${index}`} 
            className="flex flex-col items-center justify-center min-w-[120px] opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-br from-slate-700 to-slate-800 mb-2 shadow-lg`}>
              <img 
                src={store.logoUrl} 
                alt={store.name} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs font-bold text-slate-300 text-center whitespace-nowrap">{store.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};