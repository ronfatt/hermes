import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  Waves,
  Trees,
  Fish,
  Gem
} from 'lucide-react';

export const MemberExploreSabah: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<number>(0);

  const hotspots = [
    {
      name: '亚庇海滨大道与哲斯顿港游艇码头 (KK Waterfront & Marina)',
      category: '海岸生活方式与游艇枢纽',
      icon: <Waves className="w-4 h-4 text-cyan-400" />,
      district: '亚庇海滨核心区 (KK Waterfront)',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      description: '沙巴奢华海滨生活方式的绝对核心。汇集了顶级活海鲜酒楼、历史悠久的哲斯顿港私人游艇码头及落日香槟酒吧街。',
      privileges: '尊享游艇优先登船礼遇，大茄来等海鲜餐厅享88折并赠送招牌老虎虾。',
      coordinates: '5.9804° N, 116.0735° E',
      highlights: ['哲斯顿港码头 (Jesselton Point)', '大茄来海鲜总店', '海滨木栈道落日酒吧']
    },
    {
      name: '丹绒亚路与丝绸港半岛 (Tanjung Aru & Sutera Peninsula)',
      category: '五星级综合度假与世界级日落',
      icon: <Star className="w-4 h-4 text-amber-400" />,
      district: '丹绒亚路海岸线',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      description: '世界三大最美日落观测胜地，坐拥27洞锦标赛高尔夫球场、香格里拉落日酒吧及独岛“气”水疗中心。',
      privileges: '香格里拉 Sunset Bar 保证第一排临海观景席，丝绸港湾高尔夫与CHI水疗8折特权。',
      coordinates: '5.9528° N, 116.0461° E',
      highlights: ['香格里拉 Sunset Bar', '丝绸港27洞高尔夫', '丹绒亚路海滩落日公园']
    },
    {
      name: '加雅岛与东姑阿都拉曼珊瑚海洋公园 (Gaya Island Marine Park)',
      category: '海岛生态秘境与水上独栋别墅',
      icon: <Fish className="w-4 h-4 text-emerald-400" />,
      district: '国家海洋公园核心海域',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      description: '距市区仅15分钟快艇航程，即可置身于雨林环抱的清澈珊瑚海域，拥有私家海洋生物保育中心与水上总统套房。',
      privileges: '海洋学者一对一私享浮潜导览，私家海滩独立凉亭包场特权。',
      coordinates: '6.0125° N, 116.0310° E',
      highlights: ['YTL 加雅岛顶级生态度假村', '沙比岛与马奴干岛珊瑚区', '海洋生物保育中心']
    },
    {
      name: '神山国家公园与昆达山高山河谷 (Mount Kinabalu & Kundasang)',
      category: '联合国世界遗产与高山避暑',
      icon: <Trees className="w-4 h-4 text-purple-400" />,
      district: '兰瑙 / 昆达山高地',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
      description: '巍峨海拔4,095米的神山花岗岩峰顶直插云霄。常年18°C凉爽气候，配备私密高山木屋、有机牧场与树冠吊桥。',
      privileges: '直升机神山峰顶鸟瞰巡航通道，植物学首席专家私家兰花微观探秘。',
      coordinates: '6.0753° N, 116.5584° E',
      highlights: ['京那巴鲁世界自然遗产公园', '昆达山高山有机农业带', '德萨高山生态牧场']
    },
    {
      name: '加雅街百年历史街区与南洋珍珠工坊 (Gaya Street Heritage)',
      category: '历史非遗与南洋金珠高定',
      icon: <Gem className="w-4 h-4 text-pink-400" />,
      district: '亚庇老城区历史街区',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      description: '亚庇人文历史发源地，拥有百年南洋骑楼、沙巴单品精品咖啡馆及沙巴权威天然南洋金珠定制工坊。',
      privileges: '首席珠宝大师一对一量身手工镶嵌，天然金珠权威鉴定证书保障。',
      coordinates: '5.9830° N, 116.0772° E',
      highlights: ['沙巴南洋珍珠非遗旗舰店', '加雅街周日历史市集', '丹南手冲精品咖啡馆']
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">探索沙巴专属目的地指南</h2>
        <p className="text-xs text-slate-400 mt-1">
          为爱马仕会员量身定制的亚庇与周边地标地图，深度整合商户权益与私密体验。
        </p>
      </div>

      {/* Interactive Map & Hotspot Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Hotspot List on Left */}
        <div className="lg:col-span-5 space-y-3">
          {hotspots.map((spot, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedHotspot(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                selectedHotspot === idx
                  ? 'bg-slate-900 border-amber-500 shadow-gold-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  {spot.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{spot.category}</span>
                    {selectedHotspot === idx && <span className="text-amber-400 text-xs">● 正在查看</span>}
                  </div>
                  <h4 className="text-sm font-bold text-white truncate mt-0.5">{spot.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{spot.district}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Hotspot Detailed View */}
        <div className="lg:col-span-7">
          {hotspots.map((spot, idx) => (
            idx === selectedHotspot && (
              <div
                key={idx}
                className="glass-card rounded-2xl border-amber-500/30 overflow-hidden flex flex-col justify-between h-full animate-fadeIn"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-300 border border-amber-500/30">
                      地理坐标: {spot.coordinates}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      {spot.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-1">
                      {spot.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {spot.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                    <span className="font-bold text-amber-300 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>爱马仕会员专属落地权益:</span>
                    </span>
                    <p className="text-slate-200">{spot.privileges}</p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      核心打卡与体验地标:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {spot.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};
