export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isChefSpecial?: boolean;
  isOffer?: boolean;
  offerPrice?: number;
  isNonVeg?: boolean;
}

export const sagarShreeMenuItems: MenuItem[] = [
  // CHAAT MAHAL
  { id: 'c1', name: 'Raj Kachori', description: 'Royal kachori stuffed with sprouts, boiled potatoes, yogurt, and sweet-spicy chutneys', price: 175, category: 'chaat', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', isChefSpecial: true },
  { id: 'c2', name: 'Dahi Sev Puri', description: 'Crispy puris topped with potatoes, chickpeas, yogurt, chutneys and fine sev', price: 140, category: 'chaat', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500' },
  { id: 'c3', name: 'Dahi Bhalla', description: 'Soft lentil fritters soaked in creamy yogurt with sweet and tangy chutneys', price: 150, category: 'chaat', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500' },
  { id: 'c4', name: 'Papdi Chaat', description: 'Crunchy wafers topped with spicy potatoes, chickpeas, and various chutneys', price: 140, category: 'chaat', image: 'https://images.unsplash.com/photo-1589676773108-eeeb9e3948f3?w=500' },

  // CHINESE
  { id: 'ch1', name: 'Veg Manchurian', description: 'Vegetable dumplings tossed in a savory soy-based ginger and garlic sauce', price: 365, category: 'chinese', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500', isChefSpecial: true },
  { id: 'ch2', name: 'Paneer Chilli', description: 'Cottage cheese cubes tossed with bell peppers and onions in a spicy soya sauce', price: 395, category: 'chinese', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500' },
  { id: 'ch3', name: 'Spring Rolls', description: 'Golden fried rolls stuffed with seasoned vegetables and glass noodles', price: 315, category: 'chinese', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { id: 'ch4', name: 'Veg Chowmein', description: 'Stir-fried noodles with crisp vegetables and traditional Chinese seasonings', price: 345, category: 'chinese', image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500' },

  // SOUTH INDIAN
  { id: 'si1', name: 'Masala Dosa', description: 'Crispy rice crepe filled with a spiced potato and onion mash', price: 250, category: 'south-indian', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500' },
  { id: 'si2', name: 'Rava Masala Dosa', description: 'Semolina-based crispy crepe with a spicy potato filling', price: 280, category: 'south-indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500' },
  { id: 'si3', name: 'Sagar Special Paneer Dosa', description: 'Signature crispy dosa stuffed with spiced paneer and house secret masalas', price: 315, category: 'south-indian', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500', isChefSpecial: true },
  { id: 'si4', name: 'Idli Vada Combo', description: 'Choice of 3 pieces from Rice Idli & Medu Vada served with sambar and chutney', price: 215, category: 'south-indian', image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?w=500' },

  // NORTH INDIAN
  { id: 'ni1', name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight with butter and cream', price: 345, category: 'north-indian', image: 'https://images.unsplash.com/photo-1626500155552-67847c20a4b7?w=500', isChefSpecial: true },
  { id: 'ni2', name: 'Paneer Butter Masala', description: 'Cubes of cottage cheese in a rich, velvety tomato and butter gravy', price: 415, category: 'north-indian', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500' },
  { id: 'ni3', name: 'Shahi Paneer', description: 'Paneer in a royal, aromatic white gravy made with nuts and cream', price: 415, category: 'north-indian', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500' },
  { id: 'ni4', name: 'Dal Tadka (Arhar)', description: 'Yellow lentils tempered with cumin, garlic, and dried red chillies', price: 325, category: 'north-indian', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500' },

  // COMBOS
  { id: 'co1', name: 'Chole Bhature', description: 'Spicy chickpea curry served with large, fluffy fried bread and pickles', price: 220, category: 'combos', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500', isChefSpecial: true },
  { id: 'co2', name: 'North Indian Thali', description: 'Shahi Paneer, Mix Veg, Dal Makhni, Naan, Paratha, Rice, Raita, and Sweet', price: 399, category: 'combos', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500', isOffer: true, offerPrice: 349 },
  { id: 'co3', name: 'Masala Dosa Combo', description: 'Masala Dosa, Dahi Vada Single, and Choice of Filter Coffee or Buttermilk', price: 335, category: 'combos', image: 'https://images.unsplash.com/photo-1645177625172-8957470f56ee?w=500' },

  // DRINKS
  { id: 'dr1', name: 'Filter Coffee', description: 'Authentic South Indian decoction coffee with frothed hot milk', price: 80, category: 'drinks', image: 'https://images.unsplash.com/photo-1572442313968-c3997227c44e?w=500' },
  { id: 'dr2', name: 'Lassi (Sweet)', description: 'Thick, creamy yogurt drink topped with a layer of malai', price: 125, category: 'drinks', image: 'https://images.unsplash.com/photo-1596791011545-7470a5c43941?w=500' },
  { id: 'dr3', name: 'Cold Coffee', description: 'Perfectly blended chilled coffee with a dash of chocolate syrup', price: 195, category: 'drinks', image: 'https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=500' },

  // DESSERTS
  { id: 'de1', name: 'Ras Malai', description: 'Soft cottage cheese dumplings soaked in saffron-infused milk', price: 50, category: 'desserts', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500', isChefSpecial: true },
  { id: 'de2', name: 'Jalebi (Pure Desi Ghee)', description: 'Crispy, syrupy swirls made in high-quality clarified butter', price: 95, category: 'desserts', image: 'https://images.unsplash.com/photo-1589111474503-45f8e58f8b36?w=500' },
  { id: 'de3', name: 'Gulab Jamun', description: 'Deep-fried berry-sized balls made with milk solids, soaked in rose syrup', price: 55, category: 'desserts', image: 'https://images.unsplash.com/photo-1548840410-ad2acc2239d5?w=500' },
];

export const skyGardenMenuItems: MenuItem[] = [
  // SOUPS & SNACKS
  { id: 'sg-s1', name: 'Tomato Soup', description: 'Classic rich tomato soup served with crispy bread croutons', price: 175, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=500' },
  { id: 'sg-s2', name: 'Veg Manchow Soup', description: 'Spicy ginger-garlic soup topped with crispy fried noodles', price: 195, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500' },
  { id: 'sg-s3', name: 'Chicken Hot & Sour', description: 'A dark, spicy tingly soup loaded with chicken, eggs, and mushrooms', price: 225, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500', isNonVeg: true },
  { id: 'sg-s4', name: 'Mushroom Cheese Sandwich', description: 'Freshly grilled jumbo sandwich stuffed with buttered mushrooms and cheese', price: 265, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { id: 'sg-s5', name: 'Spinach Cheese Corn Sandwich', description: 'Healthy and creamy spinach, sweet corn, and mozzarella sandwich', price: 295, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500', isChefSpecial: true },
  { id: 'sg-s6', name: 'Cheese Burger Regular', description: 'A golden veg patty topped with double cheese, fresh lettuce, and tomatoes', price: 195, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: 'sg-s7', name: 'Chicken Regular Burger', description: 'Succulent grilled chicken breast patty layered with house sauces', price: 199, category: 'soups-sandwiches', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', isNonVeg: true },

  // STARTERS & PIZZAS
  { id: 'sg-p1', name: 'Margherita Pizza', description: 'Classic mozzarella cheese and tangy homemade tomato sauce base with fresh basil', price: 325, category: 'starters', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500' },
  { id: 'sg-p2', name: 'Cheese Paneer Pizza', description: 'Creamy thin crust pizza loaded with marinated paneer, capsicum, and golden corn', price: 425, category: 'starters', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500', isChefSpecial: true },
  { id: 'sg-p3', name: 'Sky Garden Parcel', description: 'Gently baked puff pastry wrap with spiced paneer cubes and creamy cheese stuffing', price: 275, category: 'starters', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500' },
  { id: 'sg-st1', name: 'Chilli Paneer Dry', description: 'Wok-tossed cottage cheese chunks with bell peppers and green chillies in soy sauce', price: 395, category: 'starters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500' },
  { id: 'sg-st2', name: 'Honey Chilli Potato', description: 'Super crispy potato wedges glazed with direct organic honey and hot chilli sauce', price: 345, category: 'starters', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500' },
  { id: 'sg-st3', name: 'Paneer Malai Tikka', description: 'Cubes of paneer marinated in a rich, mild cashew-nut and fresh cream base, grilled in tandoor', price: 345, category: 'starters', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500' },
  { id: 'sg-st4', name: 'Tandoori Chicken Tikka', description: 'Juicy, flame-grilled chicken chunks marinated in yogurt and hot tandoori spices', price: 430, category: 'starters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500', isNonVeg: true },
  { id: 'sg-st5', name: 'Mutton Tikka', description: 'Extremely tender mutton cubes slow-cooked in charcoal oven with royal masalas', price: 525, category: 'starters', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500', isNonVeg: true, isChefSpecial: true },
  { id: 'sg-st6', name: 'Chicken Lollipop', description: 'Deep-fried frenched chicken wings seasoned and served hot with spicy Schezwan dip', price: 370, category: 'starters', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500', isNonVeg: true },

  // MAIN COURSE
  { id: 'sg-m1', name: 'Sky Special Dal Tadka', description: 'Traditional split yellow lentils slow-cooked and double tempered with pure ghee and dry chillies', price: 315, category: 'main-course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500' },
  { id: 'sg-m2', name: 'Kadhai Paneer', description: 'Cottage cheese pieces cooked in a spicy onion-tomato gravy with freshly ground kadhai masala', price: 415, category: 'main-course', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500' },
  { id: 'sg-m3', name: 'Mutter Mushroom Masala', description: 'Fresh button mushrooms and sweet green peas simmered in a luscious masala gravy', price: 395, category: 'main-course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500' },
  { id: 'sg-m4', name: 'Butter Chicken (Rooftop Classic)', description: 'Tandoori grilled boneless chicken simmered in our signature velvet tomato butter sauce', price: 485, category: 'main-course', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500', isNonVeg: true, isChefSpecial: true },
  { id: 'sg-m5', name: 'Mutton Rogan Josh', description: 'Tender lamb slow-braised in a rich gravy spiced with Kashmiri dry red chillies and saffron', price: 610, category: 'main-course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500', isNonVeg: true },
  { id: 'sg-m6', name: 'Mix Veg Paneer Biryani', description: 'Fragrant, long-grain basmati rice layered with garden fresh vegetables, paneer, and rich saffron', price: 415, category: 'main-course', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500' },
  { id: 'sg-m7', name: 'Chicken Dum Biryani', description: 'Marinated chicken slow-cooked with basmati rice, mint, coriander, and secret chef spices', price: 470, category: 'main-course', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500', isNonVeg: true },

  // MOCKTAILS & SHAKES
  { id: 'sg-d1', name: 'Fresh Mint Mojito', description: 'Cool and refreshing soda with fresh muddled mint leaves, lime juice, and sweet syrup', price: 150, category: 'drinks', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500' },
  { id: 'sg-d2', name: 'Blue Breeze Mojito', description: 'Refreshing blue curacao mixed with garden fresh mint, lime slices, and cold club soda', price: 150, category: 'drinks', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500' },
  { id: 'sg-d3', name: 'Oreo Thick Shake', description: 'Indulgent creamy shake blended with chocolate ice cream, fresh milk, and whole Oreos', price: 175, category: 'drinks', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500' },
  { id: 'sg-d4', name: 'Brownie Shake Premium', description: 'A dense, rich shake blended with premium chocolate fudge brownie pieces', price: 195, category: 'drinks', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', isChefSpecial: true },
  { id: 'sg-d5', name: 'Cold Coffee with Ice Cream', description: 'Strong, perfectly blended espresso coffee served with a large scoop of vanilla bean ice cream', price: 160, category: 'drinks', image: 'https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=500' },

  // SWEETS & DESSERTS
  { id: 'sg-de1', name: 'Warm Brownie with Ice Cream', description: 'Hot, sizzling chocolate fudge brownie served under a scoop of chilled vanilla ice cream', price: 245, category: 'desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500', isChefSpecial: true },
  { id: 'sg-de2', name: 'Gulab Jamun (Double Delight)', description: 'Two warm, sweet milk-solid dumplings soaked in traditional rose and cardamom syrup', price: 95, category: 'desserts', image: 'https://images.unsplash.com/photo-1548840410-ad2acc2239d5?w=500' },
  { id: 'sg-de3', name: 'Jalebi (Desi Ghee)', description: 'Perfectly crispy, hot syrupy swirls made in high-quality clarified butter', price: 95, category: 'desserts', image: 'https://images.unsplash.com/photo-1589111474503-45f8e58f8b36?w=500' },
];

export const menuItems = sagarShreeMenuItems; // Legacy fallback
