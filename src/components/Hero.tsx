const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium tracking-wide text-sky-400 animate-fade-up [animation-delay:0ms]">
            Hi, my name is
          </p>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl animate-fade-up [animation-delay:100ms]">
            Salem Ochuko.
          </h1>

          <h2 className="mb-6 text-4xl font-semibold text-gray-400 sm:text-5xl animate-fade-up [animation-delay:200ms]">
            I build modern web interfaces.
          </h2>

          <p className="mb-10 max-w-xl leading-relaxed text-gray-400 animate-fade-up [animation-delay:300ms]">
            I’m a frontend developer focused on building clean, responsive, and
            accessible web applications using React, TypeScript, and Tailwind
            CSS.
          </p>

          <div className="flex gap-4 animate-fade-up [animation-delay:400ms]">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap animate-fade-up [animation-delay:500ms]">
        <a
          href="https://github.com/SalemDevX"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-400 transition hover:text-sky-400"
        ></a>
        <a
          href="https://www.linkedin.com/in/salem-ogheneochuko-38a41b326/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-400 transition hover:text-sky-400"
        ></a>
        {/* <a
          href="https://x.com/Salemoghen44304"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-400 transition hover:text-sky-400"
        ></a> */}
        <a
          href="mailto:ogheneochukosalem@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-400 transition hover:text-sky-400"
        ></a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>

          <div className="relative h-10 w-0.5 overflow-hidden rounded-full bg-white/20">
            <span className="absolute top-0 h-3 w-full animate-scroll bg-sky-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
