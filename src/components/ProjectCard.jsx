import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectCard = ({ project, index }) => {
  const colors = ['#38bdf8', '#d4a373', '#34d399', '#818cf8', '#f472b6', '#fbbf24'];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
      style={{ '--project-accent': accentColor }}
    >
      {/* Left accent line */}
      <div className="project-accent-line" />

      <div className="project-card-inner">
        {/* Top row: number + category */}
        <div className="project-card-top">
          <span className="project-number">{project.id}</span>
          <span className="project-category">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="project-tech-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-tag">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          {project.liveDemo && project.liveDemo !== "#" && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-primary"
            >
              View Project <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
            >
              <GithubIcon size={18} /> GitHub
            </a>
          )}
          {(!project.liveDemo || project.liveDemo === "#") && (!project.github || project.github === "#") && (
            <span className="project-link-coming">Links coming soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
