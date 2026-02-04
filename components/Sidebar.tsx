import React from 'react';
import { Home, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  currentView: 'store' | 'about';
  onNavigate: (view: 'store' | 'about') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <motion.aside 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-40 flex items-center justify-center
        bottom-6 left-1/2 -translate-x-1/2 
        md:bottom-auto md:left-8 md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
    >
      <div className="glass-panel rounded-full shadow-2xl flex items-center justify-center
        flex-row p-3 gap-6
        md:flex-col md:p-2 md:gap-4"
      >
        <NavItem 
          icon={<Home size={22} />} 
          label="Store"
          active={currentView === 'store'} 
          onClick={() => onNavigate('store')}
        />
        
        {/* Separator */}
        <div className="bg-white/10
          w-[1px] h-6
          md:w-6 md:h-[1px]" 
        />
        
        <NavItem 
          icon={<User size={22} />} 
          label="About"
          active={currentView === 'about'} 
          onClick={() => onNavigate('about')}
        />
      </div>
    </motion.aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
  label: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active, onClick, label }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative group p-3 md:p-4 rounded-full flex items-center justify-center"
  >
    <div className={`transition-colors duration-300 ${
      active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
    }`}>
      {icon}
    </div>
    
    {/* Tooltip - Desktop only */}
    <span className="hidden md:block absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </motion.button>
);

export default Sidebar;