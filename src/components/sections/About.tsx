const About = () => {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT — TEXT */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">
              About Me
            </p>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building interfaces with purpose.
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I’m a frontend developer focused on building modern, scalable,
                and user-friendly web interfaces. I enjoy turning complex ideas
                into clean, intuitive experiences.
              </p>

              <p>
                My work emphasizes maintainability, accessibility, and
                performance — writing code that not only works, but is easy to
                understand and extend.
              </p>

              <p>
                I’m continuously improving my skills by building real projects
                and staying up to date with modern frontend best practices.
              </p>
            </div>
          </div>

          {/* RIGHT — SKILLS */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-sky-400">
              Core Skills
            </p>

            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "Responsive Design",
                "UI/UX Principles",
                "Git & GitHub",
                "REST APIs",
                "Performance Optimization",
              ].map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
