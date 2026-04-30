import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Coffee, Layers, Cpu, Box, GitBranch, Server, Code2, Radio } from 'lucide-react';

interface Skill {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  Icon: any;
}

const skills: Skill[] = [
  {
    id: 'java',
    index: '01',
    title: 'Java',
    category: 'Language',
    description: 'Writing robust, object-oriented applications in Java with clean architecture.',
    tools: ['Java 17', 'Maven', 'JUnit'],
    Icon: Coffee,
  },
  {
    id: 'spring',
    index: '02',
    title: 'Spring Boot',
    category: 'Framework',
    description: 'Building production-ready REST APIs and microservices.',
    tools: ['Spring MVC', 'Spring Data', 'Spring Security'],
    Icon: Layers,
  },
  {
    id: 'cpp',
    index: '03',
    title: 'C++',
    category: 'Language',
    description: 'Performance-critical systems, embedded firmware, algorithms.',
    tools: ['STL', 'CMake', 'GDB'],
    Icon: Cpu,
  },
  {
    id: 'oop',
    index: '04',
    title: 'OOP',
    category: 'Paradigm',
    description: 'SOLID principles, design patterns, scalable system design.',
    tools: ['Design Patterns', 'SOLID', 'UML'],
    Icon: Box,
  },
  {
    id: 'dsa',
    index: '05',
    title: 'DSA',
    category: 'Fundamentals',
    description: 'Data structures and algorithms with complexity awareness.',
    tools: ['Arrays', 'Trees', 'Graphs'],
    Icon: GitBranch,
  },
  {
    id: 'backend',
    index: '06',
    title: 'Backend',
    category: 'Engineering',
    description: 'REST APIs, auth systems, database design, deployment.',
    tools: ['REST', 'MySQL', 'Docker'],
    Icon: Server,
  },
  {
    id: 'react',
    index: '07',
    title: 'React',
    category: 'Frontend',
    description: 'Component-driven UIs with TypeScript and Tailwind.',
    tools: ['TypeScript', 'Tailwind', 'Vite'],
    Icon: Code2,
  },
  {
    id: 'iot',
    index: '08',
    title: 'IoT',
    category: 'Hardware',
    description: 'Embedded systems, sensors, and microcontroller programming.',
    tools: ['ESP32', 'Arduino', 'MQTT'],
    Icon: Radio,
  },
];

function TiltCard({ s }: { s: Skill }) {
  const ref = useRef<HTMLDivElement>(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const springX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotY, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    rotX.set((ny - 0.5) * -10);
    rotY.set((nx - 0.5) * 10);
  };

  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-50 hover:bg-white transition-colors p-8 flex flex-col justify-between gap-10 group"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
          {s.index} — {s.category}
        </span>
        <s.Icon className="w-5 h-5 text-neutral-400 group-hover:text-black" />
      </div>

      <div>
        <h3 className="text-xl md:text-2xl tracking-tight text-black mb-3">
          {s.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-6">
          {s.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-5 border-t border-neutral-200">
          {s.tools.map((t) => (
            <span key={t} className="text-xs text-neutral-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function HorizontalBentoGrid() {
  return (
    <section id="skills" className="bg-neutral-50 border-y border-neutral-200 px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
            — Capabilities (02)
          </p>
          <h2 className="text-4xl md:text-6xl tracking-tight text-black">
            Skills, in detail.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {skills.map((s) => (
            <TiltCard key={s.id} s={s} />
          ))}
        </div>

      </div>
    </section>
  );
}
