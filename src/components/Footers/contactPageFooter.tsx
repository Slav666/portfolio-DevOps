import React from "react";
import { SocialMediaLinks } from "../composite-components/composite-components";
import { RightReserved } from "../composite-components/composite-components";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          MyPortfolioWeb
        </div>
        <section className="flex space-x-4">
          <SocialMediaLinks />
        </section>
      </div>
      <RightReserved />
    </footer>
  );
};

export default Footer;
