import React from 'react';
import { useApp } from '../../context/AppContext';
import { FLAGSHIP_PACKAGES, MERCHANT_PARTNERS } from '../../data/ecosystemData';
import {
  QrCode,
  Sparkles,
  Calendar,
  ArrowRight,
  Sun,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface MemberDashboardProps {
  setActiveTab: (tab: string) => void;
}

export const MemberDashboard: React.FC<MemberDashboardProps> = ({ setActiveTab }) => {
  const {
    currentMember,
    setSelectedPackageForModal,
    setSelectedMerchantForModal,
    formatCurrency
  } = useApp();

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Banner + Live KK Weather Widget */}
      <div className="relative rounded-2xl overflow-hidden glass-card-cyan border-cyan-500/30 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>H Pass 沙巴 · 智能旅行管家</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              尊贵的 {currentMember.name.split(' ')[0]}，欢迎开启沙巴之旅
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              您的【{currentMember.tier}】尊崇特权已在沙巴亚庇及周边150+家联盟商户中实时激活生效。
            </p>
          </div>

          {/* Live Sabah Atmospheric & Tide Widget */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center space-x-4 self-start lg:self-auto">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-white">沙巴 · 亚庇市</span>
                <span className="text-xs text-amber-400 font-semibold">29°C · 晴朗微风</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">丹绒亚路今日绝美日落预报: 下午 6:28</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Digital H Pass Card + Upcoming Trip Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Digital H Pass VIP Card */}
        <div className="lg:col-span-5 glass-card-gold p-6 rounded-2xl border-amber-500/40 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="H Pass Logo" className="w-8 h-8 rounded-full shadow-md shrink-0" />
                <div>
                  <h3 className="text-xs font-serif font-bold text-amber-300 tracking-wider">HERMES SABAH</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">沙巴数字身份通票</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                {currentMember.tier}
              </span>
            </div>

            {/* QR Simulation Area */}
            <div className="p-4 bg-slate-950/90 rounded-xl border border-amber-500/30 flex items-center space-x-4">
              <div className="w-20 h-20 bg-white p-1.5 rounded-lg shrink-0 flex items-center justify-center shadow-md">
                <QrCode className="w-16 h-16 text-slate-950" />
              </div>
              <div className="space-y-1 text-xs">
                <span className="text-[10px] text-slate-400 block font-mono">卡号: {currentMember.memberNo}</span>
                <p className="text-xs font-bold text-white">{currentMember.name}</p>
                <div className="flex items-center space-x-1 text-emerald-400 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>全域150+商户即扫即享</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">生态积分</span>
                <span className="font-bold text-amber-400">{currentMember.points.toLocaleString()} 分</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">可用消费金</span>
                <span className="font-bold text-emerald-400">RM {currentMember.creditsMYR.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-amber-500/20 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">在沙巴签约商户出示此码享受礼遇</span>
            <button
              onClick={() => setActiveTab('merchants')}
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
            >
              <span>查看全部特权</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Upcoming Trip / Itinerary Widget */}
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>当前行程动态与接驳状态</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              已确认锁定出行
            </span>
          </div>

          {currentMember.nextTrip ? (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-serif font-bold text-amber-300">
                    {currentMember.nextTrip.packageName}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">
                    预订编号: {currentMember.nextTrip.bookingRef}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-300">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentMember.nextTrip.date}</span>
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">
                    {currentMember.nextTrip.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase block">机场要客礼遇</span>
                  <span className="text-slate-200 font-medium">机坪VIP免提接机</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase block">专属接驾专员</span>
                  <span className="text-slate-200 font-medium">菲尔道斯主管 (LM/专机)</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase block">房型保障</span>
                  <span className="text-slate-200 font-medium">独栋海景总统别墅已锁房</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-400 space-y-2">
              <p>暂无正在进行中的行程。</p>
              <button
                onClick={() => setActiveTab('packages')}
                className="text-cyan-400 font-bold underline"
              >
                浏览沙巴三大旗舰定制套餐
              </button>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setActiveTab('bookings')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1"
            >
              <span>查看电子通票与凭证</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium"
            >
              探索亚庇网红秘境
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Flagship Packages */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-white">为您精选的沙巴旗舰文旅</h3>
            <p className="text-xs text-slate-400">尊享爱马仕批发底价房源保障与专属安保礼宾</p>
          </div>
          <button
            onClick={() => setActiveTab('packages')}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
          >
            <span>查看全部套餐</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLAGSHIP_PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackageForModal(pkg)}
              className="glass-card rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
                  {pkg.badgeText}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pkg.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{pkg.tagline}</p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400">{pkg.duration}</span>
                  <span className="text-sm font-serif font-bold text-amber-400">{formatCurrency(pkg.priceUSD)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Merchant Offers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-white">沙巴联盟商户尊荣礼遇</h3>
            <p className="text-xs text-slate-400">出示 H Pass 享8折至9折专属优惠及消费积分累积</p>
          </div>
          <button
            onClick={() => setActiveTab('merchants')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1"
          >
            <span>探索全部 150+ 签约商户</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MERCHANT_PARTNERS.slice(0, 3).map(m => (
            <div
              key={m.id}
              onClick={() => setSelectedMerchantForModal(m)}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center space-x-3.5"
            >
              <img src={m.image} alt={m.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">{m.category}</span>
                  <span className="text-[10px] text-amber-400 font-bold">享 {m.discountPercentage}% 优惠</span>
                </div>
                <h4 className="text-xs font-bold text-white truncate mt-0.5">{m.name}</h4>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{m.district}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
