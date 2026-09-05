'use client';

import React from 'react';
import { TRUST_BADGES } from '../lib/catalog';
import { ShieldCheck, Gauge, Lock, TrendingUp, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-bulverse-blue stroke-[2.2]" />,
  Gauge: <Gauge className="h-7 w-7 sm:h-8 sm:w-8 text-bulverse-blue stroke-[2.2]" />,
  Lock: <Lock className="h-7 w-7 sm:h-8 sm:w-8 text-bulverse-blue stroke-[2.2]" />,
  TrendingUp: <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-bulverse-blue stroke-[2.2]" />,
  Headphones: <Headphones className="h-7 w-7 sm:h-8 sm:w-8 text-bulverse-blue stroke-[2.2]" />,
};

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 bg-[#F8FAFC]/80 relative">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Antigravity Glass Trust Banner Bar */}
        <div className="glass-surface rounded-2xl p-3.5 sm:p-6 shadow-poster-card relative overflow-hidden">
          
          {/* Top Gradient Shimmer Beam */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-bulverse-blue/40 to-transparent" />
          
          {/* Precision Engineering Crosshairs */}
          <span className="tech-crosshair top-2 left-3 hidden sm:block">+</span>
          <span className="tech-crosshair top-2 right-3 hidden sm:block">+</span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4 md:gap-6">
            {TRUST_BADGES.map((badge, idx) => {
              const isLastOddItem = idx === TRUST_BADGES.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-3 sm:p-3 rounded-xl bg-white/70 hover:bg-white border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-sm transition-all duration-200 min-w-0 ${
                    isLastOddItem ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="mb-1.5 sm:mb-2 shrink-0 group-hover:scale-105 transition-transform">
                    {iconMap[badge.icon]}
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-black tracking-wider text-[#04052D] uppercase truncate max-w-full">
                    {badge.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wide mt-0.5">
                    {badge.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed hidden lg:block">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
