import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, BedDouble, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { sagarShreeMenuItems, skyGardenMenuItems } from '@/data/menuData';
import { useState, useEffect } from 'react';
import { useActiveSite } from '@/context/ActiveSiteContext';
import { HeroSection } from '@/components/ui/hero-section-2';
import { CinematicHero } from '@/components/ui/cinematic-landing-hero';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const { activeSite, toggleSite, siteData } = useActiveSite();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Coordinated layout sync refreshes
    const timers = [
      setTimeout(() => ScrollTrigger.refresh(), 100),
      setTimeout(() => ScrollTrigger.refresh(), 400),
      setTimeout(() => ScrollTrigger.refresh(), 800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  
  const currentMenu = activeSite === 'sagarshree' ? sagarShreeMenuItems : skyGardenMenuItems;
  const featuredDishes = currentMenu.filter(m => m.isChefSpecial).slice(0, 3);

  const dynamicHeroData = activeSite === 'sagarshree'
    ? {
        logo: {
          url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100",
          alt: "Sagar Shree",
          text: "Sagar Shree"
        },
        slogan: "ESTD. 2022 • ROOFTOP FAMILY RESTAURANT",
        title: (
          <>
            Savor Gorakhpur's <br />
            <span className="text-gradient-gold">Culinary Legacy</span>
          </>
        ),
        subtitle: "Indulge in our exquisite vegetarian and non-vegetarian rooftop family recipes in Bilandpur, Gorakhpur. The perfect blend of rich Mughlai heritage, Chinese specialties, and memorable stays.",
        callToAction: {
          text: "EXPLORE THE MENU →",
          href: "/restaurant",
        },
        backgroundImage: siteData.heroImage1,
        contactInfo: {
          website: "sagarshree2022@gmail.com",
          phone: "+91 7379532767",
          address: "Bilandpur, Gorakhpur",
        }
      }
    : {
        logo: {
          url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=100",
          alt: "Sky Garden",
          text: "Sky Garden"
        },
        slogan: "TWILIGHT CAFE • ROOF TOP LOUNGE",
        title: (
          <>
            Dine Under The Stars, <br />
            <span className="text-gradient-gold">Elevating Your Vibe</span>
          </>
        ),
        subtitle: "Gorakhpur's premier open-sky social hub. Savor loaded Continental pizzas, fresh signature mocktails, sizzling finger chips, and twilight cabana lounge views.",
        callToAction: {
          text: "RESERVE A COZY CABANA →",
          href: "/restaurant",
        },
        backgroundImage: siteData.heroImage2,
        contactInfo: {
          website: "sagarshree2022@gmail.com",
          phone: "+91 7379532767",
          address: "Bilandpur, Gorakhpur",
        }
      };

  return (
    <div className="min-h-screen">
      {/* Dynamic Split Hero Section */}
      <HeroSection
        title={dynamicHeroData.title}
        subtitle={dynamicHeroData.subtitle}
        callToAction={dynamicHeroData.callToAction}
        backgroundImage={dynamicHeroData.backgroundImage}
        contactInfo={dynamicHeroData.contactInfo}
        className="border-b border-border/40"
      />

      {/* Cinematic Delivery Hero */}
      <CinematicHero 
        brandName={activeSite === 'sagarshree' ? "Sagar Shree" : "Sky Garden"} 
      />



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
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl text-foreground">{dish.name}</h3>
                      {dish.isNonVeg && (
                        <div className="w-3.5 h-3.5 border-2 border-red-600 flex items-center justify-center p-[1px] rounded-sm shrink-0">
                          <div className="w-full h-full bg-red-600 rounded-full"></div>
                        </div>
                      )}
                      {!dish.isNonVeg && activeSite === 'skygarden' && (
                        <div className="w-3.5 h-3.5 border-2 border-green-600 flex items-center justify-center p-[1px] rounded-sm shrink-0">
                          <div className="w-full h-full bg-green-600 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{dish.description}</p>
                    <p className="text-primary font-display text-xl mt-3">₹{dish.price}</p>
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




      {/* Brand Story Scroll Section */}
      <div className="relative z-20">
        {activeSite === 'sagarshree' ? (
          <FlowArt aria-label="Sagar Shree Story Scroll">
            <FlowSection aria-label="Our Legacy" style={{ backgroundColor: '#1e3f2d', color: '#ffffff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">01 — Our Legacy</p>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <div>
                <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display">
                  Legacy
                  <br />
                  Of
                  <br />
                  Flavors
                </h1>
              </div>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed font-body">
                For over two decades, Sagar Shree has been Gorakhpur's proud home of authentic Indian culinary heritage. We cook with patience, using recipes passed down through generations.
              </p>
            </FlowSection>

            <FlowSection aria-label="Clay Oven Artistry" style={{ backgroundColor: '#0f1f16', color: '#ebd7c0' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">02 — Clay Oven</p>
              <hr className="my-[2vw] border-none border-t border-primary/20" />
              <div>
                <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display">
                  Clay
                  <br />
                  Tandoor
                  <br />
                  Artistry
                </h2>
              </div>
              <hr className="my-[2vw] border-none border-t border-primary/20" />
              <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-white/90 font-body">
                Our signature Naans and succulent Tandoori Paneer are cooked in a traditional clay oven over real charcoal flame. This delivers that authentic, deep smoky flavor that defines pure North Indian cuisine.
              </p>
            </FlowSection>

            <FlowSection aria-label="Pure Family Dining" style={{ backgroundColor: '#eae3d2', color: '#1e3f2d' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">03 — Pure Dining</p>
              <hr className="my-[2vw] border-none border-t border-primary/20" />
              <div>
                <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display">
                  Plated
                  <br />
                  With
                  <br />
                  Love
                </h2>
              </div>
              <hr className="my-[2vw] border-none border-t border-primary/20" />
              <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed font-body">
                We believe in pure family environments, fresh hand-picked ingredients, and cooking without shortcuts. Your table is a celebration of love, flavor, and visual art.
              </p>
            </FlowSection>
          </FlowArt>
        ) : (
          <FlowArt aria-label="Sky Garden Story Scroll">
            <FlowSection aria-label="Skyline Dining" style={{ backgroundColor: '#0c1220', color: '#ffffff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">01 — Skyline Dining</p>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <div>
                <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display">
                  Under
                  <br />
                  The
                  <br />
                  Stars
                </h1>
              </div>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed font-body">
                Sky Garden is Gorakhpur's premium open-air rooftop café and lounge. Elevate your evening with breathtaking skyline views and a dining experience under a canopy of stars.
              </p>
            </FlowSection>

            <FlowSection aria-label="Continental Fusion" style={{ backgroundColor: '#b19453', color: '#0c1220' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">02 — Continental Fusion</p>
              <hr className="my-[2vw] border-none border-t border-black/20" />
              <div>
                <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display">
                  Flavors
                  <br />
                  Above
                  <br />
                  Ground
                </h2>
              </div>
              <hr className="my-[2vw] border-none border-t border-black/20" />
              <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed text-black/90 font-body">
                Experience hand-tossed artisan pizzas, sizzling gourmet momos, and continental small plates curated by Chef Sameer. Every dish is crafted to match the drama of the evening sunset.
              </p>
            </FlowSection>

            <FlowSection aria-label="Sunset Mocktails" style={{ backgroundColor: '#18223c', color: '#f3e9d2' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">03 — Vibes & Sips</p>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <div>
                <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight font-display text-white">
                  Sip
                  <br />
                  The
                  <br />
                  Sunset
                </h2>
              </div>
              <hr className="my-[2vw] border-none border-t border-white/20" />
              <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed font-body">
                Unwind with our signature handcrafted mocktails, thick gourmet shakes, and live acoustic music. The perfect escape from the city rush below.
              </p>
            </FlowSection>
          </FlowArt>
        )}
      </div>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Guest Experiences" subtitle="What They Say" />
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array(siteData.testimonials[currentTestimonial]?.rating || 5).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl italic leading-relaxed font-display">
                "{siteData.testimonials[currentTestimonial]?.text}"
              </p>
              <p className="text-primary mt-6 font-semibold">{siteData.testimonials[currentTestimonial]?.name}</p>
              <p className="text-muted-foreground text-sm">{siteData.testimonials[currentTestimonial]?.role}</p>
              <div className="flex justify-center gap-3 mt-8">
                {siteData.testimonials.map((_, i) => (
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
