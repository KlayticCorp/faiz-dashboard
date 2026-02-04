import React, { useMemo } from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  // Generate a random delay for the shine animation so cards don't pulse in sync
  const randomDelay = useMemo(() => Math.random() * 5 + 3, []);

  const cardVariants = {
    hidden: { 
        opacity: 0, 
        filter: "blur(12px)",
        scale: 0.98,
        y: 15
    },
    visible: { 
        opacity: 1, 
        filter: "blur(0px)",
        scale: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.2, 0.65, 0.3, 0.9]
        } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => onOpenDetails(product)}
      className="group relative bg-[#1C1C1E] rounded-3xl flex flex-col border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden h-[540px] cursor-pointer"
    >
      {/* Top half: Image Area */}
      <div className="h-[55%] w-full relative overflow-hidden bg-black border-b border-white/5">
         <motion.div 
            className="w-full h-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
         >
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
         </motion.div>
      </div>

      {/* Bottom half: Content */}
      <div className="h-[45%] p-7 flex flex-col bg-[#1C1C1E] relative">
        <div className="flex justify-between items-start mb-2 gap-4">
             <h3 className="text-[22px] font-semibold tracking-tight text-white leading-tight font-sans w-full">
               <ScrambleText text={product.title} />
             </h3>
        </div>

        <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-4 font-normal mt-2">
          {product.description}
        </p>

        {/* Footer with unique Pricing Animation */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
           <span className="text-sm text-gray-500 font-medium">
             {product.category}
           </span>
           
           {/* Animated Price Tag */}
           <div className="relative overflow-hidden group/price py-1 px-3 -mr-3 rounded-lg">
                <span className="text-white font-semibold text-lg relative z-10 flex gap-0.5">
                    <span>$</span>
                    {product.price.toFixed(2)}
                </span>
                
                {/* Random Subtle Shine effect - Automatic */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: '-150%' }}
                    animate={{ x: '150%' }}
                    transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 1.5, 
                        repeatDelay: randomDelay,
                        ease: "linear" 
                    }}
                />
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;