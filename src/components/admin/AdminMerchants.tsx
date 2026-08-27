import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Store,
  Search,
  Filter,
  Star,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Percent,
  Plus
} from 'lucide-react';
import { MerchantPartner } from '../../types';

export const AdminMerchants: React.FC = () => {
  const { merchantsList, formatCurrency, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Hotels & Resorts',
    'Fine Dining & Seafood',
    'Wellness & Spa',
    'Tours & Marine',
    'Retail & Artisanal',
    'VIP Transport'
  ];

  const filteredMerchants = merchantsList.filter(m => {
    const matchCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleOnboardPartner = () => {
    showToast('New Partner Onboarding', 'Verification terminal package issued to prospective Sabah partner.', 'gold');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">Merchant Partner Network</h2>
          <p className="text-xs text-slate-400 mt-1">
            Contracted Sabah hospitality, dining, seafood, and retail partners with active H Pass commission agreements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search partner venue..."
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
            <span>Onboard Partner</span>
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
                <th className="py-3.5 px-4">Partner Venue</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">District</th>
                <th className="py-3.5 px-4">Commission Rate</th>
                <th className="py-3.5 px-4">Annual Campaign Fee</th>
                <th className="py-3.5 px-4">Agreement Status</th>
                <th className="py-3.5 px-4 text-right">Terminal Status</th>
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
                      {m.category.split('&')[0]}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="text-slate-300">{m.district}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-emerald-400">{m.commissionRate}% GMV</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-serif font-bold text-amber-400">{formatCurrency(m.annualCampaignFeeUSD)} / yr</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {m.campaignStatus}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Verified QR Sync</span>
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
