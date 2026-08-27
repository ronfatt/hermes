import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Compass,
  Smartphone,
  ShieldAlert,
  Volume2,
  VolumeX,
  ChevronDown,
  Globe2,
  ExternalLink,
  Layers,
  TrendingUp,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';
import { Currency, AppMode } from '../../types';

export const Header: React.FC = () => {
  const {
    currentMode,
    setCurrentMode,
    currency,
    setCurrency,
    soundEnabled,
    setSoundEnabled,
    currentMember
  } = useApp();

  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currencies: Currency[] = ['USD', 'MYR', 'SGD', 'HKD', 'CNY'];

  const navSections = [
    { id: 'why-sabah', label: 'Why Sabah' },
    { id: 'ecosystem-model', label: 'Ecosystem Flywheel' },
    { id: 'business-model', label: 'Revenue Model' },
    { id: 'packages', label: 'Flagship Packages' },
    { id: 'merchants', label: 'Merchant Network' },
    { id: 'member-flow', label: 'Member Journey' },
    { id: 'roadmap', label: 'Roadmap' },
  ];

  const scrollToSection = (id: string) => {
    if (currentMode !== 'presentation') {
      setCurrentMode('presentation');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      {/* Top micro bar for Executive notice / Quick demo switch */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border-b border-amber-500/10 px-4 py-1 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-amber-300/80 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="tracking-wide">HERMES SABAH REGIONAL OPERATOR ECOSYSTEM · STRATEGIC BLUEPRINT 2026</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 transition-colors py-0.5 px-2 rounded bg-slate-800/80 border border-slate-700/60 text-[11px]"
              >
                <Globe2 className="w-3 h-3 text-amber-400" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-slate-900 border border-amber-500/30 rounded-md shadow-2xl py-1 z-50">
                  {currencies.map(c => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs flex items-center justify-between hover:bg-amber-500/20 transition-colors ${
                        currency === c ? 'text-amber-400 font-bold bg-amber-500/10' : 'text-slate-300'
                      }`}
                    >
                      <span>{c}</span>
                      {currency === c && <span className="text-amber-400 text-[10px]">●</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Disable UI Sound FX' : 'Enable UI Sound FX'}
              className="text-slate-400 hover:text-amber-400 transition-colors p-1"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => {
            setCurrentMode('presentation');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-gold-sm group-hover:shadow-gold-lg transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-serif font-black text-lg text-amber-400 tracking-tighter">H</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-serif font-bold text-base tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
                HERMES
              </span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 tracking-widest uppercase">
                Sabah
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide">Regional Ecosystem Landing Hub</p>
          </div>
        </div>

        {/* Presentation Sections (Only visible on presentation mode) */}
        {currentMode === 'presentation' && (
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1">
            {navSections.map(sec => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-xs text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 px-3 py-1.5 rounded-full transition-all duration-200"
              >
                {sec.label}
              </button>
            ))}
          </nav>
        )}

        {/* Global Triple Mode Switcher (The Core Interactive Control) */}
        <div className="flex items-center bg-slate-900/90 border border-amber-500/30 rounded-full p-1 shadow-lg">
          {/* Mode 1: Presentation Showcase */}
          <button
            onClick={() => setCurrentMode('presentation')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              currentMode === 'presentation'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${currentMode === 'presentation' ? 'text-slate-950' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">Showcase Pitch</span>
            <span className="sm:hidden">Pitch</span>
          </button>

          {/* Mode 2: H Pass Sabah (Member Demo) */}
          <button
            onClick={() => setCurrentMode('member')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              currentMode === 'member'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Smartphone className={`w-3.5 h-3.5 ${currentMode === 'member' ? 'text-white' : 'text-cyan-400'}`} />
            <span className="hidden sm:inline">H Pass Member Demo</span>
            <span className="sm:hidden">H Pass</span>
          </button>

          {/* Mode 3: Sabah Operator Console (Admin Demo) */}
          <button
            onClick={() => setCurrentMode('admin')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              currentMode === 'admin'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <ShieldAlert className={`w-3.5 h-3.5 ${currentMode === 'admin' ? 'text-slate-950' : 'text-emerald-400'}`} />
            <span className="hidden sm:inline">Operator Console</span>
            <span className="sm:hidden">Operator</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-amber-400 focus:outline-none"
          >
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-3">
          <div className="text-xs uppercase tracking-wider text-amber-400/80 font-bold px-2">Presentation Chapters</div>
          <div className="grid grid-cols-2 gap-2">
            {navSections.map(sec => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-left text-xs text-slate-300 hover:text-amber-400 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/60"
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
