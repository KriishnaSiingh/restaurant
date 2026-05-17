import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function About() {
  const { siteData, activeSite } = useActiveSite();
  
  const isSagar = activeSite === 'sagarshree';
  const sinceLabel = isSagar ? 'Since 2022' : 'Since 2022';
  const yearsCount = isSagar ? '4+' : '4+';
  const yearsDesc = isSagar ? 'Years of Local Legacy' : 'Years of Sky Vibes';

  const ambience = isSagar ? [
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500', title: 'Grand Dining Hall', desc: 'Elegant, comfortable seating ideal for large family gatherings' },
    { img: siteData.heroImage1, title: 'Lovely Rooftop Garden', desc: 'Breathe the fresh air while enjoying delicious hot regional dishes' },
    { img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500', title: 'Sapphire Inn Rooms', desc: 'Plush luxury rooms just a staircase away for the perfect stay' },
  ] : [
    { img: siteData.heroImage2, title: 'The Sunset Deck', desc: 'Intimate open-air tables featuring panoramic twilight vistas' },
    { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500', title: 'Celestial Mocktail Lounge', desc: 'Premium handcrafted fusions, coolers, and loaded coffee creations' },
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500', title: 'Cozy Starry Cabanas', desc: 'Glass-panelled private corners for romantic dates and parties' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${siteData.heroImage1})` }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">About {siteData.name}</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionHeading title="A Legacy of Elegance" subtitle={sinceLabel} centered={false} />
                <p className="text-muted-foreground leading-relaxed">
                  {siteData.aboutText1}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {siteData.aboutText2}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img src={siteData.heroImage2} alt={`${siteData.name} interior`} className="rounded-xl shadow-gold w-full object-cover aspect-[4/3]" loading="lazy" />
                <div className="absolute -bottom-6 -left-6 glass-strong rounded-xl p-6 max-w-[200px]">
                  <p className="font-display text-3xl text-primary">{yearsCount}</p>
                  <p className="text-sm text-muted-foreground">{yearsDesc}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img src={siteData.chefImage} alt={siteData.chefName} className="rounded-xl shadow-gold w-full object-cover aspect-[4/5] max-h-[500px]" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <SectionHeading title={siteData.chefName} subtitle={siteData.chefTitle} centered={false} />
                <p className="text-muted-foreground leading-relaxed">
                  {siteData.chefDescription}
                </p>
                <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-foreground/80 font-display text-lg">
                  "{siteData.chefQuote}"
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ambience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="The Ambience" subtitle="Atmosphere & Design" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ambience.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
