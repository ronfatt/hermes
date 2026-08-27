export type AppMode = 'presentation' | 'member' | 'admin';

export type Currency = 'USD' | 'MYR' | 'SGD' | 'HKD' | 'CNY';

export type MemberTier = 'Black VIP' | 'Platinum' | 'Gold';

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
  status: 'Active' | 'VIP In-Transit' | 'Arriving Soon';
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
  tierRequirement: MemberTier;
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
  category: 'Hotels & Resorts' | 'Fine Dining & Seafood' | 'Wellness & Spa' | 'Tours & Marine' | 'Retail & Artisanal' | 'VIP Transport' | 'Events & Culture';
  location: string;
  district: 'Kota Kinabalu Waterfront' | 'Tanjung Aru & Sutera' | 'Gaya Island & Marine Park' | 'Kundasang Highlands' | 'Semporna / East Coast';
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
  campaignStatus: 'Active Exclusive' | 'Seasonal VIP' | 'Year-Round Partner';
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
  status: 'Confirmed' | 'In Progress' | 'Completed' | 'Pending Concierge';
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
  accessTier: MemberTier;
  priceUSD: number;
  status: 'Open for RSVP' | 'Almost Full' | 'Exclusive Invite';
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
  status: 'In Progress' | 'Scheduled' | 'Future Vision';
  milestones: string[];
  kpis: {
    members: string;
    merchants: string;
    projectedGMV: string;
  };
}
