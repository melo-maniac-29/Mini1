import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface PropertySectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string; // Optional className for customization
}

export function PropertySection({ title, icon: Icon, children, className }: PropertySectionProps) {
  return (
    <div className={`space-y-4 ${className || ''}`} aria-labelledby={title}>
      <h3 className="text-sm font-medium text-gray-700 flex items-center">
        <Icon className="w-4 h-4 mr-2" />
        {title}
      </h3>
      {children && <div>{children}</div>} {/* Render children only if they exist */}
    </div>
  );
}
