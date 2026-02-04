import React from 'react';
import { X, Zap, Play } from 'lucide-react';
import { Product } from '../types';
import AppIcon from './AppIcon';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  return (
    <AnimatePresence>
    {isOpen && product && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Modal Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative w-full max-w-4xl bg-[#1C1C1E] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/10"
            >
                
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2.5 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/90 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Top: Horizontal Hero Image */}
                <div className="w-full h-72 md:h-96 relative bg-black shrink-0 overflow-hidden">
                    <img 
                        src={product.modalImage || product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent" />
                    
                    {/* Floating Text Title */}
                    <div className="absolute bottom-8 left-8 md:left-12">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-white/80 font-bold tracking-widest text-xs uppercase mb-2 block">
                                {product.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-none shadow-sm">
                                {product.title}
                            </h2>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom: Content */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-8 md:p-12 bg-[#1C1C1E]">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                            {product.longDescription}
                        </p>

                        {/* Preview Button */}
                        <a 
                            href="https://www.instagram.com/reel/DKXOzXGvNkc/?igsh=MW02MzFzNDBpOTJzNA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mb-12 group w-full md:w-auto justify-center"
                        >
                            <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                                <Play size={20} fill="currentColor" className="ml-1" />
                            </div>
                            <span className="text-lg tracking-tight">Watch Video Preview</span>
                        </a>

                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                            {/* Features */}
                            <div>
                                <h3 className="font-serif text-xl text-white mb-4 flex items-center gap-2">
                                    <Zap size={20} className="text-amber-400 fill-amber-400" />
                                    Features
                                </h3>
                                <ul className="space-y-4">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <h3 className="font-serif text-xl text-white mb-4">Use Cases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.useCases.map((useCase, idx) => (
                                        <span 
                                            key={idx} 
                                            className="bg-white/10 text-white px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide border border-white/5"
                                        >
                                            {useCase}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="flex items-center justify-between pt-8 border-t border-white/10">
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Price</span>
                                <span className="text-4xl font-serif text-white">${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )}
    </AnimatePresence>
  );
};

export default ProductModal;