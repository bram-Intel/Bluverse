'use client';

import React, { useState, useEffect } from 'react';
import { DATACENTERS } from '../lib/catalog';
import { Activity, ArrowUpRight } from 'lucide-react';

export const DatacenterLatencyMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(DATACENTERS[0]);
  const [latencyJitter, setLatencyJitter] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const jitter: Record<string, number> = {};
      DATACENTERS.forEach((dc) => {
        jitter[dc.id] = dc.ping + (Math.floor(Math.random() * 5) - 2);
      });
      setLatencyJitter(jitter);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="datacenters" className="py-16 sm:py-24 bg-ambient-mesh-section border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Antigravity Dotted Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-antigravity-dots mask-radial-faded pointer-events-none opacity-35" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[300px] sm:w-[500px] h-[500px] bg-gradient-to-l from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl pointer-events-none" />

      {/* Precision Engineering Crosshairs */}
      <span className="tech-crosshair top-3 left-4 hidden sm:block">+</span>
      <span className="tech-crosshair top-3 right-4 hidden sm:block">+</span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-bulverse-blue mb-1.5 px-3 py-1 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs">
              <Activity className="h-4 w-4" />
              <span>GLOBAL HIGH-SPEED FLEET</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#04052D] uppercase tracking-tight">
              Datacenter Presence & Latency
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
            Co-located inside Tier 3+ carrier-neutral facilities with multi-homed BGP uplinks to major internet exchanges.
          </p>
        </div>

        {/* Datacenter Nodes Grid - 2 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {DATACENTERS.map((dc) => {
            const isSelected = activeRegion.id === dc.id;
            const currentPing = latencyJitter[dc.id] ?? dc.ping;

            return (
              <button
                key={dc.id}
                onClick={() => setActiveRegion(dc)}
                className={`relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 active:scale-[0.98] min-w-0 max-w-full min-h-[72px] ${
                  isSelected
                    ? 'border-bulverse-blue bg-white shadow-antigravity ring-2 ring-bulverse-blue/30'
                    : 'border-slate-200/80 bg-white/80 backdrop-blur-md hover:border-blue-300 hover:bg-white shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-lg sm:text-2xl">{dc.flag}</span>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-600">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
                    </span>
                    <span>{currentPing}ms</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                    {dc.city}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase mt-0.5 truncate">
                    {dc.region}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Region Telemetry Diagnostic Card */}
        <div className="mt-6 sm:mt-8 rounded-2xl glass-surface p-4 sm:p-6 shadow-poster-card min-w-0 max-w-full relative overflow-hidden">
          
          {/* Top Emerald/Cyan Telemetry Shimmer Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          {/* Precision Engineering Crosshairs */}
          <span className="tech-crosshair top-2 left-3 hidden sm:block">+</span>
          <span className="tech-crosshair top-2 right-3 hidden sm:block">+</span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1 min-w-0">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wider">
                Telemetry Diagnostics • {activeRegion.city} Node
              </div>
              <div className="text-base sm:text-lg font-bold text-[#04052D] flex flex-wrap items-center gap-2">
                <span>Direct BGP Uplink — {activeRegion.region}</span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  READY
                </span>
              </div>
              <div className="text-xs text-slate-600">
                Redundant N+1 power generators and automated hardware failover.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Estimated Latency:</div>
                <div className="text-xl sm:text-2xl font-mono font-black text-emerald-600">
                  {latencyJitter[activeRegion.id] ?? activeRegion.ping} ms
                </div>
              </div>
              <a
                href={`https://portal.bulverse.com/cart.php?datacenter=${activeRegion.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all min-h-[46px]"
              >
                <span>Deploy in {activeRegion.city}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
