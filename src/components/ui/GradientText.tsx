import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export function GradientText({ text, className = '' }: GradientTextProps) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
            ease: "easeOut",
          }}
          className="inline-block mr-4 last:mr-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}