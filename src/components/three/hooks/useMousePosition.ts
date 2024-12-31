import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(normalized: boolean = true) {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = normalized
        ? (event.clientX / window.innerWidth) * 2 - 1
        : event.clientX;
      const y = normalized
        ? -(event.clientY / window.innerHeight) * 2 + 1
        : event.clientY;

      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [normalized]);

  return mouse;
}
