import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import CustomLink from "../components/link/CustomLink";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <Link href="/" className="text-slate-200 text-2xl font-bold">
            MyPortfolioWeb
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 text-slate-200">
          <CustomLink href="#about" text="About" />
          <CustomLink href="#projects" text="Projects" />
          <CustomLink href="#skills" text="Skills" />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Slav666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-slate-200">
        <p>© {new Date().getFullYear()} MyPortfolioWeb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
