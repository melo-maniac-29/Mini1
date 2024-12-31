import React from 'react';
import { motion } from 'framer-motion';

interface LoadingOrbProps {
  progress: number;
}

export function LoadingOrb({ progress }: LoadingOrbProps) {
  return (
    <div className="relative w-32 h-32">
      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main orb */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent" />
      </motion.div>

      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          className="text-gray-200 dark:text-gray-800"
          strokeWidth="4"
          stroke="currentColor"
          fill="none"
          r="58"
          cx="64"
          cy="64"
        />
        <motion.circle
          className="text-blue-500"
          strokeWidth="4"
          stroke="currentColor"
          fill="none"
          r="58"
          cx="64"
          cy="64"
          strokeDasharray={`${progress * 3.64} 364`}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}