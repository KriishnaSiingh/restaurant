import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import CartDrawer from './CartDrawer';
import SearchBar from './SearchBar';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/restaurant', label: 'Restaurant' },
  { path: '/hotel', label: 'Hotel' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { count } = useCart();
  const { items: wishlistItems } = useWishlist();

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
          <Link to="/" className="font-display text-2xl md:text-3xl text-gradient-gold tracking-wider">
            LOUNGE
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Search size={18} />
            </button>
            <button onClick={() => setCartOpen(true)} className="p-2 text-foreground/70 hover:text-primary transition-colors relative">
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">{count}</span>
              )}
            </button>
            <Link to="/login" className="p-2 text-foreground/70 hover:text-primary transition-colors relative">
              <Heart size={18} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">{wishlistItems.length}</span>
              )}
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-widest uppercase">
                Login
              </Button>
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden glass-strong mt-2 mx-4 rounded-lg p-6 animate-fade-up">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login">
              <Button className="w-full mt-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase">Login</Button>
            </Link>
          </div>
        )}
      </nav>

      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
