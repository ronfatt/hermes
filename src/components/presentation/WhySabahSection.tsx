import React, { useState } from 'react';
import {
  Plane,
  Trees,
  Waves,
  Building2,
  Gem,
  CheckCircle2,
  Compass
} from 'lucide-react';

export const WhySabahSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const flightOrigins = [
    { city: '新加坡 (Singapore)', time: '2小时 20分', status: '每日多班直飞' },
    { city: '中国香港 (Hong Kong)', time: '3小时 05分', status: '每日多班直飞' },
    { city: '中国台北 (Taipei)', time: '3小时 30分', status: '每日直飞航线' },
    { city: '韩国首尔 (Seoul)', time: '5小时 15分', status: '每日定期直飞' },
    { city: '日本东京 (Tokyo)', time: '5小时 45分', status: '便捷联程航线' },
    { city: '中国上海/深圳 (Shanghai)', time: '4小时 00分', status: '高频直飞航线' },
  ];

  const pillars = [
    {
      id: 'pillar-nature',
      icon: <Trees className="w-6 h-6 text-emerald-400" />,
      title: '联合国教科文组织“三冠王”与远古雨林',
      subtitle: '拥有1.3亿年历史的亚洲生态生物多样性宝库',
      badge: '亚洲生态之都',
      image: '/hermes-resort-island.jpg',
      description: '沙巴是全球极少数同时荣获联合国教科文组织 (UNESCO) “三冠王”殊荣（世界自然遗产、世界生物圈保护区、世界地质公园）的圣地。海拔4,095米的神山（京那巴鲁山）构筑起无可替代的生态野奢高地。',
      bullets: [
        '拥有超过5,000种高等植物与600余种野生珍稀兰花品种',
        '神山高海拔私家度假木屋与昆达山高山有机农业观光',
        '常年18°C - 22°C的高山微气候，完美避暑与康养胜地'
      ]
    },
    {
      id: 'pillar-islands',
      icon: <Waves className="w-6 h-6 text-cyan-400" />,
      title: '世界级珊瑚大三角与海岛私密奢华',
      subtitle: '距亚庇市中心仅15分钟航程的纯净海洋秘境',
      badge: '珊瑚大三角核心',
      image: '/luxury-water-villa.jpg',
      description: '从亚庇市区码头乘私人快艇或游艇仅需15分钟，即可直达东姑阿都拉曼国家海洋公园5座纯净海岛，加雅岛的顶级水上独栋别墅与丹绒亚路世界级日落在此交相辉映。',
      bullets: [
        '东姑阿都拉曼国家海洋公园5座私密海岛与未受污染的珊瑚礁',
        '加雅岛 YTL 等奢华水上度假村与专属海洋保育特权',
        '直通仙本那、诗巴丹世界顶尖潜水胜地的天然中转门户'
      ]
    },
    {
      id: 'pillar-mice',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      title: '成熟的五星级接待与高端会奖 (MICE) 配套',
      subtitle: '沙巴国际会议中心 (SICC) 与五星游艇高尔夫综合体',
      badge: '基础设施完备',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      description: '亚庇完美融合了原始大自然与成熟的现代高端接待能力。拥有临海而建、可容纳超5,000人的沙巴国际会议中心 (SICC)，以及拥有27洞锦标赛高尔夫球场与国际游艇码头的综合度假区。',
      bullets: [
        '沙巴国际会议中心 (SICC) 具备举办全球千人级峰会与发布会能力',
        '丝绸港湾 27洞格雷厄姆·马什设计锦标赛球场与专业游艇码头',
        '香格里拉丹绒亚路、凯悦尚萃、艾美等国际五星级酒店集群'
      ]
    },
    {
      id: 'pillar-demographics',
      icon: <Gem className="w-6 h-6 text-purple-400" />,
      title: '精准契合爱马仕高净值会员消费偏好',
      subtitle: '极高客单消费力与稀缺体验型奢华的完美融合',
      badge: '高净值客群极度契合',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      description: '爱马仕全球高净值会员不再满足于同质化的走马观花，而是极度渴求远离尘嚣的私密纯粹自然、直升机私享巡航、私房主厨定制海鲜、顶级南洋金珠及全流程礼宾安保。',
      bullets: [
        '高端定制套餐单客消费达 $1,800 至 $7,200 美元区间',
        '涵盖海鲜餐饮、南洋珍珠、康养水疗的全闭环商户高频消费',
        '依托 H Pass 权益体系形成极高复游率与品牌忠诚度'
      ]
    }
  ];

  return (
    <section id="why-sabah" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>战略区位与核心优势</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            为什么选择沙巴与亚庇作为落地枢纽？
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            地处亚洲几何中心，4小时飞行半径覆盖亚太核心都市，兼具世界级自然奇观、顶尖会奖设施与极佳营商环境。
          </p>
        </div>

        {/* Flight Connectivity Grid */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Plane className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">直达空中航线枢纽 (KKIA - 亚庇国际机场)</h3>
                <p className="text-xs text-slate-400">全马第二繁忙的国际航空港，直连亚太各大中心城市</p>
              </div>
            </div>
            <div className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 self-start md:self-auto">
              平均 4 小时航程直达 85% 的爱马仕亚洲核心会员客群
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
            {flightOrigins.map((orig, i) => (
              <div key={i} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all text-center space-y-1">
                <span className="text-xs font-bold text-slate-100 block">{orig.city}</span>
                <span className="text-sm font-serif font-bold text-amber-400 block">{orig.time}</span>
                <span className="text-[10px] text-slate-400 block">{orig.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Interactive Tabs & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 px-2 block">
              四大核心战略支柱
            </span>
            {pillars.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activePillar === idx
                    ? 'bg-slate-800/90 border-amber-500/50 shadow-gold-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start space-x-3.5">
                  <div className={`p-2.5 rounded-lg shrink-0 ${activePillar === idx ? 'bg-slate-950 border border-amber-500/30' : 'bg-slate-950/60'}`}>
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        {p.badge}
                      </span>
                      {activePillar === idx && <span className="text-amber-400 text-xs">● 正在查看</span>}
                    </div>
                    <h4 className="text-sm font-bold text-white mt-0.5">{p.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{p.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Pillar Showcase Panel */}
          <div className="lg:col-span-7">
            {pillars.map((p, idx) => (
              idx === activePillar && (
                <div
                  key={p.id}
                  className="h-full glass-card rounded-2xl border-slate-800 overflow-hidden flex flex-col justify-between animate-fadeIn"
                >
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                        {p.badge}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-2">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {p.bullets.map((b, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
