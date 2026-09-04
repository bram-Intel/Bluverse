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
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="flex min-h-screen flex-col bg-[#FAFBFD] selection:bg-bulverse-blue selection:text-white">
      {/* Top Brand Navbar in Clean White */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      <main className="flex-1">
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
        <section className="py-20 bg-[#F5F8FE] border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-200 bg-white p-8 sm:p-12 shadow-poster-card relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    <Sparkles className="h-4 w-4" />
                    <span>BUILT FOR SCALE WITHOUT ARCHITECTURAL REPLACEMENT</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-black text-[#04052D] uppercase tracking-tight">
                    Scale From 1 VPS to Multi-Region Cloud Fleet Seamlessly
                  </h3>

                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Bulverse separates the customer storefront, the commerce automation engine, and the compute hypervisor fleet. Launch with confidence and expand your compute capacity without changing a single line of customer-facing architecture.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-4">
                    <a
                      href="https://portal.bulverse.com/cart.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/20 hover:bg-bulverse-blue-hover transition-all"
                    >
                      <span>Deploy Server Instance</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href="https://portal.bulverse.com/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-6 py-3.5 text-xs font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue transition-colors"
                    >
                      <span>Contact Solutions Engineer</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative p-2.5 rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-xl overflow-hidden border border-slate-100">
                      <Image
                        src="/brand/bulverse-poster.png"
                        alt="Bulverse Official Brand Poster"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center pt-2.5">
                      <span className="text-[10px] font-mono font-bold text-bulverse-blue uppercase tracking-widest">
                        Official Brand Identity Poster
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
