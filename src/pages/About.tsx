import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">About Lounge</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionHeading title="A Legacy of Elegance" subtitle="Since 2005" centered={false} />
                <p className="text-muted-foreground leading-relaxed">
                  Born from a passion for exceptional hospitality, Lounge has been redefining luxury since 2005. Our founders envisioned a place where culinary artistry meets world-class accommodation — a sanctuary where every detail is meticulously crafted.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nestled in the heart of Mayfair, our establishment brings together the finest ingredients, the most talented artisans, and an unwavering commitment to excellence. Every visit is not just a meal or a stay — it's a memory etched in gold.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600" alt="Lounge interior" className="rounded-xl shadow-gold w-full" loading="lazy" />
                <div className="absolute -bottom-6 -left-6 glass-strong rounded-xl p-6 max-w-[200px]">
                  <p className="font-display text-3xl text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
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
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600" alt="Executive Chef" className="rounded-xl shadow-gold w-full" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <SectionHeading title="Chef Antoine Laurent" subtitle="Executive Chef" centered={false} />
                <p className="text-muted-foreground leading-relaxed">
                  With three Michelin stars and over two decades of culinary mastery, Chef Antoine brings a philosophy of "ingredient reverence" to every dish. Trained in the kitchens of Paris and Tokyo, his creations are a harmonious blend of French technique and global inspiration.
                </p>
                <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-foreground/80 font-display text-lg">
                  "Every dish should tell a story. My kitchen is my canvas, and each plate is a love letter to the craft."
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
            {[
              { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500', title: 'The Dining Hall', desc: 'Intimate candlelit tables under vaulted ceilings' },
              { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500', title: 'The Bar', desc: 'Handcrafted cocktails in a speakeasy-inspired setting' },
              { img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500', title: 'The Terrace', desc: 'Al fresco dining with panoramic city views' },
            ].map((item, i) => (
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
