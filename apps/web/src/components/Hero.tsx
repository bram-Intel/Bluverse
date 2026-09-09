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
    <section className="relative overflow-hidden pt-6 sm:pt-10 lg:pt-8 xl:pt-12 pb-10 sm:pb-14 lg:pb-12 xl:pb-16 bg-ambient-mesh-hero border-b border-slate-200/80">
      
      {/* Google Antigravity Signature Dot Matrix Grid with Radial Vignette */}
      <div className="absolute inset-0 bg-antigravity-dots mask-hero-glow pointer-events-none" />
      
      {/* Subtle Coordinate Blueprint Grid */}
      <div className="absolute inset-0 bg-antigravity-grid mask-radial-faded pointer-events-none opacity-30" />

      {/* Top Ambient Ethereal Glow Beam */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] md:w-[900px] h-[300px] sm:h-[450px] bg-gradient-to-b from-blue-600/14 via-cyan-400/8 to-transparent blur-3xl pointer-events-none -z-0" />

      {/* Engineering Precision Crosshairs */}
      <span className="tech-crosshair top-3 left-4 hidden sm:block">+</span>
      <span className="tech-crosshair top-3 right-4 hidden sm:block">+</span>
      <span className="tech-crosshair bottom-3 left-4 hidden sm:block">+</span>
      <span className="tech-crosshair bottom-3 right-4 hidden sm:block">+</span>

      {/* Poster Signature Blue Dotted Matrix Cluster (Top Right) */}
      <div className="absolute top-6 right-6 sm:right-12 z-10 pointer-events-none hidden md:block">
        <div className="grid grid-cols-5 gap-2.5 opacity-50">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-bulverse-blue" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Hero Column: Mobile-first Typography from Poster */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-4 xl:space-y-5 text-center lg:text-left min-w-0 max-w-full">
            
            {/* Live Operational Status Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-mono text-bulverse-blue shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold tracking-wide uppercase">ENTERPRISE CLOUD • PROVISIONING READY</span>
            </div>

            {/* Poster Headline - Scaled proportionally for Desktop Frame */}
            <h1 className="font-display text-fluid-hero lg:text-[2.65rem] xl:text-[3.25rem] font-black tracking-tight text-[#04052D] uppercase leading-[1.06] break-words">
              YOUR DIGITAL <br />
              <span className="text-bulverse-blue">
                INFRASTRUCTURE,
              </span> <br />
              ALL IN ONE PLACE.
            </h1>

            {/* Poster Signature Blue Accent Bar */}
            <div className="w-12 sm:w-14 h-1 sm:h-1.5 bg-bulverse-blue rounded-full mx-auto lg:mx-0 -mt-1" />

            {/* Supporting Text directly from Poster */}
            <div className="space-y-0.5 text-slate-700 text-xs sm:text-sm lg:text-base max-w-xl leading-relaxed">
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

            {/* Feature Checklist - Clean 3-column on tablet/desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 pt-0.5 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">PCIe Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">32TB Traffic</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">Full Root Access</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">cPanel Included</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-bulverse-blue shrink-0" />
                <span className="truncate">Trading VPS Ready</span>
              </div>
            </div>

            {/* Action Buttons - Distinct, prominent, and comfortably above the fold */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenConfigurator}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-bulverse-blue/25 hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all min-h-[44px]"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <Link
                href="#catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue active:bg-slate-50 shadow-xs transition-all min-h-[44px]"
              >
                <Server className="h-4 w-4 text-bulverse-blue shrink-0" />
                <span>Explore 6 Services</span>
              </Link>
            </div>

            {/* Brand Mantra Accent from Poster */}
            <div className="pt-0.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-bulverse-blue/90">
              BUILD. RUN. GROW WITH BULVERSE CLOUD.
            </div>

          </div>

          {/* Right Hero Column: 3D Server Blade Visual */}
          <div className="lg:col-span-5 flex justify-center pt-2 sm:pt-0 min-w-0 max-w-full overflow-hidden">
            <HeroBladeRack />
          </div>

        </div>
      </div>
    </section>
  );
};
