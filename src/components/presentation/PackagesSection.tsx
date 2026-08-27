import React from 'react';
import { useApp } from '../../context/AppContext';
import { FLAGSHIP_PACKAGES } from '../../data/ecosystemData';
import {
  Compass,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FlagshipPackage } from '../../types';

export const PackagesSection: React.FC = () => {
  const { setSelectedPackageForModal, formatCurrency } = useApp();

  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>核心旗舰定制产品矩阵</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            3大旗舰定制文旅产品 (Flagship Products)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            专为爱马仕高净值会员深度定制，涵盖亚庇海岸落日、婆罗洲古老雨林与超奢私家海岛买断，构建极高客单与高复游壁垒。
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {FLAGSHIP_PACKAGES.map((pkg: FlagshipPackage) => (
            <div
              key={pkg.id}
              className="glass-card rounded-2xl border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-gold-sm"
            >
              <div>
                {/* Package Image & Badge */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-md">
                      {pkg.badgeText}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30">
                      准入: {pkg.tierRequirement}+
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                        行程时长
                      </span>
                      <span className="text-sm font-bold text-white flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                        会员专享价
                      </span>
                      <span className="text-xl font-serif font-bold text-amber-400">
                        {formatCurrency(pkg.priceUSD)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {pkg.overview}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 block">
                      核心标志亮点:
                    </span>
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPackageForModal(pkg)}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-slate-700 hover:border-transparent transition-all duration-300 shadow-md"
                >
                  <span>探索逐日完整行程与预约</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
