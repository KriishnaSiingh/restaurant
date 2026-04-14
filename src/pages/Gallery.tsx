import { useState } from 'react';
import { X } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { galleryImages, GalleryImage } from '@/data/galleryData';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'interior', label: 'Interior' },
] as const;

export default function Gallery() {
  const [tab, setTab] = useState<string>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = tab === 'all' ? galleryImages : galleryImages.filter(i => i.category === tab);

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Visual Journey</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">Gallery</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3 mb-12">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${tab === t.key ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground hover:text-foreground'}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.id} delay={(i % 3) * 0.1}>
                <div className="break-inside-avoid group cursor-pointer" onClick={() => setLightbox(img)}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-foreground text-sm tracking-widest uppercase border border-foreground/50 px-4 py-2 rounded-full">View</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground/50 hover:text-foreground"><X size={24} /></button>
          <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" />
          <p className="absolute bottom-6 text-center text-foreground/70 text-sm">{lightbox.alt}</p>
        </div>
      )}
    </div>
  );
}
