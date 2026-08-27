import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Plus
} from 'lucide-react';
import { MerchantPartner } from '../../types';

export const AdminMerchants: React.FC = () => {
  const { merchantsList, formatCurrency, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');
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

  const filteredMerchants = merchantsList.filter(m => {
    const matchCat = selectedCategory === '全部' || m.category === selectedCategory;
    const matchSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleOnboardPartner = () => {
    showToast('新商户入驻流程', '已向沙巴意向合作伙伴派发数字化核销终端套件及协议标准。', 'gold');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">签约商户联盟运营管理</h2>
          <p className="text-xs text-slate-400 mt-1">
            管理全沙巴已签署 H Pass 权益协议的酒店、海鲜餐厅、南洋金珠及水疗商户，跟踪返佣比例与年度入驻费。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索商户名称、地址..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 focus:border-emerald-500 focus:outline-none w-48"
            />
          </div>

          <button
            onClick={handleOnboardPartner}
            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-emerald-lg/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>签约新商户</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Merchant Table */}
      <div className="glass-card rounded-2xl border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-semibold">
              <tr>
                <th className="py-3.5 px-4">合作商户品牌</th>
                <th className="py-3.5 px-4">业态分类</th>
                <th className="py-3.5 px-4">所在核心商圈</th>
                <th className="py-3.5 px-4">运营商佣金提点</th>
                <th className="py-3.5 px-4">年度战略合作费</th>
                <th className="py-3.5 px-4">协议合作状态</th>
                <th className="py-3.5 px-4 text-right">核销终端状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredMerchants.map((m: MerchantPartner) => (
                <tr key={m.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center space-x-3">
                      <img src={m.image} alt={m.name} className="w-9 h-9 rounded-xl object-cover border border-slate-700" />
                      <div>
                        <span className="font-bold text-white block">{m.name}</span>
                        <span className="text-[10px] text-slate-400">{m.location}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                      {m.category}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="text-slate-300">{m.district}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-emerald-400">{m.commissionRate}% GMV提成</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-serif font-bold text-amber-400">{formatCurrency(m.annualCampaignFeeUSD)} / 年</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {m.campaignStatus}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>动态码双向同步</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
