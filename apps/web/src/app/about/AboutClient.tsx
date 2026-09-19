'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Server,
  Globe,
  Database,
  Network,
  AtSign,
  Code2,
  TrendingUp,
  Cpu,
  Building2,
  Home,
  Briefcase,
  ShoppingBag,
  Armchair,
  Gem,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { MobileBottomBar } from '../../components/MobileBottomBar';
import { ConfiguratorModal } from '../../components/ConfiguratorModal';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../../lib/catalog';

export default function AboutClient() {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(CATALOG_SERVICES[0]);
  const [activeTier, setActiveTier] = useState<ServiceTier | undefined>(undefined);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'NGN' ? 'USD' : 'NGN'));
  };

  const handleOpenConfigurator = () => {
    setActiveCategory(CATALOG_SERVICES[0]);
    setActiveTier(CATALOG_SERVICES[0].tiers[1]);
    setConfiguratorOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFD] selection:bg-bulverse-blue selection:text-white">
      {/* Brand Navbar */}
      <Navbar currency={currency} onToggleCurrency={toggleCurrency} />

      <main className="flex-1 pb-16 md:pb-0">
        {/* ==========================================================================
            HERO SECTION: ABOUT BULVERSE & IDENTITY
            ========================================================================== */}
        <section className="relative overflow-hidden bg-ambient-mesh-hero pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-200/80">
          {/* Antigravity Dotted Grid & Ambient Glow */}
          <div className="absolute inset-0 bg-antigravity-dots mask-hero-glow pointer-events-none opacity-40" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[760px] h-[360px] bg-gradient-to-r from-blue-600/10 via-cyan-400/8 to-transparent blur-3xl pointer-events-none" />

          {/* Precision Engineering Crosshairs */}
          <span className="tech-crosshair top-4 left-4 hidden sm:block">+</span>
          <span className="tech-crosshair top-4 right-4 hidden sm:block">+</span>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-bulverse-blue transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-bulverse-blue font-semibold">About Bulverse</span>
            </div>

            <div className="max-w-4xl">
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-[11px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest shadow-2xs backdrop-blur-md mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ABOUT BULVERSE // ENTERPRISE PROFILE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-fluid-hero font-black text-[#04052D] uppercase tracking-tight break-words">
                Powering Digital Growth <br />
                <span className="bg-gradient-to-r from-bulverse-blue via-[#0312B4] to-[#00D2FF] bg-clip-text text-transparent">
                  With Bulverse Cloud
                </span>
              </h1>

              {/* Subhead Welcome Note */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-white/80 border border-slate-200/90 backdrop-blur-md shadow-2xs">
                <p className="font-display text-base sm:text-xl font-bold text-[#04052D]">
                  Welcome to Bulverse Cloud
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  At Bulverse, we provide solutions designed to help individuals, businesses, developers, organizations, and institutions <strong className="text-[#04052D] font-semibold">build, operate, and grow</strong>.
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our technology division, <strong className="text-bulverse-blue font-semibold">Bulverse Cloud</strong>, is at the center of our digital services.
                </p>
              </div>

              {/* In-Page Jump Links for Mobile & Desktop */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href="#bulverse-cloud"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-bulverse-blue hover:text-bulverse-blue shadow-2xs transition-all"
                >
                  <span>☁️ Bulverse Cloud</span>
                  <span className="text-[10px] font-mono bg-blue-50 text-bulverse-blue px-1.5 py-0.5 rounded">8 Services</span>
                </a>
                <a
                  href="#beyond-cloud"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-bulverse-blue hover:text-bulverse-blue shadow-2xs transition-all"
                >
                  <span>🌐 Beyond Bulverse Cloud</span>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">7 Divisions</span>
                </a>
                <a
                  href="#philosophy"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-bulverse-blue hover:text-bulverse-blue shadow-2xs transition-all"
                >
                  <span>⚡ One Company. Multiple Solutions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 1: BULVERSE CLOUD (The Digital Core)
            ========================================================================== */}
        <section id="bulverse-cloud" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest mb-2.5">
                <Zap className="h-4 w-4 text-bulverse-blue" />
                <span>DIVISION 01 // DIGITAL INFRASTRUCTURE</span>
              </div>
              <h2 className="font-display text-fluid-h2 font-black text-[#04052D] uppercase tracking-tight">
                BULVERSE CLOUD
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Bulverse Cloud provides cloud infrastructure and digital solutions for modern businesses and individuals.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you’re launching a website, running an application, managing business data, building a digital platform, or need reliable infrastructure for your operations, Bulverse Cloud gives you the tools and support to get it running.
              </p>
            </div>

            {/* The 8 Cloud Services Grid */}
            <div className="space-y-4 mb-10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Our Services Include:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* 1. Cloud Servers */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100/70 text-bulverse-blue">
                        <Server className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-bulverse-blue border border-blue-200">
                        COMPUTE
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Cloud Servers
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Deploy applications, websites, business systems, development environments, trading platforms, and other workloads on scalable cloud servers.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <Link
                      href="/#cloud-vps"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Explore Cloud VPS</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 2. Website Hosting */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-cyan-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100/70 text-cyan-600">
                        <Globe className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200">
                        HOSTING
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Website Hosting
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Reliable hosting solutions for business websites, blogs, online stores, portfolios, organizations, and digital platforms.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <Link
                      href="/#website-hosting"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Explore Hosting</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 3. Domain Services */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100/70 text-bulverse-blue">
                        <AtSign className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-bulverse-blue border border-blue-200">
                        IDENTITY
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Domain Services
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Register and manage the domain names that give your business or personal brand a professional identity online.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <a
                      href="https://portal.bulverse.cloud/cart.php?a=add&domain=register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Register Domain</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* 4. Cloud Storage */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-indigo-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100/70 text-indigo-600">
                        <Database className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        STORAGE
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Cloud Storage
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Store, manage, protect, and access your files, backups, business data, media, and application data.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <Link
                      href="/#cloud-storage"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Explore Storage</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 5. Cloud Networking */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-teal-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100/70 text-teal-600">
                        <Network className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                        FABRIC
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Cloud Networking
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Connect your servers, applications, and infrastructure with networking solutions designed for secure and efficient communication.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <Link
                      href="/#cloud-networking"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Explore Networking</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 6. Website & Digital Development */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100/70 text-bulverse-blue">
                        <Code2 className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-bulverse-blue border border-blue-200">
                        DEVELOPMENT
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Website & Digital Development
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      From business websites and e-commerce platforms to web applications and custom digital solutions, we help turn ideas into functional digital products.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <a
                      href="https://portal.bulverse.cloud/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Request Development</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* 7. Trading Infrastructure */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-emerald-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        TRADING
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Trading Infrastructure
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      We provide infrastructure designed for traders who need reliable, always-available computing environments for their trading platforms and related tools.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <Link
                      href="/#trading-infrastructure"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Trading VPS</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 8. Custom Cloud Infrastructure */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 hover:bg-white hover:border-slate-300 hover:shadow-poster-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-800">
                        <Cpu className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        ENTERPRISE
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#04052D]">
                      Custom Cloud Infrastructure
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      For businesses and organizations with specific requirements, we can design and provide infrastructure tailored to their workload and operational needs.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80">
                    <a
                      href="https://portal.bulverse.cloud/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-bulverse-blue hover:text-bulverse-blue-hover"
                    >
                      <span>Consult Enterprise Architect</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bulverse Cloud Mission Callout Box */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border border-blue-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-bulverse-blue mb-1">
                  OUR GOAL WITH BULVERSE CLOUD IS SIMPLE:
                </div>
                <p className="font-display text-lg sm:text-2xl font-black text-[#04052D]">
                  Give you the infrastructure you need to build, connect, and scale.
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  But Bulverse is more than cloud.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="https://portal.bulverse.cloud/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/20 hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <span>Deploy Servers</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 2: BEYOND BULVERSE CLOUD (Bulverse Limited Conglomerate)
            ========================================================================== */}
        <section id="beyond-cloud" className="py-16 sm:py-24 bg-ambient-mesh-section relative overflow-hidden border-b border-slate-200/80">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-2.5">
                <Layers className="h-4 w-4 text-emerald-600" />
                <span>DIVISION 02 // DIVERSIFIED HOLDINGS</span>
              </div>
              <h2 className="font-display text-fluid-h2 font-black text-[#04052D] uppercase tracking-tight">
                BEYOND BULVERSE CLOUD
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Bulverse Cloud represents our technology and digital infrastructure business, but it is part of a much larger company.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-[#04052D] font-semibold">Bulverse Limited</strong> is a diversified company with interests and services across technology, construction, property, consulting, procurement, trading, training, lifestyle, and other business areas.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                This means that while you may have discovered us through our cloud services, there is much more to Bulverse.
              </p>
            </div>

            {/* The 7 Wider Divisions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {/* 1. Construction & Infrastructure */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      CIVIL & CONTRACTING
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    CONSTRUCTION & INFRASTRUCTURE
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We provide construction and infrastructure-related services, including general contracting, building construction, civil engineering, renovation, infrastructure development, and related project support.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">General Contracting</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Civil Engineering</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Renovation</span>
                </div>
              </div>

              {/* 2. Property & Facility Services */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                      <Home className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      FACILITIES & CARE
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    PROPERTY & FACILITY SERVICES
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our wider business also covers property and facility-related services, including property management, facility management, building maintenance, electrical services, plumbing, and related support.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Property Management</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Facility Care</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Maintenance</span>
                </div>
              </div>

              {/* 3. Consulting & Business Services */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                      ADVISORY & TRANSFORMATION
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    CONSULTING & BUSINESS SERVICES
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We provide consulting and advisory solutions across areas such as business development, technology, digital transformation, project support, and business advisory.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Digital Transformation</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Business Advisory</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Project Support</span>
                </div>
              </div>

              {/* 4. Procurement & Commercial Trading */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      COMMERCE & SOURCING
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    PROCUREMENT & COMMERCIAL TRADING
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bulverse also operates in procurement and commercial activities, including sourcing, general merchandise, wholesale and retail, import and export, and other related trading activities.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Global Sourcing</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Wholesale & Retail</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Import & Export</span>
                </div>
              </div>

              {/* 5. Furniture & Interior */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-800">
                      <Armchair className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
                      SPACES & DECOR
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    FURNITURE & INTERIOR
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We provide furniture, interior decoration, furnishing, and related products and services for residential and commercial spaces.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Interior Decoration</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Commercial Furnishing</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Residential Spaces</span>
                </div>
              </div>

              {/* 6. Fashion & Beauty */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-800">
                      <Gem className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-pink-50 text-pink-800 border border-pink-200">
                      LIFESTYLE & CARE
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    FASHION & BEAUTY
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our business activities also extend into fashion accessories, hair and beauty products, salon-related services, and lifestyle products.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Accessories</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Beauty Products</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Salon Services</span>
                </div>
              </div>

              {/* 7. Training & Education */}
              <div className="glass-surface rounded-2xl p-6 shadow-2xs hover:shadow-poster-card transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      KNOWLEDGE & ACADEMY
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#04052D]">
                    TRAINING & EDUCATION
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through our training activities, we provide educational opportunities in areas including technology, digital skills, business, digital trading, and investment awareness.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Tech & Digital Skills</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Trading Education</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Investment Awareness</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 3: ONE COMPANY. MULTIPLE SOLUTIONS. (Guiding Philosophy)
            ========================================================================== */}
        <section id="philosophy" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 to-white p-6 sm:p-10 lg:p-14 shadow-antigravity relative overflow-hidden">
              {/* Top Gradient Shimmer */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-bulverse-blue/50 to-transparent" />

              <div className="max-w-3xl mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest mb-2.5">
                  <Sparkles className="h-4 w-4 text-bulverse-blue" />
                  <span>FOUNDATIONAL ARCHITECTURE</span>
                </div>
                <h2 className="font-display text-fluid-h2 font-black text-[#04052D] uppercase tracking-tight">
                  ONE COMPANY. MULTIPLE SOLUTIONS.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  At Bulverse, we understand that our customers’ needs don’t always fit into one category.
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  A business may need a website today, cloud infrastructure tomorrow, and procurement or construction support for its physical operations later.
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  That’s why we are building Bulverse as a company with the ability to serve different needs while maintaining specialized divisions for different industries.
                </p>
              </div>

              {/* Complementary Wings Bento Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-8">
                {/* Wing 1: Bulverse Cloud */}
                <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bulverse-blue text-white shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#04052D]">
                        Bulverse Cloud
                      </h3>
                      <div className="text-xs font-mono font-semibold text-bulverse-blue">
                        Technology & Digital Infrastructure
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Focuses on delivering cloud compute, high-performance web hosting, S3 NVMe storage, Anycast networking, and trading environments designed to power modern online businesses.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                      <span>Cloud Servers & Automated Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                      <span>NVMe Storage & Edge CDN Networking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-bulverse-blue shrink-0" />
                      <span>Website & Full-Stack Digital Development</span>
                    </li>
                  </ul>
                </div>

                {/* Wing 2: Bulverse Limited */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shrink-0">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#04052D]">
                        Bulverse Limited
                      </h3>
                      <div className="text-xs font-mono font-semibold text-emerald-700">
                        Wider Business Ecosystem
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Provides the wider physical and commercial enterprise capabilities: from construction and facility care to commercial trading, furniture, lifestyle, and workforce training.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Construction, Civil Engineering & Property Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Global Procurement & Commercial Merchandise</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Strategic Consulting, Lifestyle & Educational Academy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Core Unifying Principle */}
              <div className="pt-6 border-t border-slate-200/80 text-center max-w-3xl mx-auto">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                  OUR UNIFIED OBJECTIVE
                </div>
                <blockquote className="font-display text-base sm:text-xl font-bold text-[#04052D] leading-relaxed">
                  “From digital infrastructure to physical infrastructure, from technology to business services, our objective remains the same: <span className="text-bulverse-blue">To provide practical solutions that help people and businesses move forward.</span>”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 4: ENTERPRISE MANTRA & ACTION CTA
            ========================================================================== */}
        <section className="py-16 sm:py-24 bg-ambient-mesh-hero relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-xs font-mono font-bold text-bulverse-blue uppercase tracking-widest">
                BULVERSE
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#04052D] uppercase tracking-tight">
                Build. Connect. Scale.
              </h2>

              <p className="font-mono text-sm sm:text-base font-bold text-slate-600 uppercase tracking-wider">
                Technology. Infrastructure. Business. More.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://portal.bulverse.cloud/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/25 hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all min-h-[46px]"
                >
                  <span>Deploy Cloud Infrastructure</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/#cloud-vps"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-8 py-3.5 text-xs font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue transition-colors min-h-[46px]"
                >
                  <span>Explore Cloud Fleet</span>
                </Link>

                <a
                  href="https://portal.bulverse.cloud/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-8 py-3.5 text-xs font-bold text-slate-800 hover:border-bulverse-blue hover:text-bulverse-blue transition-colors min-h-[46px]"
                >
                  <span>Contact Corporate Team</span>
                </a>
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
        onOpenConfigurator={handleOpenConfigurator}
      />

      {/* Interactive Server Provisioning Configurator Modal */}
      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        currency={currency}
        initialCategory={activeCategory}
        initialTier={activeTier}
      />
    </div>
  );
}
