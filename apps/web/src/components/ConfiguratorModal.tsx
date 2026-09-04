'use client';

import React, { useState } from 'react';
import { X, Server, Check, Shield, Cpu, HardDrive, Globe, ArrowRight } from 'lucide-react';
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
    // Direct redirect to WHMCS cart with configuration query
    const whmcsUrl = `https://portal.bulverse.com/cart.php?a=add&pid=${selectedTier.whmcsPid}&billingcycle=monthly&os=${selectedOs}&datacenter=${selectedRegion}&hostname=${encodeURIComponent(hostname)}&backups=${addonBackups ? 1 : 0}&ip=${addonDedicatedIp ? 1 : 0}`;
    window.open(whmcsUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#080E24] shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bulverse-blue/20 text-bulverse-cyan border border-bulverse-blue/40">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                Server Provisioning Configurator
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Select compute tier, operating system image, and target datacenter.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step 1: Select Tier */}
        <div className="py-5 border-b border-white/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-bulverse-cyan mb-3">
            1. Select Compute Capacity Tier
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {vpsService.tiers.map((tier) => {
              const isSelected = selectedTier.id === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'border-bulverse-cyan bg-bulverse-blue/20 ring-1 ring-bulverse-cyan shadow-md'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-1">{tier.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{tier.specs.cpu}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{tier.specs.ram}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{tier.specs.storage}</div>
                  <div className="text-sm font-bold text-bulverse-cyan font-mono mt-2">
                    {currency === 'NGN' ? `₦${tier.priceNgn.toLocaleString()}` : `$${tier.priceUsd.toFixed(2)}`} / mo
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Datacenter Region */}
        <div className="py-5 border-b border-white/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-bulverse-cyan mb-3">
            2. Datacenter Region Co-Location
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DATACENTERS.slice(0, 6).map((dc) => (
              <button
                key={dc.id}
                onClick={() => setSelectedRegion(dc.id)}
                className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all ${
                  selectedRegion === dc.id
                    ? 'border-bulverse-cyan bg-bulverse-blue/20 ring-1 ring-bulverse-cyan'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <span>{dc.flag}</span>
                    <span>{dc.city}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">{dc.region}</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">~{dc.ping}ms</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Operating System */}
        <div className="py-5 border-b border-white/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-bulverse-cyan mb-3">
            3. Operating System Distribution
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {osList.map((os) => (
              <button
                key={os.id}
                onClick={() => setSelectedOs(os.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedOs === os.id
                    ? 'border-bulverse-cyan bg-bulverse-blue/20 ring-1 ring-bulverse-cyan'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className="text-xs font-bold text-white">{os.name}</div>
                <div className="text-[11px] text-slate-400">{os.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Hostname & Add-ons */}
        <div className="py-5 border-b border-white/10 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
              Server Hostname
            </label>
            <input
              type="text"
              value={hostname}
              onChange={(e) => setHostname(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-xs font-mono text-white focus:border-bulverse-cyan focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer hover:bg-white/[0.04]">
              <input
                type="checkbox"
                checked={addonBackups}
                onChange={(e) => setAddonBackups(e.target.checked)}
                className="rounded border-white/20 bg-black text-bulverse-blue focus:ring-0"
              />
              <div className="text-xs">
                <div className="font-bold text-white">Daily Cloud Snapshots</div>
                <div className="text-slate-400 text-[11px]">
                  +{currency === 'NGN' ? `₦${backupPrice.toLocaleString()}` : `$${backupPrice.toFixed(2)}`} / mo
                </div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer hover:bg-white/[0.04]">
              <input
                type="checkbox"
                checked={addonDedicatedIp}
                onChange={(e) => setAddonDedicatedIp(e.target.checked)}
                className="rounded border-white/20 bg-black text-bulverse-blue focus:ring-0"
              />
              <div className="text-xs">
                <div className="font-bold text-white">Additional Dedicated IPv4</div>
                <div className="text-slate-400 text-[11px]">
                  +{currency === 'NGN' ? `₦${ipPrice.toLocaleString()}` : `$${ipPrice.toFixed(2)}`} / mo
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Footer & Deploy Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400 font-mono uppercase">Total Monthly Investment</div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white">
              {formattedTotal} <span className="text-xs text-slate-400 font-mono font-normal">/ month</span>
            </div>
          </div>

          <button
            onClick={handleDeploy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-bulverse-blue/30 hover:bg-bulverse-blue-hover transition-all active:scale-[0.98]"
          >
            <span>Proceed to Secure Provisioning</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
