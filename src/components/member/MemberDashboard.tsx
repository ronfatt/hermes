import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FLAGSHIP_PACKAGES, MERCHANT_PARTNERS } from '../../data/ecosystemData';
import {
  QrCode,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  Sun,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  Gift
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

  const [showQrExpanded, setShowQrExpanded] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Banner + Live KK Weather Widget */}
      <div className="relative rounded-2xl overflow-hidden glass-card-cyan border-cyan-500/30 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>H Pass Sabah · Digital Concierge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Welcome back, {currentMember.name.split(' ')[0]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Your {currentMember.tier} privileges are active across 150+ verified venues in Kota Kinabalu and Sabah.
            </p>
          </div>

          {/* Live Sabah Atmospheric & Tide Widget */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center space-x-4 self-start lg:self-auto">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-white">Kota Kinabalu</span>
                <span className="text-xs text-amber-400 font-semibold">29°C · Tropical Sun</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Sunset at Tanjung Aru: 6:28 PM</p>
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
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-serif font-black text-sm">
                  H
                </div>
                <div>
                  <h3 className="text-xs font-serif font-bold text-amber-300 tracking-wider">HERMES SABAH</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Digital VIP Pass</p>
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
                <span className="text-[10px] text-slate-400 block font-mono">CODE: {currentMember.memberNo}</span>
                <p className="text-xs font-bold text-white">{currentMember.name}</p>
                <div className="flex items-center space-x-1 text-emerald-400 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Valid for 150+ Venues</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Rewards</span>
                <span className="font-bold text-amber-400">{currentMember.points.toLocaleString()} pts</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Credits</span>
                <span className="font-bold text-emerald-400">RM {currentMember.creditsMYR.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-amber-500/20 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Tap to present at partner terminals</span>
            <button
              onClick={() => setActiveTab('merchants')}
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
            >
              <span>View Privileges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Upcoming Trip / Itinerary Widget */}
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Upcoming Itinerary Status</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Confirmed Booking
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
                    Ref: {currentMember.nextTrip.bookingRef}
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
                  <span className="text-[10px] text-slate-500 uppercase block">Airport Protocol</span>
                  <span className="text-slate-200 font-medium">VIP Tarmac Greeting</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase block">Assigned Chauffeur</span>
                  <span className="text-slate-200 font-medium">Capt. Firdaus (Lexus LM)</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase block">Suite Allocation</span>
                  <span className="text-slate-200 font-medium">Ocean Villa Locked</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-400 space-y-2">
              <p>No active reservation found.</p>
              <button
                onClick={() => setActiveTab('packages')}
                className="text-cyan-400 font-bold underline"
              >
                Browse Flagship Sabah Packages
              </button>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setActiveTab('bookings')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1"
            >
              <span>Manage Trip & E-Vouchers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium"
            >
              Explore KK Hotspots
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Flagship Packages */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-white">Curated Packages for You</h3>
            <p className="text-xs text-slate-400">Exclusive member rates and VIP inclusions</p>
          </div>
          <button
            onClick={() => setActiveTab('packages')}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
          >
            <span>View All Packages</span>
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
            <h3 className="text-lg font-serif font-bold text-white">Recommended Merchant Privileges</h3>
            <p className="text-xs text-slate-400">Exclusive member discounts & instant credit earn</p>
          </div>
          <button
            onClick={() => setActiveTab('merchants')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1"
          >
            <span>Browse All 150+ Partners</span>
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
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">{m.category.split('&')[0]}</span>
                  <span className="text-[10px] text-amber-400 font-bold">-{m.discountPercentage}%</span>
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
