import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Search,
  Filter,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { MemberProfile } from '../../types';

export const AdminMembers: React.FC = () => {
  const { membersList, formatCurrency, setCurrentMember, setCurrentMode } = useApp();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('All');

  const filteredMembers = membersList.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.memberNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTier = selectedTier === 'All' || m.tier === selectedTier;
    return matchSearch && matchTier;
  });

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Black VIP':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Platinum':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      default:
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">Hermes Member CRM</h2>
          <p className="text-xs text-slate-400 mt-1">
            Active and arriving global Hermes members visiting Sabah, travel history, and tier status.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search member, country, ID..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 focus:border-emerald-500 focus:outline-none w-56"
            />
          </div>

          {/* Tier filter */}
          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-700">
            {['All', 'Black VIP', 'Platinum', 'Gold'].map(t => (
              <button
                key={t}
                onClick={() => setSelectedTier(t)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedTier === t
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="glass-card rounded-2xl border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-semibold">
              <tr>
                <th className="py-3.5 px-4">Member Name & ID</th>
                <th className="py-3.5 px-4">Tier Status</th>
                <th className="py-3.5 px-4">Country of Origin</th>
                <th className="py-3.5 px-4">Total Sabah Spend</th>
                <th className="py-3.5 px-4">H-Reward Points</th>
                <th className="py-3.5 px-4">Live Trip Status</th>
                <th className="py-3.5 px-4 text-right">Impersonate Persona</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredMembers.map((m: MemberProfile) => (
                <tr key={m.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center space-x-3">
                      <img src={m.avatar} alt={m.name} className="w-9 h-9 rounded-xl object-cover border border-slate-700" />
                      <div>
                        <span className="font-bold text-white block">{m.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{m.memberNo}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTierBadge(m.tier)}`}>
                      {m.tier}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="text-slate-200">{m.country}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-serif font-bold text-amber-400">{formatCurrency(m.totalSpentUSD)}</span>
                    <span className="text-[10px] text-slate-500 block">{m.totalTrips} Trips to Sabah</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-200">{m.points.toLocaleString()} pts</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-900 border border-slate-700 text-emerald-400 font-medium">
                      {m.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => {
                        setCurrentMember(m);
                        setCurrentMode('member');
                      }}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-lg text-xs font-semibold transition-all border border-slate-700 hover:border-transparent inline-flex items-center space-x-1"
                    >
                      <span>Simulate Persona</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
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
