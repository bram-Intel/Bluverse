'use client';

import React, { useState, useEffect } from 'react';
import { DATACENTERS } from '../lib/catalog';
import { Wifi, Server, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
    <section id="datacenters" className="py-20 bg-[#040817] border-y border-white/[0.06] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-bulverse-cyan mb-2">
              <Activity className="h-4 w-4" />
              <span>Multi-Region Infrastructure Backbone</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Global Datacenter Fleet & Low-Latency Routing
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-400">
            Co-located inside Tier 3+ facilities connected directly to primary Internet exchanges (DE-CIX, AMS-IX, LINX, IXPN).
          </p>
        </div>

        {/* Datacenter Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {DATACENTERS.map((dc) => {
            const isSelected = activeRegion.id === dc.id;
            const currentPing = latencyJitter[dc.id] ?? dc.ping;

            return (
              <button
                key={dc.id}
                onClick={() => setActiveRegion(dc)}
                className={`relative flex flex-col justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-bulverse-cyan bg-bulverse-blue/15 shadow-lg shadow-bulverse-blue/20 ring-1 ring-bulverse-cyan'
                    : 'border-white/10 bg-[#080E24] hover:border-white/25 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{dc.flag}</span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span>{currentPing}ms</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{dc.city}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    {dc.region}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Region Telemetry Diagnostic Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#080E24]/90 p-6 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-bulverse-cyan uppercase tracking-wider">
                Telemetry Diagnostics • {activeRegion.city} Node
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <span>Direct BGP Fiber Uplink — {activeRegion.region}</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  READY FOR PROVISIONING
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Redundant N+1 power generators, carrier-neutral cross connects, and automated hardware failover.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Estimated Latency</div>
                <div className="text-2xl font-mono font-bold text-emerald-400">
                  {latencyJitter[activeRegion.id] ?? activeRegion.ping} ms
                </div>
              </div>
              <a
                href={`https://portal.bulverse.com/cart.php?datacenter=${activeRegion.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-bulverse-blue px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-bulverse-blue-hover transition-colors"
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
