import ProjectCard from "../ProjectCard";

const PROJECTS = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS.",
    image: "/public/projects/reactproject.png",
    tags: ["React", "TypeScript", "Tailwind"],
    previewUrl: "https://react-website-552gfenbe-salem4techs-projects.vercel.app/",
    featured: true,
  },
  {
    title: "Dashboard UI",
    description:
      "A clean admin dashboard interface with charts and reusable components.",
    image: "/public/projects/brainwave.png",
    tags: ["React", "Charts", "UI"],
    previewUrl: "https://brain-wave-website-three.vercel.app/",
  },
  {
    title: "Landing Page",
    description:
      "High-conversion landing page with smooth animations and responsive layout.",
    image: "/public/projects/e-commerce .png",
    tags: ["Frontend", "Animation"],
    previewUrl: "https://e-commerce-react-swart.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected Work
          </h2>

          <p className="mt-4 text-gray-400">
            A few projects that showcase my approach to design, performance, and
            clean code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
