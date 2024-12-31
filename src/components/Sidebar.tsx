import React from 'react';
import { LayoutGrid, Type, Image, Square, Box } from 'lucide-react';
import { ComponentItem } from './sidebar/ComponentItem';

const components = [
  { name: 'Layout', icon: LayoutGrid },
  { name: 'Text', icon: Type },
  { name: 'Image', icon: Image },
  { name: 'Button', icon: Square },
  { name: 'Container', icon: Box },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Components</h2>
      </div>
      <div className="p-4 space-y-2 flex-1 overflow-y-auto">
        {components.map((component) => (
          <ComponentItem
            key={component.name}
            name={component.name}
            icon={component.icon}
          />
        ))}
      </div>
    </div>
  );
}