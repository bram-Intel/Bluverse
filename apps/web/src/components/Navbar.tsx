'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Server, Shield, Globe, Terminal, Database, Network, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, onToggleCurrency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo - Official Logo Mark & Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-9 sm:h-11 w-36 sm:w-44">
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

        {/* Right Action Cluster for Desktop */}
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

          {/* Primary CTA */}
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

        {/* Mobile Header Buttons (Right side on phones) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Currency Toggle for Mobile Navbar */}
          <button
            onClick={onToggleCurrency}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-mono font-bold text-bulverse-blue bg-blue-50/80 active:bg-blue-100 transition-colors"
            title="Switch Currency"
          >
            {currency === 'NGN' ? '₦ NGN' : '$ USD'}
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:text-bulverse-blue hover:bg-slate-50 active:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-bulverse-blue" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white border-b border-slate-200 p-5 shadow-2xl z-50 md:hidden animate-in slide-in-from-top-4 duration-200 space-y-5">
          
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Infrastructure Services
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="#cloud-vps"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 active:bg-blue-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-bulverse-blue">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Cloud VPS & Dedicated</div>
                  <div className="text-[11px] text-slate-500">1-2GB, 4-6GB, 8GB+ AMD EPYC™</div>
                </div>
              </Link>

              <Link
                href="#website-hosting"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 active:bg-blue-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-bulverse-blue">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Website Hosting</div>
                  <div className="text-[11px] text-slate-500">Fast NVMe with cPanel included</div>
                </div>
              </Link>

              <Link
                href="#cloud-storage"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 active:bg-blue-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-bulverse-blue">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Cloud Storage</div>
                  <div className="text-[11px] text-slate-500">S3 API Compatible, 100GB to 1TB+</div>
                </div>
              </Link>

              <Link
                href="#cloud-networking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 active:bg-blue-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-bulverse-blue">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Cloud Networking & VPN</div>
                  <div className="text-[11px] text-slate-500">Dedicated IPs, Anycast DNS, DDoS</div>
                </div>
              </Link>

              <Link
                href="#trading-infrastructure"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 active:bg-blue-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-bulverse-blue">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Trading Infrastructure</div>
                  <div className="text-[11px] text-slate-500">Sub-ms liquidity broker cross-connect</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between py-2">
              <Link
                href="#datacenters"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-bulverse-blue"
              >
                Global Fleet & Latency Map
              </Link>
              <Link
                href="#cli"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-bulverse-blue"
              >
                CLI & API Documentation
              </Link>
            </div>
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="https://portal.bulverse.com/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 rounded-xl active:bg-slate-200 transition-colors"
            >
              Client Area Console Login
            </a>
            <a
              href="https://portal.bulverse.com/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-bulverse-blue rounded-xl shadow-md shadow-bulverse-blue/30 active:scale-[0.98] transition-transform"
            >
              Deploy Cloud Server Instance
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
