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
  Layers
} from 'lucide-react';
import { Currency } from '../../types';

export const Header: React.FC = () => {
  const {
    currentMode,
    setCurrentMode,
    currency,
    setCurrency,
    soundEnabled,
    setSoundEnabled
  } = useApp();

  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currencies: { code: Currency; label: string }[] = [
    { code: 'USD', label: 'USD 美元 ($)' },
    { code: 'CNY', label: 'CNY 人民币 (¥)' },
    { code: 'MYR', label: 'MYR 马币 (RM)' },
    { code: 'SGD', label: 'SGD 新币 (S$)' },
    { code: 'HKD', label: 'HKD 港币 (HK$)' }
  ];

  const navSections = [
    { id: 'why-sabah', label: '为什么选沙巴' },
    { id: 'ecosystem-model', label: '运营飞轮模型' },
    { id: 'business-model', label: '商业盈利模式' },
    { id: 'packages', label: '3大旗舰产品' },
    { id: 'merchants', label: '联盟商户网络' },
    { id: 'member-flow', label: '会员全旅程' },
    { id: 'roadmap', label: '三阶段规划' },
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
      {/* Top micro bar for Executive notice */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border-b border-amber-500/10 px-4 py-1 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-amber-300/80 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="tracking-wide text-[11px] sm:text-xs">爱马仕沙巴区域运营商生态落地战略蓝图 2026 · 内部高管与领导汇报专版</span>
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
                <div className="absolute right-0 mt-1 w-36 bg-slate-900 border border-amber-500/30 rounded-md shadow-2xl py-1 z-50">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-amber-500/20 transition-colors ${
                        currency === c.code ? 'text-amber-400 font-bold bg-amber-500/10' : 'text-slate-300'
                      }`}
                    >
                      <span>{c.label}</span>
                      {currency === c.code && <span className="text-amber-400 text-[10px]">●</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? '静音音效' : '开启交互音效'}
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
          <div className="w-10 h-10 rounded-full p-0.5 shadow-gold-sm group-hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center shrink-0">
            <img src="/logo.svg" alt="Hermes Logo" className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-serif font-bold text-base tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
                HERMES
              </span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 tracking-widest uppercase">
                沙巴生态
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide">马来西亚沙巴区域运营商落地中枢</p>
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

        {/* Global Triple Mode Switcher */}
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
            <span className="hidden sm:inline">🌟 战略宣讲演示</span>
            <span className="sm:hidden">宣讲</span>
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
            <span className="hidden sm:inline">🎫 H Pass 会员端 Demo</span>
            <span className="sm:hidden">会员端</span>
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
            <span className="hidden sm:inline">💼 区域运营控制台</span>
            <span className="sm:hidden">管理后台</span>
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
          <div className="text-xs uppercase tracking-wider text-amber-400/80 font-bold px-2">宣讲汇报章节导航</div>
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
