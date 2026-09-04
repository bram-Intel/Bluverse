'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Twitter, Facebook, Instagram, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#02040B] pt-16 pb-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1: Brand & Mantra */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-36">
                <Image
                  src="/brand/bulverse-logo-white.png"
                  alt="Bulverse Digital Infrastructure"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Bulverse is an enterprise-grade digital infrastructure platform delivering high-performance Cloud VPS, NVMe storage, ultra-low latency trading environments, and resilient cloud hosting.
            </p>

            <div className="font-display text-sm font-bold text-white tracking-wider uppercase pt-2">
              BUILD. RUN. GROW WITH BULVERSE CLOUD.
            </div>

            {/* Social Channels (Directly from poster) */}
            <div className="pt-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                FOLLOW US: @bulverseofficial
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/bulverseofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] hover:bg-bulverse-blue hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/bulverseofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] hover:bg-pink-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/bulverseofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] hover:bg-cyan-500 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/bulverseofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white hover:text-black transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Compute & Hosting */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Compute & Hosting
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#cloud-vps" className="hover:text-white transition-colors">Cloud VPS & Dedicated</Link></li>
              <li><Link href="#website-hosting" className="hover:text-white transition-colors">Managed cPanel Cloud</Link></li>
              <li><Link href="#trading-infrastructure" className="hover:text-white transition-colors">Forex & Crypto Trading VPS</Link></li>
              <li><Link href="#cloud-storage" className="hover:text-white transition-colors">S3-Compatible Storage</Link></li>
              <li><Link href="#cloud-networking" className="hover:text-white transition-colors">Clean IPv4 / WireGuard Mesh</Link></li>
            </ul>
          </div>

          {/* Col 3: Operations & Fleet */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Platform & Fleet
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#datacenters" className="hover:text-white transition-colors">Datacenter Locations</Link></li>
              <li><Link href="#cli" className="hover:text-white transition-colors">Developer CLI & API</Link></li>
              <li><a href="https://portal.bulverse.com/submitticket.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">24/7 Operations Support</a></li>
              <li><a href="https://portal.bulverse.com/serverstatus.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fleet Uptime Telemetry</a></li>
            </ul>
          </div>

          {/* Col 4: Client Portal */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Commerce Portal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://portal.bulverse.com/clientarea.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Client Area Console <ArrowUpRight className="h-3 w-3" /></a></li>
              <li><a href="https://portal.bulverse.com/cart.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Deploy New Service</a></li>
              <li><a href="https://portal.bulverse.com/clientarea.php?action=invoices" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Invoicing & Payments</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Bulverse Cloud Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SLA: 99.9% Guaranteed</span>
            <span>PCIe Gen4 NVMe</span>
            <span>Zero Vendor Lock-in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
