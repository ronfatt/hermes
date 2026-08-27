import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Compass,
  CalendarCheck,
  PlaneLanding,
  QrCode,
  CreditCard,
  Gift,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone
} from 'lucide-react';

export const MemberFlowSection: React.FC = () => {
  const { setCurrentMode } = useApp();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: '发现沙巴 (Discover)',
      subtitle: '全球会员端触达与灵感唤醒',
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      description: '爱马仕全球会员在专属会员APP与高品质数字刊物中，接收到沙巴生态定制视频与个性化海岛雨林出行灵感推送。',
      bullets: [
        '基于会员旅行偏好的AI智能行程定制推荐',
        '3大旗舰高定套餐与年度全球峰会优先预约通道',
        '行前沙巴专属双语旅行管家一对一线上咨询'
      ]
    },
    {
      number: '02',
      title: '一键锁定套餐 (Book Package)',
      subtitle: '尊享批发价保障与快速锁房',
      icon: <CalendarCheck className="w-6 h-6 text-emerald-400" />,
      description: '会员一键确认出行周期、随行家属及定制化偏好（直升机接驳、高景房型、特殊饮食要求等）。',
      bullets: [
        '即时生成爱马仕沙巴 H Pass 电子出行通票',
        '底层直通五星级酒店批发级房源底价结算',
        '系统自动分配专属双语礼宾与接驾专员'
      ]
    },
    {
      number: '03',
      title: 'VIP机坪抵港 (Arrive in KK)',
      subtitle: '要客通关与豪车/直升机护航',
      icon: <PlaneLanding className="w-6 h-6 text-cyan-400" />,
      description: '航班降落亚庇国际机场后，专享要客快速通关礼遇，行李免提直达，埃尔法豪华专车或空客直升机在机坪等候接驳。',
      bullets: [
        '全程零等待免排队海关礼遇通关',
        '车内配备冰镇香槟、高地红茶与原生态迎宾仪式',
        '直达海岛私密独栋水上别墅办理无缝入住'
      ]
    },
    {
      number: '04',
      title: '出示 H Pass 身份通票',
      subtitle: '全沙巴联盟商户一卡通',
      icon: <QrCode className="w-6 h-6 text-purple-400" />,
      description: '会员手机端动态 H Pass 成为畅游沙巴的尊贵钥匙，展示金卡/白金/黑卡对应级别，出示即可享联盟商户尊荣特权。',
      bullets: [
        '在150+家严选商户现场即扫即享专属折扣',
        '海岛离线加密验证技术，偏远秘境无网络依然顺畅核销',
        '不同级别会员差异化尊崇礼遇（免排队、赠菜、包场）'
      ]
    },
    {
      number: '05',
      title: '全域商户网络消费 (Spend)',
      subtitle: '高频闭环消费赋能本地',
      icon: <CreditCard className="w-6 h-6 text-pink-400" />,
      description: '在海鲜酒楼、超级游艇、南洋金珠珠宝坊、独岛水疗享受8折至9折特权，消费资金安全流转于沙巴实体经济圈。',
      bullets: [
        '独享 10% - 25% 会员专属立减优惠',
        '日落高峰期保证一线最佳景观位VIP保留席',
        '运营商端自动化统一结算商户账单'
      ]
    },
    {
      number: '06',
      title: '累积积分与持续复游 (Earn & Rewards)',
      subtitle: '生态积分沉淀与长效留存',
      icon: <Gift className="w-6 h-6 text-amber-300" />,
      description: '在沙巴的每一笔消费均转化为 H-Credits 积分，可兑换直升机升舱券、私人游艇落日航行及沙巴顶级金珠传世手信。',
      bullets: [
        '每消费 $1 美元最高返还 6 H-Credits 生态积分',
        '积分可用于抵扣下一期定制旅行或兑换峰会门票',
        '带动极高的婆罗洲乃至沙巴全域复游率'
      ]
    }
  ];

  return (
    <section id="member-flow" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>端到端会员完整生命周期</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            会员全生命周期旅程 (Member Journey Flow)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            从线上发现沙巴、一键预订、机坪VIP抵港、出示通票到全域商户消费与积分复游的完整商业闭环。
          </p>
        </div>

        {/* Interactive Step Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                activeStep === idx
                  ? 'bg-slate-900 border-amber-500 shadow-gold-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold font-mono ${activeStep === idx ? 'text-amber-400' : 'text-slate-500'}`}>
                  阶段 {step.number}
                </span>
                {activeStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>}
              </div>
              <h4 className="text-xs font-bold text-white truncate">{step.title}</h4>
            </button>
          ))}
        </div>

        {/* Detailed Active Step Presentation Display */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border-amber-500/30 bg-slate-900/90 shadow-gold-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/30">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    第 {steps[activeStep].number} 阶段 · 共 06 步
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {steps[activeStep].title} — <span className="text-amber-300 font-sans text-lg">{steps[activeStep].subtitle}</span>
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {steps[activeStep].description}
              </p>

              <div className="space-y-2.5 pt-3">
                {steps[activeStep].bullets.map((b, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Demo Action Card on Right */}
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto animate-bounce-short" />
              <div>
                <h4 className="text-sm font-bold text-white">实时体验该流程的产品原型</h4>
                <p className="text-xs text-slate-400 mt-1">
                  进入 H Pass 沙巴会员端 Demo，体验套餐预订、商户权益核销及积分兑换。
                </p>
              </div>

              <button
                onClick={() => setCurrentMode('member')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-cyan-lg/30 transition-all"
              >
                <span>进入会员端体验</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
