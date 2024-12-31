import React from 'react';
import { motion } from 'framer-motion';

interface GlowingOrbProps {
  progress: number;
  size?: number;
  color?: string;
}

export function GlowingOrb({ progress, size = 24, color = '#3b82f6' }: GlowingOrbProps) {
  return (
    <div className="relative flex justify-center mb-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        {/* Outer glow rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(96, 165, 250, ${0.1 - i * 0.02}) 0%, transparent 70%)`,
              transform: `scale(${1.5 + i * 0.5})`,
            }}
            animate={{
              scale: [1.5 + i * 0.5, 2 + i * 0.5, 1.5 + i * 0.5],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Core orb */}
        <motion.div
          className="w-24 h-24 rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(45deg, ${color}, #60a5fa)`,
            boxShadow: `0 0 30px rgba(96, 165, 250, 0.5)`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Inner swirl effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
          aria-label="Progress Ring"
          role="progressbar"
        >
          <circle
            className="text-blue-500/20"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            r="38"
            cx="50"
            cy="50"
          />
          <motion.circle
            className="text-blue-500"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            r="38"
            cx="50"
            cy="50"
            strokeDasharray={`${progress * 2.4} 240`}
          />
        </svg>
      </motion.div>
    </div>
  );
}
