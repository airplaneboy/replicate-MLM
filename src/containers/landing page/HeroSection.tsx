'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import HeroText from '@/components/HeroText';

export default function HeroHighlightDemo() {
  return (
    <>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90 z-10' />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
          <HeroText />
        </motion.h1>
      </HeroHighlight>
    </>
  );
}
