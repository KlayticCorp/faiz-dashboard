import React from 'react';
import { Bot, Cpu, Ship, Palette, Box, Folder, Command, Sparkles } from 'lucide-react';

interface AppIconProps {
  iconName: string;
  gradient: string;
  variant?: 'box' | 'list' | 'cover' | 'card';
}

const AppIcon: React.FC<AppIconProps> = ({ iconName, gradient, variant = 'box' }) => {
  
  const getIconSize = () => {
    switch (variant) {
      case 'list': return 24;
      case 'cover': return 80;
      case 'card': return 48;
      default: return 64;
    }
  };

  const getFontSize = () => {
    switch (variant) {
      case 'list': return '1.2rem';
      case 'cover': return '4rem';
      case 'card': return '2.5rem';
      default: return '3rem';
    }
  };

  const getIcon = () => {
    const props = { className: "text-white/90", size: getIconSize(), strokeWidth: 1.5 };
    
    switch (iconName) {
      case 'robot': return <Bot {...props} />;
      case 'ai': return <div className="text-white/90 font-bold tracking-tighter" style={{ fontSize: getFontSize() }}>AI</div>;
      case 'chip': return <Cpu {...props} />;
      case 'boat': return <Ship {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'box': return <Box {...props} />;
      case 'folder': return <Folder {...props} />;
      case 'command': return <Command {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const getContainerClasses = () => {
    switch (variant) {
      case 'list':
        return "w-12 h-12 rounded-xl shadow-sm mr-4";
      case 'cover':
        return "w-full h-full";
      case 'card':
        return "w-32 h-32 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]";
      default: // box
        return "w-32 h-32 rounded-[2.5rem] shadow-lg mb-6";
    }
  };

  return (
    <div className={`${getContainerClasses()} ${gradient} bg-gradient-to-br flex items-center justify-center shrink-0`}>
      {getIcon()}
    </div>
  );
};

export default AppIcon;