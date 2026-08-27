import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Compass,
  Star,
  Sparkles,
  Waves,
  Trees,
  Coffee,
  Fish,
  Utensils,
  Gem,
  ExternalLink
} from 'lucide-react';

export const MemberExploreSabah: React.FC = () => {
  const { setSelectedMerchantForModal } = useApp();
  const [selectedHotspot, setSelectedHotspot] = useState<number>(0);

  const hotspots = [
    {
      name: 'Kota Kinabalu Waterfront & Jesselton Marina',
      category: 'Coastal Hub & Yachting',
      icon: <Waves className="w-4 h-4 text-cyan-400" />,
      district: 'KK Central Waterfront',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      description: 'The energetic epicenter of Sabah luxury lifestyle. Home to premier seafood pavilions, the historic Jesselton Point yacht marina, and sunset champagne lounges.',
      privileges: 'VIP Yacht boarding privileges, 15% discount at waterfront seafood partners.',
      coordinates: '5.9804° N, 116.0735° E',
      highlights: ['Jesselton Point Marina', 'Welcome Seafood Pavilion', 'Waterfront Boardwalk Night Life']
    },
    {
      name: 'Tanjung Aru & Sutera Harbour Peninsula',
      category: '5-Star Hospitality & Sunsets',
      icon: <Star className="w-4 h-4 text-amber-400" />,
      district: 'Tanjung Aru Coastal Strip',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      description: 'Globally renowned for producing one of the world’s top 3 most breathtaking sunsets. Anchored by the 27-hole Graham Marsh golf course and private marina slips.',
      privileges: 'Complimentary Sunset Bar reservations, 20% Spa privileges at Chi Spa.',
      coordinates: '5.9528° N, 116.0461° E',
      highlights: ['Shangri-La Sunset Bar', 'Sutera Marina 27-Hole Golf', 'Tanjung Aru Beach Park']
    },
    {
      name: 'Gaya Island & Tunku Abdul Rahman Coral Triangle',
      category: 'Island Eco-Sanctuary',
      icon: <Fish className="w-4 h-4 text-emerald-400" />,
      district: 'Tunku Abdul Rahman Marine Park',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      description: 'A 15-minute speed charter from KK brings you into pristine rainforest-cloaked islands and protected marine sanctuaries teeming with sea turtles and vibrant coral reefs.',
      privileges: 'Private marine biologist guided reef safari, private beach pavilion buyout.',
      coordinates: '6.0125° N, 116.0310° E',
      highlights: ['YTL Gaya Island Resort', 'Sapi & Manukan Marine Reefs', 'Coral Conservation Pavilion']
    },
    {
      name: 'Mount Kinabalu & Kundasang Valley Highlands',
      category: 'UNESCO World Heritage Alpine',
      icon: <Trees className="w-4 h-4 text-purple-400" />,
      district: 'Ranau / Kundasang Highlands',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
      description: 'Towering at 4,095 meters, Mount Kinabalu’s sacred granite spires rise above the clouds. Enjoy crisp mountain air, high-altitude botanical chalets, and organic agritourism.',
      privileges: 'Helicopter peak fly-over access, private botanical masterclass with lead botanists.',
      coordinates: '6.0753° N, 116.5584° E',
      highlights: ['Kinabalu UNESCO World Heritage Park', 'Kundasang Highland Valleys', 'Desa Dairy Alpine Pastures']
    },
    {
      name: 'Gaya Street & Artisanal Pearl Ateliers',
      category: 'Heritage & High Jewelry',
      icon: <Gem className="w-4 h-4 text-pink-400" />,
      district: 'Heritage Historic Quarter',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      description: 'The historic soul of Kota Kinabalu featuring colonial architecture, third-wave specialty Sabah coffee roasters, and private South Sea pearl ateliers.',
      privileges: 'Private master jeweler fitting, certified Sabah golden pearl provenance certificates.',
      coordinates: '5.9830° N, 116.0772° E',
      highlights: ['Sabah South Sea Pearl Heritage', 'Historic Gaya Street Sunday Market', 'Artisan Coffee Roasteries']
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">Explore Curated Sabah Hotspots</h2>
        <p className="text-xs text-slate-400 mt-1">
          Interactive destination map and insider guides for Hermes VIP members.
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
                    {selectedHotspot === idx && <span className="text-amber-400 text-xs">● Active</span>}
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
                      {spot.coordinates}
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
                      <span>Hermes Member Exclusive Benefit:</span>
                    </span>
                    <p className="text-slate-200">{spot.privileges}</p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                      Featured Destination Anchors:
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
