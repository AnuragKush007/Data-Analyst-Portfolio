import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of paragraph container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.25"]
  });

  const words = text.split(' ');
  
  // Calculate total character count (including spaces for index mapping)
  const totalChars = text.replace(/\s/g, '').length;
  let characterCount = 0;

  return (
    <p 
      ref={containerRef} 
      className={`${className} flex flex-wrap justify-center text-center`}
      aria-label={text} // Accessible to screen readers as a single string
    >
      {words.map((word, wordIdx) => {
        return (
          <span 
            key={wordIdx} 
            className="inline-block mr-[0.25em] whitespace-nowrap"
            aria-hidden="true" // Hide broken spans from screen readers
          >
            {word.split('').map((char, charIdx) => {
              const index = characterCount;
              characterCount++;
              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  index={index}
                  total={totalChars}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

const Character: React.FC<CharacterProps> = ({ char, progress, index, total }) => {
  // Slices the scroll progress into small overlapping windows for smooth fading
  const start = index / total;
  const end = Math.min(1, start + 0.1); // 10% overlap
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span 
      style={{ opacity }} 
      className="inline-block select-none"
    >
      {char}
    </motion.span>
  );
};

export default AnimatedText;
