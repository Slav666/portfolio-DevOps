import { ArrowLeftIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import CustomLink from "../../components/link/CustomLink";
import { NavButtonStyle } from "../composite-components/composite-components";

const Navbar: FC = () => {
  const navLinks = [
    {
      href: "https://www.linkedin.com/in/slawomir-dyk-b35ab1177/",
      text: "LinkedIn ",
    },
    { href: "https://github.com/Slav666", text: "Github" },
  ];

  return (
    <header className="bg-[#222] md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <CustomLink
          href="/"
          text={
            <>
              <ArrowLeftIcon className="w-4 h-4 ml-1" />
              Portfolio
            </>
          }
          className={`bg-gray-200 hover:bg-gray-700 ${NavButtonStyle}`}
        />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          {navLinks.map((link, index) => (
            <CustomLink
              key={index}
              href={link.href}
              text={link.text}
              className="text-white hover:text-gray-300"
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
