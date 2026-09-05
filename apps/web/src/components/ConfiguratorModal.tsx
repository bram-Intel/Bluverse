'use client';

import React, { useState, useEffect } from 'react';
import { X, Server, ArrowRight, Check } from 'lucide-react';
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
  initialTier,
}) => {
  const vpsService = CATALOG_SERVICES.find((s) => s.id === 'cloud-vps')!;
  const [selectedTier, setSelectedTier] = useState<ServiceTier>(initialTier || vpsService.tiers[1]);
  const [selectedOs, setSelectedOs] = useState('ubuntu-24-04');
  const [selectedRegion, setSelectedRegion] = useState('fra');
  const [addonBackups, setAddonBackups] = useState(true);
  const [addonDedicatedIp, setAddonDedicatedIp] = useState(false);
  const [hostname, setHostname] = useState('vps-node-01.bulverse.cloud');

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

  const basePrice = currency === 'NGN' ? selectedTier.priceNgn : selectedTier.priceUsd;
  const backupPrice = currency === 'NGN' ? 3000 : 2.0;
  const ipPrice = currency === 'NGN' ? 4500 : 3.0;

  const totalPrice =
    basePrice +
    (addonBackups ? backupPrice : 0) +
    (addonDedicatedIp ? ipPrice : 0);

  const formattedTotal =
    currency === 'NGN'
      ? `₦${totalPrice.toLocaleString()}`
      : `$${totalPrice.toFixed(2)}`;

  const osList = [
    { id: 'ubuntu-24-04', name: 'Ubuntu 24.04 LTS', desc: 'Default recommended for Docker & Node' },
    { id: 'debian-12', name: 'Debian 12 Bookworm', desc: 'Ultra-stable minimal Linux kernel' },
    { id: 'almalinux-9', name: 'AlmaLinux 9.4', desc: 'Enterprise RHEL binary compatible' },
    { id: 'windows-2022', name: 'Windows Server 2022', desc: 'Standard GUI (+ license fee applies)' },
  ];

  const handleDeploy = () => {
    const whmcsUrl = `https://portal.bulverse.com/cart.php?a=add&pid=${selectedTier.whmcsPid}&billingcycle=monthly&os=${selectedOs}&datacenter=${selectedRegion}&hostname=${encodeURIComponent(hostname)}&backups=${addonBackups ? 1 : 0}&ip=${addonDedicatedIp ? 1 : 0}`;
    window.open(whmcsUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container: Full-height bottom sheet on mobile, rounded card on desktop */}
      <div className="relative w-full max-w-3xl h-[92vh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-2xl border-t sm:border border-slate-200 bg-white shadow-2xl text-[#04052D] overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-50 text-bulverse-blue border border-blue-200 shrink-0">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#04052D]">
                Provisioning Configurator
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono hidden sm:block">
                Select compute tier, operating system image, and target datacenter.
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
              1. Compute Capacity Tier
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {vpsService.tiers.map((tier) => {
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
                    <div className="text-[11px] text-slate-500 font-mono">{tier.specs.cpu} • {tier.specs.ram}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{tier.specs.storage}</div>
                    <div className="text-xs sm:text-sm font-bold text-bulverse-blue font-mono mt-1.5">
                      {currency === 'NGN' ? `₦${tier.priceNgn.toLocaleString()}` : `$${tier.priceUsd.toFixed(2)}`} / mo
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

          {/* Step 3: Operating System */}
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

          {/* Step 4: Hostname & Add-ons */}
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
