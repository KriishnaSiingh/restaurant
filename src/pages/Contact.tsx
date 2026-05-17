import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { toast } from 'sonner';
import { useActiveSite } from '@/context/ActiveSiteContext';

export default function Contact() {
  const { siteData } = useActiveSite();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${siteData.heroImage2})` }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">Contact Us</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <SectionHeading title="We'd Love to Hear From You" subtitle="Reach Out" centered={false} />
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0"><MapPin size={18} className="text-primary" /></div>
                    <div>
                      <p className="text-foreground font-medium">Address</p>
                      <p className="text-muted-foreground text-sm">{siteData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0"><Phone size={18} className="text-primary" /></div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">{siteData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0"><Mail size={18} className="text-primary" /></div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">{siteData.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border aspect-video bg-secondary/30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={40} className="text-primary/30 mx-auto animate-bounce" />
                    <p className="text-foreground font-semibold mt-2">{siteData.name}</p>
                    <p className="text-muted-foreground text-xs mt-1 max-w-sm mx-auto">{siteData.address}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-strong rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✉️</div>
                    <h3 className="font-display text-2xl text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
                    <Button variant="outline" className="mt-6 border-primary/30 text-primary" onClick={() => setSubmitted(false)}>Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); toast.success('Message sent!'); }} className="space-y-4">
                    <h3 className="font-display text-2xl text-foreground mb-6">Send a Message</h3>
                    <input required placeholder="Full Name" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                    <input required type="email" placeholder="Email Address" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                    <input placeholder="Subject" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                    <textarea required placeholder="Your Message..." className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors h-32 resize-none" />
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">Send Message</Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
