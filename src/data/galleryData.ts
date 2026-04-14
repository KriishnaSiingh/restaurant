export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'rooms' | 'interior';
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt: 'Fine dining experience', category: 'food' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', alt: 'Gourmet plating', category: 'food' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600', alt: 'Fresh salad', category: 'food' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', alt: 'Artisan pizza', category: 'food' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600', alt: 'Breakfast spread', category: 'food' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600', alt: 'Classic room', category: 'rooms' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600', alt: 'Deluxe suite', category: 'rooms' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600', alt: 'Royal suite', category: 'rooms' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600', alt: 'Ocean view room', category: 'rooms' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600', alt: 'Lobby interior', category: 'interior' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600', alt: 'Hotel exterior', category: 'interior' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', alt: 'Restaurant ambience', category: 'interior' },
  { id: 'g13', src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600', alt: 'Bar area', category: 'interior' },
  { id: 'g14', src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600', alt: 'Pool area', category: 'interior' },
];
