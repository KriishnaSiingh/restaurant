import React, { createContext, useContext, useState, useEffect } from 'react';

export type ActiveSite = 'sagarshree' | 'skygarden';

export interface SiteData {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  zomatoLink: string;
  swiggyLink: string;
  instagramLink: string;
  facebookLink: string;
  hours: {
    restaurant: string;
    bar: string;
    hotel?: string;
  };
  aboutText1: string;
  aboutText2: string;
  chefName: string;
  chefTitle: string;
  chefDescription: string;
  chefQuote: string;
  chefImage: string;
  heroImage1: string;
  heroImage2: string;
  categories: { key: string; label: string }[];
  testimonials: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
}

interface ActiveSiteContextType {
  activeSite: ActiveSite;
  toggleSite: () => void;
  siteData: SiteData;
}

const contextData: Record<ActiveSite, SiteData> = {
  sagarshree: {
    name: 'Sagar Shree',
    tagline: 'Veg & Non-Veg Family Restaurant',
    address: 'In front of New Anand Lok Hospital, Chatrasangh Chauraha, Bilandpur, Gorakhpur',
    phone: '+91 7379532767',
    email: 'sagarshree2022@gmail.com',
    zomatoLink: 'https://www.zomato.com/gorakhpur/sagar-shree-golghar',
    swiggyLink: 'https://www.swiggy.com/city/gorakhpur/sagar-shree-south-indian-specialist-belipar-road-cantt-road-rest403656',
    instagramLink: 'https://www.instagram.com/sagar_shree_gorakhpur/',
    facebookLink: 'https://www.facebook.com/profile.php?id=61577955009279#',
    hours: {
      restaurant: 'Mon–Sun: 11:00 AM – 11:00 PM',
      bar: 'Closed (Pure Family Environment)',
      hotel: '24/7 Hotel Sapphire Inn Front Desk'
    },
    aboutText1: 'Sagar Shree is a premium culinary landmark in Gorakhpur, dedicated to serving authentic Indian, Chinese, and regional specialties. Founded on the principles of fresh ingredients and warm family hospitality, we provide a spacious, elegant setting on our lovely rooftop or inside our plush dining hall.',
    aboutText2: 'Nestled atop the Sapphire Inn building, our establishment serves the finest vegetarian and non-vegetarian dishes, prepared by seasoned chefs. Every meal is a celebration of rich flavors, secret spices, and visual artistry.',
    chefName: 'Chef Ram Bahadur',
    chefTitle: 'Executive Head Chef',
    chefDescription: 'With over 18 years of culinary excellence in high-end Indian and Mughlai cuisines, Chef Ram balances traditional clay oven cooking with contemporary plating to create an unforgettable dining experience for families.',
    chefQuote: 'Good food is the foundation of genuine happiness. At Sagar Shree, we do not just cook; we preserve a legacy of rich flavors.',
    chefImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600',
    heroImage1: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
    heroImage2: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1050',
    categories: [
      { key: 'chaat', label: 'Chaat Mahal' },
      { key: 'chinese', label: 'Chinese' },
      { key: 'south-indian', label: 'South Indian' },
      { key: 'north-indian', label: 'North Indian' },
      { key: 'combos', label: 'Combos & Meals' },
      { key: 'drinks', label: 'Beverages' },
      { key: 'desserts', label: 'Desserts' },
    ],
    testimonials: [
      { name: 'Sophia Laurent', role: 'Food Critic', text: 'An unforgettable culinary journey. The butter paneer alone is worth the visit. The family ambience is warm and welcoming.', rating: 5 },
      { name: 'Aditya Singh', role: 'Local Guide', text: 'Sagar Shree is hands down the best family restaurant in Bilandpur. Generous portions, authentic spices, and lovely service.', rating: 5 },
      { name: 'Elena Vasquez', role: 'Travel Blogger', text: 'Stunning service and a highly curated menu. The Dal Makhani has a smoky charcoal flavor that is out of this world.', rating: 5 },
    ]
  },
  skygarden: {
    name: 'Sky Garden',
    tagline: 'Roof Top Cafe & Lounge',
    address: 'In front of New Anand Lok Hospital, Chatrasangh Chauraha, Bilandpur, Gorakhpur',
    phone: '+91 7379532767',
    email: 'sagarshree2022@gmail.com',
    zomatoLink: 'https://www.zomato.com/gorakhpur/sky-garden-roof-top-cafe-lounge-golghar',
    swiggyLink: 'https://www.swiggy.com/city/gorakhpur/order-online',
    instagramLink: 'https://www.instagram.com/skygarden_rooftop_gorakhpur/',
    facebookLink: 'https://www.facebook.com/p/Sky-garden-restaurant-100093190701800/',
    hours: {
      restaurant: 'Mon–Sun: 12:00 PM – 11:00 PM',
      bar: 'Mon–Sun: 12:00 PM – 11:30 PM (Beverages & Mocktails)',
      hotel: '24/7 Hotel Sapphire Inn Front Desk'
    },
    aboutText1: 'Sky Garden is Gorakhpur\'s premier rooftop cafe and lounge, offering breathtaking open-air skyline views combined with a dynamic culinary experience. It is a vibrant oasis where gourmet food, handcrafted mocktails, and live acoustic music come together under a canopy of stars.',
    aboutText2: 'Enjoy a selection of delicious continental starters, gourmet pizzas, sizzling momos, and decadent shakes. Perfect for romantic candlelit dinners, casual get-togethers, or high-energy evening parties.',
    chefName: 'Chef Sameer Sen',
    chefTitle: 'Executive Lounge Chef',
    chefDescription: 'A maestro of continental fusion, Chef Sameer studied hospitality in Goa and brings a fresh, vibrant coastal energy to our rooftop lounge. He specializes in hand-tossed pizzas, fusion pastas, and premium Chinese starters.',
    chefQuote: 'Rooftop dining is an immersive sensory experience. The food must be as dramatic and beautiful as the sunset and skyline views around you.',
    chefImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600',
    heroImage1: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop',
    heroImage2: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1050',
    categories: [
      { key: 'soups-sandwiches', label: 'Soups & Snacks' },
      { key: 'starters', label: 'Starters & Pizzas' },
      { key: 'main-course', label: 'Main Course' },
      { key: 'drinks', label: 'Mocktails & Shakes' },
      { key: 'desserts', label: 'Sweets & Desserts' },
    ],
    testimonials: [
      { name: 'Karan Malhotra', role: 'Lounge Regular', text: 'Gorakhpur needed a place like this! The open-roof vibe at sunset is unmatched. Their chilli cheese momos are absolutely stellar.', rating: 5 },
      { name: 'Riya Sen', role: 'Vlogger', text: 'Sky Garden has the most instagrammable sunset view in Gorakhpur. The cocktails, mocktails, and thin-crust pizza are top notch!', rating: 5 },
      { name: 'Vikram Rathore', role: 'Event Manager', text: 'Hosting a dinner party at Sky Garden was a breeze. Elegant rooftop glass structures, cozy seating, and excellent fusion appetizers.', rating: 5 },
    ]
  }
};

const ActiveSiteContext = createContext<ActiveSiteContextType | undefined>(undefined);

export const ActiveSiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSite, setActiveSite] = useState<ActiveSite>(() => {
    const saved = localStorage.getItem('activeSite');
    return (saved === 'skygarden' || saved === 'sagarshree') ? saved : 'sagarshree';
  });

  useEffect(() => {
    localStorage.setItem('activeSite', activeSite);
    
    // Apply theme class to document body / root
    const root = document.documentElement;
    const name = activeSite === 'skygarden' ? 'Sky Garden' : 'Sagar Shree';
    const tag = activeSite === 'skygarden' ? 'Rooftop Cafe & Lounge' : 'Veg & Non-Veg Family Restaurant';
    
    // Update Document Tab Title Dynamically
    document.title = `${name} | ${tag}`;
    
    // Update Favicon Dynamically to match brand identity
    const faviconUrl = activeSite === 'skygarden' ? '/skygarden-logo.png' : '/sagarshree-logo.png';
    
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/png';
    link.href = faviconUrl;

    if (activeSite === 'skygarden') {
      root.classList.add('theme-skygarden');
      root.classList.remove('theme-sagarshree');
    } else {
      root.classList.add('theme-sagarshree');
      root.classList.remove('theme-skygarden');
    }
  }, [activeSite]);

  const toggleSite = () => {
    setActiveSite((prev) => (prev === 'sagarshree' ? 'skygarden' : 'sagarshree'));
  };

  const siteData = contextData[activeSite];

  return (
    <ActiveSiteContext.Provider value={{ activeSite, toggleSite, siteData }}>
      {children}
    </ActiveSiteContext.Provider>
  );
};

export const useActiveSite = () => {
  const context = useContext(ActiveSiteContext);
  if (context === undefined) {
    throw new Error('useActiveSite must be used within an ActiveSiteProvider');
  }
  return context;
};
