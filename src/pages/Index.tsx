import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, BedDouble, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { menuItems } from '@/data/menuData';
import { rooms } from '@/data/roomData';
import { useState } from 'react';

const testimonials = [
  { name: 'Sophia Laurent', role: 'Food Critic', text: 'An unforgettable culinary journey. The truffle risotto alone is worth the visit. The ambience transports you to another world.', rating: 5 },
  { name: 'James Worthington', role: 'Travel Blogger', text: 'The Royal Suite exceeded every expectation. Impeccable service, breathtaking views, and the spa is world-class.', rating: 5 },
  { name: 'Elena Vasquez', role: 'Michelin Guide', text: 'Lounge redefines luxury dining. Every dish tells a story, every bite is a masterpiece. A must-visit destination.', rating: 5 },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredDishes = menuItems.filter(m => m.isChefSpecial).slice(0, 3);
  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="intro" className="relative z-10 w-full overflow-hidden bg-background pb-10" style={{ height: 'max(800px, 100vh)' }}>
        <div className="container mx-auto px-4 lg:px-8 h-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-auto items-center h-full relative" style={{ paddingTop: 'max(13.6rem, 24vh)' }}>
            
            {/* Header */}
            <div className="lg:col-start-2 lg:col-span-6 row-start-1 z-[2] relative">
              <div className="font-headings italic text-lg md:text-xl text-foreground mt-1 mb-[-0.375rem] relative flex items-center tracking-[-0.02em] font-medium">
                <div className="hidden lg:block absolute left-[-20%] top-1/2 w-[15%] h-[1px] bg-foreground/50"></div>
                <span className="pl-1">Welcome to</span>
              </div>
              <h1 className="font-display leading-[1] mt-0 text-foreground" style={{ fontSize: 'clamp(5rem, 3rem + 8vw, 18.4rem)' }}>
                Sagar<br />
                Shree
              </h1>
            </div>

            {/* Primary Picture (Absolute Center on Desktop) */}
            <div className="hidden lg:flex absolute z-[1]" style={{ top: 'max(13.6rem, 24vh)', left: '50%', transform: 'translateX(-50%)', width: '33.3333%', padding: '0 1rem' }}>
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Sagar Shree Specialty" 
                className="w-full object-cover align-bottom m-0 shadow-xl" 
                style={{ aspectRatio: '1200/1650' }}
              />
            </div>

            {/* Secondary Block */}
            <div className="lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-end-3 flex flex-col justify-center items-center relative z-[2] mt-12 lg:mt-0 pb-8 lg:pb-0">
              <figure className="relative w-full mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1050" 
                  alt="Sagar Shree Interior" 
                  className="w-full object-cover align-bottom m-0 shadow-lg" 
                  style={{ aspectRatio: '1050/600' }}
                />
              </figure>
              <div className="w-full border-t border-border/80 pt-4 mt-6">
                <p className="text-foreground/80 md:text-[15px] font-body leading-relaxed m-0 border-t border-border/40 pt-4">
                  Savor moments of bliss with every bite, as our expertly crafted dishes and luxurious stay embrace your senses.
                </p>
                <ul className="flex flex-wrap gap-4 list-none p-0 mt-6 mx-0">
                  <li><a href="#0" className="text-sm tracking-[0.15em] text-foreground/50 uppercase hover:text-foreground transition-colors">FB</a></li>
                  <li><a href="#0" className="text-sm tracking-[0.15em] text-foreground/50 uppercase hover:text-foreground transition-colors">IG</a></li>
                  <li><a href="#0" className="text-sm tracking-[0.15em] text-foreground/50 uppercase hover:text-foreground transition-colors">PI</a></li>
                  <li><a href="#0" className="text-sm tracking-[0.15em] text-foreground/50 uppercase hover:text-foreground transition-colors">X</a></li>
                </ul>
              </div>
            </div>

            {/* Scroll Button */}
            <div className="hidden lg:flex lg:col-start-2 lg:col-span-6 lg:row-start-2 relative z-[2]">
              <a href="#about" className="inline-flex items-center justify-center relative hover:opacity-80 transition-opacity" style={{ width: '9.2rem', height: '9.2rem' }}>
                <div className="absolute inset-0 rounded-full animate-[rotation_12s_linear_infinite]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath id=%22curve%22 fill=%22transparent%22 d=%22M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0%22/%3E%3Ctext fill=%22%234E342E%22 font-family=%22sans-serif%22 font-size=%2210%22 font-weight=%22600%22 letter-spacing=%224px%22%3E%3CtextPath href=%22%23curve%22%3E SCROLL DOWN \u2022 SCROLL DOWN \u2022 SCROLL DOWN \u2022%3C/textPath%3E%3C/text%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="flex justify-center items-center bg-background rounded-full z-10 w-8 h-8">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                     <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Mobile-only exact fallback */}
            <div className="block lg:hidden w-full order-first mb-4 z-[1]">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Sagar Shree Specialty" 
                className="w-full object-cover align-bottom m-0 shadow-xl" 
                style={{ aspectRatio: '1200/1650' }}
              />
            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes rotation { to { transform: rotate(1turn); } }
        `}} />
      </section>

      {/* Today's Offers */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Percent className="text-primary" size={24} />
              <span className="text-foreground font-display text-lg">Today's Offers</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="glass px-4 py-2 rounded-full text-sm text-foreground">🍽️ 20% off Chef's Special</span>
              <span className="glass px-4 py-2 rounded-full text-sm text-foreground">🏨 Free breakfast with Suite booking</span>
              <span className="glass px-4 py-2 rounded-full text-sm text-foreground">🥂 Complimentary welcome drink</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Chef's Signatures" subtitle="Culinary Excellence" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={dish.id} delay={i * 0.15}>
                <div className="group glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">Chef's Special</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">{dish.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{dish.description}</p>
                    <p className="text-primary font-display text-xl mt-3">${dish.price}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/restaurant">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 tracking-widest uppercase text-xs">
                View Full Menu <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Luxury Accommodations" subtitle="Rest & Rejuvenate" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, i) => (
              <ScrollReveal key={room.id} delay={i * 0.15}>
                <div className="group glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold capitalize">{room.type}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">{room.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{room.description}</p>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-primary font-display text-xl">${room.price}</span>
                      <span className="text-muted-foreground text-sm">/night</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/hotel">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 tracking-widest uppercase text-xs">
                View All Rooms <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dinner + Stay Package */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center glass-strong rounded-2xl p-12 md:p-16">
              <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-bold tracking-widest uppercase mb-6">Save 30%</div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground">Dinner & Stay Package</h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
                Enjoy a 5-course chef's tasting menu paired with a luxurious overnight stay. The ultimate indulgence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 items-center">
                <div className="text-center">
                  <p className="text-muted-foreground line-through text-lg">$580</p>
                  <p className="text-primary font-display text-4xl">$399</p>
                  <p className="text-muted-foreground text-sm">per couple</p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase">
                  Reserve Package
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Guest Experiences" subtitle="What They Say" />
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array(testimonials[currentTestimonial].rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl italic leading-relaxed font-display">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-primary mt-6 font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Make a Reservation" subtitle="Book Your Experience" />
          <ScrollReveal>
            <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-8 md:p-12">
              <QuickBookingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function QuickBookingForm() {
  const [type, setType] = useState<'restaurant' | 'hotel'>('restaurant');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-display text-2xl text-foreground">Reservation Confirmed!</h3>
        <p className="text-muted-foreground mt-2">We'll send you a confirmation shortly.</p>
        <Button variant="outline" className="mt-6 border-primary/30 text-primary" onClick={() => setSubmitted(false)}>Make Another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
      <div className="flex gap-2 mb-8">
        {(['restaurant', 'hotel'] as const).map(t => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`flex-1 py-3 rounded-lg text-sm tracking-widest uppercase transition-all ${type === t ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground hover:text-foreground'}`}
          >
            {t === 'restaurant' ? '🍽️ Restaurant' : '🏨 Hotel'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required placeholder="Full Name" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
        <input required type="email" placeholder="Email" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
        <input required type="date" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors" />
        {type === 'restaurant' ? (
          <>
            <select className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
              <option>6:00 PM</option><option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option>
            </select>
            <select className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors md:col-span-2">
              <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5 Guests</option><option>6+ Guests</option>
            </select>
          </>
        ) : (
          <>
            <input required type="date" placeholder="Check-out" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors" />
            <select className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
              <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option>
            </select>
            <select className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
              <option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option>
            </select>
          </>
        )}
      </div>
      <Button type="submit" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">
        Confirm Reservation
      </Button>
    </form>
  );
}
