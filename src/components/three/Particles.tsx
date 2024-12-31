import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

export function Particles({ count }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 0.1;
    }
    
    return [positions, sizes];
  }, [count]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();

      // Rotation
      mesh.current.rotation.x = time * 0.05;
      mesh.current.rotation.y = time * 0.075;

      // Apply dynamic movement (wind effect)
      const positionsArray = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positionsArray[i * 3] += Math.sin(time + i) * 0.01; // X movement
        positionsArray[i * 3 + 1] += Math.cos(time + i) * 0.01; // Y movement
        positionsArray[i * 3 + 2] += Math.sin(time + i * 0.5) * 0.01; // Z movement
      }

      mesh.current.geometry.attributes.position.needsUpdate = true; // Update the position buffer
    }
  });

  return (
    <points ref={mesh}>
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
        color="#4299e1"
        opacity={0.5}
      />
    </points>
  );
}
