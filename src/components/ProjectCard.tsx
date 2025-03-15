import { FaCodeBranch } from 'react-icons/fa6';

interface Project {
  name: string;
  description: string;
  github: string;
  live?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  image?: string;
}

const ProjectCard = ({ project, image }: ProjectCardProps) => {
  return (
    <div
      className="group flex flex-col md:flex-row bg-zinc-800 p-6 shadow-lg border border-zinc-700 rounded-lg transition duration-300 hover:shadow-2xl active:scale-[0.98] cursor-pointer font-serif"
    >
      {/* Left side content */}
      <div className="flex flex-1 flex-col justify-between md:pr-6">
        <div>
          <h3 className="text-2xl font-bold text-zinc-300">{project.name}</h3>

          <p className="mt-3 bg-zinc-700 p-4 text-lg text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-300 shadow-md hover:bg-zinc-600 transition duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors duration-200 cursor-pointer active:scale-95"
          >
            <FaCodeBranch className="text-3xl" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-700 px-5 py-2 text-lg font-medium text-zinc-300 transition-colors duration-300 hover:bg-zinc-600 cursor-pointer active:scale-95"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Right side image */}
      {image && (
        <div className="mt-6 md:mt-0 h-64 w-full md:h-64 md:w-80 flex-shrink-0 overflow-hidden bg-zinc-700 shadow-inner cursor-pointer">
          <img
            src={image}
            alt={`${project.name} thumbnail`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
