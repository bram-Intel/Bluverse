'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#FAFBFD] pt-12 sm:pt-16 pb-24 sm:pb-12 text-slate-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Poster Mantra & Social Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-slate-200">
          
          {/* Poster Brand Mantra */}
          <div>
            <div className="font-display text-xl sm:text-3xl font-black text-[#04052D] uppercase tracking-tight">
              BUILD. RUN. GROW <br />
              <span className="text-bulverse-blue">WITH BULVERSE CLOUD.</span>
            </div>
            <p className="text-slate-500 text-xs mt-1.5 sm:mt-2 max-w-md leading-relaxed">
              Digital infrastructure engineered for scale. High-performance Cloud VPS, NVMe storage, and low-latency network interconnects.
            </p>
          </div>

          {/* Poster Follow Us Strip - Mobile Optimized 2x2 grid on small screens */}
          <div className="space-y-2.5">
            <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-[#04052D]">
              FOLLOW US:
            </div>
            <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-3">
              <a
                href="https://facebook.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs active:bg-slate-50 transition-colors min-h-[44px]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white shrink-0">
                  <Facebook className="h-3 w-3 fill-current" />
                </div>
                <span className="text-[11px] font-bold text-slate-800">Facebook</span>
              </a>

              <a
                href="https://instagram.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs active:bg-slate-50 transition-colors min-h-[44px]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shrink-0">
                  <Instagram className="h-3 w-3" />
                </div>
                <span className="text-[11px] font-bold text-slate-800">Instagram</span>
              </a>

              <a
                href="https://t.me/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs active:bg-slate-50 transition-colors min-h-[44px]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-white shrink-0">
                  <Send className="h-3 w-3" />
                </div>
                <span className="text-[11px] font-bold text-slate-800">Telegram</span>
              </a>

              <a
                href="https://x.com/bulverseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs active:bg-slate-50 transition-colors min-h-[44px]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white shrink-0">
                  <Twitter className="h-3 w-3 fill-current" />
                </div>
                <span className="text-[11px] font-bold text-slate-800">X / Twitter</span>
              </a>
            </div>
          </div>

        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 sm:py-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Logo */}
          <div className="col-span-2 space-y-3">
            <div className="relative h-10 w-40">
              <Image
                src="/brand/bulverse-logo.png"
                alt="Bulverse Digital Infrastructure"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-600">
              Bulverse is an enterprise-grade digital infrastructure provider delivering high-performance Cloud VPS, NVMe storage, and resilient web hosting.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Services
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#cloud-vps" className="hover:text-bulverse-blue transition-colors py-1 block">Cloud VPS</Link></li>
              <li><Link href="#website-hosting" className="hover:text-bulverse-blue transition-colors py-1 block">Website Hosting</Link></li>
              <li><Link href="#cloud-storage" className="hover:text-bulverse-blue transition-colors py-1 block">Cloud Storage</Link></li>
              <li><Link href="#cloud-networking" className="hover:text-bulverse-blue transition-colors py-1 block">Cloud Networking</Link></li>
              <li><Link href="#trading-infrastructure" className="hover:text-bulverse-blue transition-colors py-1 block">Trading VPS</Link></li>
            </ul>
          </div>

          {/* Col 3: Platform & Fleet */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Platform
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#datacenters" className="hover:text-bulverse-blue transition-colors py-1 block">Global Fleet</Link></li>
              <li><Link href="#cli" className="hover:text-bulverse-blue transition-colors py-1 block">CLI & API</Link></li>
              <li><a href="https://portal.bulverse.com/submitticket.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors py-1 block">24/7 Support</a></li>
              <li><a href="https://portal.bulverse.com/serverstatus.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors py-1 block">Fleet Uptime</a></li>
            </ul>
          </div>

          {/* Col 4: Commerce Portal */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#04052D]">
              Commerce
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="https://portal.bulverse.com/clientarea.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors flex items-center gap-1 font-semibold py-1">Console <ArrowUpRight className="h-3 w-3" /></a></li>
              <li><a href="https://portal.bulverse.com/cart.php" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors py-1 block">Deploy Instance</a></li>
              <li><a href="https://portal.bulverse.com/clientarea.php?action=invoices" target="_blank" rel="noopener noreferrer" className="hover:text-bulverse-blue transition-colors py-1 block">Invoices & Billing</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Bulverse Cloud Technologies. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-medium">
            <span>99.9% SLA</span>
            <span>PCIe Gen4 NVMe</span>
            <span>Zero Lock-in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
