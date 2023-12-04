import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import CustomLink from "./CustomLink";

const Navbar: FC = () => {
  return (
    <header className="bg-gray-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <CustomLink
          href="#about"
          text="Slawomir Dyk"
          bgColor=""
          textColor="text-white mb-4 md:mb-0"
        />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <CustomLink
            href="#projects"
            text="Past Work"
            bgColor=""
            textColor="hover:text-white"
          />
          <CustomLink
            href="#skills"
            text="Skills"
            bgColor=""
            textColor="hover:text-white"
          />
          <CustomLink
            href="#testimonials"
            text="Testimonials"
            bgColor=""
            textColor="hover:text-white"
          />
        </nav>
        <CustomLink
          href="#contact"
          text={
            <>
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </>
          }
          bgColor="bg-gray-200"
          textColor="hover:bg-gray-700"
          additionalClasses="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        />
      </div>
    </header>
  );
};

export default Navbar;
