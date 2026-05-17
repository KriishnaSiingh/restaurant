import React from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function BrandLogo({ className = "h-10" }: { className?: string }) {
  const { activeSite } = useActiveSite();

  if (activeSite === 'skygarden') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Sky Garden Celestial Sun & Cutlery SVG Logo */}
        <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 border border-primary/20">
          <svg viewBox="0 0 100 100" className="w-8 h-8">
            {/* Sunset Sun */}
            <circle cx="50" cy="50" r="32" fill="url(#sunset-gradient)" />
            {/* Cutlery / branch silhouette */}
            <g stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" fill="none">
              {/* Fork */}
              <path d="M 40 40 L 40 60 M 36 40 L 36 48 M 44 40 L 44 48" />
              {/* Knife */}
              <path d="M 50 38 L 50 62 M 48 38 Q 53 43 50 48" fill="#ff6b35" />
              {/* Spoon */}
              <path d="M 60 40 L 60 62" />
              <ellipse cx="60" cy="44" rx="4" ry="7" fill="#ff6b35" />
            </g>
            {/* Little branch leaves */}
            <path d="M 28 32 C 32 30 38 35 38 42 C 34 44 28 38 28 32 Z" fill="#b5179e" opacity="0.8" />
            
            <defs>
              <linearGradient id="sunset-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb703" />
                <stop offset="50%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#b5179e" />
              </linearGradient>
            </defs>
          </svg>
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
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-8 h-8 filter drop-shadow-sm">
          {/* Green Banana Leaf Motif */}
          <path 
            d="M10 80 C 15 50, 45 20, 85 10 C 70 35, 45 75, 15 90 Z" 
            fill="url(#leaf-gradient)" 
          />
          {/* Leaf veins */}
          <path d="M12 82 Q 43 47 83 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M30 65 Q 45 60 52 50" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M45 50 Q 60 45 65 35" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />
          
          <defs>
            <linearGradient id="leaf-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#556b2f" />
              <stop offset="60%" stopColor="#808000" />
              <stop offset="100%" stopColor="#9acd32" />
            </linearGradient>
          </defs>
        </svg>
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
