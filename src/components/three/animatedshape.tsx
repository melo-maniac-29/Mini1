// src/components/three/AnimatedShape.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

const AnimatedShape = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Canvas>
        {/* Example of a rotating 3D cube */}
        <motion.mesh
          animate={{ rotateY: [0, Math.PI * 2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="royalblue" />
        </motion.mesh>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};

export default AnimatedShape;
