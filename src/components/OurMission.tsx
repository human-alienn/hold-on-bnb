import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FloatingTextParticles } from './FloatingTextParticles';
import { HolographicCoin } from './HolographicCoin';
import { MissionSpeechCard } from './MissionSpeechCard';

export function OurMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const coinY = useTransform(scrollYProgress, [0, 0.5, 1], ['20%', '0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const speechCards = [
    {
      icon: '✦',
      title: '1. Wake up the crypto community from its slumber.',
      content: (
        <>
          <p className="italic">The red pill moment is when you stop trading noise and start decoding truth.</p>
        </>
      ),
      numberColor: '#F3BA2F',
      gradientIntensity: 0.5,
    },
    {
      icon: '✦',
      title: '2. Unite the owners.',
      content: (
        <>
          <p className="italic">We are a collective that chooses unity over chaos, strength over fear, faith over doubt.</p>
          <p className="italic">We move as one.</p>
        </>
      ),
      numberColor: '#FFD966',
      gradientIntensity: 0.4,
    },
    {
      icon: '✦',
      title: '3. Turn patience into a superpower.',
      content: (
        <>
          <p className="italic">While others press sell, we brew coffee.</p>
          <p className="italic">Time is our ally.</p>
          <p className="italic">Diamond hands don't shake, they build.</p>
        </>
      ),
      numberColor: '#E6A400',
      gradientIntensity: 0.3,
    },
    {
      icon: '✦',
      title: '4. Build the eternal, not the hype.',
      content: (
        <>
          <p className="italic">Forget the "next 100x."</p>
          <p className="italic">We're coding something that will outlive the market.</p>
          <p className="italic">Let them trade, we create legend.</p>
        </>
      ),
      numberColor: '#FFF4D0',
      gradientIntensity: 0.2,
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background gradient: dark gold to dawn gold */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1a1200 0%, #2d1f00 20%, #F3BA2F 70%, #FFF4D0 100%)',
          y: backgroundY,
        }}
      />

      {/* Floating text particles */}
      <FloatingTextParticles />

      {/* Gold sparkles drifting upward */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-5%',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -window.innerHeight - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-6" style={{ opacity, paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Holographic coin - centered */}
        <motion.div
          className="flex justify-center mb-12"
          style={{ y: coinY }}
        >
          <HolographicCoin />
        </motion.div>

        {/* Mission heading with reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2
            className="text-white tracking-wide relative"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(243, 186, 47, 0.6)',
            }}
          >
            Our Mission
          </h2>

          {/* Reflection effect */}
          <motion.div
            className="absolute top-full left-0 right-0 overflow-hidden h-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2
              className="text-white tracking-wide"
              style={{
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '0.1em',
                transform: 'scaleY(-1)',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Mission
            </h2>
          </motion.div>
        </motion.div>

        {/* Speech cards grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {speechCards.map((card, index) => (
            <MissionSpeechCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              delay={index * 0.2}
              numberColor={card.numberColor}
              gradientIntensity={card.gradientIntensity}
            />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-white italic max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            "HOLD isn't about speculation, it's about stability, faith, and community."
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
