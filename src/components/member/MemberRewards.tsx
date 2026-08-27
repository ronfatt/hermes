import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Gift,
  Sparkles,
  Plane,
  Anchor,
  Coffee,
  Gem,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const MemberRewards: React.FC = () => {
  const { currentMember, showToast, triggerConfetti } = useApp();

  const rewardsCatalog = [
    {
      id: 'rew-1',
      title: 'VIP Catamaran Sunset Champagne Upgrade',
      category: 'Experiences',
      costPoints: 12000,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
      description: 'Upgrade your standard transfer to a private 2-hour sunset champagne voyage along Tanjung Aru coast.',
      tierReq: 'Gold'
    },
    {
      id: 'rew-2',
      title: 'Airbus H130 Helicopter Transfer Credit',
      category: 'Aviation',
      costPoints: 25000,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
      description: 'RM 2,000 credit towards private helicopter scenic flights around Mount Kinabalu peak.',
      tierReq: 'Platinum'
    },
    {
      id: 'rew-3',
      title: 'Sabah South Sea Golden Pearl Pendant',
      category: 'Artisanal Luxury',
      costPoints: 40000,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80',
      description: 'Certified 11mm natural Sabah Golden Pearl set in 18k solid gold with master jeweler certificate.',
      tierReq: 'Black VIP'
    },
    {
      id: 'rew-4',
      title: 'Artisanal Borneo Coffee & Rare Tea Hamper',
      category: 'Gourmet',
      costPoints: 5000,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=80',
      description: 'Curated box of Tenom single-origin reserve coffee and high-altitude Kundasang organic mountain teas.',
      tierReq: 'Gold'
    }
  ];

  const handleRedeemReward = (title: string, cost: number) => {
    if (currentMember.points < cost) {
      showToast('Insufficient Points', `You need ${cost.toLocaleString()} points for this reward.`, 'info');
      return;
    }
    triggerConfetti();
    showToast('Reward Redeemed!', `Claim voucher for "${title}" sent to your H Pass wallet.`, 'gold');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Balance */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/30 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>H-Rewards Loyalty & Redemption Center</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">Your Reward Balance</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Earn points automatically on package bookings, hotel stays, and merchant spending.
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-slate-950 p-4 rounded-xl border border-slate-800 self-start sm:self-auto">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Available H-Points
            </span>
            <span className="text-2xl font-serif font-bold text-amber-400">
              {currentMember.points.toLocaleString()}
            </span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Loyalty Tier
            </span>
            <span className="text-xs font-bold text-slate-200">
              {currentMember.tier}
            </span>
          </div>
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-white">Exclusive Member Redemption Catalog</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardsCatalog.map(rew => {
            const canAfford = currentMember.points >= rew.costPoints;

            return (
              <div
                key={rew.id}
                className="glass-card rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden">
                    <img src={rew.image} alt={rew.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30">
                      Tier: {rew.tierReq}+
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {rew.category}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-2">{rew.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{rew.description}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                    <span className="text-slate-400">Cost:</span>
                    <span className="font-serif font-bold text-amber-400">{rew.costPoints.toLocaleString()} pts</span>
                  </div>

                  <button
                    onClick={() => handleRedeemReward(rew.title, rew.costPoints)}
                    disabled={!canAfford}
                    className={`w-full py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all ${
                      canAfford
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-gold-sm'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>{canAfford ? 'Redeem with Points' : 'Need More Points'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
