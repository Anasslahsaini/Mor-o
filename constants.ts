import { Product } from './types';

export const BRAND_NAME = "Morço.";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nebula Puffer V1',
    price: 450,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=1000',
    description: 'Thermal insulation for deep space or deep powder. Reflective metallic finish.'
  },
  {
    id: '2',
    name: 'Orbit Goggles',
    price: 180,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000', // Ski goggles placeholder
    description: 'Anti-fog, UV400, HUD-ready clarity for blinding snowstorms.'
  },
  {
    id: '3',
    name: 'Void Runner Pants',
    price: 320,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1551854838-255c27d8122d?auto=format&fit=crop&q=80&w=1000', // Ski pants placeholder
    description: 'Waterproof gore-tex shell with zero-gravity mobility fit.'
  },
  {
    id: '4',
    name: 'Lunar Fleece',
    price: 150,
    category: 'Midlayer',
    image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&q=80&w=1000',
    description: 'High-loft fleece mimicking the warmth of a star.'
  }
];

export const NAV_ITEMS = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
];