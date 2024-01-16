import React, { FC } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import ProjectsList from "./ProjectList";
import { projects } from "../../constants";

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-800 body-font">
      <div className=" text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            PLEASE NOTE: All projects presented here &#40;including this
            app&#41; are currently under active development, and therefore not
            reflective of finished applications.
          </p>
        </div>
      </div>
      <ProjectsList projects={projects} />
    </section>
  );
};

export default ProjectsSection;
