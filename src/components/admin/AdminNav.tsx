import React from 'react';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Store,
  Ticket,
  BarChart3,
  ShieldCheck,
  Radio
} from 'lucide-react';

interface AdminNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminNav: React.FC<AdminNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Operator Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'members', label: 'Member CRM', icon: <Users className="w-4 h-4" /> },
    { id: 'bookings', label: 'Booking Fulfillment', icon: <CalendarCheck className="w-4 h-4" /> },
    { id: 'merchants', label: 'Merchant Network', icon: <Store className="w-4 h-4" /> },
    { id: 'events', label: 'Event Operations', icon: <Ticket className="w-4 h-4" /> },
    { id: 'analytics', label: 'Revenue Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-4">
      {/* Admin Top Header Banner */}
      <div className="glass-card p-5 rounded-2xl border-emerald-500/30 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-serif font-bold text-white">Sabah Operator Command Console</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950 uppercase tracking-wider">
                Live Regional Hub
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Kota Kinabalu Central Clearing & Ecosystem Management Gateway
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>KK Terminal Online</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">Operator ID: #SBH-HQ-01</span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
