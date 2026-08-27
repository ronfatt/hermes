import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CalendarCheck,
  QrCode,
  Clock,
  Car,
  Building,
  CheckCircle2,
  Download,
  Users
} from 'lucide-react';
import { BookingRecord } from '../../types';

export const MemberBookings: React.FC = () => {
  const { bookingsList, currentMember, formatCurrency, showToast } = useApp();
  const [selectedBookingForPass, setSelectedBookingForPass] = useState<BookingRecord | null>(null);

  // Filter bookings for current member
  const memberBookings = bookingsList.filter(b => b.memberId === currentMember.id);

  const handleDownloadPass = (ref: string) => {
    showToast('电子通票已保存', `已成功将行程凭证 [${ref}] 离线保存至本地相册`, 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">我的定制行程与电子出行凭证</h2>
        <p className="text-xs text-slate-400 mt-1">
          已锁定的沙巴奢华旅行套餐、酒店入住凭证与专属专车/直升机调度状态。
        </p>
      </div>

      {memberBookings.length > 0 ? (
        <div className="space-y-4">
          {memberBookings.map(bk => (
            <div
              key={bk.id}
              className="glass-card rounded-2xl border-slate-800 p-6 space-y-4 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      预订编号: {bk.bookingRef}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {bk.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {bk.packageName}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">套餐总金额</span>
                  <span className="text-xl font-serif font-bold text-amber-400">
                    {formatCurrency(bk.amountUSD)}
                  </span>
                </div>
              </div>

              {/* Booking Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>出行日期</span>
                  </span>
                  <p className="font-semibold text-slate-200">{bk.travelDate}</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Users className="w-3 h-3 text-amber-400" />
                    <span>出行人数</span>
                  </span>
                  <p className="font-semibold text-slate-200">{bk.guests} 位贵宾</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Building className="w-3 h-3 text-emerald-400" />
                    <span>入住房型保障</span>
                  </span>
                  <p className="font-semibold text-slate-200 truncate">{bk.hotelBooked || '丝绸港麦哲伦俱乐部'}</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Car className="w-3 h-3 text-purple-400" />
                    <span>专属车队/机长</span>
                  </span>
                  <p className="font-semibold text-slate-200 truncate">{bk.assignedDriver || '沙巴VIP车队总调度'}</p>
                </div>
              </div>

              {/* Special Requests */}
              {bk.specialRequests && (
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    管家定制备忘与特殊需求:
                  </span>
                  <p className="text-slate-300 italic">{bk.specialRequests}</p>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>已与沙巴区域运营中心直连锁定 wholesale 批发房源与接待车队</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDownloadPass(bk.bookingRef)}
                    className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-slate-200 flex items-center space-x-1.5 border border-slate-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>下载电子通票</span>
                  </button>

                  <button
                    onClick={() => setSelectedBookingForPass(bk)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-cyan-lg/20"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>展示核销二维码</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center glass-card rounded-2xl border-slate-800 space-y-3">
          <CalendarCheck className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">暂无已预订行程</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            您尚未预订沙巴文旅套餐。可前往旗舰套餐页面选择适合您的海岛与雨林奢华之旅。
          </p>
        </div>
      )}

      {/* QR Pass Modal */}
      {selectedBookingForPass && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-6 text-center animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">爱马仕沙巴数字通票凭证</span>
              <h3 className="text-lg font-serif font-bold text-white">{selectedBookingForPass.packageName}</h3>
              <p className="text-xs text-slate-400 font-mono">预订编号: {selectedBookingForPass.bookingRef}</p>
            </div>

            <div className="w-48 h-48 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
              <QrCode className="w-40 h-40 text-slate-950" />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p>出行贵宾: <strong className="text-white">{selectedBookingForPass.memberName}</strong> ({selectedBookingForPass.memberTier})</p>
              <p>行程时间: <strong className="text-white">{selectedBookingForPass.travelDate}</strong></p>
              <p className="text-[11px] text-emerald-400">在亚庇机场机坪接机与酒店前台出示此码即可享受VIP通关入住</p>
            </div>

            <button
              onClick={() => setSelectedBookingForPass(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white uppercase tracking-wider"
            >
              关闭凭证
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
