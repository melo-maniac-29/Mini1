import React from 'react';
import { Undo, Redo, Eye, Save, Share2 } from 'lucide-react';
import { IconButton } from './ui/IconButton';

export function Toolbar() {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-4">
        <IconButton icon={Undo} title="Undo" />
        <IconButton icon={Redo} title="Redo" />
      </div>
      <div className="flex items-center space-x-4">
        <IconButton icon={Eye} title="Preview" />
        <IconButton icon={Save} title="Save" />
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Share2 className="w-4 h-4 mr-2" />
          Publish
        </button>
      </div>
    </div>
  );
}