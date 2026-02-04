export type Category = 'All' | 'AI Arts' | 'Web Design' | 'AI Filmmaking';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string; // Image for the card
  modalImage?: string; // Image for the modal header
  iconName: 'robot' | 'ai' | 'chip' | 'boat' | 'palette' | 'box' | 'folder' | 'command';
  gradient: string;
  category: Category;
  description: string; // Short description for card
  longDescription: string; // Long description for modal
  features: string[];
  useCases: string[];
}

export interface CartItem extends Product {
  cartId: string; // Unique ID for the item in the cart to allow duplicates
}