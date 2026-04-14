import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl text-gradient-gold mb-4">LOUNGE</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An exquisite fusion of fine dining and luxury hospitality, where every moment is crafted to perfection.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[['/', 'Home'], ['/restaurant', 'Restaurant'], ['/hotel', 'Hotel'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><span className="text-foreground/80">Restaurant:</span><br />Mon–Sun: 12:00 PM – 11:00 PM</p>
              <p><span className="text-foreground/80">Bar & Lounge:</span><br />Mon–Sun: 5:00 PM – 1:00 AM</p>
              <p><span className="text-foreground/80">Hotel Front Desk:</span><br />24/7</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> 42 Mayfair Lane, London W1K 3PB</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-primary shrink-0" /> +44 20 7123 4567</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-primary shrink-0" /> hello@lounge.com</p>
            </div>
          </div>
        </div>

        <div className="line-gold mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">© 2026 Lounge. All rights reserved. Crafted with elegance.</p>
      </div>
    </footer>
  );
}
