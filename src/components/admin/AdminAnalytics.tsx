import React from 'react';
import { useApp } from '../../context/AppContext';
import { REVENUE_STREAMS, MONTHLY_FINANCIALS_2026 } from '../../data/ecosystemData';
import {
  BarChart3,
  TrendingUp,
  PieChart as PieIcon,
  DollarSign,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Download
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const AdminAnalytics: React.FC = () => {
  const { formatCurrency, showToast } = useApp();

  const streamsData = REVENUE_STREAMS.map(s => ({
    name: s.title.split(' ')[0] + ' ' + (s.title.split(' ')[1] || ''),
    revenueUSD: s.annualProjectedUSD,
    color: s.color
  }));

  const totalProjectedUSD = REVENUE_STREAMS.reduce((acc, s) => acc + s.annualProjectedUSD, 0);

  const handleExportReport = () => {
    showToast('Financial Summary Exported', 'Executive PDF and CSV audit ready for leadership review.', 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">Revenue & Margin Analytics</h2>
          <p className="text-xs text-slate-400 mt-1">
            Deep dive breakdown of operator unit economics, wholesale spreads, and merchant revenue capture across Sabah.
          </p>
        </div>

        <button
          onClick={handleExportReport}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200 border border-slate-700 flex items-center space-x-2 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Financial Audit</span>
        </button>
      </div>

      {/* Annual Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card-gold p-6 rounded-2xl border-amber-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
            Annual Projected Operator Revenue
          </span>
          <div className="text-3xl font-serif font-bold text-amber-400">
            {formatCurrency(totalProjectedUSD)}
          </div>
          <p className="text-xs text-slate-300 pt-1">Across all 6 monetization engines</p>
        </div>

        <div className="glass-card-emerald p-6 rounded-2xl border-emerald-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
            Blended Operator Net Margin
          </span>
          <div className="text-3xl font-serif font-bold text-emerald-400">
            24.8%
          </div>
          <p className="text-xs text-slate-300 pt-1">High-yield wholesale & direct tour margin spread</p>
        </div>

        <div className="glass-card-cyan p-6 rounded-2xl border-cyan-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold block">
            Average Spend Per Arriving Member
          </span>
          <div className="text-3xl font-serif font-bold text-cyan-300">
            {formatCurrency(3650)}
          </div>
          <p className="text-xs text-slate-300 pt-1">Average 5.2 day itinerary duration in Sabah</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart: 6 Revenue Streams */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-base font-bold text-white">Revenue Contribution by Monitized Stream</h3>
            <span className="text-xs text-slate-400">Projected Year 1 USD</span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={streamsData}>
                <XAxis dataKey="name" stroke="#64748B" fontSize={10} />
                <YAxis stroke="#64748B" fontSize={11} tickFormatter={(val) => `$${val / 1000000}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, 'Annual Projected']}
                />
                <Bar dataKey="revenueUSD" radius={[6, 6, 0, 0]}>
                  {streamsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Revenue Stream Mix */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Revenue Mix Share</h3>
            <p className="text-xs text-slate-400">Diversified, resilient income streams</p>
          </div>

          <div className="h-44 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={streamsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={3}
                  dataKey="revenueUSD"
                >
                  {streamsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 text-xs">
            {streamsData.map(s => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-300">{s.name}</span>
                </div>
                <span className="font-bold text-white">{formatCurrency(s.revenueUSD)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
