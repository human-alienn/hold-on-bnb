import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EntryScreen } from './components/EntryScreen';
import { HeroSection } from './components/HeroSection';
import { WhatIsHold } from './components/WhatIsHold';
import { OurMission } from './components/OurMission';
import { Tokenomics } from './components/Tokenomics';
import { Security } from './components/Security';
import { Roadmap } from './components/Roadmap';
import { TheRules } from './components/TheRules';
import { WhoAcceptedHold } from './components/WhoAcceptedHold';
import { TheChoice } from './components/TheChoice';
import { TheCommunity } from './components/TheCommunity';

export default function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!hasAccepted ? (
        <motion.div
          key="entry"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <EntryScreen onAccept={() => setHasAccepted(true)} />
        </motion.div>
      ) : (
        <motion.div 
          key="main"
          className="size-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroSection />
          <WhatIsHold />
          <OurMission />
          <Tokenomics />
          <Security />
          <Roadmap />
          <TheRules />
          <WhoAcceptedHold />
          <TheChoice />
          <TheCommunity />
        </motion.div>
      )}
    </AnimatePresence>
  );
}