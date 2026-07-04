import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number; // Lower is stronger pull, e.g., 3 means pull is 1/3 of distance
  range?: number; // Activation padding range in pixels
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 3,
  range = 150, // standard range as defined in the prompt
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Disable magnet interactions on touch screens or when user prefers reduced motion
    const touchDevice = window.matchMedia('(hover: none)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touchDevice || reducedMotion) {
      setDisabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      setIsHovered(true);
      setPosition({
        x: distanceX / strength,
        y: distanceY / strength,
      });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={
        isHovered
          ? { type: 'tween', ease: 'easeOut', duration: 0.3 }
          : { type: 'tween', ease: 'easeInOut', duration: 0.6 }
      }
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
