import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

interface LoadingSceneProps {
  progress: number;
}

function AnimatedSphere({ progress }: { progress: number }) {
  const meshRef = useRef();

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color={`hsl(${progress * 1.2}, 100%, 50%)`} // Color changes based on progress
        attach="material"
        distort={0.4 + progress / 100} // Distortion increases with progress
        speed={2}
        roughness={0.1}
        metalness={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={2}
      />
    </Sphere>
  );
}

export function LoadingScene({ progress }: LoadingSceneProps) {
  return (
    <>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: [-1000, 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 3D Scene */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere progress={progress} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </>
  );
}
