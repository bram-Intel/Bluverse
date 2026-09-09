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
    <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px] h-[310px] xs:h-[350px] sm:h-[390px] lg:h-[420px] xl:h-[450px] mx-auto flex items-center justify-center select-none">
      
      {/* Concentric Technical Orbital Radar Rings (Google Antigravity Style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
        <div className="w-[260px] xs:w-[300px] sm:w-[350px] lg:w-[380px] xl:w-[410px] h-[260px] xs:h-[300px] sm:h-[350px] lg:h-[380px] xl:h-[410px] rounded-full border border-dashed border-blue-400/25 animate-spin-slow" />
        <div className="absolute w-[200px] xs:w-[230px] sm:w-[270px] lg:w-[300px] xl:w-[330px] h-[200px] xs:h-[230px] sm:h-[270px] lg:h-[300px] xl:h-[330px] rounded-full border border-blue-300/30" />
        <div className="absolute w-[150px] xs:w-[170px] sm:w-[210px] h-[150px] xs:h-[170px] sm:h-[210px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-400/15 to-transparent blur-2xl animate-pulse-slow" />
      </div>

      {/* Soft Ambient Blue Shadow on Floor */}
      <div className="absolute bottom-1.5 sm:bottom-2 w-[220px] xs:w-[260px] sm:w-[310px] lg:w-[340px] h-8 sm:h-12 bg-blue-600/20 blur-xl rounded-[100%] pointer-events-none" />

      {/* Orbiting Satellite Node 1: Globe (Direct from Poster) */}
      <div className="absolute top-3 xs:top-5 sm:top-7 lg:top-8 right-0 xs:right-1 sm:right-3 z-30 animate-float">
        <div className="flex h-7 w-7 xs:h-9 xs:w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <Globe className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 2: Storage (Direct from Poster) */}
      <div className="absolute top-26 xs:top-32 sm:top-38 lg:top-42 right-0 xs:right-0 sm:right-1 z-30 animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="flex h-7 w-7 xs:h-9 xs:w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <Folder className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Orbiting Satellite Node 3: Security (Direct from Poster) */}
      <div className="absolute bottom-7 xs:bottom-9 sm:bottom-12 lg:bottom-14 right-1 xs:right-2 sm:right-4 z-30 animate-float" style={{ animationDelay: '3.6s' }}>
        <div className="flex h-7 w-7 xs:h-9 xs:w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-dashed border-blue-400 bg-white shadow-md sm:shadow-lg shadow-blue-900/10 hover:scale-110 transition-transform">
          <div className="flex h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-50 text-bulverse-blue">
            <ShieldCheck className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Central Assembly Recreating Poster 3D Visual */}
      <div className="relative z-20 flex flex-col items-center scale-[0.80] xs:scale-[0.86] sm:scale-90 lg:scale-[0.92] xl:scale-100 origin-center">
        
        {/* Top 3D Cloud */}
        <div className="relative mb-2 group">
          <div className="relative flex items-center justify-center w-24 h-16 sm:w-30 sm:h-20 rounded-[22px] sm:rounded-[28px] bg-gradient-to-b from-blue-700 to-bulverse-blue p-1.5 sm:p-2 shadow-lg shadow-blue-900/25">
            <div className="w-full h-full rounded-[18px] sm:rounded-[24px] bg-white flex items-center justify-center border-2 border-blue-100 shadow-inner">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[58px] sm:h-[40px]">
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
        <div className="w-[220px] sm:w-[260px] lg:w-[280px] xl:w-[300px] space-y-2 sm:space-y-2.5">
          
          {/* Blade 1 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-2.5 sm:p-3 shadow-lg shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="space-y-0.5">
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 01
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[0, 1, 2, 3].map((led) => (
                  <span
                    key={led}
                    className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-xs shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Blade 2 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-2.5 sm:p-3 shadow-lg shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="space-y-0.5">
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 02
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[2, 3, 0, 1].map((led) => (
                  <span
                    key={led}
                    className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-xs shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Blade 3 */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#0416C0] border-2 border-[#1E3A8A] p-2.5 sm:p-3 shadow-lg shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="space-y-0.5">
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                  <div className="w-5 sm:w-6 h-1 bg-white/40 rounded-full" />
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-mono font-bold text-white tracking-wider">
                  CHASSIS 03
                </div>
              </div>

              {/* Status LEDs */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3, 0].map((led) => (
                  <span
                    key={led}
                    className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300 ${
                      activeLed === led
                        ? 'bg-cyan-300 shadow-xs shadow-cyan-300 ring-2 ring-cyan-400 scale-110'
                        : 'bg-cyan-200/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Circular Base Pedestal */}
        <div className="relative mt-2 sm:mt-2.5 w-[250px] sm:w-[290px] lg:w-[320px] flex flex-col items-center">
          <div className="w-full h-5 sm:h-6 rounded-[100%] bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-xs"></div>
          <div className="-mt-3 sm:-mt-3.5 w-[98%] h-4 sm:h-5 rounded-[100%] bg-gradient-to-b from-blue-700 to-bulverse-blue border-b-2 border-blue-900 shadow-pedestal-light"></div>
        </div>

      </div>

    </div>
  );
};
