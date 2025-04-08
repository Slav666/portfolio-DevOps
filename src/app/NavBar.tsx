import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import CustomLink from "../components/link/CustomLink";

const Navbar: FC = () => {
  const navLinks = [
    { href: "#projects", text: "Past Work" },
    { href: "#skills", text: "Skills" },
    { href: "#testimonials", text: "Testimonials" },
  ];

  const buttonStyle =
    "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

  return (
    <header className="bg-slate-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <CustomLink
          href="#about"
          text="Slawomir Dyk"
          className="text-slate-200 mb-4 md:mb-0"
        />

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center text-slate-200">
          {navLinks.map((link, index) => (
            <CustomLink
              key={index}
              href={link.href}
              text={link.text}
              className="hover:text-white"
            />
          ))}
        </nav>

        <CustomLink
          href="#contact"
          text={
            <>
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </>
          }
          className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
        />
      </div>
    </header>
  );
};

export default Navbar;
