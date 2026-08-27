import React from 'react';
import { ROADMAP_PHASES } from '../../data/ecosystemData';
import {
  Milestone,
  CheckCircle2,
  Calendar,
  Target
} from 'lucide-react';
import { RoadmapPhase } from '../../types';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>清晰扎实的业务推进节奏</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            三阶段战略增长规划 (3-Phase Roadmap)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            从亚庇核心门户的快速落地，到全沙巴高地海岛走廊的纵深拓展，最终建立千万美元级年度GMV的区域文旅商业生态。
          </p>
        </div>

        {/* 3 Phase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ROADMAP_PHASES.map((rp: RoadmapPhase, idx) => (
            <div
              key={rp.phase}
              className={`glass-card rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                idx === 0
                  ? 'border-amber-500/50 bg-slate-900/90 shadow-gold-sm'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="space-y-6">
                {/* Header with Phase Badge and Status */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {rp.phase}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{rp.timeline}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white">{rp.title}</h3>
                </div>

                {/* Milestones Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                    阶段核心执行里程碑:
                  </span>
                  {rp.milestones.map((m, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${idx === 0 ? 'text-amber-400' : 'text-emerald-400'}`} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target KPIs Box */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block flex items-center space-x-1">
                  <Target className="w-3 h-3" />
                  <span>阶段战略考核 KPI 目标</span>
                </span>
                <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase block">造访会员</span>
                    <span className="text-xs font-bold text-white">{rp.kpis.members.split(' ')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase block">签约商户</span>
                    <span className="text-xs font-bold text-white">{rp.kpis.merchants.split(' ')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase block">目标GMV</span>
                    <span className="text-xs font-bold text-emerald-400">{rp.kpis.projectedGMV.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
