import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function useScramble(original: string) {
  const [display, setDisplay] = useState(original);
  const busy = useRef(false);
  const iv = useRef<ReturnType<typeof setInterval> | null>(null);

  const trigger = useCallback(() => {
    if (busy.current) return;
    busy.current = true;

    let iter = 0;
    iv.current = setInterval(() => {
      setDisplay(
        original
          .split('')
          .map((ch, i) =>
            i < iter ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join('')
      );

      iter += 0.5;

      if (iter > original.length) {
        clearInterval(iv.current!);
        setDisplay(original);
        busy.current = false;
      }
    }, 35);
  }, [original]);

  useEffect(() => {
    return () => {
      if (iv.current) clearInterval(iv.current);
    };
  }, []);

  return { display, trigger };
}

const WORDS = ['Shihaz', 'Shaheem'];

const wordVariants = {
  hidden: (i: number) => ({ y: '110%', opacity: 0 }),
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.1 + i * 0.12 },
  }),
};

export function HeroSection() {
  const s1 = useScramble('Shihaz');
  const s2 = useScramble('Shaheem');

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 md:pt-32 pb-10 md:pb-12 bg-white"
    >
      {/* Top meta */}
      <motion.div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-xs uppercase text-neutral-500">
        <div>
          <p>Index</p>
          <p className="text-black">001 / Portfolio</p>
        </div>
        <div>
          <p>Discipline</p>
          <p className="text-black">AI · Software</p>
        </div>
        <div>
          <p>Based</p>
          <p className="text-black">Colombo, LK</p>
        </div>
        <div>
          <p>Status</p>
          <p className="text-black">Available — 2026</p>
        </div>
      </motion.div>

      {/* Name */}
      <div className="max-w-7xl mx-auto w-full py-8">
        <h1 className="text-[16vw] md:text-[13vw] leading-[0.9] tracking-tight text-black">
          <span onMouseEnter={s1.trigger} className="block">
            {s1.display}
          </span>
          <span onMouseEnter={s2.trigger} className="block">
            {s2.display}
          </span>
        </h1>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <p className="text-base md:text-xl text-neutral-700 max-w-xl">
          An IT undergraduate at SLIIT specializing in AI systems and interface design.
        </p>

        <a href="#about" className="flex items-center gap-2 uppercase text-sm">
          Scroll to explore <ArrowDown />
        </a>
      </div>
    </section>
  );
}
