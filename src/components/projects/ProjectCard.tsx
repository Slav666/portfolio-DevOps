import React, { FC } from "react";
import { ProjectData } from "../../types";
import { Title } from "../composite-components/composite-components";
import IconImage from "../icon-image/IconImage";
import CustomImage from "../custom-image/CustomImage";
import { DescriptionSection } from "../composite-components/composite-components";
import ExternalLink from "../link/ExternalLink";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const liveAppHref = project.liveApp || undefined;

  return (
    <>
      <Title title={project.title} />
      <div className="max-w-screen-lg mx-auto p-2 sm:p-2 m-4">
        <CustomImage src={project.image} alt="Project gallery" />
      </div>
      <ExternalLink label="Code" href={project.code} />
      {liveAppHref && <ExternalLink label="Live app" href={liveAppHref} />}

      <DescriptionSection className="max-w-screen-md mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </DescriptionSection>

      <Title
        title="Technologies"
        titleSize={{ sm: "text-1xl", lg: "text-1xl" }}
        className="m-4"
      />
      <div className="flex flex-wrap justify-center gap-2 p-4 max-w-screen-md m-auto">
        {project.technologies.map((icon, index) => (
          <IconImage src={icon} key={index} alt="Technology icon" />
        ))}
      </div>
      <hr className="border-gray-500 my-4" />
    </>
  );
};

export default ProjectCard;
