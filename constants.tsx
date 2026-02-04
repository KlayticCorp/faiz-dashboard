import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Isometric style prompts.',
    price: 5.00,
    // Replace with your Roman Camp image URL
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop', 
    // Replace with your Samurai Temple image URL
    modalImage: 'https://images.unsplash.com/photo-1518548943362-798889ee8c4d?q=80&w=2670&auto=format&fit=crop',
    iconName: 'box',
    gradient: 'from-orange-400 to-pink-500',
    category: 'AI Arts',
    description: 'Use this premade isometric style prompts to make arts like me.',
    longDescription: 'This gives u the same style of isometric world as seen in my videos.',
    features: ['Adaptive prompts', 'Can be used anywhere'],
    useCases: ['Brand videos', 'Concept arts', 'Viral reels'],
  },
];