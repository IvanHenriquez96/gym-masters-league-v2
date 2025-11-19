import React, { useState } from 'react';
import { TabView } from './types';
import { Leaderboard } from './components/Leaderboard';
import { Schedule } from './components/Schedule';
import { PlayerSpotlight } from './components/PlayerSpotlight';
import { Oracle } from './components/Oracle';
import { StoreCarousel } from './components/StoreCarousel';
import { HypeMatch } from './components/HypeMatch';
import { Promotions } from './components/Promotions';
import { SocialLinks } from './components/SocialLinks';
import { LayoutDashboard, Calendar, Sparkles, Trophy, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.DASHBOARD:
        return (
          <div className="animate-fade-in space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-indigo-950 to-slate-900 border border-slate-700/50 shadow-2xl group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-70"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-colors duration-700"></div>
              
              <div className="relative z-10 px-6 py-16 md:py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">¿Quién merece llegar al Alto Mando?</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                  Únete a nuestras ligas presenciales y demuestra tu nivel.
                  <br className="hidden md:block" />
                  <strong className="text-blue-200 font-semibold">¡Compite, gana premios y vive la experiencia!</strong>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setActiveTab(TabView.SCHEDULE)}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Ver Próximas Fechas
                  </button>
                </div>
              </div>
            </div>

            {/* New Hype Section */}
            <HypeMatch />

            <PlayerSpotlight />
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-8">
                <Leaderboard />
                {/* Store Carousel Section */}
                <div>
                  <StoreCarousel />
                  <Promotions />
                </div>
              </div>
              <div className="xl:col-span-1 space-y-8">
                <div className="bg-gradient-to-b from-blue-900/20 to-slate-800/40 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Noticias de la Liga
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors cursor-pointer group">
                      <p className="text-slate-300 text-sm mb-2 leading-relaxed">
                        ¡Bienvenidos a <span className="text-white font-semibold">Vudugaming</span> y <span className="text-white font-semibold">Rcomics</span>! La liga se expande en Providencia.
                      </p>
                      <div className="flex items-center text-xs text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                        Leer más <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors cursor-pointer group">
                       <p className="text-slate-300 text-sm mb-2 leading-relaxed">
                        Recuerda visitar <span className="text-white font-semibold">Funnyko</span> y <span className="text-white font-semibold">TCG Tea Coffee Games</span> para acumular puntos extra por asistencia.
                      </p>
                       <div className="flex items-center text-xs text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                        Ver bases <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Component */}
                <SocialLinks />
              </div>
            </div>
          </div>
        );
      case TabView.STANDINGS:
        return <Leaderboard />;
      case TabView.SCHEDULE:
        return <Schedule />;
      case TabView.ORACLE:
        return <Oracle />;
      default:
        return <div />;
    }
  };

  const NavButton = ({ tab, label, icon: Icon }: { tab: TabView; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
        activeTab === tab
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-y-[-2px]'
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab(TabView.DASHBOARD)}>
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-300">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 hidden md:block leading-none">
                GYM MASTERS
              </h1>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase hidden md:block">League</span>
            </div>
            <h1 className="text-xl font-bold text-white md:hidden">GYM MASTERS</h1>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 p-1 rounded-full border border-slate-700/50">
            <NavButton tab={TabView.DASHBOARD} label="Inicio" icon={LayoutDashboard} />
            <NavButton tab={TabView.SCHEDULE} label="Calendario" icon={Calendar} />
            <NavButton tab={TabView.ORACLE} label="Oráculo IA" icon={Sparkles} />
          </nav>

          {/* Live Indicator */}
          <div>
            <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              TEMPORADA 2025
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur border-t border-slate-800 p-2 flex justify-around z-50 pb-safe">
        <button 
          onClick={() => setActiveTab(TabView.DASHBOARD)}
          className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${activeTab === TabView.DASHBOARD ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>
        <button 
          onClick={() => setActiveTab(TabView.SCHEDULE)}
          className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${activeTab === TabView.SCHEDULE ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-[10px] font-medium">Fechas</span>
        </button>
        <button 
          onClick={() => setActiveTab(TabView.ORACLE)}
          className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${activeTab === TabView.ORACLE ? 'text-purple-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Sparkles className="w-6 h-6" />
          <span className="text-[10px] font-medium">Oráculo</span>
        </button>
      </div>
    </div>
  );
};

export default App;