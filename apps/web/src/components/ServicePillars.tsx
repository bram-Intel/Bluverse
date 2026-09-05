'use client';

import React, { useState } from 'react';
import { CATALOG_SERVICES, ServiceCategory, ServiceTier } from '../lib/catalog';
import { Server, Globe, Database, Network, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

interface ServicePillarsProps {
  currency: 'NGN' | 'USD';
  onSelectTier: (category: ServiceCategory, tier: ServiceTier) => void;
}

const getServiceIcon = (iconName: string, className = "h-5 w-5 sm:h-6 sm:w-6 text-white") => {
  switch (iconName) {
    case 'Server': return <Server className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Network': return <Network className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    default: return <Server className={className} />;
  }
};

/* Domain-Specific Watermark SVGs */
const VpsWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30 -rotate-6"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#0416C0"
    strokeWidth="1.2"
  >
    <rect x="40" y="40" width="120" height="120" rx="12" strokeDasharray="4 2" strokeOpacity="0.4" />
    <rect x="52" y="52" width="96" height="96" rx="6" strokeOpacity="0.6" />
    <rect x="58" y="58" width="40" height="40" rx="3" fill="#0416C0" fillOpacity="0.06" strokeOpacity="0.4" />
    <rect x="102" y="58" width="40" height="40" rx="3" fill="#0416C0" fillOpacity="0.06" strokeOpacity="0.4" />
    <rect x="58" y="102" width="40" height="40" rx="3" fill="#0416C0" fillOpacity="0.06" strokeOpacity="0.4" />
    <rect x="102" y="102" width="40" height="40" rx="3" fill="#0416C0" fillOpacity="0.06" strokeOpacity="0.4" />
    <path d="M60 40 V20 M80 40 V15 M100 40 V12 M120 40 V15 M140 40 V20" strokeOpacity="0.5" />
    <circle cx="60" cy="18" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="80" cy="13" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="100" cy="10" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="120" cy="13" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="140" cy="18" r="2" fill="#0416C0" fillOpacity="0.5" />
    <path d="M60 160 V180 M80 160 V185 M100 160 V188 M120 160 V185 M140 160 V180" strokeOpacity="0.5" />
    <circle cx="60" cy="182" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="80" cy="187" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="100" cy="190" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="120" cy="187" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="140" cy="182" r="2" fill="#0416C0" fillOpacity="0.5" />
    <path d="M40 60 H20 M40 80 H15 M40 100 H12 M40 120 H15 M40 140 H20" strokeOpacity="0.5" />
    <circle cx="18" cy="60" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="13" cy="80" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="10" cy="100" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="13" cy="120" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="18" cy="140" r="2" fill="#0416C0" fillOpacity="0.5" />
    <path d="M160 60 H180 M160 80 H185 M160 100 H188 M160 120 H185 M160 140 H180" strokeOpacity="0.5" />
    <circle cx="182" cy="60" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="187" cy="80" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="190" cy="100" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="187" cy="120" r="2" fill="#0416C0" fillOpacity="0.5" />
    <circle cx="182" cy="140" r="2" fill="#0416C0" fillOpacity="0.5" />
  </svg>
);

const HostingWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#00D2FF"
    strokeWidth="1.2"
  >
    <circle cx="100" cy="100" r="66" strokeOpacity="0.4" />
    <ellipse cx="100" cy="100" rx="66" ry="24" strokeOpacity="0.35" />
    <ellipse cx="100" cy="100" rx="30" ry="66" strokeOpacity="0.35" />
    <line x1="100" y1="34" x2="100" y2="166" strokeOpacity="0.3" />
    <line x1="34" y1="100" x2="166" y2="100" strokeOpacity="0.3" />
    <ellipse cx="100" cy="100" rx="82" ry="36" strokeDasharray="3 3" transform="rotate(-25 100 100)" strokeOpacity="0.5" />
    <circle cx="160" cy="68" r="3.5" fill="#00D2FF" fillOpacity="0.7" />
    <circle cx="40" cy="132" r="2.5" fill="#00D2FF" fillOpacity="0.5" />
    <path d="M160 68 L172 58 M160 68 L169 75" strokeOpacity="0.5" />
    <circle cx="100" cy="100" r="4.5" fill="#00D2FF" fillOpacity="0.2" />
  </svg>
);

const StorageWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#6366F1"
    strokeWidth="1.2"
  >
    <ellipse cx="100" cy="55" rx="65" ry="18" fill="#6366F1" fillOpacity="0.05" strokeOpacity="0.4" />
    <path d="M35 55 v22 c0 10 29 18 65 18 s65 -8 65 -18 V55" strokeOpacity="0.35" />
    <ellipse cx="100" cy="77" rx="65" ry="18" fill="#6366F1" fillOpacity="0.04" strokeOpacity="0.35" />
    <path d="M35 77 v22 c0 10 29 18 65 18 s65 -8 65 -18 V77" strokeOpacity="0.35" />
    <ellipse cx="100" cy="99" rx="65" ry="18" fill="#6366F1" fillOpacity="0.04" strokeOpacity="0.35" />
    <path d="M35 99 v22 c0 10 29 18 65 18 s65 -8 65 -18 V99" strokeOpacity="0.35" />
    <ellipse cx="100" cy="121" rx="65" ry="18" fill="#6366F1" fillOpacity="0.04" strokeOpacity="0.35" />
    <path d="M35 121 v22 c0 10 29 18 65 18 s65 -8 65 -18 V121" strokeOpacity="0.4" />
    <line x1="100" y1="42" x2="100" y2="148" strokeDasharray="3 3" strokeOpacity="0.3" />
    <circle cx="100" cy="55" r="8" fill="#6366F1" fillOpacity="0.1" strokeOpacity="0.35" />
    <rect x="92" y="146" width="16" height="14" rx="2" strokeOpacity="0.45" />
    <path d="M96 146 v-4 a4 4 0 0 1 8 0 v4" strokeOpacity="0.45" />
  </svg>
);

const NetworkingWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#0D9488"
    strokeWidth="1.2"
  >
    <line x1="45" y1="55" x2="100" y2="35" strokeDasharray="3 2" strokeOpacity="0.3" />
    <line x1="100" y1="35" x2="155" y2="60" strokeOpacity="0.35" />
    <line x1="45" y1="55" x2="70" y2="110" strokeOpacity="0.35" />
    <line x1="100" y1="35" x2="105" y2="105" strokeWidth="1.8" strokeOpacity="0.45" />
    <line x1="155" y1="60" x2="160" y2="120" strokeOpacity="0.35" />
    <line x1="70" y1="110" x2="105" y2="105" strokeOpacity="0.35" />
    <line x1="105" y1="105" x2="160" y2="120" strokeOpacity="0.35" />
    <line x1="70" y1="110" x2="50" y2="165" strokeOpacity="0.3" />
    <line x1="105" y1="105" x2="115" y2="165" strokeOpacity="0.35" />
    <line x1="160" y1="120" x2="150" y2="165" strokeOpacity="0.3" />
    <line x1="50" y1="165" x2="115" y2="165" strokeOpacity="0.35" />
    <line x1="115" y1="165" x2="150" y2="165" strokeDasharray="2 2" strokeOpacity="0.3" />
    <circle cx="45" cy="55" r="3.5" fill="#0D9488" fillOpacity="0.5" />
    <circle cx="100" cy="35" r="5" fill="#0D9488" fillOpacity="0.15" strokeOpacity="0.4" />
    <circle cx="100" cy="35" r="2.5" fill="#0D9488" fillOpacity="0.6" />
    <circle cx="155" cy="60" r="4" fill="#0D9488" fillOpacity="0.5" />
    <circle cx="70" cy="110" r="4" fill="#0D9488" fillOpacity="0.5" />
    <circle cx="105" cy="105" r="8" strokeDasharray="2 2" strokeOpacity="0.4" />
    <circle cx="105" cy="105" r="4" fill="#0D9488" fillOpacity="0.7" />
    <circle cx="160" cy="120" r="3.5" fill="#0D9488" fillOpacity="0.5" />
    <circle cx="50" cy="165" r="3.5" fill="#0D9488" fillOpacity="0.4" />
    <circle cx="115" cy="165" r="4" fill="#0D9488" fillOpacity="0.5" />
    <circle cx="150" cy="165" r="3.5" fill="#0D9488" fillOpacity="0.4" />
  </svg>
);

const TradingWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#10B981"
    strokeWidth="1.2"
  >
    <line x1="30" y1="160" x2="175" y2="160" strokeDasharray="2 2" strokeOpacity="0.25" />
    <line x1="30" y1="120" x2="175" y2="120" strokeDasharray="2 2" strokeOpacity="0.25" />
    <line x1="30" y1="80" x2="175" y2="80" strokeDasharray="2 2" strokeOpacity="0.25" />
    <line x1="30" y1="40" x2="175" y2="40" strokeDasharray="2 2" strokeOpacity="0.25" />
    <line x1="45" y1="110" x2="45" y2="150" strokeOpacity="0.35" />
    <rect x="40" y="120" width="10" height="20" fill="#10B981" fillOpacity="0.12" strokeOpacity="0.35" />
    <line x1="68" y1="100" x2="68" y2="140" strokeOpacity="0.35" />
    <rect x="63" y="105" width="10" height="25" fill="#10B981" fillOpacity="0.16" strokeOpacity="0.35" />
    <line x1="91" y1="80" x2="91" y2="125" strokeOpacity="0.35" />
    <rect x="86" y="88" width="10" height="30" fill="#10B981" fillOpacity="0.2" strokeOpacity="0.4" />
    <line x1="114" y1="58" x2="114" y2="105" strokeOpacity="0.4" />
    <rect x="109" y="66" width="10" height="28" fill="#10B981" fillOpacity="0.25" strokeOpacity="0.4" />
    <line x1="137" y1="42" x2="137" y2="88" strokeOpacity="0.4" />
    <rect x="132" y="48" width="10" height="24" fill="#10B981" fillOpacity="0.3" strokeOpacity="0.5" />
    <line x1="160" y1="30" x2="160" y2="70" strokeOpacity="0.5" />
    <rect x="155" y="34" width="10" height="20" fill="#10B981" fillOpacity="0.35" strokeOpacity="0.5" />
    <path d="M40 145 C 70 135, 90 100, 115 80 S 145 45, 170 32" stroke="#10B981" strokeWidth="1.8" strokeOpacity="0.55" />
    <circle cx="170" cy="32" r="3" fill="#10B981" fillOpacity="0.7" />
  </svg>
);

const CustomWatermark = () => (
  <svg
    className="absolute -right-8 top-24 w-48 h-48 pointer-events-none select-none transition-all duration-500 opacity-15 group-hover:opacity-30"
    viewBox="0 0 200 200"
    fill="none"
    stroke="#0416C0"
    strokeWidth="1.2"
  >
    <line x1="100" y1="20" x2="100" y2="180" strokeDasharray="4 2" strokeOpacity="0.25" />
    <line x1="20" y1="100" x2="180" y2="100" strokeDasharray="4 2" strokeOpacity="0.25" />
    <path d="M100 40 L145 65 L100 90 L55 65 Z" fill="#0416C0" fillOpacity="0.04" strokeOpacity="0.35" />
    <path d="M55 65 L55 85 L100 110 L100 90 Z" fill="#0416C0" fillOpacity="0.06" strokeOpacity="0.35" />
    <path d="M145 65 L145 85 L100 110 L100 90 Z" fill="#0416C0" fillOpacity="0.03" strokeOpacity="0.35" />
    <path d="M100 90 L145 115 L100 140 L55 115 Z" fill="#0416C0" fillOpacity="0.04" strokeOpacity="0.35" />
    <path d="M55 115 L55 135 L100 160 L100 140 Z" fill="#0416C0" fillOpacity="0.05" strokeOpacity="0.35" />
    <path d="M145 115 L145 135 L100 160 L100 140 Z" fill="#0416C0" fillOpacity="0.02" strokeOpacity="0.35" />
    <path d="M100 140 L145 165 L100 190 L55 165 Z" fill="#0416C0" fillOpacity="0.03" strokeOpacity="0.25" />
    <circle cx="100" cy="40" r="2.5" fill="#0416C0" fillOpacity="0.4" />
    <circle cx="145" cy="65" r="2.5" fill="#0416C0" fillOpacity="0.4" />
    <circle cx="55" cy="65" r="2.5" fill="#0416C0" fillOpacity="0.4" />
  </svg>
);

const serviceThemes: Record<string, {
  cardBg: string;
  radialGlow: string;
  borderHover: string;
  topShimmer: string;
  iconGradient: string;
  iconRing: string;
  telemetryTag: string;
  telemetryDot: string;
  telemetryBg: string;
  checkBg: string;
  watermark: React.ReactNode;
}> = {
  'cloud-vps': {
    cardBg: 'bg-gradient-to-br from-white via-[#FAFBFD] to-blue-50/50',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(4,22,192,0.08),transparent_65%)]',
    borderHover: 'hover:border-blue-500/50 hover:shadow-[0_16px_40px_-6px_rgba(4,22,192,0.14)]',
    topShimmer: 'group-hover:via-[#0416C0]',
    iconGradient: 'bg-gradient-to-br from-[#0416C0] to-[#0312B4]',
    iconRing: 'border-blue-300/50 shadow-blue-500/25',
    telemetryTag: 'COMPUTE // AMD EPYC™',
    telemetryDot: 'bg-blue-600 animate-pulse',
    telemetryBg: 'text-blue-700 bg-blue-50/90 border-blue-200/90',
    checkBg: 'bg-blue-50 text-bulverse-blue',
    watermark: <VpsWatermark />,
  },
  'website-hosting': {
    cardBg: 'bg-gradient-to-br from-white via-[#F6FCFD] to-cyan-50/50',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.12),transparent_65%)]',
    borderHover: 'hover:border-cyan-500/50 hover:shadow-[0_16px_40px_-6px_rgba(0,210,255,0.18)]',
    topShimmer: 'group-hover:via-[#00D2FF]',
    iconGradient: 'bg-gradient-to-br from-[#00D2FF] to-[#0416C0]',
    iconRing: 'border-cyan-300/60 shadow-cyan-500/25',
    telemetryTag: 'EDGE // HTTP/3 BROTLI',
    telemetryDot: 'bg-cyan-500 animate-pulse',
    telemetryBg: 'text-cyan-800 bg-cyan-50/90 border-cyan-200/90',
    checkBg: 'bg-cyan-50 text-cyan-700',
    watermark: <HostingWatermark />,
  },
  'cloud-storage': {
    cardBg: 'bg-gradient-to-br from-white via-[#FAF9FE] to-indigo-50/45',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.09),transparent_65%)]',
    borderHover: 'hover:border-indigo-500/50 hover:shadow-[0_16px_40px_-6px_rgba(99,102,241,0.14)]',
    topShimmer: 'group-hover:via-[#6366F1]',
    iconGradient: 'bg-gradient-to-br from-[#6366F1] to-[#4338CA]',
    iconRing: 'border-indigo-300/50 shadow-indigo-500/25',
    telemetryTag: 'VAULT // AES-256 S3',
    telemetryDot: 'bg-indigo-600 animate-pulse',
    telemetryBg: 'text-indigo-800 bg-indigo-50/90 border-indigo-200/90',
    checkBg: 'bg-indigo-50 text-indigo-700',
    watermark: <StorageWatermark />,
  },
  'cloud-networking': {
    cardBg: 'bg-gradient-to-br from-white via-[#F7FCFB] to-teal-50/45',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.09),transparent_65%)]',
    borderHover: 'hover:border-teal-500/50 hover:shadow-[0_16px_40px_-6px_rgba(20,184,166,0.14)]',
    topShimmer: 'group-hover:via-[#0D9488]',
    iconGradient: 'bg-gradient-to-br from-[#0D9488] to-[#0416C0]',
    iconRing: 'border-teal-300/50 shadow-teal-500/25',
    telemetryTag: 'MESH // ANYCAST 400G',
    telemetryDot: 'bg-teal-600 animate-pulse',
    telemetryBg: 'text-teal-800 bg-teal-50/90 border-teal-200/90',
    checkBg: 'bg-teal-50 text-teal-700',
    watermark: <NetworkingWatermark />,
  },
  'trading-infrastructure': {
    cardBg: 'bg-gradient-to-br from-white via-[#F6FDF9] to-emerald-50/45',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_65%)]',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-[0_16px_40px_-6px_rgba(16,185,129,0.15)]',
    topShimmer: 'group-hover:via-[#10B981]',
    iconGradient: 'bg-gradient-to-br from-[#10B981] to-[#047857]',
    iconRing: 'border-emerald-300/50 shadow-emerald-500/25',
    telemetryTag: '<0.8ms // EQUINIX LD4',
    telemetryDot: 'bg-emerald-500 animate-pulse',
    telemetryBg: 'text-emerald-800 bg-emerald-50/90 border-emerald-200/90',
    checkBg: 'bg-emerald-50 text-emerald-700',
    watermark: <TradingWatermark />,
  },
  'custom-infrastructure': {
    cardBg: 'bg-gradient-to-br from-white via-[#F8F9FD] to-slate-100/55',
    radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(4,5,45,0.07),transparent_65%)]',
    borderHover: 'hover:border-slate-700/40 hover:shadow-[0_16px_40px_-6px_rgba(4,5,45,0.15)]',
    topShimmer: 'group-hover:via-[#04052D]',
    iconGradient: 'bg-gradient-to-br from-[#04052D] to-[#0416C0]',
    iconRing: 'border-slate-400/50 shadow-slate-900/25',
    telemetryTag: 'ARCH // BARE-METAL',
    telemetryDot: 'bg-slate-700 animate-pulse',
    telemetryBg: 'text-slate-800 bg-slate-100/90 border-slate-300/90',
    checkBg: 'bg-slate-100 text-slate-800',
    watermark: <CustomWatermark />,
  },
};

const defaultTheme = {
  cardBg: 'bg-gradient-to-br from-white via-[#FAFBFD] to-blue-50/50',
  radialGlow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(4,22,192,0.08),transparent_65%)]',
  borderHover: 'hover:border-blue-500/50 hover:shadow-[0_16px_40px_-6px_rgba(4,22,192,0.14)]',
  topShimmer: 'group-hover:via-[#0416C0]',
  iconGradient: 'bg-gradient-to-br from-[#0416C0] to-[#0312B4]',
  iconRing: 'border-blue-300/50 shadow-blue-500/25',
  telemetryTag: 'CLOUD // INFRA',
  telemetryDot: 'bg-blue-600 animate-pulse',
  telemetryBg: 'text-blue-700 bg-blue-50/90 border-blue-200/90',
  checkBg: 'bg-blue-50 text-bulverse-blue',
  watermark: <VpsWatermark />,
};

export const ServicePillars: React.FC<ServicePillarsProps> = ({ currency, onSelectTier }) => {
  const [activeTierMap, setActiveTierMap] = useState<Record<string, number>>({
    'cloud-vps': 1,
    'website-hosting': 1,
    'cloud-storage': 1,
    'cloud-networking': 0,
    'trading-infrastructure': 0,
    'custom-infrastructure': 0,
  });

  const formatPrice = (ngn: number, usd: number) => {
    if (currency === 'NGN') {
      return `₦${ngn.toLocaleString()}`;
    }
    return `$${usd.toFixed(2)}`;
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-ambient-mesh-section border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Antigravity Dotted Grid & Ambient Bloom */}
      <div className="absolute inset-0 bg-antigravity-dots mask-radial-faded pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[300px] bg-gradient-to-b from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl pointer-events-none" />

      {/* Precision Engineering Crosshairs */}
      <span className="tech-crosshair top-3 left-4 hidden sm:block">+</span>
      <span className="tech-crosshair top-3 right-4 hidden sm:block">+</span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200/90 bg-white/90 backdrop-blur-md text-[11px] sm:text-xs font-mono font-bold text-bulverse-blue uppercase tracking-wider shadow-xs">
            <span>OFFICIAL PRODUCT CATALOGUE</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#04052D] tracking-tight uppercase">
            Everything You Need to Build, Run & Grow
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Direct provisioning across 6 specialized cloud infrastructure disciplines. Enterprise NVMe performance backed by transparent billing.
          </p>
        </div>

        {/* 6-Card Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {CATALOG_SERVICES.map((service, sIdx) => {
            const currentTierIndex = activeTierMap[service.id] ?? 0;
            const currentTier = service.tiers[Math.min(currentTierIndex, service.tiers.length - 1)];
            const theme = serviceThemes[service.id] || defaultTheme;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 ${theme.cardBg} backdrop-blur-xl p-4 sm:p-7 shadow-poster-card ${theme.borderHover} transition-all duration-300 min-w-0 max-w-full overflow-hidden hover:-translate-y-1`}
              >
                {/* Atmospheric Radial Light Mesh Per Card */}
                <div className={`absolute inset-0 ${theme.radialGlow} pointer-events-none transition-opacity duration-300`} />

                {/* Micro-dot matrix texture layer */}
                <div className="absolute inset-0 bg-antigravity-dots pointer-events-none opacity-20" />

                {/* Top Subtle Shimmer Border on Hover */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-transparent ${theme.topShimmer} to-transparent transition-all duration-300`} />

                {/* Domain-Specific Engineering Watermark in Background */}
                {theme.watermark}

                {/* Content Section (Keeps 100% of the Original Texts & Features) */}
                <div className="relative z-10">
                  {/* Card Icon & Header with Engineering Index & Telemetry */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl ${theme.iconGradient} border ${theme.iconRing} shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                      {getServiceIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9.5px] font-mono font-bold uppercase tracking-wider ${theme.telemetryBg}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${theme.telemetryDot}`} />
                        <span>{theme.telemetryTag}</span>
                      </div>
                      <div className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-slate-500 transition-colors">
                        0{sIdx + 1} //
                      </div>
                    </div>
                  </div>

                  {currentTier?.badge && (
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50/90 text-bulverse-blue border border-blue-200/80 font-mono inline-block">
                        ★ {currentTier.badge}
                      </span>
                    </div>
                  )}

                  {/* Title & Tagline from Poster */}
                  <h3 className="font-display text-xl sm:text-2xl font-black text-bulverse-blue uppercase tracking-tight mb-1.5 break-words">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 font-medium">
                    {service.tagline}
                  </p>

                  {/* Features Bullet List (Exact from Poster) */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <div className={`flex h-4 w-4 items-center justify-center rounded-full ${theme.checkBg} shrink-0 font-bold text-xs`}>
                          ✓
                        </div>
                        <span className="break-words">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Action Section */}
                <div className="relative z-20 mt-2">
                  {/* Poster Solid Deep Blue Bottom Pill Bar */}
                  <div className="mb-4 sm:mb-5">
                    <div className="rounded-xl bg-[#0312B4] px-2 sm:px-3.5 py-2 sm:py-2.5 shadow-sm text-center min-w-0 max-w-full">
                      <div className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-white uppercase flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
                        {service.pills.map((pill, idx) => (
                          <React.Fragment key={idx}>
                            <span className="whitespace-nowrap">{pill}</span>
                            {idx < service.pills.length - 1 && (
                              <span className="text-white/40">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between mb-4 pt-2 pb-1 border-t border-slate-100/90 bg-white/80 backdrop-blur-[2px] rounded-xl px-2.5 -mx-2.5">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black font-display text-[#04052D]">
                        {currentTier ? formatPrice(currentTier.priceNgn, currentTier.priceUsd) : 'Custom'}
                      </span>
                      <span className="text-xs text-slate-500 font-mono"> / {currentTier?.billingPeriod || 'mo'}</span>
                    </div>
                    <div className="text-[11px] font-mono font-bold text-emerald-600 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50/90 border border-emerald-200/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Instant Setup
                    </div>
                  </div>

                  {/* Action Button - Touch Optimized (min 48px height) */}
                  <button
                    onClick={() => onSelectTier(service, currentTier)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-bulverse-blue px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-white border border-slate-200 hover:border-bulverse-blue shadow-xs active:scale-[0.98] transition-all duration-150 min-h-[48px]"
                  >
                    <span>Configure {service.title.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
