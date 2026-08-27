import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MERCHANT_PARTNERS } from '../../data/ecosystemData';
import {
  Store,
  MapPin,
  Star,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MerchantPartner } from '../../types';

export const MerchantsSection: React.FC = () => {
  const { setSelectedMerchantForModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const categories = [
    '全部',
    '奢华度假酒店',
    '海鲜与高端餐饮',
    '康养与水疗',
    '海岛与定制游',
    '珍珠与非遗特产',
    '尊享专车礼宾'
  ];

  const filteredMerchants = selectedCategory === '全部'
    ? MERCHANT_PARTNERS
    : MERCHANT_PARTNERS.filter(m => m.category === selectedCategory);

  return (
    <section id="merchants" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Store className="w-3.5 h-3.5" />
            <span>沙巴高净值联盟商户生态</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            沙巴签约商户网络 (Partner Network)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            由沙巴顶尖奢华酒店、海鲜殿堂、独立岛屿水疗、南洋金珠工坊与专车直升机机队组成的紧密商业联盟，统一接入爱马仕 H Pass 权益通票。
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Merchant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMerchants.map((merchant: MerchantPartner) => (
            <div
              key={merchant.id}
              onClick={() => setSelectedMerchantForModal(merchant)}
              className="glass-card rounded-2xl border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group hover:shadow-emerald-lg/20"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={merchant.image}
                    alt={merchant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {merchant.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{merchant.rating} 分</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-200 flex items-center space-x-1 drop-shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{merchant.district}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {merchant.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {merchant.description}
                    </p>
                  </div>

                  {/* Privilege summary */}
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between text-amber-300 font-semibold text-[11px]">
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>H Pass 会员特权</span>
                      </span>
                      <span className="text-emerald-400 font-bold">高达 {merchant.discountPercentage}% 优惠</span>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{merchant.tierPrivilege.platinum}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[10px] text-slate-500">点击查看不同卡级特权与核销二维码</span>
                <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                  <span>查看详情</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
