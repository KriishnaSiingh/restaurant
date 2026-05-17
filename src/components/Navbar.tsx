import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';
import BrandLogo from './BrandLogo';
import SiteToggleButton from './SiteToggleButton';
import NavHeader from './ui/nav-header';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/restaurant', label: 'Restaurant' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <BrandLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <NavHeader />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <SiteToggleButton />
            </div>
            <button onClick={() => setSearchOpen(true)} className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Search size={18} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden glass-strong mt-2 mx-4 rounded-lg p-6 animate-fade-up space-y-4">
            <div className="flex sm:hidden justify-between items-center pb-3 border-b border-border/40 mb-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Select Restaurant</span>
              <SiteToggleButton />
            </div>
            <div className="space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-sm tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
                >
                  {navLinks.find(l => l.path === link.path)?.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
