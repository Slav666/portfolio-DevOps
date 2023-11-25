import React, {FC} from "react";
import { ProjectData } from "@/data";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-8">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={project.image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-green-400 mb-1">
            {project.title}
          </h1>
          <h2 className="text-blue-400">Code: {project.code}</h2>
          <h2 className="text-pink-400">Live App: {project.liveApp}</h2>
          <p className="leading-relaxed">{project.description}</p>
          <h3 className="mb-2 text-yellow-200">Technologies used:</h3>
          <div className="flex flex-row justify-evenly">
            {project.technologies.map((icon, index) => (
              <img src={icon} key={index} alt="gallery" className="w-6 h-6" />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
