import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  title?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary';
}

export function IconButton({ 
  icon: Icon, 
  title, 
  onClick, 
  variant = 'default' 
}: IconButtonProps) {
  const baseClasses = "p-2 rounded-lg transition-colors";
  const variantClasses = variant === 'default' 
    ? "hover:bg-gray-100 text-gray-600" 
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      title={title}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}