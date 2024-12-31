import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ringsRef.current) return;
    const time = clock.getElapsedTime();
    
    // Continuous rotation
    ringsRef.current.rotation.x = time * 0.1;
    ringsRef.current.rotation.y = time * 0.15;
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Environment Map for reflections */}
      <Environment preset="sunset" />

      {/* Group of rings */}
      <group ref={ringsRef}>
        {[...Array(3)].map((_, i) => (
          <Torus
            key={i}
            args={[3 + i * 0.8, 0.05, 32, 100]}
            rotation={[Math.PI / (i + 1), Math.PI / 3, 0]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color="#60a5fa"
              metalness={1}
              roughness={0.2}
              transparent
              opacity={0.2}
              envMapIntensity={1} // Reflective effect
            />
          </Torus>
        ))}
      </group>
    </>
  );
}
