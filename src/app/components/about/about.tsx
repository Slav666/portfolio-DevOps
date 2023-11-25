import React, { FC } from "react";
import CustomLink from "../customLink/customLink";
import { infoData } from "@/data";

const About: FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed">{infoData}</p>
          <div className="flex justify-center">
            <CustomLink
              href="#contact"
              text="Work With Me"
              bgColor="bg-green-500"
              textColor="hover:bg-green-600"
            />
            <CustomLink
              href="#projects"
              text="See My Past Work"
              bgColor="bg-gray-800"
              textColor="hover:bg-gray-700 hover:text-white"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="hero" src="./face.jpeg" />
        </div>
      </div>
    </section>
  );
};

export default About;
