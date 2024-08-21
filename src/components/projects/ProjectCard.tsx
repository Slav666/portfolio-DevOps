import React, { FC } from "react";
import { ProjectData } from "../../types";
import Image from "next/image";
import CustomLink from "../CustomLink";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const liveAppHref = project.liveApp ? project.liveApp : undefined;

  return (
    <div className="m-4 border-4 border-indigo-500 rounded-2xl p-8">
      <h2 className="title-font text-2xl font-medium mb-1 text-center p-4 uppercase">
        {project.title}
      </h2>

      <Image
        alt="gallery"
        src={project.image}
        width={600}
        height={400}
        className="w-full"
      />

      <div className="text-center">
        <CustomLink href={project.code} text="CODE" textColor="text-blue-400" />

        {liveAppHref && (
          <CustomLink
            href={liveAppHref}
            textColor="text-pink-400"
            text="LIVE APP"
          />
        )}
      </div>
      <h2 className="text-lg font-medium mb-1 text-left break-words w-full">
        {project.description}
      </h2>

      <p className="mb-8 text-yellow-200 text-center">Technologies used:</p>
      <div className="flex flex-row justify-evenly bg-slate-700 p-4">
        {project.technologies.map((icon, index) => (
          <Image
            src={icon}
            key={index}
            alt="gallery"
            className="w-8 h-8"
            width={20}
            height={20}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
