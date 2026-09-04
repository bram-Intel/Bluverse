'use client';

import React, { useState } from 'react';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { Server, Globe, Database, Network, TrendingUp, Cpu, Check, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ServicePillarsProps {
  currency: 'NGN' | 'USD';
  onSelectTier: (category: ServiceCategory, tier: ServiceTier) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-6 w-6 text-bulverse-blue" />,
  Globe: <Globe className="h-6 w-6 text-bulverse-cyan" />,
  Database: <Database className="h-6 w-6 text-purple-400" />,
  Network: <Network className="h-6 w-6 text-blue-400" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-emerald-400" />,
  Cpu: <Cpu className="h-6 w-6 text-cyan-300" />,
};

export const ServicePillars: React.FC<ServicePillarsProps> = ({ currency, onSelectTier }) => {
  const [activePillMap, setActivePillMap] = useState<Record<string, number>>({
    'cloud-vps': 1,
    'website-hosting': 1,
    'cloud-storage': 1,
    'cloud-networking': 0,
    'trading-infrastructure': 0,
    'custom-infrastructure': 0,
  });

  const handleSelectPill = (serviceId: string, index: number) => {
    setActivePillMap((prev) => ({ ...prev, [serviceId]: index }));
  };

  const formatPrice = (ngn: number, usd: number) => {
    if (currency === 'NGN') {
      return `₦${ngn.toLocaleString()}`;
    }
    return `$${usd.toFixed(2)}`;
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-bulverse-cyan uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Launch Infrastructure Fleet</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            6 Specialized Compute & Cloud Pillars
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered for predictable latency, guaranteed hardware quotas, and seamless scalability. Built on enterprise NVMe architectures with zero vendor lock-in.
          </p>
        </div>

        {/* 6-Card Precision Grid (Direct from Poster) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CATALOG_SERVICES.map((service) => {
            const currentTierIndex = activePillMap[service.id] ?? 0;
            const currentTier = service.tiers[Math.min(currentTierIndex, service.tiers.length - 1)];

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#080E24]/80 p-7 shadow-xl backdrop-blur-xl hover:border-bulverse-blue/50 hover:bg-[#0A122E] transition-all duration-300"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-bulverse-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 shadow-inner group-hover:scale-105 transition-transform">
                      {iconMap[service.iconName] || <Server className="h-6 w-6 text-bulverse-blue" />}
                    </div>

                    {currentTier?.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-bulverse-blue/15 text-bulverse-cyan border border-bulverse-cyan/30">
                        {currentTier.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-bulverse-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Features Bullet List (Exact from poster) */}
                  <div className="space-y-2.5 mb-7">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-bulverse-blue/20 text-bulverse-cyan shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tier Selector Pills (Poster Representation) */}
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Available Capacities & Tiers:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.pills.map((pill, idx) => {
                        const isSelected = (activePillMap[service.id] ?? 0) === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectPill(service.id, idx)}
                            className={`text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-bulverse-blue text-white border-bulverse-cyan shadow-md shadow-bulverse-blue/30 scale-105'
                                : 'bg-white/[0.04] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                            }`}
                          >
                            {pill}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="flex items-baseline justify-between mb-5">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">
                        {currentTier ? formatPrice(currentTier.priceNgn, currentTier.priceUsd) : 'Custom'}
                      </span>
                      <span className="text-xs text-slate-400 font-mono"> / {currentTier?.billingPeriod || 'mo'}</span>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Instant Setup
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onSelectTier(service, currentTier)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.06] hover:bg-bulverse-blue px-4 py-3 text-xs font-bold uppercase tracking-wider text-white border border-white/15 hover:border-bulverse-blue shadow-sm hover:shadow-lg hover:shadow-bulverse-blue/30 transition-all duration-200"
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
