'use client';

import React, { useState } from 'react';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { Server, Globe, Database, Network, TrendingUp, Cpu, Check, ArrowRight } from 'lucide-react';

interface ServicePillarsProps {
  currency: 'NGN' | 'USD';
  onSelectTier: (category: ServiceCategory, tier: ServiceTier) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-6 w-6 text-bulverse-blue" />,
  Globe: <Globe className="h-6 w-6 text-bulverse-blue" />,
  Database: <Database className="h-6 w-6 text-bulverse-blue" />,
  Network: <Network className="h-6 w-6 text-bulverse-blue" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-bulverse-blue" />,
  Cpu: <Cpu className="h-6 w-6 text-bulverse-blue" />,
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
    <section id="catalog" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wider">
            <span>OFFICIAL PRODUCT CATALOGUE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#04052D] tracking-tight uppercase">
            Everything You Need to Build, Run & Grow
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Direct provisioning across 6 specialized cloud infrastructure disciplines. Pure enterprise NVMe performance backed by transparent pricing.
          </p>
        </div>

        {/* 6-Card Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CATALOG_SERVICES.map((service) => {
            const currentTierIndex = activeTierMap[service.id] ?? 0;
            const currentTier = service.tiers[Math.min(currentTierIndex, service.tiers.length - 1)];

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-poster-card hover:shadow-poster-card-hover hover:border-bulverse-blue/60 transition-all duration-300"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 group-hover:scale-105 transition-transform">
                      {iconMap[service.iconName] || <Server className="h-6 w-6 text-bulverse-blue" />}
                    </div>

                    {currentTier?.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-bulverse-blue border border-blue-200 font-mono">
                        {currentTier.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline from Poster */}
                  <h3 className="font-display text-2xl font-black text-bulverse-blue uppercase tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                    {service.tagline}
                  </p>

                  {/* Features Bullet List (Exact from Poster) */}
                  <div className="space-y-3 mb-7">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue shrink-0 font-bold">
                          ✓
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Poster Solid Deep Blue Bottom Pill Bar */}
                  <div className="mb-5">
                    <div className="rounded-xl bg-[#0312B4] px-3.5 py-2.5 shadow-sm text-center">
                      <div className="text-[11px] font-mono font-bold tracking-wider text-white uppercase flex items-center justify-center gap-1.5 flex-wrap">
                        {service.pills.map((pill, idx) => (
                          <React.Fragment key={idx}>
                            <span>{pill}</span>
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
                      Instant Active
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onSelectTier(service, currentTier)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-bulverse-blue px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-white border border-slate-200 hover:border-bulverse-blue shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span>Configure {service.title.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4" />
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
