import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Gift,
  Sparkles
} from 'lucide-react';

export const MemberRewards: React.FC = () => {
  const { currentMember, showToast, triggerConfetti } = useApp();

  const rewardsCatalog = [
    {
      id: 'rew-1',
      title: '丹绒亚路私人双体帆船日落香槟升舱券',
      category: '游艇体验升舱',
      costPoints: 12000,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
      description: '将普通快艇出海升级为2小时私人双体帆船日落航行，配备法国侍酒师特选香槟与Tapas小吃。',
      tierReq: '金卡 (Gold)'
    },
    {
      id: 'rew-2',
      title: '神山全景直升机航拍包机抵扣券 (RM 2,000)',
      category: '通航与直升机',
      costPoints: 25000,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
      description: '可直接抵扣空客H130轻型直升机神山峰顶及云海俯瞰包机费用。',
      tierReq: '白金卡 (Platinum)'
    },
    {
      id: 'rew-3',
      title: '沙巴天然南洋金珠 18K金传世吊坠',
      category: '非遗与高定珠宝',
      costPoints: 40000,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80',
      description: '沙巴海水养殖11mm+特级无暇南洋金珠，镶嵌18K纯金配钻，附权威国检证书。',
      tierReq: '黑金VIP卡 (Black VIP)'
    },
    {
      id: 'rew-4',
      title: '婆罗洲珍稀丹南单品咖啡与神山有机茶礼盒',
      category: '沙巴高端臻味',
      costPoints: 5000,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=80',
      description: '丹南手工精选单品咖啡豆与神山昆达山高海拔有机红茶定制奢华礼盒。',
      tierReq: '金卡 (Gold)'
    }
  ];

  const handleRedeemReward = (title: string, cost: number) => {
    if (currentMember.points < cost) {
      showToast('积分不足', `兑换该项目需要 ${cost.toLocaleString()} 积分，您当前积分为 ${currentMember.points.toLocaleString()}。`, 'info');
      return;
    }
    triggerConfetti();
    showToast('兑换成功！', `【${title}】兑换券已实时发放至您的 H Pass 电子卡包。`, 'gold');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Balance */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/30 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>H-Rewards 积分兑换中心</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">您的可用生态积分</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            在沙巴的所有定制游套餐、度假酒店住宿及商户消费均可实时自动累积积分。
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-slate-950 p-4 rounded-xl border border-slate-800 self-start sm:self-auto">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              当前积分余额
            </span>
            <span className="text-2xl font-serif font-bold text-amber-400">
              {currentMember.points.toLocaleString()} <span className="text-xs font-sans">分</span>
            </span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              对应尊贵会籍
            </span>
            <span className="text-xs font-bold text-slate-200">
              {currentMember.tier.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-white">爱马仕会员专属礼遇兑换专区</h3>
        
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
                      准入: {rew.tierReq}
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
                    <span className="text-slate-400">所需积分:</span>
                    <span className="font-serif font-bold text-amber-400">{rew.costPoints.toLocaleString()} 分</span>
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
                    <span>{canAfford ? '立即积分兑换' : '积分尚不足'}</span>
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
