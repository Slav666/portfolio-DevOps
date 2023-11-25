import React, { FC } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import ProjectsList from "./projectList";
import { projects } from "../../../data";

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
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
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
