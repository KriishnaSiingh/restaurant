import { useEffect, useState } from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const { siteData } = useActiveSite();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center" style={{ animation: 'fade-out 0.5s ease-out 1s forwards' }}>
      <div className="text-center">
        <h1 className="font-display text-4xl md:text-5xl text-gradient-gold tracking-widest animate-fade-up">
          {siteData.name.toUpperCase()}
        </h1>
        <div className="mt-6 w-32 h-[1px] mx-auto bg-gradient-gold animate-shimmer" />
      </div>
    </div>
  );
}

