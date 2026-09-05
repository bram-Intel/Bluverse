'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Folder, ShieldCheck } from 'lucide-react';

export const HeroBladeRack: React.FC = () => {
  const [activeLed, setActiveLed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLed((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[480px] h-[340px] xs:h-[380px] sm:h-[460px] md:h-[520px] mx-auto flex items-center justify-center select-none">
      
      {/* Soft Ambient Blue Shadow on Floor */}
      <div className="absolute bottom-4 sm:bottom-6 w-[220px] xs:w-[260px] sm:w-[360px] h-14 sm:h-20 bg-blue-600/15 blur-2xl rounded-[100%] pointer-events-none" />

      {/* Orbiting Satellite Node 1: Globe (Direct from Poster) */}
      <div className="absolute top-6 xs:top-10 sm:top-16 right-0 xs:right-1 sm:right-6 z-30 animate-float">
        <div className="flex h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-6 w-6 xs:h-7 xs:w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <Globe className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 2: Storage (Direct from Poster) */}
      <div className="absolute top-32 xs:top-40 sm:top-52 right-0 xs:right-0 sm:right-2 z-30 animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="flex h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-6 w-6 xs:h-7 xs:w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <Folder className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 3: Security (Direct from Poster) */}
      <div className="absolute bottom-12 xs:bottom-16 sm:bottom-24 right-1 xs:right-2 sm:right-8 z-30 animate-float" style={{ animationDelay: '3.6s' }}>
        <div className="flex h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-6 w-6 xs:h-7 xs:w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <ShieldCheck className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Central Assembly Recreating Poster 3D Visual */}
      <div className="relative z-20 flex flex-col items-center scale-[0.82] xs:scale-90 sm:scale-100 origin-center">
        
        {/* Top 3D Cloud */}
        <div className="relative mb-2.5 group">
          <div className="relative flex items-center justify-center w-28 h-20 sm:w-36 sm:h-24 rounded-[26px] sm:rounded-[32px] bg-gradient-to-b from-blue-700 to-bulverse-blue p-1.5 sm:p-2 shadow-xl shadow-blue-900/25">
            <div className="w-full h-full rounded-[22px] sm:rounded-[26px] bg-white flex items-center justify-center border-2 border-blue-100 shadow-inner">
              <svg width="54" height="36" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[68px] sm:h-[46px]">
                <path
                  d="M12 28C8.68629 28 6 25.3137 6 22C6 19.043 8.14112 16.5878 11.0028 16.082C11.8596 10.3607 16.7828 6 22.75 6C29.3774 6 34.75 11.3726 34.75 18C38.1963 18.0645 41 20.8856 41 24.3333C41 27.8188 38.1855 30.6406 34.7 30.6406"
                  fill="#EEF2FF"
                  stroke="#0416C0"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 3-Tier Rack-Mounted Blade Chassis */}
        <div className="w-[240px] sm:w-[280px] md:w-[320px] space-y-2.5 sm:space-y-3">
          
          {/* Blade 1 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-3 sm:p-4 shadow-xl shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 01
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[0, 1, 2, 3].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-sm shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Blade 2 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-3 sm:p-4 shadow-xl shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 02
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[2, 3, 0, 1].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-sm shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Blade 3 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-3 sm:p-4 shadow-xl shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                  <div className="w-6 sm:w-8 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 03
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3, 0].map((led) => (
                  <span
                    key={led}
                    className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-sm shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Circular Base Pedestal */}
        <div className="relative mt-3 sm:mt-4 w-[280px] sm:w-[340px] md:w-[380px] flex flex-col items-center">
          <div className="w-full h-6 sm:h-8 rounded-[100%] bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-md"></div>
          <div className="-mt-3.5 sm:-mt-4 w-[98%] h-5 sm:h-6 rounded-[100%] bg-gradient-to-b from-blue-700 to-bulverse-blue border-b-2 border-blue-900 shadow-pedestal-light"></div>
        </div>

      </div>

    </div>
  );
};
