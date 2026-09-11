'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Server,
  Globe,
  Database,
  Network,
  Terminal,
  Shield,
  ArrowRight,
  Check,
  HardDrive,
  Cpu,
} from 'lucide-react';
import { CATALOG_SERVICES, DATACENTERS, ServiceCategory, ServiceTier } from '../lib/catalog';

interface ConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'NGN' | 'USD';
  initialCategory?: ServiceCategory;
  initialTier?: ServiceTier;
}

export const ConfiguratorModal: React.FC<ConfiguratorModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialCategory,
  initialTier,
}) => {
  const currentCategory = initialCategory || CATALOG_SERVICES[0];
  const [selectedTier, setSelectedTier] = useState<ServiceTier>(
    initialTier || currentCategory.tiers[0]
  );
  const [selectedOs, setSelectedOs] = useState('ubuntu-24-04');
  const [selectedRegion, setSelectedRegion] = useState('fra');
  const [addonBackups, setAddonBackups] = useState(true);
  const [addonDedicatedIp, setAddonDedicatedIp] = useState(false);
  const [hostname, setHostname] = useState('vps-node-01.bulverse.cloud');
  const [domainName, setDomainName] = useState('mybusiness.com');

  // Synchronize category or tier when opened
  useEffect(() => {
    if (initialTier) {
      setSelectedTier(initialTier);
    } else if (initialCategory && initialCategory.tiers.length > 0) {
      setSelectedTier(initialCategory.tiers[0]);
    }
  }, [initialCategory, initialTier]);

  // Prevent background scrolling on mobile when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isComputeOrTrading =
    currentCategory.id === 'cloud-vps' || currentCategory.id === 'trading-infrastructure';
  const isHosting = currentCategory.id === 'website-hosting';
  const isStorage = currentCategory.id === 'cloud-storage';
  const isNetworking = currentCategory.id === 'cloud-networking';
  const isCustom = currentCategory.id === 'custom-infrastructure';

  // Pricing calculations
  const basePrice = currency === 'NGN' ? selectedTier.priceNgn : selectedTier.priceUsd;
  const backupPrice = currency === 'NGN' ? 3000 : 2.0;
  const ipPrice = currency === 'NGN' ? 3750 : 2.5;
  const windowsPrice = currency === 'NGN' ? 15000 : 10.0;
  const osPrice = isComputeOrTrading && selectedOs === 'windows-2022' ? windowsPrice : 0;

  const totalPrice =
    basePrice +
    osPrice +
    (isComputeOrTrading && addonBackups ? backupPrice : 0) +
    (isComputeOrTrading && addonDedicatedIp ? ipPrice : 0);

  const formattedTotal =
    currency === 'NGN'
      ? `₦${totalPrice.toLocaleString()}`
      : `$${totalPrice.toFixed(2)}`;

  const osList = [
    { id: 'ubuntu-24-04', name: 'Ubuntu 24.04 LTS', desc: 'Recommended for Docker, Node, Python & Web apps' },
    { id: 'debian-12', name: 'Debian 12 Bookworm', desc: 'Ultra-stable minimal Linux kernel' },
    { id: 'almalinux-9', name: 'AlmaLinux 9.4', desc: 'Enterprise RHEL binary compatible' },
    { id: 'windows-2022', name: 'Windows Server 2022', desc: 'Standard GUI with RDP (+ license fee applies)' },
  ];

  const handleDeploy = () => {
    const pid = selectedTier.whmcsPid;

    if (isComputeOrTrading) {
      const osMap: Record<string, number> = {
        'ubuntu-24-04': 1,
        'debian-12': 3,
        'almalinux-9': 4,
        'windows-2022': 5,
      };
      const osSubId = osMap[selectedOs] || 1;
      const regionSubId = selectedRegion === 'lon' ? 7 : 6;
      const backupSubId = addonBackups ? 9 : 8;
      const ipSubId = addonDedicatedIp ? 11 : 10;

      const whmcsUrl = `https://portal.bulverse.cloud/cart.php?a=add&pid=${pid}&billingcycle=monthly&configoption[1]=${osSubId}&configoption[2]=${regionSubId}&configoption[3]=${backupSubId}&configoption[4]=${ipSubId}&hostname=${encodeURIComponent(
        hostname
      )}`;
      window.open(whmcsUrl, '_blank');
    } else {
      // Direct category/product checkout
      const whmcsUrl = `https://portal.bulverse.cloud/cart.php?a=add&pid=${pid}&billingcycle=monthly`;
      window.open(whmcsUrl, '_blank');
    }
  };

  const getCategoryIcon = () => {
    switch (currentCategory.id) {
      case 'cloud-vps':
        return <Server className="h-5 w-5" />;
      case 'website-hosting':
        return <Globe className="h-5 w-5" />;
      case 'cloud-storage':
        return <Database className="h-5 w-5" />;
      case 'cloud-networking':
        return <Network className="h-5 w-5" />;
      case 'trading-infrastructure':
        return <Terminal className="h-5 w-5" />;
      case 'custom-infrastructure':
        return <Shield className="h-5 w-5" />;
      default:
        return <Server className="h-5 w-5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal Container: Full-height bottom sheet on mobile, rounded card on desktop */}
      <div className="relative w-full max-w-3xl h-[92vh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-2xl border-t sm:border border-slate-200 bg-white shadow-2xl text-[#04052D] overflow-hidden">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-50 text-bulverse-blue border border-blue-200 shrink-0">
              {getCategoryIcon()}
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#04052D]">
                {currentCategory.title} Provisioning
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono hidden sm:block">
                {currentCategory.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-4 sm:py-6 space-y-5">
          {/* Step 1: Select Tier */}
          <div>
            <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue mb-2.5">
              1. Select Service Plan Tier
            </div>
            <div
              className={`grid gap-2.5 sm:gap-3 ${
                currentCategory.tiers.length === 1
                  ? 'grid-cols-1'
                  : currentCategory.tiers.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-3'
              }`}
            >
              {currentCategory.tiers.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all active:scale-[0.99] min-h-[48px] ${
                      isSelected
                        ? 'border-bulverse-blue bg-blue-50/90 ring-2 ring-bulverse-blue shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">{tier.name}</span>
                      {isSelected && <Check className="h-4 w-4 text-bulverse-blue" />}
                    </div>
                    {tier.specs.cpu && (
                      <div className="text-[11px] text-slate-500 font-mono">
                        {tier.specs.cpu} • {tier.specs.ram}
                      </div>
                    )}
                    {tier.specs.storage && (
                      <div className="text-[11px] text-slate-500 font-mono">{tier.specs.storage}</div>
                    )}
                    {tier.specs.features && !tier.specs.cpu && (
                      <div className="text-[11px] text-slate-500 font-mono">
                        {tier.specs.features[0]}
                      </div>
                    )}
                    <div className="text-xs sm:text-sm font-bold text-bulverse-blue font-mono mt-1.5">
                      {currency === 'NGN'
                        ? `₦${tier.priceNgn.toLocaleString()}`
                        : `$${tier.priceUsd.toFixed(2)}`}{' '}
                      / {tier.billingPeriod || 'mo'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Datacenter Region */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue mb-2.5">
              2. Datacenter Region Co-Location
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {DATACENTERS.slice(0, 6).map((dc) => (
                <button
                  key={dc.id}
                  onClick={() => setSelectedRegion(dc.id)}
                  className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between text-left transition-all active:scale-[0.99] min-h-[44px] ${
                    selectedRegion === dc.id
                      ? 'border-bulverse-blue bg-blue-50/90 ring-2 ring-bulverse-blue'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{dc.flag}</span>
                      <span>{dc.city}</span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono">{dc.region}</div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600">~{dc.ping}ms</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 & 4: Category Specific Options */}
          {isComputeOrTrading && (
            <>
              {/* Operating System */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue mb-2.5">
                  3. Operating System Distribution
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {osList.map((os) => (
                    <button
                      key={os.id}
                      onClick={() => setSelectedOs(os.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all active:scale-[0.99] min-h-[44px] ${
                        selectedOs === os.id
                          ? 'border-bulverse-blue bg-blue-50/90 ring-2 ring-bulverse-blue'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{os.name}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500">{os.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hostname & Add-ons */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                    Server Hostname
                  </label>
                  <input
                    type="text"
                    value={hostname}
                    onChange={(e) => setHostname(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-base sm:text-xs font-mono text-slate-900 focus:border-bulverse-blue focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer active:bg-slate-100 min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={addonBackups}
                      onChange={(e) => setAddonBackups(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-bulverse-blue focus:ring-bulverse-blue"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Daily Cloud Snapshots</div>
                      <div className="text-slate-500 text-[10px] sm:text-[11px]">
                        +{currency === 'NGN' ? `₦${backupPrice.toLocaleString()}` : `$${backupPrice.toFixed(2)}`} / mo
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer active:bg-slate-100 min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={addonDedicatedIp}
                      onChange={(e) => setAddonDedicatedIp(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-bulverse-blue focus:ring-bulverse-blue"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Additional Dedicated IPv4</div>
                      <div className="text-slate-500 text-[10px] sm:text-[11px]">
                        +{currency === 'NGN' ? `₦${ipPrice.toLocaleString()}` : `$${ipPrice.toFixed(2)}`} / mo
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </>
          )}

          {isHosting && (
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue">
                3. Primary Website Domain Setup
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                  Domain Name (or subdomain)
                </label>
                <input
                  type="text"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                  placeholder="e.g. mycompany.com"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-base sm:text-xs font-mono text-slate-900 focus:border-bulverse-blue focus:bg-white focus:outline-none min-h-[44px]"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  You can register a new domain, transfer your existing domain, or use your own DNS.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/50 flex items-start gap-3">
                <Check className="h-4 w-4 text-bulverse-blue shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <span className="font-bold">Included Free:</span> Free Wildcard SSL, cPanel Control Panel, Unlimited Email Accounts & DDoS Shield.
                </div>
              </div>
            </div>
          )}

          {isStorage && (
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue">
                3. Storage Cluster Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl border border-bulverse-blue bg-blue-50/80 ring-1 ring-bulverse-blue">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                    <Database className="h-4 w-4 text-bulverse-blue" />
                    <span>S3 Compatible API</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Standard AWS S3 API endpoints for backups, apps & assets.</p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1">
                    <HardDrive className="h-4 w-4 text-slate-600" />
                    <span>Nextcloud WebDAV</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Cross-platform desktop & mobile file synchronization.</p>
                </div>
              </div>
            </div>
          )}

          {isNetworking && (
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue">
                3. Gateway Protocol & Scrubbing
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  <span>Enterprise Clean-Route Pipeline</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Hardware-accelerated traffic scrubbing with sub-millisecond route optimization and zero packet inspection logs.
                </p>
              </div>
            </div>
          )}

          {isCustom && (
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-bulverse-blue">
                3. Dedicated Private Hypervisor
              </div>
              <div className="p-3.5 rounded-xl border border-bulverse-blue/40 bg-blue-50/50 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-bulverse-blue" />
                  <span>Proxmox Virtual Environment (VE) 8.x Ready</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Complete bare-metal hypervisor access. Deploy unlimited KVM virtual machines, LXC containers, and custom software stacks with dedicated hardware cores.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer: Total & Deploy Button always visible on mobile */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex sm:flex-col items-baseline sm:items-start justify-between">
            <div className="text-[10px] sm:text-xs text-slate-500 font-mono uppercase">Total Monthly:</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-bulverse-blue">
              {formattedTotal} <span className="text-[10px] sm:text-xs text-slate-500 font-mono font-normal">/ mo</span>
            </div>
          </div>

          <button
            onClick={handleDeploy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/25 hover:bg-bulverse-blue-hover active:scale-[0.98] transition-all min-h-[48px]"
          >
            <span>Proceed to Secure Checkout</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
