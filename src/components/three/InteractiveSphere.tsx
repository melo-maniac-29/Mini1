import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from './hooks/useMousePosition';

export function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosition = useMousePosition();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Smooth rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    
    // Mouse-based distortion with null check
    const distortionStrength = Math.sin(time) * 0.3 + 
      (mousePosition && (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.2 || 0);
    
    const material = meshRef.current.material as any;
    if (material) {
      material.distort = THREE.MathUtils.lerp(0.2, 0.6, distortionStrength);
    }

    // Optional: Add a subtle scaling effect based on mouse position
    if (mousePosition) {
      const scale = 1 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Sphere ref={meshRef} args={[2, 128, 128]}>
        <MeshDistortMaterial
          color="#60a5fa"
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.3}
          envMapIntensity={2}
        />
      </Sphere>
    </>
  );
}