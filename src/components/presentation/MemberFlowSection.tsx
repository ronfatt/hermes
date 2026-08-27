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
      title: 'Discover Sabah',
      subtitle: 'Digital Invitation & Inspiration',
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      description: 'Hermes global members receive curated editorial showcases, luxury video guides, and personalized itinerary recommendations inside their Hermes global app and VIP portal.',
      bullets: [
        'AI-tailored recommendations based on travel preferences',
        'Direct access to 3 flagship packages and seasonal VIP summits',
        'Pre-trip digital orientation & bilingual concierge inquiry'
      ]
    },
    {
      number: '02',
      title: 'Book Flagship Package',
      subtitle: '1-Click Luxury Reservation',
      icon: <CalendarCheck className="w-6 h-6 text-emerald-400" />,
      description: 'Members book their chosen journey with instant room/villa locks, private flight options, and personalized dietary/activity preferences.',
      bullets: [
        'Instant issuance of digital H Pass Sabah travel voucher',
        'Automatic wholesale rate negotiation across 5-star properties',
        'Dedicated bilingual Hermes trip concierge assigned immediately'
      ]
    },
    {
      number: '03',
      title: 'VIP Arrival in Kota Kinabalu',
      subtitle: 'Tarmac Escort & Private Fleet',
      icon: <PlaneLanding className="w-6 h-6 text-cyan-400" />,
      description: 'Touchdown at Kota Kinabalu International Airport (KKIA). Royal protocol tarmac greeting, fast-track customs clearance, and private Alphard/helicopter transfer to the resort.',
      bullets: [
        'Zero-wait immigration and direct baggage transfer',
        'Chilled champagne & Bornean welcome ritual in transit',
        'Direct suite check-in with digital H Pass key card'
      ]
    },
    {
      number: '04',
      title: 'Unlock Digital H Pass',
      subtitle: 'Regional VIP Credential',
      icon: <QrCode className="w-6 h-6 text-purple-400" />,
      description: 'The member’s smartphone transforms into the master key for Sabah: dynamic QR identity, tier badges (Gold/Platinum/Black), and preloaded merchant credits.',
      bullets: [
        'Instant visual verification at 150+ partner locations',
        'Offline-capable QR pass for remote island sanctuaries',
        'Tier-specific dining, marina, and spa privileges'
      ]
    },
    {
      number: '05',
      title: 'Spend Across Partner Network',
      subtitle: 'Closed-Loop Merchant Economy',
      icon: <CreditCard className="w-6 h-6 text-pink-400" />,
      description: 'Members enjoy priority VIP tables at seafood institutions, South Sea pearl ateliers, superyacht charters, and artisanal boutiques with automatic tier discounts.',
      bullets: [
        '10% - 25% exclusive member price reductions',
        'Guaranteed table reservations during peak sunset hours',
        'Seamless operator billing & merchant revenue settlement'
      ]
    },
    {
      number: '06',
      title: 'Earn & Reinvest Rewards',
      subtitle: 'Continuous Ecosystem Retention',
      icon: <Gift className="w-6 h-6 text-amber-300" />,
      description: 'Every ringgit and dollar spent generates H-Credits, unlocking future travel subsidies, annual summit gala passes, and exclusive Sabah heirloom gifts.',
      bullets: [
        'Up to 6 H-Credits earned per $1 spent across Sabah',
        'Points redeemable for helicopter upgrades & yacht buyouts',
        'Drives high return visit rates across the Borneo corridor'
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
            <span>End-to-End Member Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            The Seamless Member Flow
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            How a global Hermes member travels from digital discovery to physical luxury arrival and continuous high-value ecosystem spend in Sabah.
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
                  STEP {step.number}
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
                    Phase {steps[activeStep].number} of 06
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
                <h4 className="text-sm font-bold text-white">Experience This Flow in Real-Time</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Launch the live H Pass Sabah member app demo to test package booking, QR perk redemption, and rewards.
                </p>
              </div>

              <button
                onClick={() => setCurrentMode('member')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-cyan-lg/30 transition-all"
              >
                <span>Launch H Pass Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
