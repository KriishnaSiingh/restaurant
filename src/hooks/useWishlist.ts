import { useState, useEffect } from 'react';

export function useWishlist() {
  const [items, setItems] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('wishlist') || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(items)); }, [items]);

  const toggle = (id: string) => setItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  const has = (id: string) => items.includes(id);

  return { items, toggle, has };
}
