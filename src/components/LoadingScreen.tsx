import { useEffect, useState } from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const { activeSite, siteData } = useActiveSite();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // slightly increased to let the premium animation shine
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const logoUrl = activeSite === 'skygarden' ? '/skygarden-logo.png' : '/sagarshree-logo.png';

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500" style={{ animation: 'fade-out 0.5s ease-out 1.6s forwards' }}>
      <div className="text-center flex flex-col items-center px-4">
        {/* Premium Launching Brand Logo */}
        <div className="relative mb-8 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-gold border-2 border-primary/30 overflow-hidden p-2 animate-pulse shadow-2xl">
          <img 
            src={logoUrl} 
            alt={`${siteData.name} Logo`} 
            className="w-full h-full object-contain animate-fade-in" 
          />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl text-gradient-gold tracking-widest animate-fade-up">
          {siteData.name.toUpperCase()}
        </h1>
        
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground font-bold uppercase mt-2 animate-fade-up opacity-80">
          {activeSite === 'skygarden' ? 'Rooftop Cafe & Lounge' : 'Rooftop Family Restaurant'}
        </p>

        <div className="mt-8 w-40 h-[1.5px] mx-auto bg-gradient-gold animate-shimmer" />
      </div>
    </div>
  );
}

