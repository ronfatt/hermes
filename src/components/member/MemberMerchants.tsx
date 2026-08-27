import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MERCHANT_PARTNERS } from '../../data/ecosystemData';
import {
  MapPin,
  Star,
  QrCode
} from 'lucide-react';
import { MerchantPartner } from '../../types';

export const MemberMerchants: React.FC = () => {
  const { setSelectedMerchantForModal, currentMember, redeemedPerks } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('全部');

  const categories = [
    '全部',
    '奢华度假酒店',
    '海鲜与高端餐饮',
    '康养与水疗',
    '海岛与定制游',
    '珍珠与非遗特产',
    '尊享专车礼宾'
  ];

  const districts = [
    '全部',
    '亚庇海滨核心区 (KK Waterfront)',
    '丹绒亚路与丝绸港 (Tanjung Aru)',
    '加雅岛国家海洋公园 (Gaya Island)',
    '神山高地 (Kundasang)'
  ];

  const filteredMerchants = MERCHANT_PARTNERS.filter(m => {
    const matchCat = selectedCategory === '全部' || m.category === selectedCategory;
    const matchDist = selectedDistrict === '全部' || m.district === selectedDistrict;
    return matchCat && matchDist;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">沙巴商户网络与 H Pass 专属特权</h2>
        <p className="text-xs text-slate-400 mt-1">
          在沙巴150+家严选签约商户现场出示 H Pass 动态通票，立享对应会籍折扣（最高75折）并实时累积 H-Credits 积分。
        </p>
      </div>

      {/* Filter Bars */}
      <div className="space-y-3">
        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* District Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] text-slate-500 font-semibold px-1">商圈区域:</span>
          {districts.map(dist => (
            <button
              key={dist}
              onClick={() => setSelectedDistrict(dist)}
              className={`px-3 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                selectedDistrict === dist
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {dist}
            </button>
          ))}
        </div>
      </div>

      {/* Merchant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMerchants.map((m: MerchantPartner) => {
          const isRedeemed = redeemedPerks.includes(m.id);

          return (
            <div
              key={m.id}
              onClick={() => setSelectedMerchantForModal(m)}
              className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group ${
                isRedeemed ? 'border-emerald-500/60 bg-emerald-950/10' : 'border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/30">
                      {m.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{m.rating} 分</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] text-slate-300 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{m.district}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">{m.description}</p>
                  </div>

                  {/* Active Tier Privilege Box */}
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between text-amber-300 font-semibold text-[11px]">
                      <span>{currentMember.tier.split(' ')[0]} 专享礼遇</span>
                      <span className="text-emerald-400 font-bold">享 {m.discountPercentage}% 优惠</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      {currentMember.tier.includes('黑金')
                        ? m.tierPrivilege.black
                        : currentMember.tier.includes('白金')
                        ? m.tierPrivilege.platinum
                        : m.tierPrivilege.gold}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMerchantForModal(m);
                  }}
                  className={`w-full py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all ${
                    isRedeemed
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-slate-700'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{isRedeemed ? '特权已激活 (展示核销二维码)' : '激活商户特权 & 生成二维码'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
