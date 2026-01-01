const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let’s work together.
          </h2>

          <p className="mb-10 text-gray-400 leading-relaxed">
            I’m open to opportunities, collaborations, and interesting projects.
            If you’d like to work together or just say hello, feel free to reach
            out.
          </p>

          {/* Contact actions */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:ogheneochukosalem@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
            >
              Send an Email
            </a>

            <a
              href="https://www.linkedin.com/in/salem-ogheneochuko-38a41b326/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-8 py-3 text-sm font-medium text-gray-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
