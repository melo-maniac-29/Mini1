import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
  damping?: number;  // Optional prop for damping
  stiffness?: number;  // Optional prop for stiffness
  yMovement?: number;  // Optional prop for vertical movement
  scale?: number;  // Optional prop for scaling effect
}

export function AnimatedLetters({
  text,
  className = '',
  delay = 0,
  damping = 12,  // Default value for damping
  stiffness = 200,  // Default value for stiffness
  yMovement = 20,  // Default vertical movement
  scale = 1,  // Default scale
}: AnimatedLettersProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
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
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
