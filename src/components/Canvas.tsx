import React from 'react';
import { Move } from 'lucide-react';

export function Canvas() {
  return (
    <div className="flex-1 bg-gray-50 h-screen overflow-auto">
      <div className="h-full flex items-center justify-center">
        <div className="bg-white w-[1200px] h-[800px] shadow-lg rounded-lg relative group">
          <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <div className="text-center space-y-4">
              <Move className="w-8 h-8 text-gray-400 mx-auto" />
              <p className="text-gray-500">Drag components here to start building</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}