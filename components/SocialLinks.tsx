import React from 'react';
import { Card } from './ui/Card';
import { Instagram, Youtube, Twitch, Video, ExternalLink, Radio } from 'lucide-react';

// Custom TikTok Icon using SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Social Media General */}
      <Card noPadding className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
        <div className="p-5">
          <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Video className="w-4 h-4" />
            Redes Sociales
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all text-white group shadow-lg shadow-pink-900/20">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Instagram</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:bg-slate-700 transition-all text-white group shadow-lg">
              <TikTokIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">TikTok</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Streaming Channels */}
      <Card noPadding className="relative overflow-hidden border-red-500/30">
        <div className="absolute top-0 right-0 p-2">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        
        <div className="p-5">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Radio className="w-4 h-4 text-red-500" />
            Transmisión en Vivo
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Sigue todas las partidas de la liga en tiempo real a través de nuestros canales oficiales.
          </p>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-[#6441a5] hover:bg-[#7d5bbe] transition-all text-white group shadow-lg shadow-purple-900/20">
              <div className="flex items-center gap-3">
                <Twitch className="w-5 h-5 group-hover:animate-pulse" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-none">Twitch</div>
                  <span className="text-[10px] text-purple-200 opacity-80">@GymMastersTV</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-[#FF0000] hover:bg-[#ff3333] transition-all text-white group shadow-lg shadow-red-900/20">
              <div className="flex items-center gap-3">
                <Youtube className="w-5 h-5 group-hover:animate-pulse" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-none">YouTube</div>
                  <span className="text-[10px] text-red-100 opacity-80">Repeticiones y Highlights</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};