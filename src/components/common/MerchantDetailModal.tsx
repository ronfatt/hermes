import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  MapPin,
  Star,
  Sparkles,
  QrCode,
  CheckCircle2,
  Tag,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const MerchantDetailModal: React.FC = () => {
  const {
    selectedMerchantForModal,
    setSelectedMerchantForModal,
    currentMember,
    redeemedPerks,
    redeemPerk,
    setCurrentMode
  } = useApp();

  const [redeemedNow, setRedeemedNow] = useState(false);

  if (!selectedMerchantForModal) return null;

  const m = selectedMerchantForModal;
  const isAlreadyRedeemed = redeemedPerks.includes(m.id) || redeemedNow;

  const handleRedeem = () => {
    redeemPerk(m.id);
    setRedeemedNow(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setSelectedMerchantForModal(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                  {m.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{m.rating}</span>
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">{m.name}</h3>
              <p className="text-xs text-slate-300 flex items-center space-x-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{m.location}</span>
              </p>
            </div>

            <div className="text-right bg-slate-950/80 p-2.5 rounded-xl border border-amber-500/20">
              <span className="text-[10px] text-slate-400 block uppercase">H-Discount</span>
              <span className="text-lg font-bold text-amber-400">Up to {m.discountPercentage}% OFF</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>

          {/* Tier Specific Privilege Cards */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2.5 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hermes Tier Privileges</span>
            </h4>
            
            <div className="space-y-2">
              <div className={`p-3 rounded-lg border text-xs ${
                currentMember.tier === 'Gold' ? 'bg-amber-500/10 border-amber-500/50' : 'bg-slate-800/40 border-slate-700/50'
              }`}>
                <div className="flex items-center justify-between font-semibold text-amber-300 mb-0.5">
                  <span>Gold Member Privilege</span>
                  {currentMember.tier === 'Gold' && <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">Your Tier</span>}
                </div>
                <p className="text-slate-300">{m.tierPrivilege.gold}</p>
              </div>

              <div className={`p-3 rounded-lg border text-xs ${
                currentMember.tier === 'Platinum' ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-slate-800/40 border-slate-700/50'
              }`}>
                <div className="flex items-center justify-between font-semibold text-cyan-300 mb-0.5">
                  <span>Platinum Member Privilege</span>
                  {currentMember.tier === 'Platinum' && <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">Your Tier</span>}
                </div>
                <p className="text-slate-300">{m.tierPrivilege.platinum}</p>
              </div>

              <div className={`p-3 rounded-lg border text-xs ${
                currentMember.tier === 'Black VIP' ? 'bg-gradient-to-r from-amber-500/20 to-purple-500/20 border-amber-500/60' : 'bg-slate-800/40 border-slate-700/50'
              }`}>
                <div className="flex items-center justify-between font-semibold text-amber-200 mb-0.5">
                  <span>Black VIP Exclusive Privilege</span>
                  {currentMember.tier === 'Black VIP' && <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/30 text-amber-300">Your Tier</span>}
                </div>
                <p className="text-slate-300">{m.tierPrivilege.black}</p>
              </div>
            </div>
          </div>

          {/* Reward Earning Rate */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <span className="text-slate-400">Ecosystem Loyalty Rewards:</span>
            <span className="text-amber-400 font-semibold">{m.hCreditsEarnRate}</span>
          </div>

          {/* QR Pass / Redemption State */}
          {isAlreadyRedeemed && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center space-x-4 animate-fadeIn">
              <div className="w-16 h-16 bg-white p-1 rounded-lg shrink-0 flex items-center justify-center">
                {/* Visual SVG QR */}
                <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-white text-[8px] font-mono leading-none p-1 rounded">
                  <QrCode className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-bold mb-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>VIP Pass Verified & Ready to Present</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Present this QR pass to the merchant host in Sabah to apply your {currentMember.tier} discount & earn credits.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Verified Hermes Sabah Regional Partner</span>
          
          {!isAlreadyRedeemed ? (
            <button
              onClick={handleRedeem}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-gold-sm transition-all"
            >
              <QrCode className="w-4 h-4" />
              <span>Activate H Pass Privilege</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSelectedMerchantForModal(null);
                setCurrentMode('member');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-400 hover:bg-slate-700 text-xs flex items-center space-x-1.5"
            >
              <span>View in H Pass Wallet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
