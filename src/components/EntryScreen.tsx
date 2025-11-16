import { motion } from 'framer-motion';
import { MatrixBackground } from './MatrixBackground';
import { TeacherSilhouette } from './TeacherSilhouette';

interface EntryScreenProps {
  onAccept: () => void;
}

export function EntryScreen({ onAccept }: EntryScreenProps) {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black overflow-hidden flex items-center justify-center z-[100]">
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </div>

      {/* Matrix Background */}
      <MatrixBackground />

      {/* Teacher Siziy Silhouette */}
      <TeacherSilhouette />
      
      {/* Main content - centered */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 md:px-6 text-center -mt-16 md:-mt-40">
        {/* HOLD Logo Text with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-4 md:mb-6"
          style={{ marginTop: '86px' }}
        >
          <h1 
            className="text-[#F3BA2F] tracking-widest select-none"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(3.5rem, 15vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6), 0 0 80px rgba(243, 186, 47, 0.4)',
            }}
          >
            HOLD
          </h1>
        </motion.div>

        {/* The Strongest Narrative on BNB - Gold and biggest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-2 md:mb-3"
        >
          <h2 
            className="text-[#F3BA2F] tracking-wide"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.25rem, 5vw, 1.75rem)',
              fontWeight: 700,
              textShadow: '0 0 30px rgba(243, 186, 47, 0.5)',
              letterSpacing: '0.05em'
            }}
          >
            The Strongest Narrative on BNB
          </h2>
        </motion.div>

        {/* Welcome to HOLD - White */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-1 md:mb-2"
        >
          <p 
            className="text-white italic tracking-wide"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.4rem, 4vw, 1.6rem)',
              fontWeight: 600,
              letterSpacing: '0.03em'
            }}
          >
            "Welcome to HOLD."
          </p>
        </motion.div>

        {/* This is not just another token launch - White */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-1 md:mb-2 max-w-3xl px-2"
        >
          <p 
            className="text-white tracking-wide"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.15rem, 3.5vw, 1.3rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              lineHeight: '1.4'
            }}
          >
            This is not just another token launch it's the awakening of a mindset.
          </p>
        </motion.div>

        {/* HOLD is the belief that time is the real alpha - White, same size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p 
            className="text-white tracking-wide max-w-3xl px-2"
                        style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.15rem, 3.5vw, 1.3rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              lineHeight: '1.4'
            }}
          >
            This is not just another token launch it's the awakening of a mindset.
          </p>
        </motion.div>

        {/* HOLD is the belief that time is the real alpha - White, same size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p 
            className="text-white tracking-wide max-w-3xl px-2"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.15rem, 3.5vw, 1.3rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              lineHeight: '1.4'
            }}
          >
            HOLD is the belief that time is the real alpha.
          </p>
        </motion.div>
      </div>

      {/* Bottom section - Patience text and Accept HOLD button */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 md:gap-5 w-full px-4">
        {/* Patience is the code. Time is the alpha. - Gold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p 
            className="text-[#F3BA2F] tracking-wide"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textShadow: '0 0 20px rgba(243, 186, 47, 0.4)'
            }}
          >
            Patience is the code. Time is the alpha.
          </p>
        </motion.div>

        {/* Accept HOLD Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.button
            onClick={onAccept}
            className="relative px-6 py-3 md:px-10 md:py-4 bg-transparent border-2 border-[#F3BA2F] text-[#F3BA2F] overflow-hidden group"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(14px, 3vw, 17px)',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.4)',
                '0 0 40px rgba(243, 186, 47, 0.8)',
                '0 0 20px rgba(243, 186, 47, 0.4)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{ 
              scale: 1.12,
              backgroundColor: 'rgba(243, 186, 47, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated glow background */}
            <motion.div
              className="absolute inset-0 bg-[#F3BA2F]/10"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Button text with blink effect */}
            <motion.span
              className="relative z-10"
              animate={{
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Accept HOLD
            </motion.span>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F3BA2F]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F3BA2F]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F3BA2F]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F3BA2F]" />
          </motion.button>
        </motion.div>
      </div>

      {/* Code flicker overlay effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        animate={{
          opacity: [0, 0.03, 0, 0.05, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 3,
        }}
      >
        <div className="w-full h-full bg-[#F3BA2F] mix-blend-overlay" />
      </motion.div>
    </div>
  );
}
