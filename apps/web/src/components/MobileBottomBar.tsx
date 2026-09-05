'use client';

import React from 'react';
import { ArrowRight, Server, MessageSquare, DollarSign } from 'lucide-react';

interface MobileBottomBarProps {
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
  onOpenConfigurator: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currency,
  onToggleCurrency,
  onOpenConfigurator,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3.5 py-2.5 shadow-[0_-4px_25px_rgba(4,22,192,0.08)]">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        
        {/* Currency Switcher Pill for Mobile */}
        <button
          onClick={onToggleCurrency}
          className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 active:bg-slate-100 shrink-0 min-w-[56px] min-h-[44px] transition-colors touch-manipulation"
          aria-label="Toggle currency"
        >
          <span className="text-[10px] font-mono text-slate-400 leading-none">CURRENCY</span>
          <span className="text-xs font-mono font-bold text-bulverse-blue leading-tight mt-0.5">
            {currency === 'NGN' ? '₦ NGN' : '$ USD'}
          </span>
        </button>

        {/* Client Portal Quick Link */}
        <a
          href="https://portal.bulverse.com/clientarea.php"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 active:bg-slate-100 shrink-0 min-w-[56px] min-h-[44px] transition-colors touch-manipulation"
        >
          <Server className="h-4 w-4 text-bulverse-blue mb-0.5" />
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">Console</span>
        </a>

        {/* Primary Deploy Server Button */}
        <button
          onClick={onOpenConfigurator}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-bulverse-blue px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-bulverse-blue/30 active:scale-[0.98] transition-transform min-h-[44px] touch-manipulation"
        >
          <span>Deploy VPS</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>
    </div>
  );
};
