'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Server, Shield, Globe, Terminal, ChevronDown, Menu, X, ArrowUpRight, DollarSign } from 'lucide-react';

interface NavbarProps {
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, onToggleCurrency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#030611]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-bulverse-blue to-blue-400 shadow-lg shadow-bulverse-blue/30 group-hover:shadow-bulverse-cyan/40 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 21L12 15L17 19L25 10" stroke="#FFFFFF" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 10H25V15" stroke="#FFFFFF" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 26H26" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-bulverse-cyan ring-2 ring-[#030611] animate-pulse" />
          </div>
          <div>
            <span className="font-display text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
              BULVERSE <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-bulverse-blue/20 text-bulverse-cyan border border-bulverse-cyan/30">CLOUD</span>
            </span>
            <span className="block text-[10px] tracking-widest text-slate-400 font-mono -mt-1 uppercase">Digital Infrastructure</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="relative" onMouseLeave={() => setServicesDropdown(false)}>
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              Infrastructure Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-bulverse-cyan' : ''}`} />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full -left-12 w-80 rounded-2xl border border-white/10 bg-[#080E24]/95 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-1">
                  <Link
                    href="#cloud-vps"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-bulverse-cyan">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Cloud VPS & Dedicated</div>
                      <div className="text-[11px] text-slate-400">High-clock AMD EPYC™ NVMe instances</div>
                    </div>
                  </Link>

                  <Link
                    href="#website-hosting"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-bulverse-cyan">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">cPanel Cloud Hosting</div>
                      <div className="text-[11px] text-slate-400">LiteSpeed web servers with 99.9% SLA</div>
                    </div>
                  </Link>

                  <Link
                    href="#trading-infrastructure"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Trading VPS & Low Latency</div>
                      <div className="text-[11px] text-slate-400">Direct broker cross-connects</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="#datacenters" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Global Fleet
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#cli" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            CLI & API
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-all"
            title="Toggle between NGN (₦) and USD ($)"
          >
            <span className={currency === 'NGN' ? 'text-bulverse-cyan font-bold' : 'text-slate-500'}>₦ NGN</span>
            <span className="text-slate-600">/</span>
            <span className={currency === 'USD' ? 'text-bulverse-cyan font-bold' : 'text-slate-500'}>$ USD</span>
          </button>

          {/* Client Area Portal Link */}
          <a
            href="https://portal.bulverse.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          >
            Client Console
          </a>

          {/* Primary CTA */}
          <a
            href="https://portal.bulverse.com/cart.php"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-xl bg-bulverse-blue px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-bulverse-blue/30 hover:bg-bulverse-blue-hover hover:shadow-bulverse-blue/50 transition-all active:scale-[0.98]"
          >
            <span>Deploy Server</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleCurrency}
            className="px-2.5 py-1 rounded-md border border-white/10 text-xs font-mono text-slate-300"
          >
            {currency}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060B1E] px-4 py-6 space-y-4">
          <Link
            href="#cloud-vps"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-white"
          >
            Cloud VPS & Servers
          </Link>
          <Link
            href="#website-hosting"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-white"
          >
            Website Hosting
          </Link>
          <Link
            href="#trading-infrastructure"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-white"
          >
            Trading Infrastructure
          </Link>
          <Link
            href="#datacenters"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-white"
          >
            Datacenters & Latency
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://portal.bulverse.com/clientarea.php"
              className="text-center py-2 text-sm font-semibold text-slate-300 bg-white/[0.04] rounded-lg"
            >
              Client Console Login
            </a>
            <a
              href="https://portal.bulverse.com/cart.php"
              className="text-center py-2.5 text-sm font-bold text-white bg-bulverse-blue rounded-xl shadow-lg"
            >
              Deploy Server Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
