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
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:flex flex-col items-center fixed left-8 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="glass-panel p-2 rounded-full shadow-2xl flex flex-col items-center gap-4">
        <NavItem 
          icon={<Home size={22} />} 
          label="Store"
          active={currentView === 'store'} 
          onClick={() => onNavigate('store')}
        />
        <div className="w-6 h-[1px] bg-white/10" />
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
    className="relative group p-4 rounded-full flex items-center justify-center"
  >
    <div className={`transition-colors duration-300 ${
      active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
    }`}>
      {icon}
    </div>
    
    {/* Tooltip */}
    <span className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </motion.button>
);

export default Sidebar;