import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Compass,
  Package,
  Store,
  CalendarCheck,
  Gift,
  Ticket,
  UserCheck,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { MemberProfile } from '../../types';

interface MemberNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MemberNav: React.FC<MemberNavProps> = ({ activeTab, setActiveTab }) => {
  const { currentMember, setCurrentMember, membersList } = useApp();
  const [profileDropdown, setProfileDropdown] = React.useState(false);

  const tabs = [
    { id: 'dashboard', label: '会员中心 (Dashboard)', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'explore', label: '探索沙巴 (Explore)', icon: <Compass className="w-4 h-4" /> },
    { id: 'packages', label: '旗舰套餐 (Packages)', icon: <Package className="w-4 h-4" /> },
    { id: 'merchants', label: '商户特权 (Merchant Perks)', icon: <Store className="w-4 h-4" /> },
    { id: 'bookings', label: '我的行程 (My Bookings)', icon: <CalendarCheck className="w-4 h-4" /> },
    { id: 'rewards', label: '积分商城 (H-Rewards)', icon: <Gift className="w-4 h-4" /> },
    { id: 'events', label: 'VIP 峰会活动 (Events)', icon: <Ticket className="w-4 h-4" /> },
  ];

  const getTierColor = (tier: string) => {
    if (tier.includes('黑金')) {
      return 'bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-amber-500/20 border-amber-500/50 text-amber-300';
    } else if (tier.includes('白金')) {
      return 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300';
    } else {
      return 'bg-amber-500/20 border-amber-500/50 text-amber-300';
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Member Profile Bar */}
      <div className="glass-card p-4 sm:p-5 rounded-2xl border-cyan-500/30 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={currentMember.avatar}
              alt={currentMember.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400/60 shadow-gold-sm"
            />
            <span className="absolute -bottom-1 -right-1 p-1 bg-slate-950 rounded-full border border-amber-400">
              <Sparkles className="w-3 h-3 text-amber-400" />
            </span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-serif font-bold text-white">{currentMember.name}</h2>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTierColor(currentMember.tier)}`}>
                {currentMember.tier}
              </span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
              <span>卡号: {currentMember.memberNo}</span>
              <span>•</span>
              <span>{currentMember.country}</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">{currentMember.status}</span>
            </div>
          </div>
        </div>

        {/* Member Balances & Profile Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800 text-right">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
              H-Credits 积分
            </span>
            <span className="text-sm font-bold text-amber-400">
              {currentMember.points.toLocaleString()} 分
            </span>
          </div>

          <div className="bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800 text-right">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
              沙巴生态消费金
            </span>
            <span className="text-sm font-bold text-emerald-400">
              RM {currentMember.creditsMYR.toLocaleString()}
            </span>
          </div>

          {/* Quick Demo Switcher for Stakeholders */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 text-xs text-slate-200 flex items-center space-x-2"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>切换演示卡级画像</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-950 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-2 block py-1">
                  选择演示会员级别
                </span>
                {membersList.map((m: MemberProfile) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setCurrentMember(m);
                      setProfileDropdown(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                      currentMember.id === m.id ? 'bg-amber-500/10 border border-amber-500/30' : ''
                    }`}
                  >
                    <div>
                      <p className="font-bold text-white">{m.name}</p>
                      <p className="text-[10px] text-slate-400">{m.tier} · {m.country}</p>
                    </div>
                    {currentMember.id === m.id && <span className="text-amber-400 text-xs">●</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
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
