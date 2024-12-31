import React from 'react';
import { Settings2, Palette } from 'lucide-react';
import { PropertySection } from './property-panel/PropertySection';

export function PropertyPanel() {
  return (
    <div className="w-72 bg-white border-l border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Properties</h2>
      </div>
      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        <PropertySection title="Layout" icon={Settings2}>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Width</label>
              <input
                type="text"
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded"
                defaultValue="100%"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Height</label>
              <input
                type="text"
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded"
                defaultValue="auto"
              />
            </div>
          </div>
        </PropertySection>

        <PropertySection title="Style" icon={Palette}>
          <div className="space-y-2">
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Background</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  className="w-8 h-8 rounded border border-gray-200"
                  defaultValue="#ffffff"
                />
                <input
                  type="text"
                  className="flex-1 px-2 py-1 text-sm border border-gray-200 rounded"
                  defaultValue="#FFFFFF"
                />
              </div>
            </div>
          </div>
        </PropertySection>
      </div>
    </div>
  );
}