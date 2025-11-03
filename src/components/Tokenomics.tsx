import { motion } from 'motion/react';
import { MarbleBackground } from './MarbleBackground';
import { LightBeam } from './LightBeam';
import { HolographicCoin } from './HolographicCoin';
import { OrbitingDataGlyphs } from './OrbitingDataGlyphs';
import { TokenomicsDataCard } from './TokenomicsDataCard';
import { BurnVisualization } from './BurnVisualization';
import { ExternalLink, Flame } from 'lucide-react';
import { HoldLogo } from './HoldLogo';

// Four.Meme logo should be placed in /public/fourmeme-logo.png for easy export
const fourMemeLogo = '/fourmeme-logo.png';

export function Tokenomics() {
  const dataCards = [
    {
      icon: '✦',
      title: 'Token Overview',
      data: [
        { parameter: 'Token Name', value: 'HOLD' },
        { parameter: 'Symbol', value: 'HOLD' },
        { parameter: 'Network', value: 'Binance Smart Chain (BEP-20)' },
        { parameter: 'Decimals', value: '18' },
      ],
      content: (
        <>
          <p className="text-white">"A token forged not for greed, but for guardianship.</p>
          <p className="text-white">Built on BNB, sustained by belief."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Supply',
      data: [
        { parameter: 'Initial Supply', value: '1,000,000,000 HOLD' },
        { parameter: 'Circulating Supply', value: '701,800,000 / 70%' },
        { parameter: 'Burned Supply', value: '298,200,000 / 30%' },
        { parameter: 'Mechanism', value: 'Continuous Burn (via Four.Meme)' },
      ],
      content: (
        <>
          <p className="text-white">"As flames consume excess, scarcity is born.</p>
          <p className="text-white">Each burn makes the believer's hand heavier with value."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Tax Policy',
      data: [
        { parameter: 'Transaction Tax', value: 'None' },
        { parameter: 'Reflections', value: 'None' },
        { parameter: 'Hidden Fees', value: 'None' },
      ],
      content: (
        <>
          <p className="text-white">"No tricks. No games.</p>
          <p className="text-white">HOLD needs no toll, belief pays its own price."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Burn Protocol',
      data: undefined,
      content: (
        <div className="space-y-4">
          <p className="not-italic text-[#EAEAEA]">
            Our partner Four.Meme actively purchases HOLD from the open market and sends it to the burn address, reducing supply and increasing scarcity.
          </p>
          <p className="text-[#EAEAEA]">"Value is purified in fire. Every burn is a ritual of faith."</p>
        </div>
      ),
    },
    {
      icon: '✦',
      title: 'Transparency Note',
      data: undefined,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Verified Contract on BscScan</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Security Checked via GoPlus Labs</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Tested Safe on Honeypot.is</span>
          </div>
          <p className="mt-4 text-[#EAEAEA]">"Trust is not asked, it is proven.</p>
          <p className="text-[#EAEAEA]">Every audit, every check, is a promise kept."</p>
        </div>
      ),
    },
  ];

  return (
    <section id="tokenomics" className="relative min-h-screen overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      {/* Background */}
      <MarbleBackground />

      {/* Light beam from above */}
      <LightBeam />

      {/* Centerpiece: Levitating coin with orbiting glyphs */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none">
        <div className="relative w-full h-full">
          <HolographicCoin />
          <OrbitingDataGlyphs />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-96">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-[#F3BA2F] tracking-wide"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6)',
              letterSpacing: '0.05em',
            }}
          >
            TOKENOMICS
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto mt-4 bg-[#F3BA2F]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
            }}
          />
        </motion.div>

        {/* Data cards grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
          {dataCards.slice(0, 3).map((card, index) => (
            <div key={index} className="relative">
              <TokenomicsDataCard
                icon={card.icon}
                title={card.title}
                data={card.data}
                content={card.content}
                delay={index * 0.2}
                extendedHeight={index === 0} // Extended height for Token Overview
                darkMode={index === 1} // Dark mode for Supply card
              />
              {/* Black overlay at bottom for Supply card */}
              {index === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 h-20 bg-black rounded-b-xl pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
                  }}
                />
              )}
            </div>
          ))}

          {/* Partnership Burn Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative group h-full"
          >
            {/* Golden glowing border */}
            <motion.div
              className="absolute -inset-[2px] rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #F3BA2F 0%, #FFD700 50%, #F3BA2F 100%)',
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }}
            />

            {/* Card content */}
            <div className="relative bg-black rounded-xl p-8 overflow-hidden h-full flex flex-col">
              {/* Ambient glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, #F3BA2F 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Partnership Signal - Logo at top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 p-2">
                  <img src={fourMemeLogo} alt="Four Meme" className="w-full h-full object-contain" />
                </div>
              </motion.div>

              {/* Burning Icon */}
              <motion.div
                className="-mt-6 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Flame className="w-10 h-10 text-[#F3BA2F]" />
                </motion.div>
              </motion.div>

              {/* Title */}
              <h3
                className="text-[#F3BA2F] mb-6"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: 'Georgia, serif',
                }}
              >
                Partnership Burns
              </h3>

              {/* Burn Statistics */}
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="space-y-2"
                >
                  <p className="text-white/70 text-sm">Total Burns by Four Meme (Tokens):</p>
                  <motion.p
                    className="text-[#F3BA2F] text-xl"
                    animate={{
                      textShadow: [
                        '0 0 5px rgba(243, 186, 47, 0.5)',
                        '0 0 15px rgba(243, 186, 47, 0.8)',
                        '0 0 5px rgba(243, 186, 47, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{ fontWeight: 700 }}
                  >
                    215,800,000 $HOLD
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="space-y-2"
                >
                  <p className="text-white/70 text-sm">Total value in $ at time of buying by Four Meme:</p>
                  <motion.p
                    className="text-[#F3BA2F] text-xl"
                    animate={{
                      textShadow: [
                        '0 0 5px rgba(243, 186, 47, 0.5)',
                        '0 0 15px rgba(243, 186, 47, 0.8)',
                        '0 0 5px rgba(243, 186, 47, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{ fontWeight: 700 }}
                  >
                    $25,549.14
                  </motion.p>
                </motion.div>
              </div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3BA2F]/10 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Lock-in effect - corners glow when in view */}
            <motion.div
              className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.5 }}
            />
          </motion.div>

          {/* Burn Protocol - Full width */}
          <div className="md:col-span-2">
            <TokenomicsDataCard
              icon={dataCards[3].icon}
              title={dataCards[3].title}
              data={dataCards[3].data}
              content={dataCards[3].content}
              delay={0.6}
            />
          </div>

          {/* Transparency Note */}
          <div className="md:col-span-2">
            <TokenomicsDataCard
              icon={dataCards[4].icon}
              title={dataCards[4].title}
              data={dataCards[4].data}
              content={dataCards[4].content}
              delay={0.8}
            />
          </div>
        </div>

        {/* Burn Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <BurnVisualization />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center text-[#EAEAEA]/80 mt-8 italic"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            "Tokens are continuously burned, scarcity fuels strength."
          </motion.p>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p
            className="text-[#F3BA2F] italic max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              textShadow: '0 0 20px rgba(243, 186, 47, 0.3)',
            }}
          >
            "Our foundation is discipline, our framework is belief."
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}