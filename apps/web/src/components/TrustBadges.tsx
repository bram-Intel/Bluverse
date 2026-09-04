'use client';

import React from 'react';
import { TRUST_BADGES } from '../lib/catalog';
import { ShieldCheck, Gauge, Lock, TrendingUp, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-bulverse-blue stroke-[2.2]" />,
  Gauge: <Gauge className="h-8 w-8 text-bulverse-blue stroke-[2.2]" />,
  Lock: <Lock className="h-8 w-8 text-bulverse-blue stroke-[2.2]" />,
  TrendingUp: <TrendingUp className="h-8 w-8 text-bulverse-blue stroke-[2.2]" />,
  Headphones: <Headphones className="h-8 w-8 text-bulverse-blue stroke-[2.2]" />,
};

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Poster Trust Banner Bar */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-3 pt-3 md:pt-0">
                <div className="mb-2">
                  {iconMap[badge.icon]}
                </div>
                <h3 className="font-display text-sm font-black tracking-wider text-[#04052D] uppercase">
                  {badge.title}
                </h3>
                <p className="text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wide mt-0.5">
                  {badge.subtitle}
                </p>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed hidden lg:block">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
