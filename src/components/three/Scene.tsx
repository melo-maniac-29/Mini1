import React from 'react';
import { PerspectiveCamera, Float, OrbitControls } from '@react-three/drei';
import { InteractiveSphere } from './InteractiveSphere';
import { FloatingRings } from './FloatingRings';
import { ParticleField } from './ParticleField';

export function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <InteractiveSphere />
      </Float>
      
      <FloatingRings />
      <ParticleField />

      {/* Add OrbitControls for camera interaction */}
      <OrbitControls />
    </>
  );
}
