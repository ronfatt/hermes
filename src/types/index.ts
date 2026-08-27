export type AppMode = 'presentation' | 'member' | 'admin';

export type Currency = 'USD' | 'MYR' | 'SGD' | 'HKD' | 'CNY';

export type MemberTier = '黑金VIP卡 (Black VIP)' | '白金卡 (Platinum)' | '金卡 (Gold)';

export interface MemberProfile {
  id: string;
  name: string;
  avatar: string;
  tier: MemberTier;
  memberNo: string;
  country: string;
  points: number;
  creditsMYR: number;
  totalTrips: number;
  totalSpentUSD: number;
  status: '活跃会员' | '沙巴在途VIP' | '即将抵达';
  nextTrip?: {
    packageName: string;
    date: string;
    status: string;
    bookingRef: string;
  };
}

export interface FlagshipPackage {
  id: string;
  code: string;
  title: string;
  tagline: string;
  duration: string;
  priceUSD: number;
  priceMYR: number;
  tierRequirement: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  included: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    location: string;
    activities: string[];
  }[];
  marginPercentage: number;
  badgeText: string;
}

export interface MerchantPartner {
  id: string;
  name: string;
  category: '奢华度假酒店' | '海鲜与高端餐饮' | '康养与水疗' | '海岛与定制游' | '珍珠与非遗特产' | '尊享专车礼宾' | '文化与峰会活动';
  location: string;
  district: '亚庇海滨核心区 (KK Waterfront)' | '丹绒亚路与丝绸港 (Tanjung Aru)' | '加雅岛国家海洋公园 (Gaya Island)' | '神山高地 (Kundasang)' | '仙本那 / 东海岸 (Semporna)';
  image: string;
  rating: number;
  description: string;
  tierPrivilege: {
    gold: string;
    platinum: string;
    black: string;
  };
  discountPercentage: number;
  hCreditsEarnRate: string;
  campaignStatus: '核心独家签约' | '尊享VIP伙伴' | '年度合作商户';
  annualCampaignFeeUSD: number;
  commissionRate: number;
}

export interface BookingRecord {
  id: string;
  bookingRef: string;
  packageId: string;
  packageName: string;
  memberId: string;
  memberName: string;
  memberTier: MemberTier;
  country: string;
  travelDate: string;
  duration: string;
  guests: number;
  amountUSD: number;
  status: '已确认锁定' | '进行中/在途' | '已圆满完成' | '专属管家对接中';
  assignedDriver?: string;
  hotelBooked?: string;
  createdAt: string;
  specialRequests?: string;
}

export interface VIPEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: number;
  rsvpCount: number;
  image: string;
  description: string;
  accessTier: string;
  priceUSD: number;
  status: '开放席位预约' | '席位即将告罄' | '特邀专属闭门';
}

export interface RevenueStream {
  id: string;
  title: string;
  marginRange: string;
  avgTakeRate: number;
  description: string;
  annualProjectedUSD: number;
  iconName: string;
  color: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  status: '推进执行中' | '已排期部署' | '远景生态规划';
  milestones: string[];
  kpis: {
    members: string;
    merchants: string;
    projectedGMV: string;
  };
}
