import React from "react";
import CustomLink from "../../components/link/CustomLink";
import { SocialMediaLinks } from "../composite-components/composite-components";
import { RightReserved } from "../composite-components/composite-components";

const Footer: React.FC = () => {
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Project" },
    { href: "#skills", text: "Skills" },
  ];

  return (
    <footer className="bg-[#222] text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          MyPortfolioWeb
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          {navLinks.map((link, index) => (
            <CustomLink
              key={index}
              href={link.href}
              text={link.text}
              className="text-white hover:text-gray-300"
            />
          ))}
        </div>
        <div className="flex space-x-4">
          <SocialMediaLinks />
        </div>
      </div>
      <RightReserved />
    </footer>
  );
};

export default Footer;
