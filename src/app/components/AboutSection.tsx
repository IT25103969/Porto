import { motion } from 'motion/react';

export function AboutSection() {
  return (
<<<<<<< HEAD
    <section id="about" className="bg-white py-16 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

=======
    <section id="about" className="bg-white py-24 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
        <div className="mb-10 md:mb-0 md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">— About</p>
              <p className="text-sm text-neutral-500">(01)</p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="md:col-span-9 space-y-10 md:space-y-16 mt-8 md:mt-0">
=======
          {/* Content */}
          <div className="md:col-span-9 space-y-12 md:space-y-16 mt-10 md:mt-0">
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className="text-2xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight text-black max-w-4xl"
            >
              I build at the intersection of{' '}
              <em className="italic text-amber-500">intelligence</em> and interface —
              turning models, data, and ideas into things people can use.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-neutral-700 leading-relaxed text-sm md:text-base">
=======
              className="text-3xl md:text-6xl leading-[1.1] tracking-tight text-black max-w-4xl"
            >
              I build at the intersection of <em className="italic text-neutral-500">intelligence</em> and
              interface — turning models, data, and ideas into things people can use.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-neutral-700 leading-relaxed text-sm md:text-base">
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Currently studying for my BSc (Hons) in Information Technology with a
                specialization in Artificial Intelligence at the Sri Lanka Institute of
                Information Technology. My focus sits between research and engineering —
                shipping work that's both rigorous and refined.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I care about clarity, restraint, and craft — whether that's a clean
                architectural decision in a backend service, an evaluation pipeline for
                a model, or a small interaction that just feels right.
              </motion.p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 md:pt-12 border-t border-neutral-200">
=======
            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 md:pt-12 border-t border-neutral-200">
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
              {[
                { k: 'Education', v: 'SLIIT — BSc IT' },
                { k: 'Specialization', v: 'Artificial Intelligence' },
                { k: 'Location', v: 'Colombo, Sri Lanka' },
                { k: 'Status', v: 'Open to work' },
<<<<<<< HEAD
              ].map((m, i) => (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2 group-hover:text-amber-500 transition-colors duration-300">
                    {m.k}
                  </p>
                  <p className="text-black text-sm md:text-base">{m.v}</p>
                </motion.div>
=======
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2">{m.k}</p>
                  <p className="text-black text-sm md:text-base">{m.v}</p>
                </div>
>>>>>>> 9bb38d76a99280a5cf032917e1cc53d16f22cc9c
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
