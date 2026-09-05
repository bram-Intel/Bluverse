'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBadges } from '../components/TrustBadges';
import { ServicePillars } from '../components/ServicePillars';
import { DatacenterLatencyMap } from '../components/DatacenterLatencyMap';
import { TerminalSimulator } from '../components/TerminalSimulator';
import { ConfiguratorModal } from '../components/ConfiguratorModal';
import { MobileBottomBar } from '../components/MobileBottomBar';
import { Footer } from '../components/Footer';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [activeTier, setActiveTier] = useState<ServiceTier | undefined>(undefined);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'NGN' ? 'USD' : 'NGN'));
  };

  const handleOpenConfiguratorWithTier = (category: ServiceCategory, tier?: ServiceTier) => {
    setActiveTier(tier);
    setConfiguratorOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFD] selection:bg-bulverse-blue selection:text-white">
      {/* Top Brand Navbar in Clean White */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section Recreating Poster 3D Server Blade Assembly */}
        <Hero
          onOpenConfigurator={() => {
            setActiveTier(CATALOG_SERVICES[0].tiers[1]);
            setConfiguratorOpen(true);
          }}
        />

        {/* 5 Core Trust Badges from Poster Bottom Banner */}
        <TrustBadges />

        {/* 6 Infrastructure Service Pillars Grid in Poster White & Royal Blue */}
        <ServicePillars
          currency={currency}
          onSelectTier={handleOpenConfiguratorWithTier}
        />

        {/* Global Datacenter Fleet & Real-time Ping Latency Monitor */}
        <DatacenterLatencyMap />

        {/* Developer CLI, REST API & Instant SSH Terminal Simulator */}
        <TerminalSimulator />

        {/* Enterprise Callout / Brand Identity Showcase */}
        <section className="py-12 sm:py-20 bg-[#F5F8FE] border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl border border-blue-200 bg-white p-4.5 sm:p-8 lg:p-12 shadow-poster-card relative min-w-0 max-w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4 min-w-0 max-w-full">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span>BUILT FOR SCALE WITHOUT ARCHITECTURAL REPLACEMENT</span>
                  </div>

                  <h3 className="font-display text-fluid-h2 font-black text-[#04052D] uppercase tracking-tight break-words">
                    Scale From 1 VPS to Multi-Region Cloud Fleet Seamlessly
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Bulverse separates the customer storefront, the commerce automation engine, and the compute hypervisor fleet. Launch with confidence and expand your compute capacity without changing a single line of customer-facing architecture.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://portal.bulverse.com/cart.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/20 hover:bg-bulverse-blue-hover transition-all min-h-[46px]"
                    >
                      <span>Deploy Server Instance</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href="https://portal.bulverse.com/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-6 py-3.5 text-xs font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue transition-colors min-h-[46px]"
                    >
                      <span>Contact Solutions Engineer</span>
                    </a>
                  </div>
                </div>

                {/* Clean Enterprise Infrastructure Diagnostic Card (Replaces the poster image) */}
                <div className="lg:col-span-4 flex justify-center min-w-0 max-w-full">
                  <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-50/90 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4 min-w-0">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-mono font-bold text-[#04052D] uppercase tracking-wider">FLEET TELEMETRY</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-bulverse-blue">99.9% SLA</span>
                    </div>

                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between min-w-0">
                        <div>
                          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">Primary Uplink</div>
                          <div className="text-xs font-bold text-[#04052D]">10 Gbps Redundant Fiber</div>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-bulverse-blue border border-blue-200 shrink-0">ACTIVE</span>
                      </div>

                      <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between min-w-0">
                        <div>
                          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">Storage Architecture</div>
                          <div className="text-xs font-bold text-[#04052D]">PCIe Gen4 NVMe RAID 10</div>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">HEALTHY</span>
                      </div>

                      <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between min-w-0">
                        <div>
                          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">DDoS Mitigation</div>
                          <div className="text-xs font-bold text-[#04052D]">Layer 3/4 & Layer 7 Shield</div>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-bulverse-blue border border-blue-200 shrink-0">ARMED</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center border-t border-slate-200">
                      <div className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-500">
                        Zero Hypervisor Lock-in • 24/7 Operations Monitoring
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileBottomBar
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onOpenConfigurator={() => {
          setActiveTier(CATALOG_SERVICES[0].tiers[1]);
          setConfiguratorOpen(true);
        }}
      />

      {/* Interactive Server Provisioning Configurator Modal */}
      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        currency={currency}
        initialTier={activeTier}
      />
    </div>
  );
}
