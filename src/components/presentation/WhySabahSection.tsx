import React, { useState } from 'react';
import {
  MapPin,
  Plane,
  Trees,
  Waves,
  Building2,
  Gem,
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';

export const WhySabahSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const flightOrigins = [
    { city: 'Singapore', time: '2h 20m', status: 'Direct Daily Flights' },
    { city: 'Hong Kong', time: '3h 05m', status: 'Direct Daily Flights' },
    { city: 'Taipei', time: '3h 30m', status: 'Direct Daily Flights' },
    { city: 'Seoul / Incheon', time: '5h 15m', status: 'Direct Daily Flights' },
    { city: 'Tokyo / Haneda', time: '5h 45m', status: 'Key Connecting Routes' },
    { city: 'Shanghai / Shenzhen', time: '4h 00m', status: 'Direct Daily Flights' },
  ];

  const pillars = [
    {
      id: 'pillar-nature',
      icon: <Trees className="w-6 h-6 text-emerald-400" />,
      title: 'UNESCO World Heritage & Ancient Rainforest',
      subtitle: '130-Million-Year Old Biodiversity Sanctuary',
      badge: 'Nature Capital of Asia',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
      description: 'Sabah is one of only three places on Earth holding the UNESCO "Triple Crown" status (World Heritage Site, Biosphere Reserve, Global Geopark). Mount Kinabalu (4,095m) anchors an unmatched eco-luxury destination.',
      bullets: [
        'Over 5,000 plant species and 600+ rare Bornean orchid varieties',
        'Kinabalu Alpine chalets and Kundasang highland agritourism',
        'Highland luxury retreats with pristine microclimate (18°C - 22°C)'
      ]
    },
    {
      id: 'pillar-islands',
      icon: <Waves className="w-6 h-6 text-cyan-400" />,
      title: 'World-Class Coral Triangle & Island Luxury',
      subtitle: 'Pristine Marine Sanctuaries at Kota Kinabalu’s Doorstep',
      badge: 'Coral Triangle Epicenter',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      description: 'Just a 15-minute private yacht voyage from Kota Kinabalu city center lies the Tunku Abdul Rahman Marine Park, complemented by Gaya Island’s secluded luxury resorts and world-famous Tanjung Aru sunsets.',
      bullets: [
        'Tunku Abdul Rahman Marine Park (5 private islands and reefs)',
        'Gaya Island private overwater villas & private marine reserves',
        'Direct gateway to Sipadan & Tun Sakaran for world-class diving'
      ]
    },
    {
      id: 'pillar-mice',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      title: 'High-Yield MICE & 5-Star Infrastructure',
      subtitle: 'Sabah International Convention Centre & Luxury Marinas',
      badge: 'Infrastructure Ready',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      description: 'Kota Kinabalu combines authentic raw nature with world-class meeting and hospitality infrastructure. Home to the waterfront Sabah International Convention Centre (SICC) and premier 5-star marina resorts.',
      bullets: [
        'Sabah International Convention Centre (SICC) accommodating 5,000+ delegates',
        'Sutera Harbour 27-hole Graham Marsh golf & private yacht marina',
        'Shangri-La Tanjung Aru & Pacific Club executive hospitality'
      ]
    },
    {
      id: 'pillar-demographics',
      icon: <Gem className="w-6 h-6 text-purple-400" />,
      title: 'Optimal Match for Hermes High-Net-Worth Profile',
      subtitle: 'High Spending Power Meets Rare Experiential Luxury',
      badge: 'HNW Member Appeal',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      description: 'Global Hermes members are not looking for crowded mass tourism. They crave pristine private nature, helicopter safaris, gourmet private dining, rare Sabah South Sea pearls, and seamless VIP security escorts.',
      bullets: [
        'Bespoke luxury packages with $1,800 to $7,200 member ticket sizes',
        'Closed-loop merchant spending across dining, pearls, and wellness',
        'High repeat travel potential through tiered ecosystem privileges'
      ]
    }
  ];

  return (
    <section id="why-sabah" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Location & Positioning</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Why Kota Kinabalu & Sabah?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            The ultimate regional landing zone: accessible within a 4-hour flight radius from Asia’s richest financial capitals, boasting world-class infrastructure and pristine eco-luxury assets.
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
                <h3 className="text-base font-bold text-white">Direct Aviation Gateway (KKIA - BKI)</h3>
                <p className="text-xs text-slate-400">Kota Kinabalu International Airport: Malaysia’s 2nd Busiest International Hub</p>
              </div>
            </div>
            <div className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 self-start md:self-auto">
              Average 4-Hour Flight Time for 85% of Hermes Asian Members
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
              Core Strategic Pillars
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
                      {activePillar === idx && <span className="text-amber-400 text-xs">● Active</span>}
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
