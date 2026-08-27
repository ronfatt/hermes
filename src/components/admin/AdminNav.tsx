import React from 'react';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Store,
  Ticket,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

interface AdminNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminNav: React.FC<AdminNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: '运营总控概览 (Dashboard)', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'members', label: '会员档案 CRM (Members)', icon: <Users className="w-4 h-4" /> },
    { id: 'bookings', label: '履约调度中心 (Bookings)', icon: <CalendarCheck className="w-4 h-4" /> },
    { id: 'merchants', label: '商户联盟网络 (Merchants)', icon: <Store className="w-4 h-4" /> },
    { id: 'events', label: '峰会与活动 (Events)', icon: <Ticket className="w-4 h-4" /> },
    { id: 'analytics', label: '营收与财务分析 (Analytics)', icon: <BarChart3 className="w-4 h-4" /> },
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
              <h2 className="text-lg font-serif font-bold text-white">沙巴区域运营商总控指挥台</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950 uppercase tracking-wider">
                沙巴亚庇运营中枢
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Kota Kinabalu 亚庇中央清结算、商户数字化核销及全域文旅调度网关
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>亚庇总控终端在线</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">运营商编码: #SBH-HQ-01</span>
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
