'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#FAFBFD] pt-16 pb-12 text-slate-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Poster Mantra & Social Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-200">
          
          {/* Poster Brand Mantra */}
          <div>
            <div className="font-display text-2xl sm:text-3xl font-black text-[#04052D] uppercase tracking-tight">
              BUILD. RUN. GROW <br />
              <span className="text-bulverse-blue">WITH BULVERSE CLOUD.</span>
            </div>
            <p className="text-slate-500 text-xs mt-2 max-w-md">
              Digital infrastructure engineered for scale. High-performance Cloud VPS, NVMe storage, and low-latency network interconnects.
            </p>
          </div>

          {/* Poster Follow Us Strip */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#04052D]">
              FOLLOW US:
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-bulverse-blue hover:text-bulverse-blue transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Facebook className="h-3.5 w-3.5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-slate-800">bulverseofficial</span>
              </a>

              <a
                href="https://instagram.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                  <Instagram className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">bulverseofficial</span>
              </a>

              <a
                href="https://t.me/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <Send className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">bulverseofficial</span>
              </a>

              <a
                href="https://x.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-900 hover:text-black transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Twitter className="h-3.5 w-3.5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-slate-800">bulverseofficial</span>
              </a>
            </div>
          </div>

        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-11 w-44">
              <Image
                src="/brand/bulverse-logo.png"
                alt="Bulverse Digital Infrastructure"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-600">
              Bulverse is an enterprise-grade digital infrastructure reseller and provider delivering high-performance Cloud VPS, NVMe storage, ultra-low latency trading environments, and resilient web hosting.
            </p>
          </div>

          {/* Col 2: Compute & Hosting */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Services
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#cloud-vps" className="hover:text-bulverse-blue transition-colors">Cloud VPS & Servers</Link></li>
              <li><Link href="#website-hosting" className="hover:text-bulverse-blue transition-colors">Website Hosting (cPanel)</Link></li>
              <li><Link href="#cloud-storage" className="hover:text-bulverse-blue transition-colors">Cloud Storage (S3 API)</Link></li>
              <li><Link href="#cloud-networking" className="hover:text-bulverse-blue transition-colors">Cloud Networking & VPN</Link></li>
              <li><Link href="#trading-infrastructure" className="hover:text-bulverse-blue transition-colors">Trading Infrastructure</Link></li>
            </ul>
          </div>

          {/* Col 3: Operations & Fleet */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Platform & Fleet
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#datacenters" className="hover:text-bulverse-blue transition-colors">Global Datacenters</Link></li>
              <li><Link href="#cli" className="hover:text-bulverse-blue transition-colors">Developer CLI & API</Link></li>
              <li><a href="https://portal.bulverse.com/submitticket.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors">24/7 Operations Support</a></li>
              <li><a href="https://portal.bulverse.com/serverstatus.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors">Fleet Uptime Telemetry</a></li>
            </ul>
          </div>

          {/* Col 4: Commerce Portal */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Commerce Portal
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="https://portal.bulverse.com/clientarea.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors flex items-center gap-1 font-semibold">Client Area Console <ArrowUpRight className="h-3 w-3" /></a></li>
              <li><a href="https://portal.bulverse.com/cart.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors">Deploy New Instance</a></li>
              <li><a href="https://portal.bulverse.com/clientarea.php?action=invoices" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors">Invoices & Billing</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Bulverse Cloud Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <span>99.9% Uptime Guaranteed</span>
            <span>PCIe Gen4 NVMe</span>
            <span>Zero Lock-in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
