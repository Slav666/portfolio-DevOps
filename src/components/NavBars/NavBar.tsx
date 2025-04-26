// import CustomNavBar from "../NavBars/customNavBar";
// import { ArrowRightIcon } from "@heroicons/react/solid";
// const LandingPagNAvBar = () => {
//   return (
//     <CustomNavBar
//       brandHref="#about"
//       brandContent="Slawomir Dyk"
//       navLinks={[
//         { href: "#projects", text: "Past Work" },
//         { href: "#skills", text: "Skills" },
//         { href: "#testimonials", text: "Testimonials" },
//       ]}
//       buttonHref="/contact"
//       buttonContent={
//         <>
//           Contact
//           <ArrowRightIcon className="w-4 h-4 ml-1" />
//         </>
//       }
//     />
//   );
// };

// export default LandingPagNAvBar;

import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import CustomLink from "../../components/link/CustomLink";

const Navbar: FC = () => {
  const navLinks = [
    { href: "#projects", text: "Past Work" },
    { href: "#skills", text: "Skills" },
    { href: "#testimonials", text: "Testimonials" },
  ];

  const buttonStyle =
    "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

  return (
    <header className="bg-[#222] md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <CustomLink
          href="#about"
          text="Slawomir Dyk"
          className="text-white mb-4 md:mb-0"
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
        {/* <CustomLink
          href="/contact"
          text={
            <>
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </>
          }
          className={`bg-gray-200 hover:bg-gray-700 ${buttonStyle}`}
        /> */}
      </div>
    </header>
  );
};

export default Navbar;
