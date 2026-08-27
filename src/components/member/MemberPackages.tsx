import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FLAGSHIP_PACKAGES } from '../../data/ecosystemData';
import {
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FlagshipPackage } from '../../types';

export const MemberPackages: React.FC = () => {
  const { setSelectedPackageForModal, formatCurrency } = useApp();
  const [filterTier, setFilterTier] = useState<string>('全部');

  const filteredPackages = filterTier === '全部'
    ? FLAGSHIP_PACKAGES
    : FLAGSHIP_PACKAGES.filter(p => p.tierRequirement.includes(filterTier));

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">沙巴旗舰高定文旅套餐</h2>
          <p className="text-xs text-slate-400 mt-1">
            一价全包式奢华体验，配备专职双语旅行管家、五星级海景套房、私人双体帆船与空客直升机接驳。
          </p>
        </div>

        {/* Filter Tier Tabs */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          {['全部', '金卡', '白金', '黑金'].map(t => (
            <button
              key={t}
              onClick={() => setFilterTier(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterTier === t
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg: FlagshipPackage) => (
          <div
            key={pkg.id}
            className="glass-card rounded-2xl border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                    {pkg.badgeText}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30">
                    准入: {pkg.tierRequirement}+
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
                  <span className="text-xs font-medium text-slate-200 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.duration}</span>
                  </span>
                  <span className="text-lg font-serif font-bold text-amber-400">
                    {formatCurrency(pkg.priceUSD)} <span className="text-[10px] text-slate-400 font-sans">/ 单人</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {pkg.overview}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block">
                    核心亮点:
                  </span>
                  {pkg.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => setSelectedPackageForModal(pkg)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-gold-sm transition-all"
              >
                <span>查看逐日行程与即刻锁定</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
