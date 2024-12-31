import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
    </div>
  );
}