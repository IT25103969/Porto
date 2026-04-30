import { motion } from 'motion/react';

const ITEMS = [
  'Machine Learning',
  'Neural Networks',
  'Full Stack',
  'Data Science',
  'Computer Vision',
  'Research',
  'TypeScript',
  'Python',
];

export function Marquee() {
  return (
    <div className="border-y border-neutral-200 bg-white py-8 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-3xl md:text-5xl text-black tracking-tight"
          >
            <span>{item}</span>
            <span className="text-amber-300">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
