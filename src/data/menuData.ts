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
  { id: 'd1', name: 'Truffle Risotto', description: 'Arborio rice, black truffle, aged parmesan, white wine reduction', price: 38, category: 'veg', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400', isChefSpecial: true },
  { id: 'd2', name: 'Wild Mushroom Ravioli', description: 'Handmade pasta, porcini cream, sage butter, pine nuts', price: 32, category: 'veg', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
  { id: 'd3', name: 'Grilled Asparagus', description: 'Charred asparagus, hollandaise, poached egg, microgreens', price: 24, category: 'veg', image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=400' },
  { id: 'd4', name: 'Mediterranean Quinoa Bowl', description: 'Roasted vegetables, feta, olives, lemon tahini dressing', price: 26, category: 'veg', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: 'd5', name: 'Wagyu Beef Tenderloin', description: 'A5 wagyu, truffle mash, red wine jus, seasonal vegetables', price: 85, category: 'non-veg', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', isChefSpecial: true },
  { id: 'd6', name: 'Pan-Seared Sea Bass', description: 'Chilean sea bass, saffron beurre blanc, fennel, capers', price: 52, category: 'non-veg', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400' },
  { id: 'd7', name: 'Herb-Crusted Lamb Rack', description: 'New Zealand lamb, rosemary crust, mint pesto, roasted roots', price: 58, category: 'non-veg', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { id: 'd8', name: 'Lobster Thermidor', description: 'Whole Maine lobster, gruyère crust, cognac cream sauce', price: 72, category: 'non-veg', image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?w=400', isOffer: true, offerPrice: 62 },
  { id: 'd9', name: 'Aged Negroni', description: 'Barrel-aged gin, Campari, sweet vermouth, orange peel', price: 18, category: 'drinks', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400' },
  { id: 'd10', name: 'Champagne Cocktail', description: 'Dom Pérignon, Angostura bitters, sugar cube, lemon twist', price: 24, category: 'drinks', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400' },
  { id: 'd11', name: 'Smoky Old Fashioned', description: 'Bourbon, smoked maple syrup, Angostura, cherry', price: 16, category: 'drinks', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400' },
  { id: 'd12', name: 'Valrhona Chocolate Soufflé', description: 'Dark chocolate, vanilla crème anglaise, gold leaf', price: 22, category: 'desserts', image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400', isChefSpecial: true },
  { id: 'd13', name: 'Crème Brûlée', description: 'Madagascar vanilla, caramelized sugar, fresh berries', price: 18, category: 'desserts', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400' },
  { id: 'd14', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone, cocoa dust', price: 16, category: 'desserts', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
];
