import React from 'react';
import { UPCOMING_MATCHES, STORES } from '../constants';
import { Card } from './ui/Card';
import { Calendar, MapPin, Clock, Swords } from 'lucide-react';

export const Schedule: React.FC = () => {
  const getStore = (id: string) => STORES.find(s => s.id === id);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-blue-400" />
        Próximos Encuentros
      </h2>
      
      <div className="grid gap-4">
        {UPCOMING_MATCHES.map((match) => {
          const home = getStore(match.homeStoreId);
          const away = getStore(match.awayStoreId);

          if (!home || !away) return null;

          return (
            <Card key={match.id} className="hover:bg-slate-800 transition-colors">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center bg-slate-900/50 p-3 rounded-lg min-w-[80px]">
                  <span className="text-blue-400 font-bold text-xl">{match.date.split('-')[2]}</span>
                  <span className="text-slate-500 text-xs uppercase font-semibold">NOV</span>
                </div>

                {/* Teams */}
                <div className="flex-1 flex items-center justify-center gap-4 md:gap-12 w-full">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className={`w-3 h-3 rounded-full ${home.color} mb-2`}></div>
                    <h3 className="font-bold text-white text-lg">{home.name}</h3>
                    <span className="text-slate-500 text-sm">Local</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-slate-700/50 p-2 rounded-full">
                        <Swords className="w-6 h-6 text-slate-400" />
                    </div>
                    <span className="text-slate-500 text-xs mt-1">{match.time}</span>
                  </div>

                  <div className="flex flex-col items-center text-center flex-1">
                    <div className={`w-3 h-3 rounded-full ${away.color} mb-2`}></div>
                    <h3 className="font-bold text-white text-lg">{away.name}</h3>
                    <span className="text-slate-500 text-sm">Visita</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-400 text-sm md:border-l md:border-slate-700 md:pl-6 md:w-48">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{match.location}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
