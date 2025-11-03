import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  text: string;
  drift: number;
  fontSize: number;
  delay: number;
  duration: number;
  initialY: number;
}

export function FloatingTextParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const codeWords = ['HOLD', 'BNB', 'BUILD', 'BELIEVE', 'PATIENT', 'FAITH', '₿', 'HODl', 'TIME', 'ALPHA'];
    const newParticles = Array.from({ length: 25 }).map((_, i) => {
      // Generate all random values upfront
      const randomX = Math.random();
      const randomDrift = Math.random();
      const randomSize = Math.random();
      const randomDelay = Math.random();
      const randomDuration = Math.random();
      const randomInitialY = Math.random();
      
      return {
        id: i,
        x: randomX * 100, // Spread across full width 0-100%
        text: codeWords[Math.floor(Math.random() * codeWords.length)],
        drift: (randomDrift - 0.5) * 200, // Horizontal drift between -100 and 100
        fontSize: randomSize * 12 + 8, // Font size between 8-20px
        delay: randomDelay * 10, // Delay between 0-10s
        duration: randomDuration * 10 + 15, // Duration between 15-25s
        initialY: -(randomInitialY * window.innerHeight), // Start at different heights
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-[#F3BA2F]/20"
          style={{
            left: `${particle.x}%`,
            fontFamily: 'monospace',
            fontSize: `${particle.fontSize}px`,
          }}
          initial={{
            y: particle.initialY,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: -window.innerHeight - 200,
            x: particle.drift,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
            repeatDelay: 0,
          }}
        >
          {particle.text}
        </motion.div>
      ))}
    </div>
  );
}
