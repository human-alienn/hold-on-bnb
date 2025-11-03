import { motion } from 'framer-motion';
import { Shield, ExternalLink } from 'lucide-react';
import { ObsidianBackground } from './ObsidianBackground';
import { GoldenPillars } from './GoldenPillars';
import { VaultDoor } from './VaultDoor';
import { AuditCard } from './AuditCard';
import { ChainLockAnimation } from './ChainLockAnimation';
import { LockingRitual } from './LockingRitual';
import { CursorParticles } from './CursorParticles';

export function Security() {
  const auditCards = [
    {
      icon: (
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-lg bg-[#F3BA2F]/20 border-2 border-[#F3BA2F] flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.5)',
                '0 0 40px rgba(243, 186, 47, 0.8)',
                '0 0 20px rgba(243, 186, 47, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ExternalLink className="w-12 h-12 text-[#F3BA2F]" />
          </motion.div>
        </div>
      ),
      title: 'BscScan Verification',
      address: '0x4ff1e3c449a7f4b42d8c6f5fbb89c52b8b47fc65',
      result: 'Contract Verified on BscScan',
      quote: (
        <>
          <p className="text-white">Our code stands open before the world,</p>
          <p className="text-white">the signature of our honesty etched forever on BNB's chain.</p>
        </>
      ),
    },
    {
      icon: (
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Shield className="w-24 h-24 text-[#F3BA2F]" strokeWidth={1.5} />
          </motion.div>
        </div>
      ),
      title: 'GoPlus Labs Security Check',
      result: 'Analyzed by GoPlus Labs, No vulnerabilities detected',
      quote: (
        <>
          <p className="text-white">The guardians of code have inspected our walls</p>
          <p className="text-white">no cracks no hidden traps only discipline in digital form</p>
        </>
      ),
    },
    {
      icon: (
        <div className="relative w-24 h-24">
          {/* Honeycomb grid */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {Array.from({ length: 7 }).map((_, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const x = 25 + col * 22 + (row % 2) * 11;
              const y = 20 + row * 19;
              const isSafe = i === 3; // Center cell

              return (
                <motion.g key={i}>
                  <polygon
                    points={`${x},${y - 10} ${x + 8},${y - 5} ${x + 8},${y + 5} ${x},${y + 10} ${x - 8},${y + 5} ${x - 8},${y - 5}`}
                    fill={isSafe ? 'rgba(243, 186, 47, 0.3)' : 'rgba(243, 186, 47, 0.1)'}
                    stroke="#F3BA2F"
                    strokeWidth="1"
                  />
                  {isSafe && (
                    <motion.text
                      x={x}
                      y={y + 3}
                      textAnchor="middle"
                      fill="#F3BA2F"
                      fontSize="8"
                      fontWeight="bold"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.text>
                  )}
                </motion.g>
              );
            })}
          </svg>
        </div>
      ),
      title: 'Honeypot Test',
      result: 'Honeypot.is, Result: Safe',
      quote: (
        <>
          <p className="text-white">Temptation tested, and trust triumphed,</p>
          <p className="text-white">HOLD holds clean, no tricks beneath the honey.</p>
        </>
      ),
    },
  ];

  return (
    <section id="security" className="relative min-h-screen overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      {/* Background */}
      <ObsidianBackground />

      {/* Golden pillars */}
      <GoldenPillars />

      {/* Cursor particle trail */}
      <CursorParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Vault door */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <VaultDoor />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-6"
        >
          <h2
            className="text-[#F3BA2F] tracking-wide mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 7vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6)',
              letterSpacing: '0.1em',
            }}
          >
            Security & Verification
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto bg-[#F3BA2F]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
            }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-white mb-20"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', letterSpacing: '0.05em' }}
        >
          Transparency, safety, and proof, the pillars of the HOLD movement.
        </motion.p>

        {/* Audit cards with chain lock animation */}
        <div className="relative max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {auditCards.map((card, index) => (
              <AuditCard
                key={index}
                icon={card.icon}
                title={card.title}
                address={card.address}
                result={card.result}
                quote={card.quote}
                delay={index * 0.3 + 1.2}
              />
            ))}
          </div>

          {/* Chain lock connecting the cards */}
          <ChainLockAnimation />
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="text-center mb-20 px-4"
        >
          <motion.p
            className="text-[#F3BA2F] max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              fontWeight: 600,
              textShadow: '0 0 20px rgba(243, 186, 47, 0.8), 0 0 40px rgba(243, 186, 47, 0.4)',
              letterSpacing: '0.02em',
            }}
            animate={{
              textShadow: [
                '0 0 20px rgba(243, 186, 47, 0.8), 0 0 40px rgba(243, 186, 47, 0.4)',
                '0 0 30px rgba(243, 186, 47, 1), 0 0 60px rgba(243, 186, 47, 0.6)',
                '0 0 20px rgba(243, 186, 47, 0.8), 0 0 40px rgba(243, 186, 47, 0.4)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Note: DexTools and Dexscreener may sometimes display incomplete data. Always verify through official audit links.
          </motion.p>
        </motion.div>

        {/* Quote centered at the top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-[#F3BA2F] italic"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              textShadow: '0 0 30px rgba(243, 186, 47, 0.6)',
            }}
          >
            "Liquidity locked. Trust unlocked."
          </p>
        </motion.div>

        {/* Vertical golden line extending downward */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 3 }}
          className="w-1 h-32 mx-auto origin-top mb-8"
          style={{
            background: 'linear-gradient(to bottom, #F3BA2F, rgba(243, 186, 47, 0.3))',
            boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
          }}
        >
          {/* Animated particles moving down the line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
            animate={{
              y: [0, 120],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 4,
            }}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
