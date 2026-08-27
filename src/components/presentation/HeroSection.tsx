import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Clock,
  Compass,
  Play
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentMode, formatCurrency } = useApp();

  const scrollToFlywheel = () => {
    const el = document.getElementById('ecosystem-model');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with multi-layered luxury gradient and Sabah imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80"
          alt="Sabah Kota Kinabalu Coast"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slateDark-950/80 via-slateDark-950/95 to-slateDark-950" />
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Top Tag & Sabah Live Indicator */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 px-4 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-xl shadow-gold-sm">
          <div className="flex items-center space-x-1.5 text-xs text-amber-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>REGIONAL OPERATOR BLUEPRINT</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-300">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>Kota Kinabalu Gateway, Sabah</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Near-Launch Ready 2026</span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-tight">
            Hermes Sabah <br />
            <span className="text-gold-gradient">Ecosystem</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Turning Global Members into Real Tourism & Lifestyle Economy in Sabah
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            A high-margin regional operator engine bridging international Hermes membership capital with Sabah’s world-class marine, rainforest, hospitality, and luxury merchant networks.
          </p>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToFlywheel}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-gold-sm hover:shadow-gold-lg transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>View Ecosystem Model</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => setCurrentMode('member')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-center space-x-2.5 backdrop-blur-xl shadow-cyan-lg/30 transition-all duration-300"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Enter Member Demo (H Pass)</span>
          </button>

          <button
            onClick={() => setCurrentMode('admin')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-emerald-500/40 flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Operator Console</span>
          </button>
        </div>

        {/* Live Ecosystem KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 max-w-5xl mx-auto">
          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Target Global Members</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mt-1">120,000+</div>
            <p className="text-[11px] text-slate-400 mt-1">Hermes worldwide database reach</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Projected Ecosystem GMV</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mt-1">$45.0M+</div>
            <p className="text-[11px] text-slate-400 mt-1">Annual regional tourism spend</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Merchant Network</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-cyan-400 mt-1">150+ Partners</div>
            <p className="text-[11px] text-slate-400 mt-1">Hotels, seafood, spas, transport</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Average Operator Margin</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-purple-300 mt-1">22% - 28%</div>
            <p className="text-[11px] text-slate-400 mt-1">High-yield direct capture</p>
          </div>
        </div>
      </div>
    </section>
  );
};
