import React, { useState, useEffect, useRef } from 'react';
import { MovingSphere } from './MovingSphere';

export function MouseTracker() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mouseRef = useRef(mouse);

  // Update mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
      setMouse({ x, y });
      mouseRef.current = { x, y }; // Update the ref as well
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MovingSphere mouse={mouseRef} />
  );
}
