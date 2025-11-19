import React, { useState } from 'react';
import { UPCOMING_MATCHES, STORES } from '../constants';
import { Card } from './ui/Card';
import { Flame, ThumbsUp, Clock, MapPin } from 'lucide-react';

export const HypeMatch: React.FC = () => {
  // Get the very next match
  const nextMatch = UPCOMING_MATCHES[0];
  const homeStore = STORES.find(s => s.id === nextMatch?.homeStoreId);
  const awayStore = STORES.find(s => s.id === nextMatch?.awayStoreId);

  // Mock voting state
  const [votes, setVotes] = useState({ home: 42, away: 38 });
  const [hasVoted, setHasVoted] = useState<string | null>(null);

  const handleVote = (team: 'home' | 'away') => {
    if (hasVoted) return;
    setVotes(prev => ({
      ...prev,
      [team]: prev[team] + 1
    }));
    setHasVoted(team);
  };

  if (!nextMatch || !homeStore || !awayStore) return null;

  const totalVotes = votes.home + votes.away;
  const homePercentage = Math.round((votes.home / totalVotes) * 100);
  const awayPercentage = Math.round((votes.away / totalVotes) * 100);

  return (
    <Card className="relative overflow-hidden border-2 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2)] mb-10" noPadding>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className={`absolute top-0 left-0 w-1/2 h-full ${homeStore.color} opacity-10 skew-x-12 -translate-x-12`}></div>
        <div className={`absolute top-0 right-0 w-1/2 h-full ${awayStore.color} opacity-10 -skew-x-12 translate-x-12`}></div>
      </div>

      <div className="relative z-10 p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full border border-orange-500/50 animate-pulse">
            <Flame className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Partido Destacado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 text-center drop-shadow-lg uppercase italic">
            Duelo de Titanes
          </h2>
          <div className="flex items-center gap-4 mt-2 text-slate-400 text-sm">
             <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {nextMatch.date} - {nextMatch.time}</span>
             <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {nextMatch.location}</span>
          </div>
        </div>

        {/* Teams and VS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
             <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full p-1 ${homeStore.color} shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300`}>
                <img src={homeStore.logoUrl} alt={homeStore.name} className="w-full h-full object-cover rounded-full border-4 border-slate-900" />
             </div>
             <div className="text-center">
               <h3 className="text-2xl font-bold text-white">{homeStore.name}</h3>
               <p className="text-slate-400 text-sm">Local</p>
             </div>
             <button 
                onClick={() => handleVote('home')}
                disabled={!!hasVoted}
                className={`mt-2 flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition-all ${hasVoted === 'home' ? 'bg-white text-slate-900' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'}`}
             >
               <ThumbsUp className={`w-4 h-4 ${hasVoted === 'home' ? 'fill-slate-900' : ''}`} /> Votar
             </button>
          </div>

          {/* VS Badge */}
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
             <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full"></div>
             <span className="text-4xl font-black text-white italic relative z-10">VS</span>
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
             <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full p-1 ${awayStore.color} shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300`}>
                <img src={awayStore.logoUrl} alt={awayStore.name} className="w-full h-full object-cover rounded-full border-4 border-slate-900" />
             </div>
             <div className="text-center">
               <h3 className="text-2xl font-bold text-white">{awayStore.name}</h3>
               <p className="text-slate-400 text-sm">Visita</p>
             </div>
              <button 
                onClick={() => handleVote('away')}
                disabled={!!hasVoted}
                className={`mt-2 flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition-all ${hasVoted === 'away' ? 'bg-white text-slate-900' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'}`}
             >
               <ThumbsUp className={`w-4 h-4 ${hasVoted === 'away' ? 'fill-slate-900' : ''}`} /> Votar
             </button>
          </div>
        </div>

        {/* Prediction Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-between text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest">
             <span>Predicción del Público</span>
          </div>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden flex relative">
             <div 
                className={`h-full ${homeStore.color} transition-all duration-1000 ease-out flex items-center justify-start pl-2 text-[10px] font-bold text-white`} 
                style={{ width: `${homePercentage}%` }}
             >
               {homePercentage}%
             </div>
             <div 
                className={`h-full ${awayStore.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2 text-[10px] font-bold text-white`} 
                style={{ width: `${awayPercentage}%` }}
             >
               {awayPercentage}%
             </div>
             
             {/* Lightning Divider */}
             <div className="absolute top-0 bottom-0 w-1 bg-white transform -skew-x-12 blur-[1px] shadow-[0_0_10px_white]" style={{ left: `${homePercentage}%` }}></div>
          </div>
          <p className="text-center text-slate-500 text-xs mt-2">
             {hasVoted ? "¡Gracias por tu voto!" : "¿Quién ganará? ¡Vota ahora!"}
          </p>
        </div>
      </div>
    </Card>
  );
};