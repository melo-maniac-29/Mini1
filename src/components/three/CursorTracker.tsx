import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from './hooks/useMousePosition';

export function CursorTracker() {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      // Smoothly interpolate position
      const targetX = (mouse.current!.x * viewport.width) / 2;
      const targetY = (mouse.current!.y * viewport.height) / 2;

      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.1);
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY, 0.1);

      // Optional: Add some depth effect
      mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, -0.5, 0.05);
    }
  });

  return (
    <Sphere ref={mesh} args={[0.2, 32, 32]}>
      <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} />
    </Sphere>
  );
}
