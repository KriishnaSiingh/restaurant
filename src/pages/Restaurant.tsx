import { useState } from 'react';
import { Heart, ShoppingBag, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { menuItems, MenuItem } from '@/data/menuData';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { toast } from 'sonner';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'veg', label: '🌿 Vegetarian' },
  { key: 'non-veg', label: '🥩 Non-Veg' },
  { key: 'drinks', label: '🍸 Drinks' },
  { key: 'desserts', label: '🍰 Desserts' },
] as const;

export default function Restaurant() {
  const [category, setCategory] = useState<string>('all');
  const [showReservation, setShowReservation] = useState(false);
  const [reserved, setReserved] = useState(false);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();

  const filtered = category === 'all' ? menuItems : menuItems.filter(m => m.category === category);
  const chefSpecials = menuItems.filter(m => m.isChefSpecial);

  const handleAddToCart = (item: MenuItem) => {
    addItem({ id: item.id, name: item.name, price: item.offerPrice || item.price, image: item.image });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Culinary Excellence</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">Our Menu</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Chef's Specials" subtitle="Signature Creations" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefSpecials.map((dish, i) => (
              <ScrollReveal key={dish.id} delay={i * 0.15}>
                <div className="group relative glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    <ChefHat size={12} /> Chef's Pick
                  </div>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">{dish.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{dish.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-primary font-display text-xl">${dish.price}</span>
                      <div className="flex gap-2">
                        <button onClick={() => { toggle(dish.id); toast.success(has(dish.id) ? 'Removed from wishlist' : 'Added to wishlist'); }} className={`p-2 rounded-full border transition-colors ${has(dish.id) ? 'border-primary bg-primary/20 text-primary' : 'border-border text-muted-foreground hover:text-primary hover:border-primary'}`}>
                          <Heart size={14} fill={has(dish.id) ? 'currentColor' : 'none'} />
                        </button>
                        <button onClick={() => handleAddToCart(dish)} className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          <ShoppingBag size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Full Menu" subtitle="Explore Our Offerings" />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${category === cat.key ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground hover:text-foreground'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={(i % 3) * 0.1}>
                <div className="group glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    {item.isOffer && (
                      <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs px-3 py-1 rounded-full font-bold">OFFER</div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${item.category === 'veg' ? 'bg-green-500/80 text-white' : item.category === 'non-veg' ? 'bg-red-500/80 text-white' : 'bg-primary/80 text-primary-foreground'}`}>
                        {item.category === 'veg' ? '🌿 Veg' : item.category === 'non-veg' ? '🥩 Non-Veg' : item.category === 'drinks' ? '🍸 Drink' : '🍰 Dessert'}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1 flex-1">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        {item.isOffer && item.offerPrice ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-primary font-display text-xl">${item.offerPrice}</span>
                            <span className="text-muted-foreground line-through text-sm">${item.price}</span>
                          </div>
                        ) : (
                          <span className="text-primary font-display text-xl">${item.price}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => { toggle(item.id); toast.success(has(item.id) ? 'Removed' : 'Wishlisted!'); }} className={`p-2 rounded-full border transition-colors ${has(item.id) ? 'border-primary bg-primary/20 text-primary' : 'border-border text-muted-foreground hover:text-primary'}`}>
                          <Heart size={14} fill={has(item.id) ? 'currentColor' : 'none'} />
                        </button>
                        <button onClick={() => handleAddToCart(item)} className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          <ShoppingBag size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Reserve a Table" subtitle="Dining Experience" />
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              {!showReservation ? (
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">Secure your spot for an unforgettable dining experience.</p>
                  <Button onClick={() => setShowReservation(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase">
                    Make a Reservation
                  </Button>
                </div>
              ) : reserved ? (
                <div className="text-center glass-strong rounded-2xl p-12">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="font-display text-2xl text-foreground">Table Reserved!</h3>
                  <p className="text-muted-foreground mt-2">We look forward to welcoming you.</p>
                  <Button variant="outline" className="mt-6 border-primary/30 text-primary" onClick={() => { setReserved(false); setShowReservation(false); }}>Done</Button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setReserved(true); }} className="glass-strong rounded-2xl p-8 space-y-4">
                  <input required placeholder="Full Name" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                  <input required type="email" placeholder="Email" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="date" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors" />
                    <select className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
                      <option>6:00 PM</option><option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option><option>10:00 PM</option>
                    </select>
                  </div>
                  <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
                    <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5 Guests</option><option>6+ Guests</option>
                  </select>
                  <textarea placeholder="Special requests..." className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors h-24 resize-none" />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">Confirm Reservation</Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
