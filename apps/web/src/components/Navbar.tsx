'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Server, Shield, Globe, Terminal, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, onToggleCurrency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo - Using Official Blue Logo Lockup from Poster */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-40">
            <Image
              src="/brand/bulverse-logo.png"
              alt="Bulverse Digital Infrastructure"
              fill
              priority
              className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="relative" onMouseLeave={() => setServicesDropdown(false)}>
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-bulverse-blue transition-colors py-2"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-bulverse-blue' : 'text-slate-400'}`} />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full -left-8 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-1">
                  <Link
                    href="#cloud-vps"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-bulverse-blue">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Cloud VPS & Servers</div>
                      <div className="text-[11px] text-slate-500">High performance compute with root access</div>
                    </div>
                  </Link>

                  <Link
                    href="#website-hosting"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-bulverse-blue">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Website Hosting</div>
                      <div className="text-[11px] text-slate-500">Fast & secure with cPanel included</div>
                    </div>
                  </Link>

                  <Link
                    href="#trading-infrastructure"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-bulverse-blue">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Trading Infrastructure</div>
                      <div className="text-[11px] text-slate-500">Low-latency 24/7 stable access</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="#cloud-storage" className="text-sm font-semibold text-slate-700 hover:text-bulverse-blue transition-colors">
            Storage
          </Link>
          <Link href="#cloud-networking" className="text-sm font-semibold text-slate-700 hover:text-bulverse-blue transition-colors">
            Networking
          </Link>
          <Link href="#datacenters" className="text-sm font-semibold text-slate-700 hover:text-bulverse-blue transition-colors">
            Datacenters
          </Link>
          <Link href="#cli" className="text-sm font-semibold text-slate-700 hover:text-bulverse-blue transition-colors flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            CLI & API
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-mono font-semibold text-slate-700 hover:border-slate-300 transition-all"
            title="Toggle between NGN (₦) and USD ($)"
          >
            <span className={currency === 'NGN' ? 'text-bulverse-blue font-bold' : 'text-slate-400'}>₦ NGN</span>
            <span className="text-slate-300">/</span>
            <span className={currency === 'USD' ? 'text-bulverse-blue font-bold' : 'text-slate-400'}>$ USD</span>
          </button>

          {/* Client Area Portal Link */}
          <a
            href="https://portal.bulverse.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-700 hover:text-bulverse-blue px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Client Console
          </a>

          {/* Primary CTA in Poster Royal Blue */}
          <a
            href="https://portal.bulverse.com/cart.php"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-xl bg-bulverse-blue px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-bulverse-blue/20 hover:bg-bulverse-blue-hover transition-all active:scale-[0.98]"
          >
            <span>Deploy Server</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleCurrency}
            className="px-2.5 py-1 rounded-md border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50"
          >
            {currency}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-bulverse-blue"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-4">
          <Link
            href="#cloud-vps"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Cloud VPS & Servers
          </Link>
          <Link
            href="#website-hosting"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Website Hosting
          </Link>
          <Link
            href="#cloud-storage"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Cloud Storage
          </Link>
          <Link
            href="#cloud-networking"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Cloud Networking
          </Link>
          <Link
            href="#trading-infrastructure"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Trading Infrastructure
          </Link>
          <Link
            href="#datacenters"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-bulverse-blue"
          >
            Datacenters & Latency
          </Link>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://portal.bulverse.com/clientarea.php"
              className="text-center py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl"
            >
              Client Console Login
            </a>
            <a
              href="https://portal.bulverse.com/cart.php"
              className="text-center py-2.5 text-sm font-bold text-white bg-bulverse-blue rounded-xl shadow-md"
            >
              Deploy Server Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
