import React, { useState } from 'react';
import {
  Users,
  Building,
  Package,
  Store,
  Calendar,
  Gift,
  Coins,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const EcosystemModelSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('hub');

  const nodes = [
    {
      id: 'members',
      title: '1. Hermes Global Members',
      badge: 'Demand Engine',
      subtitle: '120,000+ Verified HNW & Luxury Tier Members',
      icon: <Users className="w-6 h-6 text-amber-400" />,
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
      description: 'Hermes global members seeking authentic, high-prestige travel escapes across Southeast Asia. High discretionary income and strong loyalty engagement.',
      metrics: [
        'Average trip budget: $2,500 - $12,000',
        'Direct digital outreach via Hermes global apps and VIP newsletters',
        'Pre-qualified high-spending demographic'
      ]
    },
    {
      id: 'hub',
      title: '2. Sabah Travel Hub & Operator Engine',
      badge: 'Landing & Clearing Core',
      subtitle: 'Exclusive Regional Inbound Gateway in Kota Kinabalu',
      icon: <Building className="w-6 h-6 text-cyan-400" />,
      color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
      description: 'The operational command center coordinating airport tarmac escorts, luxury hotel wholesale allocations, private yacht fleet dispatches, and merchant network clearing.',
      metrics: [
        'Dedicated bilingual VIP concierge team',
        'Direct wholesale agreements with 5-star properties & heli-fleets',
        'Proprietary digital H Pass verification terminal for merchants'
      ]
    },
    {
      id: 'channels',
      title: '3. Multi-Pillar Ecosystem Channels',
      badge: 'Experience & Monetization',
      subtitle: 'Packages · Merchant Network · Events · Rewards',
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
      description: 'Connecting arriving members to 4 tangible monetization and experience channels in Sabah: curated flagship tours, 150+ merchant partner privileges, annual summits, and H-Credits.',
      metrics: [
        '3 Flagship Curated Packages (Discovery, Signature, Elite)',
        '150+ Merchant Venues across KK, Gaya Island & Kundasang',
        'Hermes Sabah Annual Global Summit & VIP Yacht Galas'
      ]
    },
    {
      id: 'revenue',
      title: '4. High-Yield Real-World Economy & Revenue',
      badge: 'Economic Capture',
      subtitle: 'Operator Profits & Sabah Merchant GMV',
      icon: <Coins className="w-6 h-6 text-purple-400" />,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
      description: 'Converting digital member engagement into substantial real-world GDP for Sabah and high-margin recurring income for the operator platform.',
      metrics: [
        '6 diversified operator revenue streams',
        '22% - 28% blended operator gross profit margin',
        'Sustainable economic boost to local Sabah businesses'
      ]
    }
  ];

  return (
    <section id="ecosystem-model" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Operational Flywheel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            The Ecosystem Model
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A seamless flywheel transforming international digital membership into physical visitor arrivals, merchant transactions, and recurring regional ecosystem profits.
          </p>
        </div>

        {/* Interactive Visual Flywheel Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                selectedNode === node.id
                  ? 'bg-slate-900 border-amber-500 shadow-gold-sm scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              {/* Connector Arrow for Desktop */}
              {i < nodes.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${node.color}`}>
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {node.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{node.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className={selectedNode === node.id ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  {selectedNode === node.id ? '● Active View' : 'Click to Inspect'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 ${selectedNode === node.id ? 'text-amber-400' : 'text-slate-500'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Drill-down Detail Panel for Selected Node */}
        {nodes
          .filter(n => n.id === selectedNode)
          .map(active => (
            <div
              key={active.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/30 bg-slate-900/90 shadow-gold-sm animate-fadeIn"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                      {active.badge}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">{active.title}</h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{active.description}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block">
                      Operational Key Points:
                    </span>
                    {active.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Visual Card on right */}
                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    Flow Status & Value Generation
                  </span>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">Target Member Flow:</span>
                      <span className="text-amber-400 font-bold">120k+ Global Pool</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">Conversion to Sabah Visit:</span>
                      <span className="text-emerald-400 font-bold">4.2% Year 1 Target</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">Sabah Local Economy Capture:</span>
                      <span className="text-cyan-400 font-bold">88% Closed-Loop Retention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
