import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HoldLogo() {
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center mb-3 md:mb-4">
      {/* Pulsing glow behind logo */}
      <motion.div
        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)',
          filter: 'blur(30px) md:blur(40px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        <motion.div
          animate={
            isAssembled
              ? {
                  filter: [
                    'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
                    'drop-shadow(0 0 60px rgba(243, 186, 47, 0.9))',
                    'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
                  ],
                }
              : {
                  filter: 'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/hold-logo.png"
            alt="HOLD Logo"
            className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}