import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  damping?: number;  // Optional prop for damping
  stiffness?: number;  // Optional prop for stiffness
  yMovement?: number;  // Optional prop for vertical movement
  scale?: number;  // Optional prop for scaling effect
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  damping = 12,  // Default value for damping
  stiffness = 100,  // Default value for stiffness
  yMovement = 20,  // Default vertical movement
  scale = 1,  // Default scale
}: AnimatedTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: scale,
      transition: {
        type: "spring",
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y: yMovement,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
