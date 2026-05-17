import React from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function SiteToggleButton() {
  const { activeSite, toggleSite } = useActiveSite();

  return (
    <button
      onClick={toggleSite}
      className={`relative inline-flex items-center gap-1.5 p-1 rounded-full border transition-all duration-500 shadow-md ${
        activeSite === 'skygarden'
          ? 'bg-slate-950/80 border-primary/40 shadow-primary/10'
          : 'bg-stone-100/80 border-primary/20 shadow-primary/5'
      }`}
      style={{ minWidth: '160px', height: '36px' }}
      title={activeSite === 'sagarshree' ? 'Switch to Sky Garden Rooftop Cafe' : 'Switch to Sagar Shree Restaurant'}
    >
      {/* Sliding Background handle */}
      <span
        className={`absolute top-[3px] bottom-[3px] rounded-full transition-all duration-500 ease-out ${
          activeSite === 'skygarden'
            ? 'left-[calc(50%+1px)] right-[3px] bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25'
            : 'left-[3px] right-[calc(50%+1px)] bg-primary shadow-md shadow-primary/15'
        }`}
      />

      {/* Left Option (Sagar Shree) */}
      <span
        className={`flex-1 flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider z-10 transition-colors duration-500 select-none ${
          activeSite === 'sagarshree'
            ? 'text-white'
            : 'text-foreground/50 hover:text-foreground/80'
        }`}
      >
        <span className="text-[10px]">🍃</span> Sagar
      </span>

      {/* Right Option (Sky Garden) */}
      <span
        className={`flex-1 flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider z-10 transition-colors duration-500 select-none ${
          activeSite === 'skygarden'
            ? 'text-white'
            : 'text-foreground/50 hover:text-foreground/80'
        }`}
      >
        Sky <span className="text-[10px]">✨</span>
      </span>
    </button>
  );
}
