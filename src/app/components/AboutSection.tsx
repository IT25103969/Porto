import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 md:mb-0 md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">— About</p>
              <p className="text-sm text-neutral-500">(01)</p>
            </div>
          </div>

          <div className="md:col-span-9 space-y-10 md:space-y-16 mt-8 md:mt-0">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl leading-[1.1] tracking-tight text-black max-w-4xl"
            >
              I build at the intersection of{' '}
              <em className="italic text-amber-500">intelligence</em> and interface —
              turning models, data, and ideas into things people can use.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-neutral-700 leading-relaxed text-sm md:text-base">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Currently studying for my BSc (Hons) in Information Technology with a
                specialization in Artificial Intelligence at SLIIT. My focus sits between
                research and engineering — shipping work that's both rigorous and refined.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I care about clarity, restraint, and craft — from backend systems to AI
                pipelines to small interaction details that make experiences feel intentional.
              </motion.p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 md:pt-12 border-t border-neutral-200">
              {[
                { k: 'Education', v: 'SLIIT — BSc IT' },
                { k: 'Specialization', v: 'Artificial Intelligence' },
                { k: 'Location', v: 'Colombo, Sri Lanka' },
                { k: 'Status', v: 'Open to work' },
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2">
                    {m.k}
                  </p>
                  <p className="text-black text-sm md:text-base">{m.v}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
