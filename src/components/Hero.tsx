import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden text-center">
      {/* Animated background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-1/2 bottom-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-3xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-medium tracking-wide text-sky-400"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Salem Ochuko.
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mb-6 text-4xl font-semibold text-gray-400 sm:text-5xl"
        >
          I build modern web interfaces.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-xl leading-relaxed text-gray-400"
        >
          I’m a frontend developer focused on building clean, responsive, and
          accessible web applications using React, TypeScript, and Tailwind CSS.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="relative h-10 w-0.5 overflow-hidden rounded-full bg-white/20">
            <span className="absolute top-0 h-3 w-full animate-scroll bg-sky-400" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
