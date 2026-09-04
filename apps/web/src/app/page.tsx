'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBadges } from '../components/TrustBadges';
import { ServicePillars } from '../components/ServicePillars';
import { DatacenterLatencyMap } from '../components/DatacenterLatencyMap';
import { TerminalSimulator } from '../components/TerminalSimulator';
import { ConfiguratorModal } from '../components/ConfiguratorModal';
import { Footer } from '../components/Footer';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import Image from 'next/image';

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
    <div className="flex min-h-screen flex-col bg-[#030611] selection:bg-bulverse-blue selection:text-white">
      {/* Top Brand Navbar */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      <main className="flex-1">
        {/* Hero Section featuring 3D Blade Server Rack & Orbit Nodes */}
        <Hero
          onOpenConfigurator={() => {
            setActiveTier(CATALOG_SERVICES[0].tiers[1]);
            setConfiguratorOpen(true);
          }}
        />

        {/* 5 Core Trust Badges from Poster */}
        <TrustBadges />

        {/* 6 Infrastructure Service Pillars Grid */}
        <ServicePillars
          currency={currency}
          onSelectTier={handleOpenConfiguratorWithTier}
        />

        {/* Global Datacenter Fleet & Real-time Ping Latency Monitor */}
        <DatacenterLatencyMap />

        {/* Developer CLI, REST API & Instant SSH Terminal Simulator */}
        <TerminalSimulator />

        {/* Enterprise Callout / Brand Identity Showcase */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#030611] via-[#060B20] to-[#030611] border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-blue-950/40 via-[#080E24] to-cyan-950/30 p-8 sm:p-12 backdrop-blur-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-bulverse-cyan uppercase tracking-widest">
                    <Sparkles className="h-4 w-4" />
                    <span>BUILT FOR HYPER-GROWTH WORKLOADS</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    Scale From 1 VPS to Multi-Region Cluster Without Architectural Replacement
                  </h3>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Bulverse abstracts hypervisors and providers beneath a single unified control plane. Launch today with guaranteed enterprise SLA, and expand your compute capacity on demand.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-4">
                    <a
                      href="https://portal.bulverse.com/cart.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-bulverse-blue-hover transition-all"
                    >
                      <span>Deploy Server Instance</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href="https://portal.bulverse.com/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-semibold text-white hover:bg-white/[0.08] transition-colors"
                    >
                      <span>Contact Solutions Engineer</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative p-2 rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
                    <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-xl overflow-hidden">
                      <Image
                        src="/brand/bulverse-poster.png"
                        alt="Bulverse Official Brand Poster"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Official Brand Identity
                      </span>
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
