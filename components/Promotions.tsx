import React from 'react';
import { Ticket, ShoppingBag, Percent } from 'lucide-react';

export const Promotions: React.FC = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 rounded-xl p-1 border border-white/10 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

      <div className="bg-slate-950/80 backdrop-blur-sm rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-500/30">
            <Ticket className="w-3 h-3" />
            Beneficios exclusivos
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            ¡Tu Pasión tiene Recompensa!
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Durante toda la temporada de la <span className="text-purple-400 font-semibold">Gym Masters League</span>, 
            las tiendas participantes ofrecerán descuentos especiales en productos sellados, 
            accesorios y consumo de cafetería presentando tu inscripción al torneo.
          </p>
        </div>

        <div className="flex gap-4 shrink-0">
          <div className="flex flex-col items-center bg-slate-800/80 p-4 rounded-xl border border-slate-700 w-28 hover:scale-105 transition-transform">
             <Percent className="w-8 h-8 text-pink-400 mb-2" />
             <span className="text-xl font-bold text-white">10% OFF</span>
             <span className="text-[10px] text-slate-400 uppercase text-center">En Singles</span>
          </div>
          <div className="flex flex-col items-center bg-slate-800/80 p-4 rounded-xl border border-slate-700 w-28 hover:scale-105 transition-transform">
             <ShoppingBag className="w-8 h-8 text-blue-400 mb-2" />
             <span className="text-xl font-bold text-white">Promo</span>
             <span className="text-[10px] text-slate-400 uppercase text-center">Boosters 3x2</span>
          </div>
        </div>

      </div>
    </div>
  );
};