import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Smartphone,
  ShieldAlert,
  Volume2,
  VolumeX,
  ChevronDown,
  Globe2,
  Menu,
  X,
  Compass,
  ArrowRight
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

  const handleSelectMode = (mode: 'presentation' | 'member' | 'admin') => {
    setCurrentMode(mode);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      {/* Sleek Single Bar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Unified Identity Tag */}
        <div
          onClick={() => {
            setCurrentMode('presentation');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-gold-sm group-hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center shrink-0">
            <img src="/logo.svg" alt="Hermes Logo" className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-base tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
              HERMES
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300/90 border border-amber-500/20 tracking-wider">
              Sabah Regional Operator
            </span>
          </div>
        </div>

        {/* Desktop Presentation Navigation Links */}
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

        {/* Right Controls: Desktop Mode Switcher + Currency + Audio + Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          {/* Desktop Triple Mode Switcher (Hidden on mobile/tablet to avoid overflow) */}
          <div className="hidden lg:flex items-center bg-slate-900/90 border border-amber-500/30 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setCurrentMode('presentation')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                currentMode === 'presentation'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${currentMode === 'presentation' ? 'text-slate-950' : 'text-amber-400'}`} />
              <span>宣讲演示</span>
            </button>

            <button
              onClick={() => setCurrentMode('member')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                currentMode === 'member'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Smartphone className={`w-3.5 h-3.5 ${currentMode === 'member' ? 'text-slate-950' : 'text-amber-300'}`} />
              <span>H Pass 会员端</span>
            </button>

            <button
              onClick={() => setCurrentMode('admin')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                currentMode === 'admin'
                  ? 'bg-slate-800 text-amber-300 font-bold border border-amber-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>运营商后台</span>
            </button>
          </div>

          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 transition-colors py-1.5 px-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs shadow-sm"
            >
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{currency}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-36 bg-slate-900 border border-amber-500/30 rounded-xl shadow-2xl py-1 z-50 animate-fadeIn">
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

          {/* Audio Toggle (Desktop) */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? '静音音效' : '开启交互音效'}
            className="hidden sm:flex text-slate-400 hover:text-amber-400 transition-colors p-2 rounded-xl bg-slate-900/90 border border-slate-800"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="打开菜单"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Full Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="bg-slate-950/98 border-b border-slate-800 px-5 py-6 space-y-6 animate-fadeIn shadow-2xl">
          {/* Mobile Mode Switch Cards */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-1 block">
              切换演示模式 / 系统模块
            </span>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleSelectMode('presentation')}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  currentMode === 'presentation'
                    ? 'bg-amber-500/10 border-amber-500/50 shadow-gold-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-amber-500 text-slate-950">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">战略宣讲演示 (Showcase Pitch)</h4>
                    <p className="text-xs text-slate-400">9大业务板块完整方案推演</p>
                  </div>
                </div>
                {currentMode === 'presentation' && <span className="text-amber-400 text-xs font-bold">● 当前</span>}
              </button>

              <button
                onClick={() => handleSelectMode('member')}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  currentMode === 'member'
                    ? 'bg-amber-500/10 border-amber-500/50 shadow-gold-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-300 border border-amber-500/30">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">H Pass 沙巴会员端 Demo</h4>
                    <p className="text-xs text-slate-400">数字通票、套餐预订与商户特权</p>
                  </div>
                </div>
                {currentMode === 'member' && <span className="text-amber-400 text-xs font-bold">● 当前</span>}
              </button>

              <button
                onClick={() => handleSelectMode('admin')}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  currentMode === 'admin'
                    ? 'bg-amber-500/10 border-amber-500/50 shadow-gold-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">沙巴区域运营控制台 (Console)</h4>
                    <p className="text-xs text-slate-400">会员CRM、履约调度与财务分析</p>
                  </div>
                </div>
                {currentMode === 'admin' && <span className="text-amber-400 text-xs font-bold">● 当前</span>}
              </button>
            </div>
          </div>

          {/* Presentation Chapters Navigation */}
          {currentMode === 'presentation' && (
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-1 block">
                宣讲章节快捷跳转
              </span>
              <div className="grid grid-cols-2 gap-2">
                {navSections.map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="text-left text-xs text-slate-300 hover:text-amber-400 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between"
                  >
                    <span>{sec.label}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confidential Notice */}
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-center leading-relaxed">
            爱马仕沙巴区域运营商战略蓝图 2026 · 内部高管汇报专版
          </div>
        </div>
      )}
    </header>
  );
};
