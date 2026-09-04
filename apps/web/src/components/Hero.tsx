'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, ShieldCheck, Zap, Server, CheckCircle2 } from 'lucide-react';
import { HeroBladeRack } from './HeroBladeRack';

interface HeroProps {
  onOpenConfigurator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConfigurator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/[0.06]">
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Live Operational Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-bulverse-blue/40 bg-bulverse-blue/10 px-3.5 py-1.5 text-xs font-mono text-bulverse-cyan backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bulverse-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>FLEET STATUS: 100% OPERATIONAL • PROVISIONING ACTIVE</span>
            </div>

            {/* Poster Tagline (Preserved Exactly) */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.06]">
              YOUR DIGITAL <br />
              <span className="bg-gradient-to-r from-bulverse-blue via-blue-400 to-bulverse-cyan bg-clip-text text-transparent">
                INFRASTRUCTURE,
              </span> <br />
              ALL IN ONE PLACE.
            </h1>

            {/* Sub-headline from Poster */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              <span className="text-white font-semibold">Powerful. Reliable. Scalable.</span> Everything you need to{' '}
              <span className="text-bulverse-cyan font-semibold">build</span>,{' '}
              <span className="text-white font-semibold">run</span> and{' '}
              <span className="text-bulverse-blue font-semibold">grow</span> your business online. From high-speed Cloud VPS to institutional trading infrastructure.
            </p>

            {/* Feature Checklist Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>PCIe Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>32TB Monthly Traffic</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>Full Root & SSH</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>cPanel Included</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="h-4 w-4 text-bulverse-cyan shrink-0" />
                <span>Sub-ms Trading VPS</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConfigurator}
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-bulverse-blue px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-bulverse-blue/35 hover:bg-bulverse-blue-hover hover:shadow-bulverse-cyan/25 transition-all active:scale-[0.98]"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-white/25 transition-all"
              >
                <Server className="h-4 w-4 text-bulverse-cyan" />
                <span>Explore 6 Pillars</span>
              </Link>
            </div>

            {/* Brand Mantra Accent */}
            <div className="pt-2 text-xs font-mono uppercase tracking-widest text-slate-400">
              BUILD. RUN. GROW WITH BULVERSE CLOUD.
            </div>

          </div>

          {/* Right Hero Column: Bespoke 3D Blade Server Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroBladeRack />
          </div>

        </div>
      </div>
    </section>
  );
};
