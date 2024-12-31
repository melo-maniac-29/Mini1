import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProgressProps {
  progress: number;
  colorStart?: string;
  colorEnd?: string;
  dotSize?: number;
  barHeight?: number;
  duration?: number;
}

export function LoadingProgress({
  progress,
  colorStart = '#4ade80',
  colorEnd = '#3b82f6',
  dotSize = 6,
  barHeight = 2,
  duration = 0.5,
}: LoadingProgressProps) {
  // Ensure progress is a number between 0 and 100
  if (progress < 0 || progress > 100) {
    console.error("Progress must be between 0 and 100.");
    return null;
  }

  return (
    <div className="relative max-w-xs mx-auto">
      {/* Progress bar container */}
      <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full w-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration }}
        />
      </div>
      
      {/* Glowing dots */}
      <motion.div
        className="absolute top-0 -translate-y-2 w-1 h-1 rounded-full bg-blue-400"
        style={{
          boxShadow: '0 0 10px #60a5fa',
          left: `${progress}%`,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
        }}
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
      
      {/* Progress percentage */}
      <motion.span
        className="absolute right-0 top-2 text-sm text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {Math.round(progress)}%
      </motion.span>
    </div>
  );
}
