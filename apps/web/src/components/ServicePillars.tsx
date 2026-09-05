'use client';

import React, { useState } from 'react';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { Server, Globe, Database, Network, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

interface ServicePillarsProps {
  currency: 'NGN' | 'USD';
  onSelectTier: (category: ServiceCategory, tier: ServiceTier) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
  Globe: <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
  Database: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
  Network: <Network className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
  TrendingUp: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
  Cpu: <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />,
};

export const ServicePillars: React.FC<ServicePillarsProps> = ({ currency, onSelectTier }) => {
  const [activeTierMap, setActiveTierMap] = useState<Record<string, number>>({
    'cloud-vps': 1,
    'website-hosting': 1,
    'cloud-storage': 1,
    'cloud-networking': 0,
    'trading-infrastructure': 0,
    'custom-infrastructure': 0,
  });

  const formatPrice = (ngn: number, usd: number) => {
    if (currency === 'NGN') {
      return `₦${ngn.toLocaleString()}`;
    }
    return `$${usd.toFixed(2)}`;
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-ambient-mesh-section border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Antigravity Dotted Grid & Ambient Bloom */}
      <div className="absolute inset-0 bg-antigravity-dots mask-radial-faded pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[300px] bg-gradient-to-b from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl pointer-events-none" />

      {/* Precision Engineering Crosshairs */}
      <span className="tech-crosshair top-3 left-4 hidden sm:block">+</span>
      <span className="tech-crosshair top-3 right-4 hidden sm:block">+</span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200/90 bg-white/90 backdrop-blur-md text-[11px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wider shadow-xs">
            <span>OFFICIAL PRODUCT CATALOGUE</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#04052D] tracking-tight uppercase">
            Everything You Need to Build, Run & Grow
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Direct provisioning across 6 specialized cloud infrastructure disciplines. Enterprise NVMe performance backed by transparent billing.
          </p>
        </div>

        {/* 6-Card Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {CATALOG_SERVICES.map((service, sIdx) => {
            const currentTierIndex = activeTierMap[service.id] ?? 0;
            const currentTier = service.tiers[Math.min(currentTierIndex, service.tiers.length - 1)];

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-4 sm:p-7 shadow-poster-card hover:shadow-antigravity-hover hover:border-bulverse-blue/50 transition-all duration-300 min-w-0 max-w-full overflow-hidden hover:-translate-y-1"
              >
                {/* Top Subtle Shimmer Border on Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-transparent group-hover:via-bulverse-blue/70 to-transparent transition-all duration-300" />
                
                {/* Engineering Service Index Stamp */}
                <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300 group-hover:text-bulverse-blue/50 transition-colors">
                  0{sIdx + 1} //
                </div>

                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/60 border border-blue-200/70 group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                      {iconMap[service.iconName] || <Server className="h-5 w-5 sm:h-6 sm:w-6 text-bulverse-blue" />}
                    </div>

                    {currentTier?.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-bulverse-blue border border-blue-200 font-mono mr-8">
                        {currentTier.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline from Poster */}
                  <h3 className="font-display text-xl sm:text-2xl font-black text-bulverse-blue uppercase tracking-tight mb-1.5 break-words">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 font-medium">
                    {service.tagline}
                  </p>

                  {/* Features Bullet List (Exact from Poster) */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue shrink-0 font-bold text-xs">
                          ✓
                        </div>
                        <span className="break-words">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Poster Solid Deep Blue Bottom Pill Bar */}
                  <div className="mb-4 sm:mb-5">
                    <div className="rounded-xl bg-[#0312B4] px-2 sm:px-3.5 py-2 sm:py-2.5 shadow-sm text-center min-w-0 max-w-full">
                      <div className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-white uppercase flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
                        {service.pills.map((pill, idx) => (
                          <React.Fragment key={idx}>
                            <span className="whitespace-nowrap">{pill}</span>
                            {idx < service.pills.length - 1 && (
                              <span className="text-white/40">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between mb-4 pt-1 border-t border-slate-100">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black font-display text-[#04052D]">
                        {currentTier ? formatPrice(currentTier.priceNgn, currentTier.priceUsd) : 'Custom'}
                      </span>
                      <span className="text-xs text-slate-500 font-mono"> / {currentTier?.billingPeriod || 'mo'}</span>
                    </div>
                    <div className="text-[11px] font-mono font-bold text-emerald-600 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Instant Setup
                    </div>
                  </div>

                  {/* Action Button - Touch Optimized (min 48px height) */}
                  <button
                    onClick={() => onSelectTier(service, currentTier)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-bulverse-blue px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-white border border-slate-200 hover:border-bulverse-blue shadow-xs active:scale-[0.98] transition-all duration-150 min-h-[48px]"
                  >
                    <span>Configure {service.title.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
