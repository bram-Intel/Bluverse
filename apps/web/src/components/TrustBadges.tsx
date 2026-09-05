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
    <section className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Poster Trust Banner Bar - Balanced for Mobile & Desktop */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 md:divide-x divide-slate-200">
            {TRUST_BADGES.map((badge, idx) => {
              const isLastOddItem = idx === TRUST_BADGES.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center px-2 sm:px-3 pt-3 sm:pt-0 ${
                    isLastOddItem ? 'col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <div className="mb-1.5 sm:mb-2">
                    {iconMap[badge.icon]}
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-black tracking-wider text-[#04052D] uppercase">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wide mt-0.5">
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
