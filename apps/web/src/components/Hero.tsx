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
    <section className="relative overflow-hidden pt-6 sm:pt-12 pb-12 sm:pb-20 bg-gradient-to-b from-[#FAFBFD] via-[#F5F8FE] to-[#FAFBFD] border-b border-slate-200/80">
      
      {/* Poster Signature Blue Dotted Grid (Top Right - hidden on mobile to avoid clutter) */}
      <div className="absolute top-8 right-8 sm:right-16 z-10 pointer-events-none hidden md:block">
        <div className="grid grid-cols-5 gap-3 opacity-60">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-bulverse-blue" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Column: Mobile-first Typography from Poster */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Live Operational Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-[11px] sm:text-xs font-mono text-bulverse-blue shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold tracking-wide uppercase">ENTERPRISE CLOUD • PROVISIONING READY</span>
            </div>

            {/* Poster Headline - Perfectly Scaled for Mobile & Desktop */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#04052D] uppercase leading-[1.1]">
              YOUR DIGITAL <br />
              <span className="text-bulverse-blue">
                INFRASTRUCTURE,
              </span> <br />
              ALL IN ONE PLACE.
            </h1>

            {/* Poster Signature Blue Accent Bar */}
            <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-bulverse-blue rounded-full mx-auto lg:mx-0 -mt-1 sm:-mt-2" />

            {/* Supporting Text directly from Poster */}
            <div className="space-y-1 text-slate-700 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
              <p className="font-semibold text-slate-900">
                Powerful. Reliable. Scalable.
              </p>
              <p className="text-slate-600">
                Everything you need to{' '}
                <span className="text-bulverse-blue font-bold">build</span>,{' '}
                <span className="text-bulverse-blue font-bold">run</span> and{' '}
                <span className="text-bulverse-blue font-bold">grow</span> your business online.
              </p>
            </div>

            {/* Feature Checklist - Clean 2-column on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>PCIe Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>32TB Traffic</span>
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

            {/* Action Buttons - Full-width stacked on mobile for effortless thumb tapping */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenConfigurator}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-bulverse-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-bulverse-blue/25 hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue active:bg-slate-50 shadow-xs transition-all"
              >
                <Server className="h-4 w-4 text-bulverse-blue" />
                <span>Explore 6 Services</span>
              </Link>
            </div>

            {/* Brand Mantra Accent from Poster */}
            <div className="pt-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-bulverse-blue">
              BUILD. RUN. GROW WITH BULVERSE CLOUD.
            </div>

          </div>

          {/* Right Hero Column: 3D Server Blade Visual */}
          <div className="lg:col-span-5 flex justify-center pt-2 sm:pt-0">
            <HeroBladeRack />
          </div>

        </div>
      </div>
    </section>
  );
};
