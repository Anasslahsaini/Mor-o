import { Product } from '../types';

// ==========================================
// WORDPRESS / WOOCOMMERCE CONFIGURATION
// ==========================================
// To connect this to your real WordPress site:
// 1. Go to WooCommerce > Settings > Advanced > REST API
// 2. The keys you provided have been integrated below.

const WP_API_URL = 'https://purple-fly-957470.hostingersite.com/wp-json/wc/v3'; 
const CONSUMER_KEY = 'ck_584088e0ec7c4fa9c8383bb247011b63b7b536ea';
const CONSUMER_SECRET = 'cs_8d80d3889e6d5df06cb1db73de169eb92ed03529';

// Mock Data to simulate WordPress response while you are in development or if the API connection fails
const MOCK_WC_PRODUCTS: Product[] = [
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
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000',
    description: 'Anti-fog, UV400, HUD-ready clarity for blinding snowstorms.'
  },
  {
    id: '3',
    name: 'Void Runner Pants',
    price: 320,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1551854838-255c27d8122d?auto=format&fit=crop&q=80&w=1000',
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

export const getWooCommerceProducts = async (): Promise<Product[]> => {
  // Logic: We try to fetch real data from the provided URL.
  // Note: For this to work in a browser, your WordPress site must allow CORS (Cross-Origin Resource Sharing).
  // If fetch fails (due to CORS or network), it gracefully falls back to mock data.
  try {
    console.log(`Fetching products from ${WP_API_URL}...`);
    const res = await fetch(`${WP_API_URL}/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`);
    
    if (res.ok) {
      const data = await res.json();
      console.log('Products fetched successfully:', data);
      
      // Transform WooCommerce data structure to our App's Product structure
      return data.map((p: any) => ({
          id: p.id.toString(),
          name: p.name,
          price: parseFloat(p.price || '0'),
          category: p.categories && p.categories.length > 0 ? p.categories[0].name : 'Uncategorized',
          image: p.images && p.images.length > 0 ? p.images[0].src : 'https://placehold.co/600x600/002366/FFF?text=No+Image',
          description: p.short_description ? p.short_description.replace(/<[^>]+>/g, '') : 'No description available.'
      }));
    } else {
      console.warn(`WooCommerce API Error: ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.warn("Failed to fetch from real API (likely CORS or Network issue), falling back to mock data.", error);
  }

  // Fallback to mock data if fetch fails
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_WC_PRODUCTS);
    }, 800); 
  });
};