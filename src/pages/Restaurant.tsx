import { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { menuItems } from '@/data/menuData';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'chaat', label: '🍿 Chaat Mahal' },
  { key: 'chinese', label: '🍜 Chinese' },
  { key: 'south-indian', label: '🥯 South Indian' },
  { key: 'north-indian', label: '🍲 North Indian' },
  { key: 'combos', label: '✨ Combos & Meals' },
  { key: 'drinks', label: '🍹 Beverages' },
  { key: 'desserts', label: '🍰 Desserts' },
] as const;

export default function Restaurant() {
  const [category, setCategory] = useState<string>('all');
  const [showReservation, setShowReservation] = useState(false);
  const [reserved, setReserved] = useState(false);

  const filtered = category === 'all' ? menuItems : menuItems.filter(m => m.category === category);
  const chefSpecials = menuItems.filter(m => m.isChefSpecial);

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
                      <span className="text-primary font-display text-xl">₹{dish.price}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu - Zomato / Swiggy Style */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Full Menu" subtitle="Explore Our Offerings" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 relative">
            {/* Left Sidebar / Sticky TopNav - Categories */}
            <div className="lg:w-64 shrink-0 lg:sticky lg:top-24 h-max z-40 bg-background/95 backdrop-blur-sm -mx-4 px-4 lg:mx-0 lg:px-0 py-2 lg:py-0 border-b lg:border-none border-border">
              <div className="flex lg:flex-col overflow-x-auto hide-scrollbar gap-2 lg:gap-1 pb-2 lg:pb-0">
                {categories.filter(c => c.key !== 'all').map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      const el = document.getElementById(`cat-${cat.key}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="whitespace-nowrap px-5 py-2.5 lg:py-4 lg:px-6 text-sm lg:text-base font-medium rounded-full lg:rounded-xl text-left transition-all bg-secondary/30 text-foreground/70 hover:bg-primary/10 hover:text-primary shrink-0"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Menu Lists */}
            <div className="flex-1 max-w-4xl pb-20">
              {categories.filter(c => c.key !== 'all').map(cat => {
                const catItems = menuItems.filter(m => m.category === cat.key);
                if (catItems.length === 0) return null;

                return (
                  <div key={cat.key} id={`cat-${cat.key}`} className="scroll-mt-32 pt-8 first:pt-0 mb-12">
                    <h2 className="font-display text-3xl text-foreground mb-6 pb-2 border-b-2 border-primary border-dashed inline-block">{cat.label.replace(/[^a-zA-Z -]/g, '')}</h2>
                    
                    <div className="flex flex-col">
                      {catItems.map((item, index) => (
                        <div key={item.id} className={`flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 py-6 ${index !== catItems.length - 1 ? 'border-b border-border/40' : ''}`}>
                          
                          {/* Item Details */}
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                              {/* Veg / Non-Veg Icon */}
                              {item.category === 'veg' && (
                                <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center p-[2px] rounded-sm shrink-0">
                                  <div className="w-full h-full bg-green-600 rounded-full"></div>
                                </div>
                              )}
                              {item.category === 'non-veg' && (
                                <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center p-[2px] rounded-sm shrink-0">
                                  <div className="w-full h-full bg-red-600 rounded-full"></div>
                                </div>
                              )}
                              {item.isOffer && (
                                <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded uppercase tracking-wider">Special Offer</span>
                              )}
                            </div>
                            
                            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">{item.name}</h3>
                            
                            <div className="flex items-center gap-3 mb-3">
                              <span className="font-semibold text-lg text-foreground">
                                ₹{item.isOffer && item.offerPrice ? item.offerPrice : item.price}
                              </span>
                              {item.isOffer && item.offerPrice && (
                                <span className="text-muted-foreground line-through text-sm">₹{item.price}</span>
                              )}
                            </div>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed sm:pr-8">
                              {item.description}
                            </p>
                          </div>

                          {/* Item Image */}
                          <div className="w-full sm:w-40 sm:h-40 shrink-0 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square group bg-secondary/50">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                              loading="lazy" 
                            />
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
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
