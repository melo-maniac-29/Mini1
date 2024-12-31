import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      sizes[i] = Math.random() * 0.1;
    }
    
    return [positions, sizes];
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    const time = clock.getElapsedTime();
    
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.03;

    // Apply random movement to particles
    const positionsArray = points.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] += Math.sin(time + i) * 0.01; // X movement
      positionsArray[i * 3 + 1] += Math.cos(time + i) * 0.01; // Y movement
      positionsArray[i * 3 + 2] += Math.sin(time + i * 0.5) * 0.01; // Z movement
    }

    points.current.geometry.attributes.position.needsUpdate = true; // Update the position buffer
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        transparent
        color="#60a5fa"
        opacity={0.3}
        depthWrite={false}
      />
    </points>
  );
}
