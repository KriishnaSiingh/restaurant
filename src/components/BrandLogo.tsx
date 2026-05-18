import React from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function BrandLogo({ className = "h-10" }: { className?: string }) {
  const { activeSite } = useActiveSite();

  if (activeSite === 'skygarden') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Sky Garden Logo Image */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 border border-primary/30 overflow-hidden p-1 transition-all duration-300 hover:scale-105">
          <img 
            src="/skygarden-logo.png" 
            alt="Sky Garden Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground">
            Sky <span className="text-primary">Garden</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Rooftop Cafe</span>
        </div>
      </div>
    );
  }

  // Sagar Shree Leaf Logo
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 border border-primary/30 overflow-hidden p-1 transition-all duration-300 hover:scale-105">
        <img 
          src="/sagarshree-logo.png" 
          alt="Sagar Shree Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground">
          Sagar <span className="text-primary">Shree</span>
        </span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Rooftop Restaurant</span>
      </div>
    </div>
  );
}
