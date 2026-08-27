import {
  MemberProfile,
  FlagshipPackage,
  MerchantPartner,
  BookingRecord,
  VIPEvent,
  RevenueStream,
  RoadmapPhase
} from '../types';

export const INITIAL_MEMBERS: MemberProfile[] = [
  {
    id: 'mem-1',
    name: '亚历山大·凡斯 (Alexander Vance)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    tier: '黑金VIP卡 (Black VIP)',
    memberNo: 'H-8829-GLOBAL',
    country: '新加坡 (Singapore)',
    points: 48500,
    creditsMYR: 12500,
    totalTrips: 4,
    totalSpentUSD: 24800,
    status: '活跃会员',
    nextTrip: {
      packageName: 'H 沙巴至尊私享：私家岛屿与超级游艇奢华巡游',
      date: '2026年10月15日 - 10月21日',
      status: 'VIP直升机停机坪接驳已就绪',
      bookingRef: 'HSB-ELT-9921'
    }
  },
  {
    id: 'mem-2',
    name: '林雅姿 (Grace Lin)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    tier: '白金卡 (Platinum)',
    memberNo: 'H-4512-GLOBAL',
    country: '中国香港 (Hong Kong)',
    points: 29400,
    creditsMYR: 6800,
    totalTrips: 2,
    totalSpentUSD: 14200,
    status: '沙巴在途VIP',
    nextTrip: {
      packageName: 'H 婆罗洲传奇甄选：远古雨林冠层与神山高地奢华探索',
      date: '2026年9月02日 - 9月07日',
      status: '高地奢华度假木屋已锁房',
      bookingRef: 'HSB-SIG-4402'
    }
  },
  {
    id: 'mem-3',
    name: '佐藤健二 (Kenji Sato)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    tier: '金卡 (Gold)',
    memberNo: 'H-1088-GLOBAL',
    country: '日本东京 (Japan)',
    points: 15200,
    creditsMYR: 3200,
    totalTrips: 1,
    totalSpentUSD: 5900,
    status: '即将抵达',
    nextTrip: {
      packageName: 'H 沙巴初见启幕：亚庇海滨落日游艇与海岛奇遇',
      date: '2026年11月10日 - 11月13日',
      status: '已确认锁定',
      bookingRef: 'HSB-DSC-1184'
    }
  },
  {
    id: 'mem-4',
    name: '朱利安·索恩 (Julian Thorne)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    tier: '黑金VIP卡 (Black VIP)',
    memberNo: 'H-9014-GLOBAL',
    country: '英国伦敦 (UK)',
    points: 62000,
    creditsMYR: 18000,
    totalTrips: 5,
    totalSpentUSD: 38500,
    status: '活跃会员'
  },
  {
    id: 'mem-5',
    name: '张美玲 (Mei-Ling Zhang)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    tier: '白金卡 (Platinum)',
    memberNo: 'H-3390-GLOBAL',
    country: '中国上海 (Shanghai)',
    points: 33800,
    creditsMYR: 8400,
    totalTrips: 3,
    totalSpentUSD: 18900,
    status: '活跃会员'
  }
];

export const FLAGSHIP_PACKAGES: FlagshipPackage[] = [
  {
    id: 'pkg-discovery',
    code: 'H-DSC-01',
    title: 'H 沙巴初见启幕 (H Sabah Discovery)',
    tagline: '4天3晚 亚庇海岸线落日游艇、国家海洋公园珊瑚巡游与海鲜盛宴',
    duration: '4天 3晚',
    priceUSD: 1850,
    priceMYR: 8600,
    tierRequirement: '金卡 (Gold)',
    marginPercentage: 28,
    badgeText: '入门旗舰·高周转爆款',
    heroImage: '/luxury-water-villa.jpg',
    gallery: [
      '/luxury-water-villa.jpg',
      '/hermes-resort-island.jpg',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80'
    ],
    overview: '专为首次造访沙巴的爱马仕会员量身定制的极致海滨轻奢之旅。涵盖全球排名前三的丹绒亚路日落私人双体帆船香槟包船、东姑阿都拉曼国家海洋公园VIP珊瑚浮潜，以及直通亚庇顶级活海鲜私房料理。',
    highlights: [
      '丹绒亚路海岸私人双体帆船日落香槟巡航',
      '东姑阿都拉曼国家公园沙比岛/马奴干岛VIP快艇包船',
      '亚庇海滨顶级海鲜主厨私房定制晚宴',
      '丝绸港麦哲伦/香格里拉丹绒亚路五星级海景套房入住'
    ],
    included: [
      '3晚国际五星级奢华海景俱乐部套房',
      '爱马仕沙巴专属埃尔法 (Alphard)/威尔法 (Vellfire) 礼宾全程接送',
      '落日双体帆船包船与侍酒师特选香槟配餐',
      '亚庇国际机场 (KKIA) 机坪VIP快速通关与行李免提礼遇',
      '赠送 RM 1,200 爱马仕沙巴商户消费金'
    ],
    itinerary: [
      {
        day: 1,
        title: 'VIP机坪礼遇抵埗与世界级落日帆船启航',
        location: '亚庇国际机场 → 丝绸港私人游艇码头',
        description: '专职双语管家接机并走VIP快速通关，专车护送至五星级海景套房。傍晚登上私人双体帆船，在南中国海举杯欣赏丹绒亚路世界级壮阔日落。',
        activities: ['机场VIP快速通关', '码头香槟迎宾礼', '双体帆船落日航行', '主厨定制海鲜私宴']
      },
      {
        day: 2,
        title: '东姑阿都拉曼海洋公园海岛跳岛与珊瑚保育',
        location: '加雅岛 & 沙比岛珊瑚保护区',
        description: '搭乘私家快艇直抵国家海洋公园未开放海域，由专业海洋生物学者陪同开展私人珊瑚浮潜，并在私人沙滩凉亭享用顶级海鲜烧烤午宴。',
        activities: ['私人快艇包船出海', 'VIP海岛珊瑚巡游', '沙滩私厨龙虾BBQ', '加雅岛海景鸡尾酒会']
      },
      {
        day: 3,
        title: '沙巴原生态雨林非遗文化与海滨饕餮夜巡',
        location: '马里马里文化遗产区 & 加雅街美食街区',
        description: '深度体验婆罗洲原住民千年传统建筑与织染工艺，晚间由美食主厨带领品鉴亚庇独家沙巴肉骨茶、老虎虾与燕窝甜品。',
        activities: ['原住民文化非遗大师课', '沙巴传统手工艺鉴赏', '海滨主厨餐桌私宴', '夜市VIP漫步采风']
      },
      {
        day: 4,
        title: '沙巴匠心手信臻选与尊崇返程',
        location: '亚庇海滨街区 → 亚庇国际机场',
        description: '尊享单品沙巴丹南精品咖啡与稀有高地红茶品鉴会，专享沙巴特产管家打包直送机场，专车送机。',
        activities: ['海景全景尊享早餐', '沙巴特产管家专属定制', '专车VIP送机返程']
      }
    ]
  },
  {
    id: 'pkg-signature',
    code: 'H-SIG-02',
    title: 'H 婆罗洲传奇甄选 (H Borneo Signature)',
    tagline: '6天5晚 1.3亿年远古雨林冠层、联合国教科文组织神山高地奢华探索',
    duration: '6天 5晚',
    priceUSD: 3600,
    priceMYR: 16800,
    tierRequirement: '白金卡 (Platinum)',
    marginPercentage: 25,
    badgeText: '生态奢华·核心支柱',
    heroImage: '/hermes-resort-island.jpg',
    gallery: [
      '/hermes-resort-island.jpg',
      '/luxury-water-villa.jpg',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80'
    ],
    overview: '深度沉浸于婆罗洲拥有1.3亿年历史的地球最古老热带雨林，以及联合国教科文组织“三冠王”神山高地。结合高海拔私密山间别墅、直升机空中鸟瞰神山花岗岩峰顶与高山有机农庄料理。',
    highlights: [
      '直面神山壮丽云海的昆达山高地私家度假木屋别墅',
      '直升机私人俯瞰神山4095米巍峨峰顶与克罗克山脉',
      '植物学家私人带领的夜间远古雨林稀有物种微观探秘',
      '昆达山有机高山农庄从农田到餐桌的原生态米其林级晚宴'
    ],
    included: [
      '2晚亚庇五星海景酒店 + 3晚神山高地奢华全景别墅',
      '神山全景直升机航拍探索巡航（视天气情况安排）',
      '私人豪华4WD四驱车队与专属植物学探险向导',
      '全程包含高山有机美食、珍藏葡萄酒与高山茶道品鉴',
      '赠送 RM 2,500 爱马仕沙巴商户消费金'
    ],
    itinerary: [
      {
        day: 1,
        title: '抵港启程与探险前夕晚宴',
        location: '亚庇海滨奢华酒店',
        description: '专属豪车接机入住海景套房，由沙巴首席生态探险家与自然保护专家为您主持私享行前启幕晚宴。',
        activities: ['专车抵港礼遇', '贵宾行政酒廊签到', '婆罗洲风味融合晚宴']
      },
      {
        day: 2,
        title: '登临神山国家公园与高山植物学遗产',
        location: '联合国教科文组织京那巴鲁国家公园',
        description: '乘豪华四驱车穿越克罗克山脉攀升至海拔1,500米，独家进入未对公众开放的野生珍稀兰花保育园与树冠吊桥。',
        activities: ['豪华越野车队护航', '私人树冠雨林吊桥', '野生兰花图鉴巡礼', '高山落日全景晚宴']
      },
      {
        day: 3,
        title: '晨曦破晓云海与昆达山高山生态农场',
        location: '昆达山高山河谷 (Kundasang)',
        description: '清晨在私人露台静观金色阳光洒向神山主峰，探访当地高山有机牧场、手作奶酪坊与有机高山茶园。',
        activities: ['神山日出摄影私享会', '高山牧场乳品与茶品鉴', '主厨农庄采摘晚宴']
      },
      {
        day: 4,
        title: '波令远古雨林探索与天然硫磺温泉养生',
        location: '波令雨林自然保护区 (Poring)',
        description: '在被远古树木环抱的私家天然硫磺矿物温泉亭中调养身心，随生物向导寻找大王花（莱佛士花）踪迹。',
        activities: ['私密雨林矿物温泉疗愈', '雨林珍稀动植物寻踪', '溪流原生态声学晚宴']
      },
      {
        day: 5,
        title: '空中直升机神山巡航与海滨盛典回程',
        location: '神山主峰航线 → 亚庇海滨',
        description: '搭乘私人直升机俯瞰神山刀削般的花岗岩山峰与云海，下午返回亚庇游艇俱乐部参加闭幕欢庆晚宴。',
        activities: ['神山直升机空中鸟瞰巡航', '游艇码头VIP迎宾酒会', '答谢星光黑领结晚宴']
      },
      {
        day: 6,
        title: '沙巴非遗匠心礼遇与送机',
        location: '亚庇国际机场',
        description: '探访沙巴南洋珍珠工坊与手工刺绣工坊，尊享VIP贵宾室送机。',
        activities: ['沙巴南洋珍珠私人鉴赏', 'VIP机场贵宾室候机与送机']
      }
    ]
  },
  {
    id: 'pkg-elite',
    code: 'H-ELT-03',
    title: 'H 沙巴至尊私享 (H Sabah Elite)',
    tagline: '7天6晚 超奢私家海岛买断、超级游艇巡弋、机坪直升机包机与无人沙洲星空盛宴',
    duration: '7天 6晚',
    priceUSD: 7200,
    priceMYR: 33500,
    tierRequirement: '黑金VIP卡 (Black VIP)',
    marginPercentage: 22,
    badgeText: '超高净值·黑卡独享',
    heroImage: '/hermes-resort-island.jpg',
    gallery: [
      '/hermes-resort-island.jpg',
      '/luxury-water-villa.jpg',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    ],
    overview: '东南亚超奢定制旅行的巅峰之作。专为爱马仕黑卡VIP会员打造，提供加雅岛总统水上别墅买断、70英尺超级游艇穿梭珊瑚大三角、直升机从机场机坪直飞海岛停机坪，以及全天候24小时私人管家与安保陪同。',
    highlights: [
      '加雅岛独家奢华水上总统独栋别墅私密入住',
      '70英尺私人超级游艇配备专职主厨与PADI金牌潜水教练',
      '机场机坪直升机直接接机直飞海岛停机坪',
      '南中国海无人私密白沙洲穹顶星空海鲜烛光盛宴'
    ],
    included: [
      '6晚超奢总统级水上别墅或独立海岛独栋官邸',
      '全程无限制私人游艇巡航与深海探险配备',
      '沙巴境内全程直升机空中专机接驳',
      '24小时双语私人管家、行政名厨与私人安保车队',
      '赠送 RM 5,000 爱马仕沙巴商户消费金及沙巴顶级南洋金珠传世礼盒'
    ],
    itinerary: [
      {
        day: 1,
        title: '机坪直升机无缝接驳与私家海岛登岛礼',
        location: '亚庇停机坪 → 私家海岛停机坪',
        description: '专机降落亚庇后直接转乘空客H130直升机，无需经过普通航站楼，直接降落于加雅岛私家停机坪，享受皇家仪式登岛迎宾。',
        activities: ['机坪直升机零等待转机', '海岛停机坪专属仪式', '总统别墅管家办理入住', '唐培里侬香槟迎宾酒会']
      },
      {
        day: 2,
        title: '超级游艇深海珊瑚大三角私密巡弋',
        location: '东姑阿都拉曼绝美海域',
        description: '登临70英尺超级豪华游艇，在海洋学者带领下前往秘密珊瑚绝壁。配备水下推进器 (Seabob)、水翼冲浪板与游艇顶层鱼子酱香槟午餐。',
        activities: ['超级游艇全天巡弋', '秘密珊瑚绝壁水下探秘', '水翼冲浪与水下推进器体验', '游艇主厨鱼子酱品鉴']
      },
      {
        day: 3,
        title: '直升机飞赴仙本那敦沙卡兰 / 达浓谷深林',
        location: '沙巴东海岸世界级生物圈',
        description: '早晨乘坐直升机飞越沙巴壮阔腹地，抵达达浓谷远古雨林或仙本那世界顶级潜水胜地，领略地球极致原始秘境。',
        activities: ['直升机空中跨省巡航', '私家雨林树冠廊桥巡礼', '私人游船探秘野生红毛猩猩', '高定丛林生态野奢营地']
      },
      {
        day: 4,
        title: '无人白沙洲落日盛宴与星空天文夜话',
        location: '南中国海南端绝美无人沙洲',
        description: '搭乘游艇登上退潮时显露的纯白无人沙洲，在特设的发光穹顶帐篷中享用7道式现捞海鲜晚宴，在天文学家指引下仰望银河。',
        activities: ['私人沙洲包场登岛', '白沙洲穹顶灯火晚宴', '专业天文学家星空观测']
      },
      {
        day: 5,
        title: '婆罗洲古法芳疗与身心灵再生水疗',
        location: '水上水疗独立独栋楼阁',
        description: '全天沉浸于运用沙巴野生珍稀草本精油的传统疗愈仪式，配合海浪颂钵音疗与私人定制瑜伽私教课。',
        activities: ['定制草本植物全身水疗', '颂钵声频冥想疗愈', '有机养生高定晚宴']
      },
      {
        day: 6,
        title: '沙巴南洋珍珠私人品鉴拍卖与爱马仕黑卡名流夜',
        location: '游艇俱乐部私密贵宾厅',
        description: '独家品鉴沙巴海域产出的顶级14mm+天然南洋金珠与银白珍珠，由首席珠宝大师量身定制传世首饰，晚间举行名流慈善晚宴。',
        activities: ['稀世南洋珍珠私密鉴赏', '高定珠宝现场量身定制', '黑领结奢华名流晚宴']
      },
      {
        day: 7,
        title: '直升机尊崇离境与皇家礼遇护送',
        location: '海岛停机坪 → 国际公务机航站楼',
        description: '直升机飞送机场要客贵宾通道，专享独立海关与安检礼遇，圆满结束沙巴之行。',
        activities: ['直升机空中告别航行', '国际要客通道送机']
      }
    ]
  }
];

export const MERCHANT_PARTNERS: MerchantPartner[] = [
  {
    id: 'm-1',
    name: '丝绸港湾度假村与游艇俱乐部 (Sutera Harbour Resort)',
    category: '奢华度假酒店',
    location: '亚庇丝绸港湾大道 (Sutera Harbour Blvd)',
    district: '丹绒亚路与丝绸港 (Tanjung Aru)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: '亚庇海滨标杆性五星级综合度假胜地，拥有27洞格雷厄姆·马什设计锦标赛高尔夫球场及国际级游艇码头。',
    tierPrivilege: {
      gold: '餐饮9折优惠，游艇码头俱乐部入场特权',
      platinum: '客房及餐饮85折，延迟退房至下午4点，赠送1轮高尔夫挥杆体验',
      black: '总统套房享75折，游艇专用泊位免排队停靠，24小时专职礼宾'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '每消费 $1 累积 5 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 4800,
    commissionRate: 15
  },
  {
    id: 'm-2',
    name: '香格里拉丹绒亚路度假酒店 (Shangri-La Tanjung Aru)',
    category: '奢华度假酒店',
    location: '亚庇丹绒亚路海滩',
    district: '丹绒亚路与丝绸港 (Tanjung Aru)',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    description: '坐拥全球排名前三日落的传奇落日酒吧 (Sunset Bar) 与独岛“气”水疗中心 (CHI Spa)。',
    tierPrivilege: {
      gold: 'Sunset Bar 落日酒吧免预约VIP保留席位，CHI Spa 9折',
      platinum: 'Sunset Bar 保证第一排临海最佳观景席，套房升级享85折',
      black: 'Sunset Bar 独栋私人落日亭买断特权，CHI Spa 奢华项目无限升舱'
    },
    discountPercentage: 18,
    hCreditsEarnRate: '每消费 $1 累积 5 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 5000,
    commissionRate: 16
  },
  {
    id: 'm-3',
    name: 'YTL 加雅岛顶级生态度假村 (Gaya Island Resort)',
    category: '奢华度假酒店',
    location: '东姑阿都拉曼海洋公园马罗霍姆湾 (Malohom Bay)',
    district: '加雅岛国家海洋公园 (Gaya Island)',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: '隐匿于远古雨林与珊瑚白沙滩之间的生态奢华秘境，直面南中国海清澈海域。',
    tierPrivilege: {
      gold: '赠送海洋生物学家一对一私人珊瑚礁导览',
      platinum: '巴悠别墅享85折优惠 + 赠红树林私人皮划艇探险',
      black: '神山套房享75折优惠 + 赠私人别墅主厨定制晚餐'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '每消费 $1 累积 6 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 4500,
    commissionRate: 18
  },
  {
    id: 'm-4',
    name: '大茄来海鲜餐厅海滨总店 (Welcome Seafood Restaurant)',
    category: '海鲜与高端餐饮',
    location: '亚庇海滨大道与兵南邦大道 (Bundusan)',
    district: '亚庇海滨核心区 (KK Waterfront)',
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    description: '沙巴最负盛名的活海鲜殿堂，以野生东星斑、深海老虎虾与沙巴泥蟹闻名全马。',
    tierPrivilege: {
      gold: '免排队优先VIP入座，赠送招牌奶油老虎虾一份',
      platinum: '独立VIP包厢使用权，全单享88折优惠',
      black: '行政主厨私房餐桌特权，稀有深海野生海钓渔获优先锁定，享82折'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '每消费 $1 累积 4 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 3600,
    commissionRate: 12
  },
  {
    id: 'm-5',
    name: '佳扬海鲜生蚝生态餐厅 (Salut Seafood & Oyster)',
    category: '海鲜与高端餐饮',
    location: '亚庇佳扬路海滨生态湿地',
    district: '亚庇海滨核心区 (KK Waterfront)',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
    rating: 4.85,
    description: '坐落于红树林入海口的潟湖水上餐厅，主打当日捕捞的活体生蚝与野生红树林肉蟹。',
    tierPrivilege: {
      gold: '免费获赠当日现开新鲜生蚝半打',
      platinum: '临水景观VIP卡座保留，享85折优惠及侍酒师餐酒搭配',
      black: '潟湖独栋露台包场特权，全单享8折优惠'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '每消费 $1 累积 4 H-Credits 积分',
    campaignStatus: '年度合作商户',
    annualCampaignFeeUSD: 3000,
    commissionRate: 12
  },
  {
    id: 'm-6',
    name: '香格里拉“气”独岛水疗 (CHI, The Spa Island)',
    category: '康养与水疗',
    location: '丹绒亚路度假酒店独立水疗私岛',
    district: '丹绒亚路与丝绸港 (Tanjung Aru)',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: '需乘小桥登岛的独立奢华水疗岛，结合婆罗洲原生态草本精油与传统古法按摩。',
    tierPrivilege: {
      gold: '90分钟以上水疗项目享9折优惠',
      platinum: '水疗项目享85折 + 赠送婆罗洲草本去角质护理',
      black: '独立海景水疗别墅预约特权 + 8折优惠 + 赠送香槟芳疗'
    },
    discountPercentage: 18,
    hCreditsEarnRate: '每消费 $1 累积 5 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 3200,
    commissionRate: 15
  },
  {
    id: 'm-7',
    name: '婆罗洲顶级游艇与帆船俱乐部 (Borneo Marine Charters)',
    category: '海岛与定制游',
    location: '亚庇哲斯顿港码头 (Jesselton Point Marina)',
    district: '亚庇海滨核心区 (KK Waterfront)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    description: '提供45英尺至75英尺超级游艇与双体帆船包船服务，覆盖环滩岛、迪加岛及美人鱼岛。',
    tierPrivilege: {
      gold: '包船租赁享9折 + 免费升级全套专业浮潜设备',
      platinum: '包船享85折 + 赠送船上日落西班牙Tapas小吃与特饮',
      black: '超级游艇私人包船享75折 + 专属随船专业调酒师服务'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '每消费 $1 累积 6 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 4200,
    commissionRate: 20
  },
  {
    id: 'm-8',
    name: '沙巴南洋珍珠非遗世家旗舰店 (Sabah South Sea Pearls)',
    category: '珍珠与非遗特产',
    location: '亚庇伊玛哥商场VIP层 & 加雅街',
    district: '亚庇海滨核心区 (KK Waterfront)',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: '沙巴权威认证的南洋金珠、海水黑珍珠与白珠工坊，提供珠宝鉴定书与大师手工镶嵌。',
    tierPrivilege: {
      gold: '享92折优惠 + 赠权威国检证书及奢华包装礼盒',
      platinum: '享88折优惠 + 资深宝石学家一对一鉴赏咨询',
      black: '享8折优惠 + 首席大师量身手工定制传世首饰一件'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '每消费 $1 累积 5 H-Credits 积分',
    campaignStatus: '年度合作商户',
    annualCampaignFeeUSD: 3800,
    commissionRate: 14
  },
  {
    id: 'm-9',
    name: '爱马仕沙巴尊享车队与直升机机队 (VIP Chauffeur & HeliFleet)',
    category: '尊享专车礼宾',
    location: '亚庇国际机场机坪 & 丝绸港直升机停机坪',
    district: '亚庇海滨核心区 (KK Waterfront)',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    description: '专属雷克萨斯LM、丰田埃尔法车队及空中客车H130轻型直升机机队，24小时为会员护航。',
    tierPrivilege: {
      gold: '机场接送机享9折优惠',
      platinum: '免费获赠1次埃尔法接送机 + 时租包车享85折',
      black: '在沙巴期间市内埃尔法专车无限畅行 + 直升机包机享8折'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '每消费 $1 累积 5 H-Credits 积分',
    campaignStatus: '核心独家签约',
    annualCampaignFeeUSD: 4000,
    commissionRate: 25
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'bk-101',
    bookingRef: 'HSB-ELT-9921',
    packageId: 'pkg-elite',
    packageName: 'H 沙巴至尊私享：私家岛屿与超级游艇奢华巡游',
    memberId: 'mem-1',
    memberName: '亚历山大·凡斯 (Alexander Vance)',
    memberTier: '黑金VIP卡 (Black VIP)',
    country: '新加坡 (Singapore)',
    travelDate: '2026年10月15日 - 10月21日',
    duration: '7天6晚',
    guests: 2,
    amountUSD: 14400,
    status: '已确认锁定',
    assignedDriver: '菲尔道斯机长 (直升机1号机 / 雷克萨斯LM VIP)',
    hotelBooked: '加雅岛顶级度假村 总统水上独栋别墅',
    createdAt: '2026-08-20',
    specialRequests: '亚庇机坪直升机直接接机；别墅内预备2012年份唐培里侬香槟'
  },
  {
    id: 'bk-102',
    bookingRef: 'HSB-SIG-4402',
    packageId: 'pkg-signature',
    packageName: 'H 婆罗洲传奇甄选：远古雨林冠层与神山高地奢华探索',
    memberId: 'mem-2',
    memberName: '林雅姿 (Grace Lin)',
    memberTier: '白金卡 (Platinum)',
    country: '中国香港 (Hong Kong)',
    travelDate: '2026年9月02日 - 9月07日',
    duration: '6天5晚',
    guests: 2,
    amountUSD: 7200,
    status: '进行中/在途',
    assignedDriver: '拉赫曼主管 (埃尔法行政礼宾车)',
    hotelBooked: '神山高地昆达山奢华全景度假木屋',
    createdAt: '2026-08-15',
    specialRequests: '昆达山农庄晚宴需要全素食有机定制菜单'
  },
  {
    id: 'bk-103',
    bookingRef: 'HSB-DSC-1184',
    packageId: 'pkg-discovery',
    packageName: 'H 沙巴初见启幕：亚庇海滨落日游艇与海岛奇遇',
    memberId: 'mem-3',
    memberName: '佐藤健二 (Kenji Sato)',
    memberTier: '金卡 (Gold)',
    country: '日本东京 (Japan)',
    travelDate: '2026年11月10日 - 11月13日',
    duration: '4天3晚',
    guests: 1,
    amountUSD: 1850,
    status: '已确认锁定',
    assignedDriver: '阿隆向导 (威尔法VIP专车)',
    hotelBooked: '丝绸港湾麦哲伦度假村 太平洋俱乐部海景套房',
    createdAt: '2026-08-24'
  },
  {
    id: 'bk-104',
    bookingRef: 'HSB-ELT-9933',
    packageId: 'pkg-elite',
    packageName: 'H 沙巴至尊私享：私家岛屿与超级游艇奢华巡游',
    memberId: 'mem-4',
    memberName: '朱利安·索恩 (Julian Thorne)',
    memberTier: '黑金VIP卡 (Black VIP)',
    country: '英国伦敦 (UK)',
    travelDate: '2026年12月22日 - 12月28日',
    duration: '7天6晚',
    guests: 4,
    amountUSD: 28800,
    status: '已确认锁定',
    assignedDriver: '菲尔道斯机长 (空客H130专机)',
    hotelBooked: '香格里拉丹绒亚路 皇家总统海景套房',
    createdAt: '2026-08-22'
  }
];

export const VIP_EVENTS: VIPEvent[] = [
  {
    id: 'evt-1',
    title: '2026 爱马仕沙巴全球领袖与文旅年度峰会',
    date: '2026年11月18日 - 11月20日',
    location: '沙巴国际会议中心 (SICC) & 丝绸港游艇码头',
    capacity: 350,
    rsvpCount: 284,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    description: '汇聚爱马仕全球核心高管、黑卡/白金高净值会员与沙巴州政府旅游局高层的年度文旅盛会。',
    accessTier: '金卡 (Gold)',
    priceUSD: 650,
    status: '开放席位预约'
  },
  {
    id: 'evt-2',
    title: '婆罗洲VIP游艇舰队日落晚宴与南中国海名流夜',
    date: '2026年10月18日',
    location: '丝绸港游艇码头 & 加雅岛私密海湾',
    capacity: 60,
    rsvpCount: 52,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
    description: '5艘超级豪华游艇组成的日落编队，配备世界级调酒大师、海景现场爵士乐队与奢华鱼子酱品鉴吧。',
    accessTier: '白金卡 (Platinum)',
    priceUSD: 450,
    status: '席位即将告罄'
  },
  {
    id: 'evt-3',
    title: '神山海拔两千米星空主厨餐桌与天象私享夜',
    date: '2026年12月05日',
    location: '神山高地私家天文观景台',
    capacity: 25,
    rsvpCount: 25,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80',
    description: '仅限25席的极致私密晚宴，由国际米其林名厨在海拔2,000米星空下呈现7道高山定制佳肴，配备专业天文望远镜观测银河。',
    accessTier: '黑金VIP卡 (Black VIP)',
    priceUSD: 950,
    status: '特邀专属闭门'
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 'rev-tour',
    title: '旗舰旅游定制套餐毛利',
    marginRange: '22% - 28%',
    avgTakeRate: 25,
    description: '向全球爱马仕会员直销3款核心高净值沙巴定制游套餐所捕获的运营商净毛利。',
    annualProjectedUSD: 3850000,
    iconName: 'Compass',
    color: '#F59E0B'
  },
  {
    id: 'rev-hotel',
    title: '五星级酒店/度假村批发佣金',
    marginRange: '12% - 18%',
    avgTakeRate: 15,
    description: '通过锁定丝绸港、香格里拉、YTL加雅岛等顶级物业年度包房协议所获取的分销利差。',
    annualProjectedUSD: 2150000,
    iconName: 'Building2',
    color: '#10B981'
  },
  {
    id: 'rev-transport',
    title: 'VIP专车礼宾与直升机机队收益',
    marginRange: '25% - 32%',
    avgTakeRate: 28,
    description: '自营与独家合作的埃尔法车队、游艇编队及直升机包机接送机服务的高利润率收益。',
    annualProjectedUSD: 1420000,
    iconName: 'Car',
    color: '#06B6D4'
  },
  {
    id: 'rev-merchant',
    title: '商户联盟入驻与营销推广费',
    marginRange: '$2k - $5k / 户',
    avgTakeRate: 100,
    description: '精选沙巴当地海鲜餐饮、珍珠工坊、水疗中心等优质商户的年度战略合作费与客流营销费。',
    annualProjectedUSD: 680000,
    iconName: 'Store',
    color: '#8B5CF6'
  },
  {
    id: 'rev-event',
    title: 'VIP峰会门票与品牌赞助',
    marginRange: '35% - 45%',
    avgTakeRate: 40,
    description: '沙巴年度全球峰会门票销售、企业品牌联合冠名、高端展位及名流晚宴席位收入。',
    annualProjectedUSD: 980000,
    iconName: 'Ticket',
    color: '#EC4899'
  },
  {
    id: 'rev-marketplace',
    title: '沙巴臻品电商与非遗集市抽佣',
    marginRange: '10% - 15%',
    avgTakeRate: 12,
    description: '沙巴天然南洋金珠、燕窝、东哥阿里、单品咖啡及手工艺品闭环结算的交易佣金。',
    annualProjectedUSD: 850000,
    iconName: 'ShoppingBag',
    color: '#EAB308'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: '第一阶段 (Phase 1)',
    title: '亚庇核心门户落地与商户网络筑基',
    timeline: '2026年 Q1 - Q2 (近已就绪)',
    status: '推进执行中',
    milestones: [
      '设立亚庇国际机场与市中心核心区域运营指挥中心与VIP贵宾酒廊',
      '签约首批50家沙巴一线核心商户（五星酒店、海鲜名店、游艇码头、水疗）',
      '正式上线3款旗舰文旅套餐（初见启幕、传奇甄选、至尊私享）',
      '向全球会员全面推送 H Pass 沙巴数字身份通票与专属权益二维码'
    ],
    kpis: {
      members: '5,000+ 首批造访会员',
      merchants: '50 家核心商户',
      projectedGMV: '$9.5M GMV 交易额'
    }
  },
  {
    phase: '第二阶段 (Phase 2)',
    title: '神山高地与东海岸走廊纵深拓展',
    timeline: '2026年 Q3 - Q4',
    status: '已排期部署',
    milestones: [
      '将生态版图自亚庇向昆达山高地、山打根、仙本那及斗湖全面纵深延伸',
      '商户网络扩容至 150+ 家经过官方严格认证的高端文旅与消费伙伴',
      '上线 H-Credits 跨区域闭环积分通兑与免税结算系统',
      '开通全沙巴主要风景区的直升机与轻型航空空中穿梭航线'
    ],
    kpis: {
      members: '18,000+ 年度造访会员',
      merchants: '150+ 家联盟商户',
      projectedGMV: '$28.0M GMV 交易额'
    }
  },
  {
    phase: '第三阶段 (Phase 3)',
    title: '沙巴全球年度峰会与全域数字化生活方式经济',
    timeline: '2027年及未来',
    status: '远景生态规划',
    milestones: [
      '在沙巴国际会议中心 (SICC) 举办首届千人规模爱马仕沙巴全球文旅峰会',
      '构建全闭环的沙巴高端特产跨境出口与线上会员臻品直采商城',
      '将沙巴区域运营商商业模型成功输出复刻至东盟其他优质休闲海岛',
      '联合沙巴州政府建立爱马仕沙巴雨林保护与海洋生物多样性公益基金'
    ],
    kpis: {
      members: '50,000+ 稳定年会员客流',
      merchants: '300+ 家全域商户',
      projectedGMV: '$65.0M+ 年度总GMV'
    }
  }
];

export const MONTHLY_FINANCIALS_2026 = [
  { month: '1月', gmvUSD: 420000, revenueUSD: 98000, members: 320 },
  { month: '2月', gmvUSD: 580000, revenueUSD: 136000, members: 450 },
  { month: '3月', gmvUSD: 750000, revenueUSD: 175000, members: 580 },
  { month: '4月', gmvUSD: 920000, revenueUSD: 215000, members: 710 },
  { month: '5月', gmvUSD: 1150000, revenueUSD: 268000, members: 890 },
  { month: '6月', gmvUSD: 1450000, revenueUSD: 339000, members: 1120 },
  { month: '7月', gmvUSD: 1820000, revenueUSD: 425000, members: 1410 },
  { month: '8月', gmvUSD: 2200000, revenueUSD: 514000, members: 1700 },
  { month: '9月', gmvUSD: 2650000, revenueUSD: 619000, members: 2050 },
  { month: '10月', gmvUSD: 3100000, revenueUSD: 724000, members: 2400 },
  { month: '11月', gmvUSD: 3800000, revenueUSD: 887000, members: 2950 },
  { month: '12月', gmvUSD: 4500000, revenueUSD: 1051000, members: 3500 }
];

export const VISITOR_ORIGIN_DATA = [
  { country: '新加坡 (Singapore)', share: 28, color: '#F59E0B' },
  { country: '中国大陆 (Mainland China)', share: 24, color: '#10B981' },
  { country: '中国香港 (Hong Kong)', share: 18, color: '#06B6D4' },
  { country: '日本与韩国 (Japan & Korea)', share: 14, color: '#8B5CF6' },
  { country: '中国台湾 (Taiwan)', share: 9, color: '#EC4899' },
  { country: '英国/欧洲及其他 (Europe & Others)', share: 7, color: '#EAB308' }
];
