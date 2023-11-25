import React, { FC } from "react";
import ProjectCard from "./projectCard";
import { ProjectData } from "@/data";

interface ProjectsListProps {
  projects: ProjectData[];
}

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap -m-2">
      {projects.map((project) => (
        <ProjectCard key={project.image} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
