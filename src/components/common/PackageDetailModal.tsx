import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  MapPin,
  ArrowRight,
  User,
  Users
} from 'lucide-react';

export const PackageDetailModal: React.FC = () => {
  const {
    selectedPackageForModal,
    setSelectedPackageForModal,
    formatCurrency,
    currentMember,
    addBooking
  } = useApp();

  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('2026-10-15');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [isBookingStep, setIsBookingStep] = useState<boolean>(false);

  if (!selectedPackageForModal) return null;

  const pkg = selectedPackageForModal;
  const totalPriceUSD = pkg.priceUSD * guestCount;

  const handleConfirmBooking = () => {
    addBooking({
      packageId: pkg.id,
      packageName: pkg.title,
      memberId: currentMember.id,
      memberName: currentMember.name,
      memberTier: currentMember.tier,
      country: currentMember.country,
      travelDate: `${travelDate} (${pkg.duration})`,
      duration: pkg.duration,
      guests: guestCount,
      amountUSD: totalPriceUSD,
      status: '已确认锁定',
      specialRequests: specialRequest || 'VIP快速通关与高楼层海景房升级偏好',
      hotelBooked: pkg.title.includes('至尊') ? '加雅岛顶级度假村 总统水上独栋别墅' : '丝绸港麦哲伦 太平洋俱乐部海景套房'
    });

    setSelectedPackageForModal(null);
    setIsBookingStep(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedPackageForModal(null);
            setIsBookingStep(false);
          }}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-amber-500/20 flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 tracking-wider uppercase shadow-md">
                  {pkg.badgeText}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-amber-300 border border-amber-500/30">
                  准入级别: {pkg.tierRequirement} 及以上
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                {pkg.title}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl font-light">
                {pkg.tagline}
              </p>
            </div>

            <div className="text-right bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20 self-start sm:self-auto">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">会员专享单人售价</span>
              <span className="text-2xl font-serif font-bold text-amber-400">
                {formatCurrency(pkg.priceUSD)}
              </span>
              <span className="text-xs text-slate-400 block">{pkg.duration}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">
          {!isBookingStep ? (
            <>
              {/* Overview & Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2">
                      套餐核心体验概览
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pkg.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2">
                      标志性亮点特色
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-200 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>爱马仕沙巴专属尊崇礼遇包含</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {pkg.included.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Day-by-Day Interactive Itinerary */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-slate-100 flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>逐日行程奢华体验规划</span>
                  </h3>
                  <span className="text-xs text-slate-400">点击切换查看每日行程详情</span>
                </div>

                {/* Day selector tabs */}
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {pkg.itinerary.map(item => (
                    <button
                      key={item.day}
                      onClick={() => setSelectedDay(item.day)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                        selectedDay === item.day
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      第 {item.day} 天 (Day {item.day})
                    </button>
                  ))}
                </div>

                {/* Active Day Detail */}
                {pkg.itinerary
                  .filter(it => it.day === selectedDay)
                  .map(it => (
                    <div key={it.day} className="mt-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 animate-fadeIn">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-amber-300">
                          第 {it.day} 天：{it.title}
                        </h4>
                        <span className="text-xs text-slate-400 flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{it.location}</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{it.description}</p>
                      
                      <div className="pt-2">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                          当日特色项目:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {it.activities.map((act, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs"
                            >
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            /* Interactive Booking Simulation Step */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-amber-300">正在锁定预订：{pkg.title}</h4>
                  <p className="text-xs text-slate-300">沙巴区域运营商专属管家一对一无缝直通</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">预订总额:</span>
                  <p className="text-xl font-serif font-bold text-amber-400">{formatCurrency(totalPriceUSD)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">预订会员档案</label>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center space-x-2">
                    <User className="w-4 h-4 text-amber-400" />
                    <span>{currentMember.name} ({currentMember.tier} · {currentMember.country})</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">期望抵港出行日期</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={e => setTravelDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">出行贵宾人数</label>
                  <div className="flex items-center space-x-3">
                    {[1, 2, 3, 4, 6].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestCount(num)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          guestCount === num
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {num} 位贵宾
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">VIP定制偏好 / 餐饮禁忌 / 特殊需求</label>
                  <input
                    type="text"
                    placeholder="如：需要机坪直升机转机、海景总统套房、迎宾香槟冰镇"
                    value={specialRequest}
                    onChange={e => setSpecialRequest(e.target.value)}
                    className="w-full p-2.5 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          {!isBookingStep ? (
            <>
              <div className="text-xs text-slate-400 hidden sm:block">
                受爱马仕沙巴区域运营商全程VIP履约与安保保障
              </div>
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setIsBookingStep(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-gold-sm hover:shadow-gold-lg transition-all"
                >
                  <span>立即体验预订套餐</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsBookingStep(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs"
              >
                返回行程详情
              </button>

              <button
                onClick={handleConfirmBooking}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-emerald-lg transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>确认并即刻签发 H-Pass 电子行程通票</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
