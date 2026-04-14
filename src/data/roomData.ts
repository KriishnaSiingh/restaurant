export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'suite';
  price: number;
  description: string;
  image: string;
  images: string[];
  amenities: string[];
  size: string;
  maxGuests: number;
}

export const rooms: Room[] = [
  {
    id: 'r1', name: 'Classic Room', type: 'standard', price: 180,
    description: 'Elegant comfort with city views, plush bedding, and modern amenities for the discerning traveler.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800'],
    amenities: ['King Bed', 'City View', 'Wi-Fi', 'Mini Bar', 'Room Service'],
    size: '35 m²', maxGuests: 2,
  },
  {
    id: 'r2', name: 'Superior Room', type: 'standard', price: 240,
    description: 'Spacious retreat with premium furnishings, a sitting area, and panoramic urban views.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=600',
    images: ['https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=800', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'],
    amenities: ['King Bed', 'Balcony', 'Wi-Fi', 'Mini Bar', 'Bathrobe', 'Room Service'],
    size: '42 m²', maxGuests: 2,
  },
  {
    id: 'r3', name: 'Deluxe Suite', type: 'deluxe', price: 380,
    description: 'Luxurious suite with separate living area, marble bathroom, and premium dining experience.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
    images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800'],
    amenities: ['King Bed', 'Living Room', 'Jacuzzi', 'Wi-Fi', 'Mini Bar', 'Butler Service', 'Spa Access'],
    size: '65 m²', maxGuests: 3,
  },
  {
    id: 'r4', name: 'Royal Suite', type: 'suite', price: 580,
    description: 'The pinnacle of luxury — private terrace, panoramic views, personal butler, and exclusive amenities.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
    amenities: ['Emperor Bed', 'Private Terrace', 'Living & Dining', 'Jacuzzi', 'Butler', 'Spa', 'Limo Transfer', 'Champagne'],
    size: '95 m²', maxGuests: 4,
  },
  {
    id: 'r5', name: 'Presidential Suite', type: 'suite', price: 950,
    description: 'Unparalleled grandeur with two bedrooms, private pool, cinema room, and 24/7 concierge.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
    images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800'],
    amenities: ['2 Bedrooms', 'Private Pool', 'Cinema', 'Kitchen', 'Butler', 'Spa', 'Helicopter Pad Access'],
    size: '150 m²', maxGuests: 6,
  },
];
