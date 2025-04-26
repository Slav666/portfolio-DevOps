// import CustomFooter from "../Footers/customFooter";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// const LandingPageFooter = () => {
//   return (
//     <CustomFooter
//       brandText="MyPortfolioWeb"
//       navLinks={[
//         { href: "#about", text: "About" },
//         { href: "#projects", text: "Projects" },
//         { href: "#skills", text: "Skills" },
//       ]}
//       socialLinks={[
//         {
//           href: "https://www.linkedin.com/in/slawomir-dyk-b35ab1177/",
//           icon: <FaLinkedin size={20} />,
//           label: "LinkedIn",
//         },
//         {
//           href: "https://github.com/Slav666",
//           icon: <FaGithub size={20} />,
//           label: "GitHub",
//         },
//       ]}
//     />
//   );
// };
// export default LandingPageFooter;
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import CustomLink from "../../components/link/CustomLink";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          {/* <Link href="/" className="text-white text-2xl font-bold"> */}
          MyPortfolioWeb
          {/* </Link> */}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
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
      <div className="mt-8 text-center text-sm text-black">
        <p>© {new Date().getFullYear()} MyPortfolioWeb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
