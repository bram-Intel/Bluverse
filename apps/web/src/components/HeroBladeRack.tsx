'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Folder, ShieldCheck, Activity, Cpu, HardDrive, Wifi } from 'lucide-react';

export const HeroBladeRack: React.FC = () => {
  const [activeLed, setActiveLed] = useState(0);
  const [cpuUsage, setCpuUsage] = useState(38);
  const [networkSpeed, setNetworkSpeed] = useState('9.42 Gbps');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLed((prev) => (prev + 1) % 6);
      setCpuUsage(34 + Math.floor(Math.random() * 12));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[520px] mx-auto flex items-center justify-center select-none">
      
      {/* Radiant Background Aura */}
      <div className="absolute inset-0 bg-radial-gradient from-bulverse-blue/25 via-bulverse-cyan/10 to-transparent blur-3xl opacity-80 pointer-events-none" />

      {/* Orbiting Satellite Node 1: Globe / Network */}
      <div className="absolute top-10 right-4 sm:right-8 z-30 animate-float">
        <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#080E24]/90 p-2.5 shadow-2xl backdrop-blur-xl hover:border-bulverse-cyan/50 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-bulverse-cyan text-white shadow-md">
            <Globe className="h-5 w-5" />
          </div>
          <div className="pr-1">
            <div className="text-[11px] font-bold text-white">Global Anycast</div>
            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              99.9% Uptime
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 2: S3 Storage */}
      <div className="absolute bottom-28 left-0 sm:-left-4 z-30 animate-float" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#080E24]/90 p-2.5 shadow-2xl backdrop-blur-xl hover:border-purple-500/50 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-400 text-white shadow-md">
            <Folder className="h-5 w-5" />
          </div>
          <div className="pr-1">
            <div className="text-[11px] font-bold text-white">NVMe S3 Vault</div>
            <div className="text-[10px] text-purple-300 font-mono">11 9s Durability</div>
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 3: Hardware Security */}
      <div className="absolute bottom-16 right-2 sm:right-6 z-30 animate-float" style={{ animationDelay: '4s' }}>
        <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#080E24]/90 p-2.5 shadow-2xl backdrop-blur-xl hover:border-bulverse-blue/50 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-bulverse-blue to-cyan-500 text-white shadow-md">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="pr-1">
            <div className="text-[11px] font-bold text-white">DDoS Shield</div>
            <div className="text-[10px] text-bulverse-cyan font-mono">1.2 Tbps Filter</div>
          </div>
        </div>
      </div>

      {/* Central Assembly */}
      <div className="relative z-20 flex flex-col items-center">
        
        {/* Top Radiant Cloud Header Icon */}
        <div className="relative mb-2 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-bulverse-cyan to-bulverse-blue opacity-50 blur-xl rounded-full animate-pulse-slow"></div>
          <div className="relative flex items-center justify-center w-28 h-20 rounded-3xl bg-gradient-to-b from-[#162758] to-[#0A112C] border-2 border-bulverse-cyan/60 shadow-xl shadow-bulverse-cyan/20">
            <svg width="56" height="40" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28C8.68629 28 6 25.3137 6 22C6 19.043 8.14112 16.5878 11.0028 16.082C11.8596 10.3607 16.7828 6 22.75 6C29.3774 6 34.75 11.3726 34.75 18C38.1963 18.0645 41 20.8856 41 24.3333C41 27.8188 38.1855 30.6406 34.7 30.6406" stroke="#00D2FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 22L22 13M22 13L18 17M22 13L26 17" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* 3-Tier Rack-Mounted Blade Server Chassis */}
        <div className="w-[300px] sm:w-[340px] space-y-3.5">
          
          {/* Blade 1 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#111A3E] to-[#090F24] border border-white/20 p-4 shadow-2xl transition-transform hover:-translate-y-1 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                </div>
                <div>
                  <div className="text-[12px] font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
                    NODE-FRA-01 <span className="text-[9px] text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">PRIMARY</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">AMD EPYC 7763 • 64 Cores</div>
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-bulverse-cyan shadow-sm shadow-bulverse-cyan ring-2 ring-bulverse-cyan/50 scale-110'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Ventilation Grille */}
            <div className="mt-3 flex items-center gap-1 opacity-25">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className="h-2 flex-1 rounded-full bg-white/40" />
              ))}
            </div>
          </div>

          {/* Blade 2 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#111A3E] to-[#090F24] border border-white/20 p-4 shadow-2xl transition-transform hover:-translate-y-1 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                </div>
                <div>
                  <div className="text-[12px] font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
                    STORAGE-AMS-02 <span className="text-[9px] text-bulverse-cyan bg-blue-500/20 px-1.5 py-0.5 rounded">NVMe POOL</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">12x 7.68TB PCIe Gen4</div>
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5">
                {[4, 5, 0, 1].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-emerald-400 shadow-sm shadow-emerald-400 ring-2 ring-emerald-400/50 scale-110'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Ventilation Grille */}
            <div className="mt-3 flex items-center gap-1 opacity-25">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className="h-2 flex-1 rounded-full bg-white/40" />
              ))}
            </div>
          </div>

          {/* Blade 3 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#111A3E] to-[#090F24] border border-white/20 p-4 shadow-2xl transition-transform hover:-translate-y-1 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-bulverse-blue/80"></div>
                </div>
                <div>
                  <div className="text-[12px] font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
                    GATEWAY-LON-03 <span className="text-[9px] text-purple-400 bg-purple-500/20 px-1.5 py-0.5 rounded">BGP ROUTER</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">100GbE Dual Core Uplink</div>
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5">
                {[2, 3, 4, 5].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-bulverse-cyan shadow-sm shadow-bulverse-cyan ring-2 ring-bulverse-cyan/50 scale-110'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Ventilation Grille */}
            <div className="mt-3 flex items-center gap-1 opacity-25">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className="h-2 flex-1 rounded-full bg-white/40" />
              ))}
            </div>
          </div>
        </div>

        {/* Illuminated Circular Base Pedestal (Exactly from the poster) */}
        <div className="relative mt-5 w-[360px] sm:w-[420px] flex flex-col items-center">
          {/* Top disc plate */}
          <div className="w-full h-8 rounded-[100%] bg-gradient-to-r from-slate-200 via-white to-slate-300 border-2 border-bulverse-cyan/80 shadow-2xl shadow-bulverse-cyan/40"></div>
          {/* Disc cylinder body with glowing cyan rim */}
          <div className="-mt-4 w-[96%] h-7 rounded-[100%] bg-gradient-to-b from-blue-600 to-blue-950 border-b-2 border-bulverse-cyan ring-4 ring-bulverse-blue/40 shadow-pedestal"></div>
        </div>

      </div>

    </div>
  );
};
