import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { REVENUE_STREAMS } from '../../data/ecosystemData';
import {
  Compass,
  Building2,
  Car,
  Store,
  Ticket,
  ShoppingBag,
  Sliders,
  DollarSign
} from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const { formatCurrency } = useApp();

  // Interactive Scenario Simulator States
  const [annualMembers, setAnnualMembers] = useState<number>(8500);
  const [avgSpendPerTrip, setAvgSpendPerTrip] = useState<number>(3400);
  const [merchantCount, setMerchantCount] = useState<number>(80);

  // Dynamic Financial Math
  const totalEcosystemGMV = annualMembers * avgSpendPerTrip;
  
  // 6 Revenue Stream Breakdowns
  const tourMarginAmount = totalEcosystemGMV * 0.45 * 0.25; // 45% GMV 来自套餐，25% 毛利
  const hotelCommissionAmount = totalEcosystemGMV * 0.25 * 0.15; // 25% GMV 来自酒店，15% 佣金
  const transportMarginAmount = totalEcosystemGMV * 0.12 * 0.28; // 12% 来自专车直升机，28% 毛利
  const merchantFeeAmount = merchantCount * 3800; // 联盟商户年度战略入驻与营销费
  const eventRevenueAmount = annualMembers * 0.15 * 650 * 0.40; // 15% 会员参与峰会，客单$650，40% 毛利
  const marketplaceCommissionAmount = totalEcosystemGMV * 0.18 * 0.12; // 18% 特产与珍珠，12% 抽佣

  const totalOperatorGrossRevenue =
    tourMarginAmount +
    hotelCommissionAmount +
    transportMarginAmount +
    merchantFeeAmount +
    eventRevenueAmount +
    marketplaceCommissionAmount;

  const localMerchantEconomyCaptured = totalEcosystemGMV - totalOperatorGrossRevenue;
  const blendedOperatorTakeRate = ((totalOperatorGrossRevenue / totalEcosystemGMV) * 100).toFixed(1);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Ticket': return <Ticket className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  return (
    <section id="business-model" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            <span>商业化与盈利变现架构</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            商业盈利模式 (6大核心变现引擎)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            具备强大韧性与高抗风险能力的多元化变现矩阵，全方位捕获高端定制游套餐、酒店批发利差、商户营销费及特产交易佣金。
          </p>
        </div>

        {/* 6 Core Revenue Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVENUE_STREAMS.map(stream => (
            <div
              key={stream.id}
              className="glass-card p-6 rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800"
                    style={{ color: stream.color }}
                  >
                    {getIcon(stream.iconName)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-amber-300">
                    毛利率: {stream.marginRange}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{stream.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stream.description}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  首年预测收益:
                </span>
                <span className="text-base font-serif font-bold text-amber-400">
                  {formatCurrency(stream.annualProjectedUSD)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scenario & Unit Economics Simulator */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border-amber-500/30 bg-slate-900/90 shadow-gold-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Sliders className="w-4 h-4" />
                <span>实时交互财务沙盘推演计算器</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                动态经营情景模拟与财务产出预测
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                拖动滑块调整年造访会员规模、单客平均消费额及签约商户网络体量，实时测算沙巴区域生态经济产出与运营商毛利。
              </p>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-right self-start md:self-auto">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block">综合捕获率 (Take-Rate)</span>
              <span className="text-xl font-serif font-bold text-amber-400">{blendedOperatorTakeRate}%</span>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slider 1: Visiting Members */}
            <div className="space-y-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">年度抵港会员客流</span>
                <span className="font-serif font-bold text-amber-400 text-sm">
                  {annualMembers.toLocaleString()} 人次
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={annualMembers}
                onChange={e => setAnnualMembers(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>1,000人</span>
                <span>12,500人</span>
                <span>25,000人</span>
              </div>
            </div>

            {/* Slider 2: Average Spend per Member Trip */}
            <div className="space-y-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">单客在沙巴平均总消费</span>
                <span className="font-serif font-bold text-emerald-400 text-sm">
                  {formatCurrency(avgSpendPerTrip)}
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="8000"
                step="100"
                value={avgSpendPerTrip}
                onChange={e => setAvgSpendPerTrip(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$1,500</span>
                <span>$4,750</span>
                <span>$8,000</span>
              </div>
            </div>

            {/* Slider 3: Merchant Network Size */}
            <div className="space-y-3 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">沙巴签约联盟商户数</span>
                <span className="font-serif font-bold text-cyan-400 text-sm">
                  {merchantCount} 家
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="250"
                step="5"
                value={merchantCount}
                onChange={e => setMerchantCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>30家</span>
                <span>140家</span>
                <span>250家</span>
              </div>
            </div>
          </div>

          {/* Dynamic Financial Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-950 to-slate-950 border border-amber-500/40">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                沙巴区域生态总 GMV 产出
              </span>
              <div className="text-3xl font-serif font-bold text-white mt-1.5">
                {formatCurrency(totalEcosystemGMV)}
              </div>
              <p className="text-xs text-slate-400 mt-1">会员在沙巴文旅产业的总注入资金流</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-slate-950 to-slate-950 border border-emerald-500/40">
              <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
                运营商直接捕获毛利收益
              </span>
              <div className="text-3xl font-serif font-bold text-emerald-400 mt-1.5">
                {formatCurrency(totalOperatorGrossRevenue)}
              </div>
              <p className="text-xs text-slate-400 mt-1">综合 ~{blendedOperatorTakeRate}% 的高利润率沉淀</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-950 to-slate-950 border border-cyan-500/40">
              <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold block">
                注入沙巴实体商户经济规模
              </span>
              <div className="text-3xl font-serif font-bold text-cyan-300 mt-1.5">
                {formatCurrency(localMerchantEconomyCaptured)}
              </div>
              <p className="text-xs text-slate-400 mt-1">直达沙巴酒店、海鲜餐厅、珍珠商户的直接产值</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
