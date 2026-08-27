import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Ticket,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';
import { VIPEvent } from '../../types';

export const MemberEvents: React.FC = () => {
  const { eventsList, rsvpEvent, formatCurrency } = useApp();

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">沙巴 VIP 年度峰会与名流晚宴</h2>
        <p className="text-xs text-slate-400 mt-1">
          直通爱马仕沙巴全球年度峰会、闭门领袖圆桌、私人游艇落日酒会及海拔两千米星空主厨餐桌。
        </p>
      </div>

      <div className="space-y-6">
        {eventsList.map((ev: VIPEvent) => {
          const isFull = ev.rsvpCount >= ev.capacity;
          const capacityPercent = Math.min(100, Math.round((ev.rsvpCount / ev.capacity) * 100));

          return (
            <div
              key={ev.id}
              className="glass-card rounded-2xl border-slate-800 p-6 sm:p-8 hover:border-amber-500/40 transition-all flex flex-col lg:flex-row gap-6 items-stretch"
            >
              {/* Event Image */}
              <div className="relative w-full lg:w-72 h-52 lg:h-auto rounded-xl overflow-hidden shrink-0">
                <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
                    准入级别: {ev.accessTier}+
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {ev.status}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ev.date}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white">{ev.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{ev.description}</p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate">{ev.location}</span>
                  </div>

                  {/* Capacity Bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center space-x-1">
                        <Users className="w-3 h-3 text-amber-400" />
                        <span>已确认受邀出席席位: {ev.rsvpCount} / {ev.capacity} 席</span>
                      </span>
                      <span className="text-amber-400 font-bold">{capacityPercent}% 已锁定</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${capacityPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* RSVP Action on Right */}
              <div className="w-full lg:w-60 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 shrink-0">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">会员代表席位费</span>
                  <span className="text-xl font-serif font-bold text-amber-400">{formatCurrency(ev.priceUSD)}</span>
                  <p className="text-[10px] text-emerald-400 mt-1">包含峰会全通票、VIP酒会及晚宴专席</p>
                </div>

                <button
                  onClick={() => rsvpEvent(ev.id)}
                  disabled={isFull}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    isFull
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-gold-sm'
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  <span>{isFull ? '席位已全部售罄' : '一键锁定 VIP 席位'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
