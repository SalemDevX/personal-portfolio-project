import ProjectCard from "../ProjectCard";

const PROJECTS = [
  {
    title: "Personal Portfolio",
    description:
      "A sleek personal portfolio showcasing selected projects, built with React and TypeScript, featuring a responsive layout, clean UI, and modern design patterns for maintainability and performance.",
    image: "/public/projects/reactproject.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
    previewUrl:
      "https://react-website-552gfenbe-salem4techs-projects.vercel.app/",
    featured: true,
  },
  {
    title: "Dashboard UI",
    description:
      "Brainwave - Modern UI/UX website, developed using React.js, Tailwind CSS, TypeScript exemplifies modern UI/UX principles with its clean design and responsive layout.",
    image: "/public/projects/brainwave.png",
    tags: ["React", "Tailwind", "UI", "Animation"],
    previewUrl: "https://brain-wave-website-three.vercel.app/",
  },
  {
    title: "Landing Page",
    description:
      "A modern e-commerce frontend built with React and Tailwind CSS, featuring a clean product layout, responsive design, and smooth user interactions optimized for performance and usability.",
    image: "/public/projects/e-commerce .png",
    tags: ["React", "Tailwind", "E-commerce", "Responsive UI"],
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
