import React from 'react';
import { PLAYERS, STORES } from '../constants';
import { Card } from './ui/Card';
import { Crown, Star, Medal } from 'lucide-react';

export const PlayerSpotlight: React.FC = () => {
  const currentMVP = PLAYERS.find(p => p.isMVP);
  const pastMVP = PLAYERS.find(p => p.wasPastMVP);

  const getStoreName = (id: string) => STORES.find(s => s.id === id)?.name || 'Agente Libre';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Current MVP */}
      {currentMVP && (
        <Card className="relative border-yellow-500/30 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="absolute top-0 right-0 p-3">
            <Crown className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={currentMVP.avatarUrl} 
                alt={currentMVP.name} 
                className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover shadow-lg shadow-yellow-500/20"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">
                MVP
              </div>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Mejor Jugador (Actual)</h3>
              <p className="text-2xl font-bold text-white">{currentMVP.name}</p>
              <p className="text-yellow-400 text-sm font-medium">"{currentMVP.nickname}"</p>
              <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> {currentMVP.points} Puntos Totales
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Past MVP */}
      {pastMVP && (
        <Card className="relative border-slate-600 bg-slate-800/40">
          <div className="absolute top-0 right-0 p-3">
            <Medal className="w-8 h-8 text-slate-400" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={pastMVP.avatarUrl} 
                alt={pastMVP.name} 
                className="w-20 h-20 rounded-full border-4 border-slate-500 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                LEGEND
              </div>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Campeón Anterior</h3>
              <p className="text-xl font-bold text-slate-200">{pastMVP.name}</p>
              <p className="text-slate-400 text-sm font-medium">"{pastMVP.nickname}"</p>
              <p className="text-slate-500 text-sm mt-1">
                {getStoreName(pastMVP.storeId)}
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
