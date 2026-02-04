import React from 'react';
import { ShoppingBag, Trash2, X, ArrowRight, Tag } from 'lucide-react';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface CartSidebarProps {
  items: CartItem[];
  onRemoveItem: (cartId: string) => void;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ items, onRemoveItem, onClose }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  return (
    <div className="w-full h-full flex flex-col bg-[#1C1C1E]/90 backdrop-blur-3xl relative">
        
      {/* Header */}
      <div className="px-8 pt-10 pb-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
            <span className="font-serif text-3xl text-white">Bag</span>
            <div className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
            </div>
        </div>
        <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
        >
            <X size={18} />
        </button>
      </div>

      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar space-y-5 relative">
        <AnimatePresence mode='popLayout'>
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4 pb-20"
          >
            <ShoppingBag size={48} strokeWidth={1} className="opacity-20" />
            <span className="font-serif text-xl italic opacity-50">Your bag is empty</span>
          </motion.div>
        ) : (
          items.map((item) => (
            <motion.div 
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                key={item.cartId} 
                className="group relative flex p-3 pr-4 rounded-[1.5rem] bg-[#2C2C2E] shadow-sm hover:shadow-md transition-all duration-300 border border-white/5"
            >
              {/* Image Thumbnail */}
              <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-black shadow-inner">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90" />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 pl-4 py-1 min-w-0 justify-between">
                <div className="flex justify-between items-start gap-2">
                    <span className="font-serif text-[1.1rem] text-white leading-tight truncate">
                        {item.title}
                    </span>
                    <span className="font-bold text-white text-sm shrink-0">
                        ${item.price.toFixed(2)}
                    </span>
                </div>
                
                <div className="flex items-end justify-between mt-1">
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-medium bg-white/5 px-2 py-1 rounded-md">
                        {item.category}
                    </span>
                    
                    <button 
                        onClick={() => onRemoveItem(item.cartId)}
                        className="w-7 h-7 flex items-center justify-center rounded-full text-gray-500 hover:text-red-400 hover:bg-red-900/20 transition-all"
                        title="Remove"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
        </AnimatePresence>
      </div>

      {/* Summary Footer */}
      <div className="p-8 bg-[#1C1C1E] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] relative z-20">
        <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-base font-semibold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative overflow-hidden w-full py-4 rounded-2xl text-black font-medium text-lg shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group ${
            items.length > 0 
              ? 'bg-white hover:bg-gray-100' 
              : 'bg-gray-700 cursor-not-allowed text-gray-400'
          }`}
          disabled={items.length === 0}
        >
          <span className="relative z-10 flex items-center gap-2">Checkout <ArrowRight size={18} /></span>
        </motion.button>

        <div className="mt-4 flex items-center justify-center gap-2 text-gray-500">
            <Tag size={12} />
            <p className="text-[11px] font-medium text-center">
                Redeem codes can be redeemed during checkout.
            </p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;