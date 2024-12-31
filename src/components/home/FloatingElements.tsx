import React from 'react';
import { motion } from 'framer-motion';

export function FloatingElements() {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" />

      {/* Animated shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(96,165,250,0.3)' :
              i === 1 ? 'rgba(167,139,250,0.3)' :
              'rgba(99,102,241,0.3)'
            } 0%, transparent 70%)`,
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            willChange: 'transform', // Performance optimization
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
    </>
  );
}
