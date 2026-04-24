export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'veg' | 'non-veg' | 'drinks' | 'desserts';
  image: string;
  isChefSpecial?: boolean;
  isOffer?: boolean;
  offerPrice?: number;
}

export const menuItems: MenuItem[] = [
  // CHAAT MAHAL
  { id: 'c1', name: 'Raj Kachori', description: 'Royal kachori stuffed with sprouts, boiled potatoes, yogurt, and sweet-spicy chutneys', price: 175, category: 'chaat', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', isChefSpecial: true },
  { id: 'c2', name: 'Dahi Sev Puri', description: 'Crispy puris topped with potatoes, chickpeas, yogurt, chutneys and fine sev', price: 140, category: 'chaat', image: 'https://images.unsplash.com/photo-1589135398302-38d7f511418d?w=400' },
  { id: 'c3', name: 'Dahi Bhalla', description: 'Soft lentil fritters soaked in creamy yogurt with sweet and tangy chutneys', price: 150, category: 'chaat', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400' },
  { id: 'c4', name: 'Papdi Chaat', description: 'Crunchy wafers topped with spicy potatoes, chickpeas, and various chutneys', price: 140, category: 'chaat', image: 'https://images.unsplash.com/photo-1589676773108-eeeb9e3948f3?w=400' },

  // CHINESE
  { id: 'ch1', name: 'Veg Manchurian', description: 'Vegetable dumplings tossed in a savory soy-based ginger and garlic sauce', price: 365, category: 'chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400', isChefSpecial: true },
  { id: 'ch2', name: 'Paneer Chilli', description: 'Cottage cheese cubes tossed with bell peppers and onions in a spicy soya sauce', price: 395, category: 'chinese', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400' },
  { id: 'ch3', name: 'Spring Rolls', description: 'Golden fried rolls stuffed with seasoned vegetables and glass noodles', price: 315, category: 'chinese', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { id: 'ch4', name: 'Veg Chowmein', description: 'Stir-fried noodles with crisp vegetables and traditional Chinese seasonings', price: 345, category: 'chinese', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400' },

  // SOUTH INDIAN
  { id: 'si1', name: 'Masala Dosa', description: 'Crispy rice crepe filled with a spiced potato and onion mash', price: 250, category: 'south-indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400' },
  { id: 'si2', name: 'Rava Masala Dosa', description: 'Semolina-based crispy crepe with a spicy potato filling', price: 280, category: 'south-indian', image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?w=400' },
  { id: 'si3', name: 'Sagar Special Paneer Dosa', description: 'Signature crispy dosa stuffed with spiced paneer and house secret masalas', price: 315, category: 'south-indian', image: 'https://images.unsplash.com/photo-1645177625172-8957470f56ee?w=400', isChefSpecial: true },
  { id: 'si4', name: 'Idli Vada Combo', description: 'Choice of 3 pieces from Rice Idli & Medu Vada served with sambar and chutney', price: 215, category: 'south-indian', image: 'https://images.unsplash.com/photo-1589301773830-97f6c2687c47?w=400' },

  // NORTH INDIAN
  { id: 'ni1', name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight with butter and cream', price: 345, category: 'north-indian', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', isChefSpecial: true },
  { id: 'ni2', name: 'Paneer Butter Masala', description: 'Cubes of cottage cheese in a rich, velvety tomato and butter gravy', price: 415, category: 'north-indian', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400' },
  { id: 'ni3', name: 'Shahi Paneer', description: 'Paneer in a royal, aromatic white gravy made with nuts and cream', price: 415, category: 'north-indian', image: 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=400' },
  { id: 'ni4', name: 'Dal Tadka (Arhar)', description: 'Yellow lentils tempered with cumin, garlic, and dried red chillies', price: 325, category: 'north-indian', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },

  // COMBOS
  { id: 'co1', name: 'Chole Bhature', description: 'Spicy chickpea curry served with large, fluffy fried bread and pickles', price: 220, category: 'combos', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400', isChefSpecial: true },
  { id: 'co2', name: 'North Indian Thali', description: 'Shahi Paneer, Mix Veg, Dal Makhni, Naan, Paratha, Rice, Raita, and Sweet', price: 399, category: 'combos', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', isOffer: true, offerPrice: 349 },
  { id: 'co3', name: 'Masala Dosa Combo', description: 'Masala Dosa, Dahi Vada Single, and Choice of Filter Coffee or Buttermilk', price: 335, category: 'combos', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400' },

  // DRINKS
  { id: 'dr1', name: 'Filter Coffee', description: 'Authentic South Indian decoction coffee with frothed hot milk', price: 80, category: 'drinks', image: 'https://images.unsplash.com/photo-1572442313968-c3997227c44e?w=400' },
  { id: 'dr2', name: 'Lassi (Sweet)', description: 'Thick, creamy yogurt drink topped with a layer of malai', price: 125, category: 'drinks', image: 'https://images.unsplash.com/photo-1596791011545-7470a5c43941?w=400' },
  { id: 'dr3', name: 'Cold Coffee', description: 'Perfectly blended chilled coffee with a dash of chocolate syrup', price: 195, category: 'drinks', image: 'https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=400' },

  // DESSERTS
  { id: 'de1', name: 'Ras Malai', description: 'Soft cottage cheese dumplings soaked in saffron-infused milk', price: 50, category: 'desserts', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400', isChefSpecial: true },
  { id: 'de2', name: 'Jalebi (Pure Desi Ghee)', description: 'Crispy, syrupy swirls made in high-quality clarified butter', price: 95, category: 'desserts', image: 'https://images.unsplash.com/photo-1589111474503-45f8e58f8b36?w=400' },
  { id: 'de3', name: 'Gulab Jamun', description: 'Deep-fried berry-sized balls made with milk solids, soaked in rose syrup', price: 55, category: 'desserts', image: 'https://images.unsplash.com/photo-1548840410-ad2acc2239d5?w=400' },
];
