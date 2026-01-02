import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={item}
            className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={item}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let’s work together.
          </motion.h2>

          <motion.p
            variants={item}
            className="mb-10 text-gray-400 leading-relaxed"
          >
            I’m open to opportunities, collaborations, and interesting projects.
            If you’d like to work together or just say hello, feel free to reach
            out.
          </motion.p>

          {/* Contact actions */}
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a
              href="mailto:ogheneochukosalem@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
            >
              Send an Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/salem-ogheneochuko-38a41b326/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-8 py-3 text-sm font-medium text-gray-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
