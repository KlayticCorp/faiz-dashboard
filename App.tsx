import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import AboutView from './components/AboutView';
import LegalModal, { LegalType } from './components/LegalModal';
import { PRODUCTS } from './constants';
import { Product } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import WordReveal from './components/WordReveal';
import { Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentView, setCurrentView] = useState<'store' | 'about'>('store');
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalType | null>(null);

  // Handle responsive check for layout animation
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full bg-black text-[#F5F5F7] font-sans overflow-hidden selection:bg-white selection:text-black relative">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      {/* Main Content Area */}
      <motion.main 
        className="flex-1 md:ml-32 h-full overflow-y-auto no-scrollbar relative z-10 bg-black"
      >
        <AnimatePresence mode='wait'>
            {currentView === 'store' ? (
            <motion.div 
                key="store"
                className="min-h-full flex flex-col"
            >
                {/* Header Section */}
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 pb-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <WordReveal 
                          as="h1"
                          text="Faiz Ehsan."
                          className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tight"
                          delay={0}
                        />
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="https://x.com/faiz__Ehsan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#1C1C1E] border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                        >
                            {/* X Logo SVG */}
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/midjourney_legend?igsh=c3Z3b3I3ZHd1Z29s" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#1C1C1E] border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Single Product Display */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-[420px]"
                    >
                        <ProductCard 
                            product={PRODUCTS[0]} 
                            onOpenDetails={(p) => setSelectedProduct(p)}
                        />
                        
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 1 }}
                          className="text-center mt-8 text-gray-500 font-serif italic"
                        >
                          The Collection.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Footer Links */}
                <div className="pb-32 md:pb-8 w-full flex justify-center">
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium tracking-wide">
                        <button onClick={() => setActiveLegalDoc('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => setActiveLegalDoc('refund')} className="hover:text-white transition-colors">Refund Policy</button>
                        <button onClick={() => setActiveLegalDoc('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
                    </div>
                </div>
            </motion.div>
            ) : (
                <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AboutView onOpenLegal={setActiveLegalDoc} />
                </motion.div>
            )}
        </AnimatePresence>
      </motion.main>

      {/* Product Details Modal */}
      <ProductModal 
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      {/* Legal Documents Modal */}
      <LegalModal 
        isOpen={!!activeLegalDoc}
        type={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
      
    </div>
  );
};

export default App;