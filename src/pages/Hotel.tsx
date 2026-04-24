import { useState } from 'react';
import { Wifi, Coffee, Bath, Car, Dumbbell, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { rooms, Room } from '@/data/roomData';

const amenityIcons: Record<string, typeof Wifi> = { 'Wi-Fi': Wifi, 'Room Service': Coffee, 'Jacuzzi': Bath, 'Limo Transfer': Car, 'Spa Access': Dumbbell, 'Spa': Dumbbell };

export default function Hotel() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200)' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-body">Luxury Hospitality</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground">Our Rooms</h1>
          <div className="line-gold w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Accommodations" subtitle="Find Your Perfect Stay" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.id} delay={(i % 3) * 0.15}>
                <div className="group glass rounded-xl overflow-hidden hover:shadow-gold transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => setSelectedRoom(room)}>
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold capitalize">{room.type}</div>
                    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-foreground text-sm tracking-widest uppercase border border-foreground/50 px-4 py-2 rounded-full">View Details</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-foreground">{room.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2 flex-1">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {room.amenities.slice(0, 4).map(a => (
                        <span key={a} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{a}</span>
                      ))}
                      {room.amenities.length > 4 && <span className="text-xs text-primary">+{room.amenities.length - 4} more</span>}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-primary font-display text-xl">${room.price}</span>
                        <span className="text-muted-foreground text-sm">/night</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => { setSelectedRoom(room); setShowBooking(true); }} className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase">Book</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && !showBooking && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={() => setSelectedRoom(null)} />
          <div className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto">
            <button onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 z-10 text-foreground/50 hover:text-foreground"><X size={20} /></button>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="space-y-2 p-2">
                {selectedRoom.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedRoom.name} className="w-full rounded-lg object-cover aspect-video" loading="lazy" />
                ))}
              </div>
              <div className="p-8">
                <span className="text-primary text-xs tracking-widest uppercase">{selectedRoom.type}</span>
                <h2 className="font-display text-3xl text-foreground mt-2">{selectedRoom.name}</h2>
                <p className="text-muted-foreground mt-3">{selectedRoom.description}</p>
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-foreground/80"><span className="text-muted-foreground">Size:</span> {selectedRoom.size}</p>
                  <p className="text-sm text-foreground/80"><span className="text-muted-foreground">Max Guests:</span> {selectedRoom.maxGuests}</p>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-3">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map(a => {
                      const Icon = amenityIcons[a];
                      return (
                        <span key={a} className="flex items-center gap-1 text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground/80">
                          {Icon && <Icon size={12} />} {a}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-primary font-display text-3xl">${selectedRoom.price}</span>
                  <span className="text-muted-foreground">/night</span>
                </div>
                <Button onClick={() => setShowBooking(true)} className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">Book This Room</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && selectedRoom && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={() => { setShowBooking(false); setBooked(false); }} />
          <div className="relative glass-strong rounded-2xl max-w-lg w-full p-8">
            <button onClick={() => { setShowBooking(false); setBooked(false); }} className="absolute top-4 right-4 text-foreground/50 hover:text-foreground"><X size={20} /></button>
            {booked ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-display text-2xl text-foreground">Booking Confirmed!</h3>
                <p className="text-muted-foreground mt-2">Your {selectedRoom.name} has been reserved.</p>
                <Button variant="outline" className="mt-6 border-primary/30 text-primary" onClick={() => { setShowBooking(false); setSelectedRoom(null); setBooked(false); }}>Done</Button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setBooked(true); }}>
                <h2 className="font-display text-2xl text-foreground mb-6">Book {selectedRoom.name}</h2>
                <div className="space-y-4">
                  <input required placeholder="Full Name" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                  <input required type="email" placeholder="Email" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary transition-colors" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Check-in</label>
                      <input required type="date" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Check-out</label>
                      <input required type="date" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors">
                    <option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option>
                  </select>
                </div>
                <Button type="submit" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase">Confirm Booking</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
