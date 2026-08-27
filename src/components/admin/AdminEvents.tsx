import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Plus
} from 'lucide-react';
import { VIPEvent } from '../../types';

export const AdminEvents: React.FC = () => {
  const { eventsList, formatCurrency, showToast } = useApp();

  const handleCreateEvent = () => {
    showToast('发起新峰会', '已向沙巴国际会议中心 (SICC) 发起会场档期预留与安保报备申请。', 'gold');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">沙巴 VIP 年度峰会与活动运管</h2>
          <p className="text-xs text-slate-400 mt-1">
            统筹大型国际文旅峰会席位容量、受邀高管名册、门票销售清算及品牌赞助收益。
          </p>
        </div>

        <button
          onClick={handleCreateEvent}
          className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-emerald-lg/20 self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>创建新活动/峰会</span>
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {eventsList.map((ev: VIPEvent) => {
          const totalTicketGross = ev.rsvpCount * ev.priceUSD;
          const capacityPercent = Math.min(100, Math.round((ev.rsvpCount / ev.capacity) * 100));

          return (
            <div
              key={ev.id}
              className="glass-card rounded-2xl border-slate-800 p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {ev.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{ev.date}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-white">{ev.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{ev.description}</p>

                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate">{ev.location}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">席位饱和度: {ev.rsvpCount} / {ev.capacity} 位</span>
                      <span className="text-amber-400 font-bold">{capacityPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                        style={{ width: `${capacityPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">门票与赞助总毛利</span>
                  <span className="text-sm font-serif font-bold text-emerald-400">{formatCurrency(totalTicketGross)}</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block">准入级别</span>
                  <span className="text-xs font-bold text-amber-300">{ev.accessTier}+</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
