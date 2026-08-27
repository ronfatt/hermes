import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  User
} from 'lucide-react';
import { BookingRecord } from '../../types';

export const AdminBookings: React.FC = () => {
  const { bookingsList, updateBookingStatus, formatCurrency } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('全部');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const statuses: ('全部' | BookingRecord['status'])[] = [
    '全部',
    '已确认锁定',
    '进行中/在途',
    '已圆满完成',
    '专属管家对接中'
  ];

  const filteredBookings = bookingsList.filter(b => {
    const matchStatus = filterStatus === '全部' || b.status === filterStatus;
    const matchSearch = b.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.packageName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusColor = (status: BookingRecord['status']) => {
    switch (status) {
      case '已确认锁定':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case '进行中/在途':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40';
      case '已圆满完成':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      default:
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">沙巴履约与调度管理中心</h2>
          <p className="text-xs text-slate-400 mt-1">
            实时监控全沙巴奢华文旅订单履约全流程、专车机队派工状态及五星级套房锁房进展。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索预订号、会员姓名..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 focus:border-emerald-500 focus:outline-none w-56"
            />
          </div>

          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-700 overflow-x-auto">
            {statuses.map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  filterStatus === st
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((bk: BookingRecord) => (
          <div
            key={bk.id}
            className="glass-card rounded-2xl border-slate-800 p-5 sm:p-6 space-y-4 hover:border-slate-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-amber-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  {bk.bookingRef}
                </span>
                <div>
                  <h3 className="text-base font-serif font-bold text-white">{bk.packageName}</h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 font-semibold">{bk.memberName}</span>
                    <span>({bk.memberTier} · {bk.country})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block">订单总额</span>
                  <span className="text-base font-serif font-bold text-amber-400">{formatCurrency(bk.amountUSD)}</span>
                </div>

                {/* Status Toggle Dropdown */}
                <select
                  value={bk.status}
                  onChange={e => updateBookingStatus(bk.id, e.target.value as BookingRecord['status'])}
                  className={`text-xs font-bold py-1.5 px-3 rounded-lg border bg-slate-950 focus:outline-none cursor-pointer ${getStatusColor(bk.status)}`}
                >
                  <option value="已确认锁定">已确认锁定</option>
                  <option value="进行中/在途">进行中/在途</option>
                  <option value="已圆满完成">已圆满完成</option>
                  <option value="专属管家对接中">专属管家对接中</option>
                </select>
              </div>
            </div>

            {/* Operational Dispatch Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block">行程周期</span>
                <span className="text-slate-200 font-medium">{bk.travelDate}</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block">出行人数</span>
                <span className="text-slate-200 font-medium">{bk.guests} 位同行贵宾</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block">直连房源状态</span>
                <span className="text-emerald-400 font-medium truncate block">{bk.hotelBooked || '丝绸港俱乐部海景套房'}</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block">派工接驾机长/司机</span>
                <span className="text-cyan-400 font-medium truncate block">{bk.assignedDriver || '菲尔道斯主管 (LM/专机)'}</span>
              </div>
            </div>

            {bk.specialRequests && (
              <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80 text-[11px] text-slate-300">
                <strong className="text-amber-400">会员专属定制备忘: </strong>
                <span>{bk.specialRequests}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
