import React, { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../types";

interface ProjectsListProps {
  projects: ProjectData[];
}

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center m-16 p-16">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
