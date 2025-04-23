import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import CustomLink from "../../components/link/CustomLink";

interface SocialLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

interface NavLink {
  href: string;
  text: string | JSX.Element;
}

interface FooterProps {
  brandHref?: string;
  brandText?: string | JSX.Element;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  copyrightName?: string;
}

const Footer: React.FC<FooterProps> = ({
  brandHref = "/",
  brandText = "MyPortfolioWeb",
  navLinks = [],
  socialLinks = [],
  copyrightName,
}) => {
  return (
    <footer className="bg-slate-800 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 text-slate-200">
          <CustomLink href={brandHref} text={brandText} />
          {navLinks.map((link, index) => (
            <CustomLink key={index} href={link.href} text={link.text} />
          ))}
        </div>

        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-200">
        <p>
          © {new Date().getFullYear()} {copyrightName ?? brandText}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
