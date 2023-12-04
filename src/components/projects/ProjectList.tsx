import React, { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../types";

interface ProjectsListProps {
  projects: ProjectData[];
}

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap -m-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
