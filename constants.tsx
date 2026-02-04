import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Isometric style prompts.',
    price: 5.00,
    // Replace with your Roman Camp image URL
    image: './assets/images/card_img.jfif', 
    // Replace with your Samurai Temple image URL
    modalImage: './assets/images/board_img.jfif',
    iconName: 'box',
    gradient: 'from-orange-400 to-pink-500',
    category: 'AI Arts',
    description: 'Use this premade isometric style prompts to make arts like me.',
    longDescription: 'This gives u the same style of isometric world as seen in my videos.',
    features: ['Adaptive prompts', 'Can be used anywhere'],
    useCases: ['Brand videos', 'Concept arts', 'Viral reels'],
  },
];