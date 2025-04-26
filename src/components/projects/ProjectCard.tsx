import React, { FC } from "react";
import { ProjectData } from "../../types";
import { Title } from "../composite-components/composite-components";
import IconImage from "../icon-image/IconImage";
import CustomImage from "../custom-image/CustomImage";
import { DescriptionSection } from "../composite-components/composite-components";
import { ArrowRightIcon } from "@heroicons/react/solid";

import CustomLink from "../../components/link/CustomLink";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const liveAppHref = project.liveApp || undefined;
  const buttonStyle =
    "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-2 sm:p-2 m-4">
        <CustomImage src={project.image} alt="Project gallery" />
      </div>
      <Title title={project.title} />
      <DescriptionSection className="max-w-screen-lg mx-auto my-2 p-6 sm:p-8  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <p className="text-lg text-slate-100 leading-relaxed">
          {project.description}
        </p>
      </DescriptionSection>
      <CustomLink
        href={project.code}
        text={
          <>
            GO TO GITHUB
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </>
        }
        className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
      />
      {liveAppHref && (
        <CustomLink
          href={liveAppHref}
          text={
            <>
              LIVE APP
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </>
          }
          className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
        />
      )}
      <Title
        title="TECHNOLOGIES"
        titleSize={{ sm: "text-1xl", lg: "text-1xl" }}
        className="mt-6"
      />
      <div className="flex flex-wrap justify-center gap-2 p-2 max-w-screen-md m-auto">
        {project.technologies.map((icon, index) => (
          <IconImage src={icon} key={index} alt="Technology icon" />
        ))}
      </div>
      <hr className="border-black border-2 my-4" />
    </>
  );
};

export default ProjectCard;
