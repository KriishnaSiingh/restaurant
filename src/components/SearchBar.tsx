import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { menuItems } from '@/data/menuData';
import { rooms } from '@/data/roomData';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchBar({ open, onClose }: Props) {
  const [query, setQuery] = useState('');

  if (!open) return null;

  const q = query.toLowerCase();
  const filteredMenu = query ? menuItems.filter(i => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) : [];
  const filteredRooms = query ? rooms.filter(r => r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) : [];

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-fade-in">
      <div className="container mx-auto px-4 pt-24">
        <div className="flex items-center gap-4 border-b border-primary/30 pb-4">
          <Search size={24} className="text-primary" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search dishes, rooms, experiences..."
            className="flex-1 bg-transparent text-2xl md:text-3xl font-display text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button onClick={() => { setQuery(''); onClose(); }} className="text-foreground/50 hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        <div className="mt-8 max-h-[60vh] overflow-y-auto space-y-6">
          {filteredMenu.length > 0 && (
            <div>
              <h3 className="text-sm tracking-widest uppercase text-primary mb-4">Menu</h3>
              {filteredMenu.slice(0, 5).map(item => (
                <Link key={item.id} to="/restaurant" onClick={onClose} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" loading="lazy" />
                  <div>
                    <p className="text-foreground font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {filteredRooms.length > 0 && (
            <div>
              <h3 className="text-sm tracking-widest uppercase text-primary mb-4">Rooms</h3>
              {filteredRooms.map(room => (
                <Link key={room.id} to="/hotel" onClick={onClose} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <img src={room.image} alt={room.name} className="w-12 h-12 rounded-md object-cover" loading="lazy" />
                  <div>
                    <p className="text-foreground font-medium">{room.name}</p>
                    <p className="text-sm text-muted-foreground">From ${room.price}/night</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {query && filteredMenu.length === 0 && filteredRooms.length === 0 && (
            <p className="text-muted-foreground text-center py-12">No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
}
