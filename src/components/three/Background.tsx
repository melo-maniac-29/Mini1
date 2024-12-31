import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          dpr={[1, 2]} // Adjust device pixel ratio for performance
          camera={{ position: [0, 2, 5], fov: 50 }} // Customize camera
          aria-hidden="true" // Mark as decorative
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Scene Content */}
          <Scene />

          {/* Controls */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </div>
  );
}
