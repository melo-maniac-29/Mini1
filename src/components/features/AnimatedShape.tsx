import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedShape() {
  return (
    <div className="relative w-full h-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Background moving gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-2xl will-change-transform"
      />

      {/* Glowing Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full bg-gradient-to-tl from-blue-500 to-purple-600 opacity-30 blur-2xl"
        />
      </div>

      {/* Geometric shape with clean 3D effect */}
      <div className="relative w-64 h-64 sm:w-48 sm:h-48 flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
        {/* 3D effect with shadows */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-md border-4 border-dashed border-blue-500 dark:border-blue-400 glow-effect will-change-transform shadow-xl"
        />
        
        {/* Text with neon glow */}
        <div className="text-4xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-glow">
          ECHO
        </div>
      </div>
    </div>
  );
}
