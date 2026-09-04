'use client';

import React from 'react';
import { TRUST_BADGES } from '../lib/catalog';
import { ShieldCheck, Gauge, Lock, TrendingUp, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7 text-bulverse-blue" />,
  Gauge: <Gauge className="h-7 w-7 text-bulverse-cyan" />,
  Lock: <Lock className="h-7 w-7 text-blue-400" />,
  TrendingUp: <TrendingUp className="h-7 w-7 text-emerald-400" />,
  Headphones: <Headphones className="h-7 w-7 text-cyan-300" />,
};

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-16 border-b border-white/[0.06] bg-[#030611]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner from Poster */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 mb-3 shadow-inner">
                {iconMap[badge.icon]}
              </div>
              <h3 className="font-display text-sm font-black tracking-wider text-white uppercase">
                {badge.title}
              </h3>
              <p className="text-xs font-mono font-bold text-bulverse-cyan uppercase tracking-wide mt-0.5">
                {badge.subtitle}
              </p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed hidden sm:block">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
