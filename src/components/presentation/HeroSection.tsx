import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  MapPin,
  Compass
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentMode } = useApp();

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
          alt="沙巴亚庇绝美海岸线"
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
            <span>区域运营商商业生态落地蓝图</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-slate-300">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>核心落地门户：马来西亚 · 沙巴州首府亚庇 (Kota Kinabalu)</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5 text-xs text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>2026年 落地就绪</span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-tight">
            爱马仕沙巴生态体系 <br />
            <span className="text-gold-gradient">Hermes Sabah Ecosystem</span>
          </h1>
          <p className="text-xl sm:text-3xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">
            将全球会员资产 · 转化为沙巴实体文旅与高端生活方式经济
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            以沙巴首府亚庇为核心战略门户，通过区域运营商模式，将爱马仕全球高净值会员无缝链接至沙巴真实的奢华旅行、五星酒店、海鲜珍馐、免税购物、海岛游艇及本土商户消费生态。
          </p>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToFlywheel}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-gold-sm hover:shadow-gold-lg transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>查看生态运营模型</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => setCurrentMode('member')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-center space-x-2.5 backdrop-blur-xl shadow-cyan-lg/30 transition-all duration-300"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>进入 H Pass 会员端 Demo</span>
          </button>

          <button
            onClick={() => setCurrentMode('admin')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-emerald-500/40 flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>运营商控制台</span>
          </button>
        </div>

        {/* Live Ecosystem KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 max-w-5xl mx-auto">
          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">覆盖全球会员资产</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mt-1">120,000+</div>
            <p className="text-[11px] text-slate-400 mt-1">高净值会员直通客群池</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">首期预测生态 GMV</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mt-1">$45.0M+</div>
            <p className="text-[11px] text-slate-400 mt-1">年度沙巴文旅实体总消费</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">直签合作商户网络</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-cyan-400 mt-1">150+ 家</div>
            <p className="text-[11px] text-slate-400 mt-1">酒店、海鲜、水疗、游艇</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 text-left">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">运营商综合毛利率</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-purple-300 mt-1">22% - 28%</div>
            <p className="text-[11px] text-slate-400 mt-1">高确定性、强现金流留存</p>
          </div>
        </div>
      </div>
    </section>
  );
};
