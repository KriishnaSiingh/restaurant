import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useActiveSite } from '@/context/ActiveSiteContext';
import SiteToggleButton from './SiteToggleButton';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { siteData, activeSite } = useActiveSite();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <BrandLogo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {activeSite === 'sagarshree' 
                ? 'An exquisite fusion of pure traditional dining and luxury hospitality, where every meal is a sensory celebration.'
                : 'Gorakhpur\'s finest open-sky culinary oasis under the stars. Perfect mocktails, delicious fusion snacks, and ambient vibes.'
              }
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a 
                href={siteData.instagramLink} 
                target="_blank" 
                rel="noreferrer" 
                title="Follow us on Instagram" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={siteData.facebookLink} 
                target="_blank" 
                rel="noreferrer" 
                title="Follow us on Facebook" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={siteData.zomatoLink} 
                target="_blank" 
                rel="noreferrer" 
                title="Order on Zomato" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-white hover:scale-110 transition-all duration-300 p-2 overflow-hidden shadow-sm"
              >
                <img src="/zomato-logo.png" alt="Zomato" className="w-full h-full object-contain" />
              </a>
              <a 
                href={siteData.swiggyLink} 
                target="_blank" 
                rel="noreferrer" 
                title="Order on Swiggy" 
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-white hover:scale-110 transition-all duration-300 p-2 overflow-hidden shadow-sm"
              >
                <img src="/swiggy-logo.png" alt="Swiggy" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[['/', 'Home'], ['/restaurant', 'Restaurant'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><span className="text-foreground/80">Dining Hall:</span><br />{siteData.hours.restaurant}</p>
              <p><span className="text-foreground/80">Lounge & Mocktails:</span><br />{siteData.hours.bar}</p>

            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-display text-lg text-foreground mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> {siteData.address}</p>
                <p className="flex items-center gap-2"><Phone size={16} className="text-primary shrink-0" /> {siteData.phone}</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-primary shrink-0" /> {siteData.email}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-bold">Switch Establishment</p>
              <SiteToggleButton />
            </div>
          </div>
        </div>

        <div className="line-gold mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">© 2026 {siteData.name}. All rights reserved. Crafted with elegance.</p>
      </div>
    </footer>
  );
}
