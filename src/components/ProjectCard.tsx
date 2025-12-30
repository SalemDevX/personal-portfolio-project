import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  previewUrl: string;
  featured?: boolean;
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  previewUrl,
  featured,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-white">
          Featured
        </span>
      )}

      {/* Image */}
      <div className="h-52 w-full overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
