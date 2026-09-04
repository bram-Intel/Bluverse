'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Server, CheckCircle2 } from 'lucide-react';
import { HeroBladeRack } from './HeroBladeRack';

interface HeroProps {
  onOpenConfigurator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConfigurator }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FAFBFD] via-[#F5F8FE] to-[#FAFBFD] border-b border-slate-200/80">
      
      {/* Poster Signature Blue Dotted Grid (Top Right) */}
      <div className="absolute top-8 right-8 sm:right-16 z-10 pointer-events-none hidden sm:block">
        <div className="grid grid-cols-5 gap-3 opacity-60">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-bulverse-blue" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Exact Typography from Poster */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Operational Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-mono text-bulverse-blue shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide">ENTERPRISE CLOUD • PROVISIONING READY</span>
            </div>

            {/* Poster Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#04052D] uppercase leading-[1.08]">
              YOUR DIGITAL <br />
              <span className="text-bulverse-blue">
                INFRASTRUCTURE,
              </span> <br />
              ALL IN ONE PLACE.
            </h1>

            {/* Poster Signature Blue Accent Bar */}
            <div className="w-16 h-1.5 bg-bulverse-blue rounded-full mx-auto lg:mx-0 -mt-2" />

            {/* Supporting Text directly from Poster */}
            <div className="space-y-1 text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed">
              <p className="font-medium">
                Powerful. Reliable. Scalable.
              </p>
              <p className="text-slate-600">
                Everything you need to{' '}
                <span className="text-bulverse-blue font-bold">build</span>,{' '}
                <span className="text-bulverse-blue font-bold">run</span> and{' '}
                <span className="text-bulverse-blue font-bold">grow</span> your business online.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>PCIe Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>32TB Outbound Traffic</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>Full Root Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>cPanel Included</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>Trading VPS Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenConfigurator}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-bulverse-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-bulverse-blue/25 hover:bg-bulverse-blue-hover transition-all active:scale-[0.98]"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue shadow-sm transition-all"
              >
                <Server className="h-4 w-4 text-bulverse-blue" />
                <span>Explore 6 Services</span>
              </Link>
            </div>

            {/* Brand Mantra Accent from Poster */}
            <div className="pt-2 text-xs font-mono font-bold uppercase tracking-widest text-bulverse-blue">
              BUILD. RUN. GROW WITH BULVERSE CLOUD.
            </div>

          </div>

          {/* Right Hero Column: 3D Server Blade Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroBladeRack />
          </div>

        </div>
      </div>
    </section>
  );
};
