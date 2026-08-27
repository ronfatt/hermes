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
    name: 'Alexander Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    tier: 'Black VIP',
    memberNo: 'H-8829-GLOBAL',
    country: 'Singapore',
    points: 48500,
    creditsMYR: 12500,
    totalTrips: 4,
    totalSpentUSD: 24800,
    status: 'Active',
    nextTrip: {
      packageName: 'H Sabah Elite: Private Island & Yacht Odyssey',
      date: 'Oct 15 - Oct 21, 2026',
      status: 'VIP Helicopter Transfer Confirmed',
      bookingRef: 'HSB-ELT-9921'
    }
  },
  {
    id: 'mem-2',
    name: 'Grace Lin',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    tier: 'Platinum',
    memberNo: 'H-4512-GLOBAL',
    country: 'Hong Kong',
    points: 29400,
    creditsMYR: 6800,
    totalTrips: 2,
    totalSpentUSD: 14200,
    status: 'VIP In-Transit',
    nextTrip: {
      packageName: 'H Borneo Signature: Rainforest & Kinabalu Heritage',
      date: 'Sep 02 - Sep 07, 2026',
      status: 'Lodge Check-in Ready',
      bookingRef: 'HSB-SIG-4402'
    }
  },
  {
    id: 'mem-3',
    name: 'Kenji Sato',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    tier: 'Gold',
    memberNo: 'H-1088-GLOBAL',
    country: 'Japan',
    points: 15200,
    creditsMYR: 3200,
    totalTrips: 1,
    totalSpentUSD: 5900,
    status: 'Arriving Soon',
    nextTrip: {
      packageName: 'H Sabah Discovery: Kota Kinabalu Sunset Odyssey',
      date: 'Nov 10 - Nov 13, 2026',
      status: 'Confirmed',
      bookingRef: 'HSB-DSC-1184'
    }
  },
  {
    id: 'mem-4',
    name: 'Julian Thorne',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    tier: 'Black VIP',
    memberNo: 'H-9014-GLOBAL',
    country: 'United Kingdom',
    points: 62000,
    creditsMYR: 18000,
    totalTrips: 5,
    totalSpentUSD: 38500,
    status: 'Active'
  },
  {
    id: 'mem-5',
    name: 'Mei-Ling Zhang',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    tier: 'Platinum',
    memberNo: 'H-3390-GLOBAL',
    country: 'China (Shanghai)',
    points: 33800,
    creditsMYR: 8400,
    totalTrips: 3,
    totalSpentUSD: 18900,
    status: 'Active'
  }
];

export const FLAGSHIP_PACKAGES: FlagshipPackage[] = [
  {
    id: 'pkg-discovery',
    code: 'H-DSC-01',
    title: 'H Sabah Discovery',
    tagline: '4D3N Kota Kinabalu Coastal, Sunset Yacht & Cultural Gateway',
    duration: '4 Days / 3 Nights',
    priceUSD: 1850,
    priceMYR: 8600,
    tierRequirement: 'Gold',
    marginPercentage: 28,
    badgeText: 'Entry Gateway Flagship',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&auto=format&fit=crop&q=80'
    ],
    overview: 'The quintessential luxury introduction to Sabah. Experience the vibrant coastal capital of Kota Kinabalu, private catamaran sunset cruising, Tunku Abdul Rahman marine safari, and VIP access to iconic seafood dining.',
    highlights: [
      'Private sunset champagne charter along Tanjung Aru coast',
      'VIP speed transfer to Manukan & Sapi coral marine sanctuaries',
      'Curated waterfront seafood banquet with chef private selection',
      'Luxury stay at Sutera Harbour Pacific Club or Shangri-La Tanjung Aru'
    ],
    included: [
      '3 Nights 5-Star Ocean View Suite accommodation',
      'Dedicated Hermes Sabah Chauffeur & Alphard/Vellfire VIP transfer',
      'Private sunset cruise with artisanal tapas & sommelier pairing',
      'Fast-track VIP airport escort & baggage clearance',
      'RM 1,200 H Pass merchant credit voucher'
    ],
    itinerary: [
      {
        day: 1,
        title: 'VIP Arrival & Golden Hour Sunset Cruise',
        location: 'KK International Airport → Sutera Harbour Marina',
        description: 'Private airport greeting, fast-track baggage handling, luxury transfer to 5-star ocean suite. Late afternoon private catamaran cruise enjoying the legendary Tanjung Aru sunset.',
        activities: ['VIP Fast-track greeting', 'Marina champagne reception', 'Sunset catamaran voyage', 'Welcome seafood banquet']
      },
      {
        day: 2,
        title: 'Tunku Abdul Rahman Marine Safari & Coral Preservation',
        location: 'Gaya & Manukan Marine Park',
        description: 'Private high-speed yacht to exclusive coral reefs. Guided diving/snorkeling, marine biologist private briefing, private beach pavilion lunch.',
        activities: ['Private boat charter', 'VIP sea sports & reef safari', 'Private island BBQ lunch', 'Sunset cocktails at Gaya Island']
      },
      {
        day: 3,
        title: 'Sabah Cultural Heritage & Artisanal Discovery',
        location: 'Mari Mari Cultural Reserve & Gaya Street Fine Dining',
        description: 'VIP private access to indigenous heritage traditions, birdwing butterfly sanctuary, followed by an evening culinary journey curated by master chefs.',
        activities: ['Indigenous cultural masterclass', 'Sabah artisanal craft tasting', 'Chef Table dinner at Waterfront', 'Night market VIP walk']
      },
      {
        day: 4,
        title: 'Artisanal Sabah Farewell & Departure',
        location: 'Kota Kinabalu → Airport',
        description: 'Bespoke Sabah coffee & tea tasting experience, VIP gift curation, seamless airport chauffeured transfer.',
        activities: ['Gourmet breakfast with ocean panorama', 'Sabah specialty concierge curation', 'VIP departure transfer']
      }
    ]
  },
  {
    id: 'pkg-signature',
    code: 'H-SIG-02',
    title: 'H Borneo Signature',
    tagline: '6D5N Ancient Rainforest Canopy, Mt Kinabalu VIP Lodge & Cultural Roots',
    duration: '6 Days / 5 Nights',
    priceUSD: 3600,
    priceMYR: 16800,
    tierRequirement: 'Platinum',
    marginPercentage: 25,
    badgeText: 'Eco-Luxury Core Pillar',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80'
    ],
    overview: 'An unforgettable deep dive into Borneo’s 130-million-year-old rainforest and the mystical highlands of Mount Kinabalu. Combines ultra-luxury highland chalets, wildlife safaris, and organic culinary experiences.',
    highlights: [
      'Private villa stay overlooking UNESCO World Heritage Mt. Kinabalu',
      'Helicopter scenic flight over the granite peaks of Kinabalu',
      'Guided private night walk with premier botanical specialists',
      'Kundasang highland farm-to-table dining experience'
    ],
    included: [
      '2 Nights KK Luxury Hotel + 3 Nights Kinabalu Highland VIP Chalet',
      'Kinabalu scenic helicopter flyover (weather permitting)',
      'Private 4WD luxury Land Cruiser convoy with dedicated guide',
      'All gourmet dining, vintage wines, and organic tea tastings',
      'RM 2,500 H Pass merchant credit voucher'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coastal Arrival & Pre-Expedition Briefing',
        location: 'Kota Kinabalu Waterfront',
        description: 'Check-in to oceanfront suite, private orientation dinner with lead conservationist and expedition team.',
        activities: ['Chauffeured arrival', 'VIP welcome lounge', 'Bornean fusion degustation']
      },
      {
        day: 2,
        title: 'Kinabalu Ascent & Botanical Heritage',
        location: 'Kinabalu UNESCO National Park',
        description: 'Scenic ascent up the Crocker Range to 1,500m elevation. Private access to rare orchid gardens and botanical collections.',
        activities: ['VIP 4WD convoy', 'Private canopy skywalk', 'Wild orchid safari', 'Mountain view sunset dinner']
      },
      {
        day: 3,
        title: 'Mountain Sunrise & Highland Farm-to-Table',
        location: 'Kundasang Highland Valley',
        description: 'Wake up to the awe-inspiring sunrise against Mount Kinabalu peak. Tour artisanal organic farms and artisan dairy producers.',
        activities: ['Sunrise photography private session', 'Highland dairy & tea tasting', 'Chef-led organic garden dinner']
      },
      {
        day: 4,
        title: 'Ancient Rainforest & Hot Springs Wellness',
        location: 'Poring Rainforest & River Sanctuary',
        description: 'Private mineral sulphur bath pavilions, canopy walkway wildlife spotting, and jungle stream meditation.',
        activities: ['Private spa sanctuary', 'Canopy wildlife tracking', 'Rainforest acoustic dinner']
      },
      {
        day: 5,
        title: 'Helicopter Aerial Tour & Coastal Return',
        location: 'Mount Kinabalu Peak → Kota Kinabalu',
        description: 'Private helicopter flight over the majestic peak and returning to KK harbor for an exclusive gala dinner.',
        activities: ['Kinabalu helicopter fly-over', 'VIP marina reception', 'Celebratory closing gala']
      },
      {
        day: 6,
        title: 'Artisanal Departure',
        location: 'KK International Airport',
        description: 'Private boutique shopping at Sabah craft masters and chauffeured VIP airport departure.',
        activities: ['Sabah pearl & artisanal curation', 'VIP departure lounge']
      }
    ]
  },
  {
    id: 'pkg-elite',
    code: 'H-ELT-03',
    title: 'H Sabah Elite',
    tagline: '7D6N Ultra-Luxury Private Island & Yacht Charter, Heli Fly-in & Stargazing',
    duration: '7 Days / 6 Nights',
    priceUSD: 7200,
    priceMYR: 33500,
    tierRequirement: 'Black VIP',
    marginPercentage: 22,
    badgeText: 'Ultra-High-Net-Worth Exclusive',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80'
    ],
    overview: 'The pinnacle of private luxury in Southeast Asia. Designed exclusively for Hermes Black Card members, offering full private island buyouts, superyacht island hopping across the Coral Triangle, private helicopter transfers, and 24/7 personal butler service.',
    highlights: [
      'Private overwater villa sanctuary at Gaya Island or exclusive East Coast resort',
      '70ft private luxury superyacht with personal chef and dive master',
      'Helicopter transfers directly from airport tarmac to resort helipad',
      'Stargazing on private deserted sandbank with domed gourmet banquet'
    ],
    included: [
      '6 Nights in Presidential / Overwater Grand Villa',
      'Unlimited private yacht cruising & deep-sea expeditions',
      'Full helicopter flight transfers throughout Sabah',
      'Dedicated 24/7 Butler, Private Executive Chef & Security Escort',
      'RM 5,000 H Pass merchant credit & customized Sabah pearl heirloom'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tarmac Helicopter Transfer & Private Island Check-in',
        location: 'KK Tarmac → Private Resort Helipad',
        description: 'Direct tarmac transfer to luxury helicopter. Touch down directly on private island resort helipad with ceremonial welcome.',
        activities: ['Tarmac VIP escort', 'Helicopter transfer', 'Private villa check-in', 'Sunset Dom Pérignon reception']
      },
      {
        day: 2,
        title: 'Private Superyacht Marine Exploration',
        location: 'Tunku Abdul Rahman Marine Sanctuaries',
        description: 'Private 70ft yacht voyage with marine biologists to secret reef walls. Sea scooters, hydrofoil surfboards, and champagne lunch on board.',
        activities: ['Private yacht charter', 'Reef exploration', 'Hydrofoil & Seabob sports', 'Chef caviar tasting']
      },
      {
        day: 3,
        title: 'Danum Valley / Semporna Helicopter Fly-in',
        location: 'Sabah East Coast Biosphere',
        description: 'Morning private flight to deep Borneo primary rainforest or Semporna world-class dive waters. Unmatched untouched natural wonders.',
        activities: ['Helicopter safari', 'Exclusive canopy walk', 'Private riverboat safari', 'Highland luxury lodge']
      },
      {
        day: 4,
        title: 'Deserted Sandbank Sunset Dinner & Stargazing',
        location: 'Pristine South China Sea Sandbank',
        description: 'Yacht transfer to a temporary private dome setup on an uninhabited sandbank. Gourmet 7-course seafood banquet under the Milky Way.',
        activities: ['Private sandbank landing', 'Bespoke lantern banquet', 'Astronomer-guided stargazing']
      },
      {
        day: 5,
        title: 'Wellness Regeneration & Bornean Spa Rituals',
        location: 'Overwater Spa Pavilion',
        description: 'Full day rejuvenation utilizing traditional indigenous botanical healing oils, sound therapy, and personalized yoga masterclass.',
        activities: ['Customized botanical spa ritual', 'Sound healing meditation', 'Organic wellness gastronomy']
      },
      {
        day: 6,
        title: 'VIP Collectors Pearl Auction & Hermes Gala',
        location: 'Private Yacht Club Lounge',
        description: 'Private viewing of rare South Sea pearls from Sabah waters, private auction, and high-society evening gala with dignitaries.',
        activities: ['Pearl collectors private showing', 'VIP bespoke jewelry fitting', 'Black-tie gala dinner']
      },
      {
        day: 7,
        title: 'Helicopter Departure & Royal Airport Protocol',
        location: 'Island Helipad → Private Terminal',
        description: 'Helicopter flight to VIP airport lounge with private immigration clearance.',
        activities: ['Helicopter scenic departure', 'Royal lounge clearance']
      }
    ]
  }
];

export const MERCHANT_PARTNERS: MerchantPartner[] = [
  {
    id: 'm-1',
    name: 'Sutera Harbour Resort & Marina',
    category: 'Hotels & Resorts',
    location: 'Sutera Harbour Blvd, Kota Kinabalu',
    district: 'Tanjung Aru & Sutera',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: 'Premier 5-star marina & 27-hole Graham Marsh golf resort on the Kota Kinabalu waterfront.',
    tierPrivilege: {
      gold: '10% off F&B, Complimentary marina access',
      platinum: '15% off rooms & F&B, Late checkout 4PM, 1 Free Golf Round',
      black: '25% off Presidential suites, Private Yacht Berth access, 24/7 Concierge'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '5 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 4800,
    commissionRate: 15
  },
  {
    id: 'm-2',
    name: 'Shangri-La Tanjung Aru Resort',
    category: 'Hotels & Resorts',
    location: 'Tanjung Aru, Kota Kinabalu',
    district: 'Tanjung Aru & Sutera',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    description: 'World-famous sunset bar and Chi Spa nestled among lush tropical gardens and private beaches.',
    tierPrivilege: {
      gold: 'Sunset Bar VIP reserved table, 10% Spa discount',
      platinum: 'Guaranteed Sunset Bar front-row table, 15% Suite upgrade discount',
      black: 'Private Sunset Gazebo buyout privilege, Unlimited Chi Spa upgrade'
    },
    discountPercentage: 18,
    hCreditsEarnRate: '5 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 5000,
    commissionRate: 16
  },
  {
    id: 'm-3',
    name: 'Gaya Island Resort (YTL Luxury)',
    category: 'Hotels & Resorts',
    location: 'Malohom Bay, Tunku Abdul Rahman Park',
    district: 'Gaya Island & Marine Park',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: 'Eco-luxury sanctuaries hillside within the ancient rainforest overlooking protected coral reefs.',
    tierPrivilege: {
      gold: 'Complimentary private marine biologist reef tour',
      platinum: '15% off Bayu Villas + Private Mangrove Kayaking',
      black: '25% off Kinabalu Suite + Private Chef Villa Dining'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '6 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 4500,
    commissionRate: 18
  },
  {
    id: 'm-4',
    name: 'Welcome Seafood Restaurant Waterfront',
    category: 'Fine Dining & Seafood',
    location: 'KK Waterfront & Bundusan',
    district: 'Kota Kinabalu Waterfront',
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    description: 'Sabah’s most acclaimed live ocean seafood institution featuring Sabah tiger prawns and lobster.',
    tierPrivilege: {
      gold: 'Priority VIP table, Complimentary signature butter crab',
      platinum: 'Private VIP Room access, 12% total bill discount',
      black: 'Private Master Chef table, Rare catch priority allocation, 18% discount'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '4 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 3600,
    commissionRate: 12
  },
  {
    id: 'm-5',
    name: 'Salut Seafood & Oyster Sanctuary',
    category: 'Fine Dining & Seafood',
    location: 'Jalan Salut, Kota Kinabalu',
    district: 'Kota Kinabalu Waterfront',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
    rating: 4.85,
    description: 'Coastal lagoon dining specializing in fresh local oysters and Sabah estuary mud crabs.',
    tierPrivilege: {
      gold: 'Complimentary half-dozen fresh oysters',
      platinum: 'VIP waterfront table, 15% discount, complimentary sommelier pairing',
      black: 'Private lagoon deck buyout privilege, 20% discount'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '4 H-Credits / $1 Spent',
    campaignStatus: 'Year-Round Partner',
    annualCampaignFeeUSD: 3000,
    commissionRate: 12
  },
  {
    id: 'm-6',
    name: 'Chi, The Spa at Tanjung Aru',
    category: 'Wellness & Spa',
    location: 'Tanjung Aru Resort Island',
    district: 'Tanjung Aru & Sutera',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: 'Private spa island on the South China Sea providing indigenous Bornean herbal wellness.',
    tierPrivilege: {
      gold: '10% discount on all 90min+ treatments',
      platinum: '15% discount + Complimentary Bornean herbal scrub',
      black: 'Private spa villa reservation + 20% discount + Champagne treatment'
    },
    discountPercentage: 18,
    hCreditsEarnRate: '5 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 3200,
    commissionRate: 15
  },
  {
    id: 'm-7',
    name: 'Borneo Marine & Yacht Charters',
    category: 'Tours & Marine',
    location: 'Jesselton Point Marina',
    district: 'Kota Kinabalu Waterfront',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    description: 'Luxury catamaran and high-speed yacht charters to Tunku Abdul Rahman and Mengalum islands.',
    tierPrivilege: {
      gold: '10% charter discount + Free snorkel equipment upgrade',
      platinum: '15% charter discount + Complimentary onboard sunset tapas',
      black: '25% private superyacht charter discount + Onboard private bartender'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '6 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 4200,
    commissionRate: 20
  },
  {
    id: 'm-8',
    name: 'Sabah South Sea Pearl Heritage Boutique',
    category: 'Retail & Artisanal',
    location: 'Imago Mall VIP Level & Gaya Street',
    district: 'Kota Kinabalu Waterfront',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    description: 'Master artisans producing certified Sabah natural golden and silver South Sea pearls.',
    tierPrivilege: {
      gold: '8% discount + Complimentary certification & gift box',
      platinum: '12% discount + Private gemstone valuation consultation',
      black: '20% discount + Custom heirloom jewelry design by master jeweler'
    },
    discountPercentage: 15,
    hCreditsEarnRate: '5 H-Credits / $1 Spent',
    campaignStatus: 'Year-Round Partner',
    annualCampaignFeeUSD: 3800,
    commissionRate: 14
  },
  {
    id: 'm-9',
    name: 'Hermes Sabah VIP Chauffeur & HeliFleet',
    category: 'VIP Transport',
    location: 'Kota Kinabalu Airport & Helipad',
    district: 'Kota Kinabalu Waterfront',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    description: 'Exclusive fleet of luxury Alphard, Lexus LM, and Airbus H130 helicopters for Hermes guests.',
    tierPrivilege: {
      gold: '10% discount on airport transfers',
      platinum: 'Complimentary 1x Airport Alphard transfer + 15% hourly chauffeur discount',
      black: 'Unlimited Alphard city chauffeur + 20% Helicopter charter discount'
    },
    discountPercentage: 20,
    hCreditsEarnRate: '5 H-Credits / $1 Spent',
    campaignStatus: 'Active Exclusive',
    annualCampaignFeeUSD: 4000,
    commissionRate: 25
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'bk-101',
    bookingRef: 'HSB-ELT-9921',
    packageId: 'pkg-elite',
    packageName: 'H Sabah Elite: Private Island & Yacht Odyssey',
    memberId: 'mem-1',
    memberName: 'Alexander Vance',
    memberTier: 'Black VIP',
    country: 'Singapore',
    travelDate: 'Oct 15 - Oct 21, 2026',
    duration: '7D6N',
    guests: 2,
    amountUSD: 14400,
    status: 'Confirmed',
    assignedDriver: 'Captain Firdaus (Lexus LM VIP)',
    hotelBooked: 'Gaya Island Resort Presidential Villa',
    createdAt: '2026-08-20',
    specialRequests: 'Helicopter transfer from KK tarmac; Dom Pérignon 2012 in villa'
  },
  {
    id: 'bk-102',
    bookingRef: 'HSB-SIG-4402',
    packageId: 'pkg-signature',
    packageName: 'H Borneo Signature: Rainforest & Kinabalu Heritage',
    memberId: 'mem-2',
    memberName: 'Grace Lin',
    memberTier: 'Platinum',
    country: 'Hong Kong',
    travelDate: 'Sep 02 - Sep 07, 2026',
    duration: '6D5N',
    guests: 2,
    amountUSD: 7200,
    status: 'In Progress',
    assignedDriver: 'Driver Rahman (Alphard Executive)',
    hotelBooked: 'Kinabalu Highland VIP Chalet',
    createdAt: '2026-08-15',
    specialRequests: 'Vegetarian tasting menu for Kundasang dinner'
  },
  {
    id: 'bk-103',
    bookingRef: 'HSB-DSC-1184',
    packageId: 'pkg-discovery',
    packageName: 'H Sabah Discovery: Kota Kinabalu Sunset Odyssey',
    memberId: 'mem-3',
    memberName: 'Kenji Sato',
    memberTier: 'Gold',
    country: 'Japan',
    travelDate: 'Nov 10 - Nov 13, 2026',
    duration: '4D3N',
    guests: 1,
    amountUSD: 1850,
    status: 'Confirmed',
    assignedDriver: 'Driver Aaron (Vellfire VIP)',
    hotelBooked: 'Sutera Harbour Pacific Club Suite',
    createdAt: '2026-08-24'
  },
  {
    id: 'bk-104',
    bookingRef: 'HSB-ELT-9933',
    packageId: 'pkg-elite',
    packageName: 'H Sabah Elite: Private Island & Yacht Odyssey',
    memberId: 'mem-4',
    memberName: 'Julian Thorne',
    memberTier: 'Black VIP',
    country: 'United Kingdom',
    travelDate: 'Dec 22 - Dec 28, 2026',
    duration: '7D6N',
    guests: 4,
    amountUSD: 28800,
    status: 'Confirmed',
    assignedDriver: 'Captain Firdaus (Helicopter Flight 1)',
    hotelBooked: 'Shangri-La Tanjung Aru Royal Suite',
    createdAt: '2026-08-22'
  }
];

export const VIP_EVENTS: VIPEvent[] = [
  {
    id: 'evt-1',
    title: 'Hermes Sabah Annual Global Summit 2026',
    date: 'Nov 18 - Nov 20, 2026',
    location: 'Sabah International Convention Centre (SICC) & Sutera Harbour',
    capacity: 350,
    rsvpCount: 284,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    description: 'The premier annual gathering of Hermes global leaders, high-tier members, and Sabah governmental tourism partners.',
    accessTier: 'Gold',
    priceUSD: 650,
    status: 'Open for RSVP'
  },
  {
    id: 'evt-2',
    title: 'VIP Borneo Yacht Gala & South China Sea Sunset Soirée',
    date: 'Oct 18, 2026',
    location: 'Sutera Marina & Gaya Island Secret Bay',
    capacity: 60,
    rsvpCount: 52,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
    description: 'Exclusive 5-vessel private flotilla sunset soirée featuring world-class mixologists, live jazz, and caviar bars.',
    accessTier: 'Platinum',
    priceUSD: 450,
    status: 'Almost Full'
  },
  {
    id: 'evt-3',
    title: 'Kinabalu High-Altitude Chef’s Table & Stargazing Retrospective',
    date: 'Dec 05, 2026',
    location: 'Mount Kinabalu Private Alpine Observatory',
    capacity: 25,
    rsvpCount: 25,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80',
    description: 'Ultra-exclusive 7-course tasting dinner at 2,000m altitude paired with celestial astrophotography guide.',
    accessTier: 'Black VIP',
    priceUSD: 950,
    status: 'Exclusive Invite'
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 'rev-tour',
    title: 'Flagship Tour Package Margin',
    marginRange: '22% - 28%',
    avgTakeRate: 25,
    description: 'Net operating margin captured on all 3 flagship curated travel packages sold directly to Hermes global members.',
    annualProjectedUSD: 3850000,
    iconName: 'Compass',
    color: '#F59E0B'
  },
  {
    id: 'rev-hotel',
    title: 'Hotel & Resort Commission',
    marginRange: '12% - 18%',
    avgTakeRate: 15,
    description: 'Exclusive wholesale-to-retail spread negotiated with luxury properties (Sutera Harbour, Shangri-La, Gaya Island Resort).',
    annualProjectedUSD: 2150000,
    iconName: 'Building2',
    color: '#10B981'
  },
  {
    id: 'rev-transport',
    title: 'VIP Transport & HeliFleet Margin',
    marginRange: '25% - 32%',
    avgTakeRate: 28,
    description: 'Direct margin on high-yield Alphard/Vellfire private fleet, luxury yachts, and helicopter charters.',
    annualProjectedUSD: 1420000,
    iconName: 'Car',
    color: '#06B6D4'
  },
  {
    id: 'rev-merchant',
    title: 'Merchant Campaign & Listing Fees',
    marginRange: '$2k - $5k / merchant',
    avgTakeRate: 100,
    description: 'Annual merchant partnership subscriptions, guaranteed VIP foot traffic promotion, and digital H Pass verification terminal integration.',
    annualProjectedUSD: 680000,
    iconName: 'Store',
    color: '#8B5CF6'
  },
  {
    id: 'rev-event',
    title: 'VIP Events & Annual Summit',
    marginRange: '35% - 45%',
    avgTakeRate: 40,
    description: 'Ticketing, premium sponsorship packages, VIP gala tables, and corporate partner ecosystem activations.',
    annualProjectedUSD: 980000,
    iconName: 'Ticket',
    color: '#EC4899'
  },
  {
    id: 'rev-marketplace',
    title: 'Curated Marketplace Commission',
    marginRange: '10% - 15%',
    avgTakeRate: 12,
    description: 'Closed-loop transaction fee on Sabah artisanal goods, South Sea pearls, organic mountain produce, and duty-free deliveries.',
    annualProjectedUSD: 850000,
    iconName: 'ShoppingBag',
    color: '#EAB308'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'KK Gateway Landing & Anchor Network',
    timeline: 'Q1 - Q2 2026 (Launch Ready)',
    status: 'In Progress',
    milestones: [
      'Establish Kota Kinabalu Regional Hub & Executive Concierge Lounge',
      'Onboard 50 Tier-1 Merchant Partners (Hotels, Seafood, Spas, Marine)',
      'Deploy 3 Flagship Packages (H Discovery, H Signature, H Elite)',
      'Launch H Pass Sabah Member App with digital QR credential wallet'
    ],
    kpis: {
      members: '5,000+ Visiting Members',
      merchants: '50 Curated Merchants',
      projectedGMV: '$9.5M GMV'
    }
  },
  {
    phase: 'Phase 2',
    title: 'Highlands & East Coast Corridor Expansion',
    timeline: 'Q3 - Q4 2026',
    status: 'Scheduled',
    milestones: [
      'Expand ecosystem to Kundasang, Sandakan, Semporna & Tawau',
      'Scale merchant network to 150+ verified lifestyle partners',
      'Launch H-Credits cross-border closed loop rewards clearing system',
      'Introduce Private Aviation & Helicopter transfer routes across Sabah'
    ],
    kpis: {
      members: '18,000+ Visiting Members',
      merchants: '150+ Merchants',
      projectedGMV: '$28.0M GMV'
    }
  },
  {
    phase: 'Phase 3',
    title: 'Sabah Global Summit & Full Digital Lifestyle Economy',
    timeline: '2027 & Beyond',
    status: 'Future Vision',
    milestones: [
      'Host Annual Hermes Sabah Global Summit at SICC with 1,000+ VIPs',
      'Integrate complete regional tourism marketplace & artisanal exports',
      'Expand regional operator blueprint to neighboring ASEAN leisure hubs',
      'Establish Hermes Sabah Conservation & Marine Biodiversity Endowment'
    ],
    kpis: {
      members: '50,000+ Visiting Members',
      merchants: '300+ Merchants',
      projectedGMV: '$65.0M+ GMV'
    }
  }
];

export const MONTHLY_FINANCIALS_2026 = [
  { month: 'Jan', gmvUSD: 420000, revenueUSD: 98000, members: 320 },
  { month: 'Feb', gmvUSD: 580000, revenueUSD: 136000, members: 450 },
  { month: 'Mar', gmvUSD: 750000, revenueUSD: 175000, members: 580 },
  { month: 'Apr', gmvUSD: 920000, revenueUSD: 215000, members: 710 },
  { month: 'May', gmvUSD: 1150000, revenueUSD: 268000, members: 890 },
  { month: 'Jun', gmvUSD: 1450000, revenueUSD: 339000, members: 1120 },
  { month: 'Jul', gmvUSD: 1820000, revenueUSD: 425000, members: 1410 },
  { month: 'Aug', gmvUSD: 2200000, revenueUSD: 514000, members: 1700 },
  { month: 'Sep', gmvUSD: 2650000, revenueUSD: 619000, members: 2050 },
  { month: 'Oct', gmvUSD: 3100000, revenueUSD: 724000, members: 2400 },
  { month: 'Nov', gmvUSD: 3800000, revenueUSD: 887000, members: 2950 },
  { month: 'Dec', gmvUSD: 4500000, revenueUSD: 1051000, members: 3500 }
];

export const VISITOR_ORIGIN_DATA = [
  { country: 'Singapore', share: 28, color: '#F59E0B' },
  { country: 'China (Mainland)', share: 24, color: '#10B981' },
  { country: 'Hong Kong', share: 18, color: '#06B6D4' },
  { country: 'Japan & Korea', share: 14, color: '#8B5CF6' },
  { country: 'Taiwan', share: 9, color: '#EC4899' },
  { country: 'UK / Europe / Others', share: 7, color: '#EAB308' }
];
