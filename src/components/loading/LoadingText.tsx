import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingTextProps {
  phrases: string[];
  progress: number;
}

export function LoadingText({ phrases, progress }: LoadingTextProps) {
  const currentPhraseIndex = Math.min(
    Math.floor((progress / 100) * phrases.length),
    phrases.length - 1
  );

  return (
    <div className="relative flex justify-center items-center mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhraseIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="inline-block text-3xl font-semibold text-white mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              background: `linear-gradient(45deg, #6a1b9a, #00bcd4)`,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textShadow: `0 0 20px rgba(0, 188, 212, 0.8), 0 0 30px rgba(106, 27, 154, 0.8)`,
            }}
          >
            {phrases[currentPhraseIndex]}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
