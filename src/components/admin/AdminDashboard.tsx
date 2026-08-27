import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  MONTHLY_FINANCIALS_2026,
  VISITOR_ORIGIN_DATA,
  FLAGSHIP_PACKAGES
} from '../../data/ecosystemData';
import {
  Users,
  CalendarCheck,
  Store,
  DollarSign,
  TrendingUp,
  Globe,
  ArrowUpRight,
  Sparkles,
  PackageCheck
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

export const AdminDashboard: React.FC = () => {
  const { membersList, bookingsList, merchantsList, formatCurrency } = useApp();

  const totalMembersCount = 12450; // Total Hermes members registered for Sabah
  const activeBookingsCount = bookingsList.length;
  const merchantCount = merchantsList.length;
  const currentMonthRevenueUSD = 887000;
  const ytdRevenueUSD = 5127000;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 4 Core KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border-slate-800 hover:border-emerald-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Total Registered Members</span>
            <div className="p-2 bg-slate-950 rounded-lg text-emerald-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
            {totalMembersCount.toLocaleString()}
          </div>
          <div className="flex items-center space-x-1 text-emerald-400 text-xs mt-1.5 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18.4% MoM growth</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Active Bookings in Sabah</span>
            <div className="p-2 bg-slate-950 rounded-lg text-cyan-400">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
            {activeBookingsCount} Active Trips
          </div>
          <div className="flex items-center space-x-1 text-cyan-400 text-xs mt-1.5 font-medium">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>100% On-time fulfillment</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Verified Merchant Partners</span>
            <div className="p-2 bg-slate-950 rounded-lg text-amber-400">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
            {merchantCount} Venues
          </div>
          <div className="flex items-center space-x-1 text-amber-400 text-xs mt-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>50 Tier-1 anchored in KK</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border-slate-800 hover:border-purple-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Monthly Operator Revenue</span>
            <div className="p-2 bg-slate-950 rounded-lg text-purple-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mt-2">
            {formatCurrency(currentMonthRevenueUSD)}
          </div>
          <div className="flex items-center space-x-1 text-purple-300 text-xs mt-1.5 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>YTD: {formatCurrency(ytdRevenueUSD)}</span>
          </div>
        </div>
      </div>

      {/* Main Charts Row: Monthly Revenue Trend & Origin Countries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Revenue Trend Chart */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white">2026 Ecosystem GMV & Operator Revenue Trajectory</h3>
              <p className="text-xs text-slate-400">Monthly gross merchandise volume and captured operator gross margin</p>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1.5 text-amber-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>Ecosystem GMV</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Operator Gross Profit</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_FINANCIALS_2026}>
                <defs>
                  <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="gmvUSD" name="Ecosystem GMV" stroke="#F59E0B" fillOpacity={1} fill="url(#colorGmv)" strokeWidth={2} />
                <Area type="monotone" dataKey="revenueUSD" name="Operator Margin" stroke="#10B981" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Origin Countries Breakdown */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Visitor Inbound Origin</span>
            </h3>
            <p className="text-xs text-slate-400">Share of arriving Hermes members</p>
          </div>

          <div className="h-44 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={VISITOR_ORIGIN_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="share"
                >
                  {VISITOR_ORIGIN_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`${val}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5">
            {VISITOR_ORIGIN_DATA.slice(0, 4).map(item => (
              <div key={item.country} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-300">{item.country}</span>
                </div>
                <span className="font-bold text-white">{item.share}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flagship Package Distribution & Active Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Flagship Packages Performance */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Flagship Package Performance</h3>
          
          <div className="space-y-3">
            {FLAGSHIP_PACKAGES.map((p, i) => (
              <div key={p.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <img src={p.heroImage} alt={p.title} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{p.title}</h4>
                    <p className="text-[11px] text-slate-400">{p.duration} · Required Tier: {p.tierRequirement}+</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-xs text-right">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Wholesale Margin</span>
                    <span className="font-bold text-emerald-400">{p.marginPercentage}%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Price</span>
                    <span className="font-serif font-bold text-amber-400">{formatCurrency(p.priceUSD)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live System Operational Status */}
        <div className="glass-card p-6 rounded-2xl border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Sabah Operator Quick Status</h3>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Airport Tarmac Dispatch:</span>
              <span className="text-emerald-400 font-semibold">Active (3 Vehicles On Route)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Gaya Marina Fast-Charter:</span>
              <span className="text-emerald-400 font-semibold">Normal Sea Conditions</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Merchant Terminal Sync:</span>
              <span className="text-cyan-400 font-semibold">99.8% Online</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">SICC Annual Summit RSVP:</span>
              <span className="text-amber-400 font-semibold">284 Confirmed VIPs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
