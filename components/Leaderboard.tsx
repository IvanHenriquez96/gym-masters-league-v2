import React from 'react';
import { STORES } from '../constants';
import { Card } from './ui/Card';
import { Trophy, Minus, X, Check } from 'lucide-react';

export const Leaderboard: React.FC = () => {
  const sortedStores = [...STORES].sort((a, b) => b.points - a.points);

  return (
    <Card noPadding>
      <div className="p-4 border-b border-slate-700 bg-slate-800/80 flex items-center gap-2">
        <Trophy className="text-yellow-500 w-5 h-5" />
        <h2 className="text-lg font-bold text-white">Tabla de Posiciones</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-300">
          <thead className="text-xs text-slate-400 uppercase bg-slate-900/50">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Tienda</th>
              <th className="px-6 py-3 text-center">PTS</th>
              <th className="px-6 py-3 text-center hidden md:table-cell">V</th>
              <th className="px-6 py-3 text-center hidden md:table-cell">E</th>
              <th className="px-6 py-3 text-center hidden md:table-cell">D</th>
              <th className="px-6 py-3 text-center">Racha</th>
            </tr>
          </thead>
          <tbody>
            {sortedStores.map((store, index) => (
              <tr key={store.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                <td className="px-6 py-4 font-medium">
                  {index + 1}
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full ${store.color}`}></div>
                  <div>
                    <div className="font-bold text-white">{store.name}</div>
                    <div className="text-xs text-slate-500">ID: {store.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-bold text-white text-lg">
                  {store.points}
                </td>
                <td className="px-6 py-4 text-center hidden md:table-cell text-green-400">{store.wins}</td>
                <td className="px-6 py-4 text-center hidden md:table-cell text-slate-400">{store.draws}</td>
                <td className="px-6 py-4 text-center hidden md:table-cell text-red-400">{store.losses}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-1">
                    {/* Mock streak visualizer based on wins */}
                    {Array.from({ length: 5 }).map((_, i) => {
                      if (i < store.wins % 3) return <Check key={i} className="w-3 h-3 text-green-500" />;
                      return <Minus key={i} className="w-3 h-3 text-slate-600" />;
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
