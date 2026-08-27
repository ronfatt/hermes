import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  Compass,
  MapPin
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentMode } = useApp();

  const scrollToFlywheel = () => {
    const el = document.getElementById('ecosystem-model');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with multi-layered luxury gradient and Sabah imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80"
          alt="沙巴亚庇绝美海岸线"
          className="w-full h-full object-cover object-center opacity-20 scale-105 transform animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slateDark-950/85 via-slateDark-950/95 to-slateDark-950" />
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent opacity-40" />
      </div>

      {/* Floating subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
        {/* Clean, Minimalist Status Bar (No heavy border, ultra-sleek) */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-amber-500/20 text-slate-300 text-xs shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-amber-300/90 font-medium">马来西亚 · 沙巴首府亚庇 (Kota Kinabalu)</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">2026 区域运营商落地规划</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-amber-400/80 hidden md:inline">内部高管汇报版</span>
        </div>

        {/* Hero Main Heading: English Brand Visual + Chinese Strategic Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* English Visual Brand Tagline */}
          <div className="text-xs sm:text-sm font-serif tracking-[0.25em] text-amber-400/90 uppercase font-semibold">
            HERMES · SABAH REGIONAL ECOSYSTEM
          </div>

          {/* Primary Chinese Strategic Positioning Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.25]">
            将全球会员资产 · 转化为 <br className="hidden sm:inline" />
            <span className="text-gold-gradient">沙巴实体文旅与高端商业生态</span>
          </h1>

          {/* Body Description: Enhanced typography & readability */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed sm:leading-8 font-light pt-1">
            以沙巴首府亚庇为核心战略门户，依托区域运营商模式，将爱马仕全球高净值会员无缝链接至沙巴真实的奢华酒店、私人游艇、海鲜饕餮、南洋金珠及非遗消费生态。
          </p>
        </div>

        {/* Clear Hierarchy Action Buttons: Primary, Secondary, and Tertiary Text Link */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
            {/* Primary Action Button (Prominent Champagne Gold Gradient) */}
            <button
              onClick={scrollToFlywheel}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-gold-sm hover:shadow-gold-lg transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-slate-950" />
              <span>查看生态运营模型</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            {/* Secondary Action Button (Subtle Luxury Glass Card) */}
            <button
              onClick={() => setCurrentMode('member')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-amber-500/40 flex items-center justify-center space-x-2 backdrop-blur-xl transition-all duration-300"
            >
              <Smartphone className="w-4 h-4 text-amber-300" />
              <span>进入 H Pass 会员端 Demo</span>
            </button>
          </div>

          {/* Tertiary Action Link (Clean Text Link for Admin Console) */}
          <div className="pt-1">
            <button
              onClick={() => setCurrentMode('admin')}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors py-1 px-3 rounded-lg hover:bg-slate-900/60"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80" />
              <span>切换至：沙巴区域运营管理后台 (Console)</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Live Ecosystem KPI Stat Cards (Refined Champagne Gold & Slate Black Palette) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-6 max-w-4xl mx-auto">
          <div className="glass-card p-4 sm:p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">全球会员资产</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mt-1">120,000+</div>
            <p className="text-[11px] text-slate-400 mt-1">高净值会员直通客群池</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">首期预测生态 GMV</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-1">$45.0M+</div>
            <p className="text-[11px] text-slate-400 mt-1">年度沙巴文旅实体总消费</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">直签合作商户网络</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mt-1">150+ 家</div>
            <p className="text-[11px] text-slate-400 mt-1">酒店、海鲜、水疗、游艇</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">运营商综合毛利率</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mt-1">22% - 28%</div>
            <p className="text-[11px] text-slate-400 mt-1">高确定性现金流留存</p>
          </div>
        </div>
      </div>
    </section>
  );
};
