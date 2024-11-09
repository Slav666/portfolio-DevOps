import React, { FC } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../../constants";
import { Title } from "../composite-components/composite-components";
import ProjectCard from "./ProjectCard";
import { ContentArea } from "../composite-components/composite-components";

const ProjectsSection: FC = () => {
  return (
    <div id="projects">
      <ContentArea>
        <Title
          icon={<CodeIcon className="text-blue-500" />}
          title="Apps I Have Built"
          iconSize="w-12 h-12"
          titleSize={{ sm: "text-2xl", lg: "text-3xl" }}
        />
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </ContentArea>
    </div>
  );
};

export default ProjectsSection;
