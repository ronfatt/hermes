import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Smartphone,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const ExecutiveSummaryCTA: React.FC = () => {
  const { setCurrentMode } = useApp();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const strategicMoats = [
    {
      title: 'Captive Global Demand',
      desc: '120k+ high-spending global Hermes membership base pre-qualified for luxury travel.'
    },
    {
      title: 'First-Mover Inbound Hub',
      desc: 'Exclusive wholesale agreements with 50+ tier-1 Sabah hotels, marinas, and dining partners.'
    },
    {
      title: 'High-Margin Take Rate',
      desc: '22% - 28% blended operator gross margins across curated packages, transport, and merchant fees.'
    },
    {
      title: 'Real-World Economy',
      desc: 'Pure tangible tourism, luxury lifestyle, and closed-loop local merchant economic growth.'
    }
  ];

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Main CTA Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border-amber-500/40 bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 shadow-gold-lg text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Executive Summary & Next Steps</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Ready to Launch the Hermes Sabah Regional Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Positioning Sabah as the premier eco-luxury playground for Hermes international members while securing high recurring margins for the regional operator.
            </p>
          </div>

          {/* Strategic Moat 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left pt-2">
            {strategicMoats.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{m.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Triple Direct Demo Launch Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-800/80">
            <button
              onClick={() => setCurrentMode('member')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-cyan-lg/40 transition-all"
            >
              <Smartphone className="w-4 h-4 text-white" />
              <span>Enter Member Demo (H Pass Sabah)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentMode('admin')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-emerald-lg/40 transition-all"
            >
              <ShieldAlert className="w-4 h-4 text-slate-950" />
              <span>Enter Sabah Operator Console</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={() => scrollToSection('business-model')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-slate-700 transition-all"
            >
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>Review Financial Simulator</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-slate-500 space-y-2 pt-6">
          <p>© 2026 Hermes Sabah Ecosystem. Regional Operator Master Plan. Confidential & Proprietary.</p>
          <p className="text-[11px]">Designed for internal executive presentation and regional stakeholder alignment.</p>
        </div>
      </div>
    </section>
  );
};
