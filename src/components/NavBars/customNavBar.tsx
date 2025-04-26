// import React, { ReactNode } from "react";
// import CustomLink from "../link/CustomLink";

// interface NavLink {
//   href: string;
//   text: string | ReactNode;
// }

// interface NavbarProps {
//   brandHref: string;
//   brandContent: ReactNode;
//   navLinks: NavLink[];
//   buttonHref?: string;
//   buttonContent?: ReactNode;
//   showPhone?: boolean;
//   phoneNumber?: string;
// }

// const Navbar: React.FC<NavbarProps> = ({
//   brandHref,
//   brandContent,
//   navLinks,
//   buttonHref,
//   buttonContent,
//   showPhone = false,
//   phoneNumber,
// }) => {
//   const buttonStyle =
//     "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

//   return (
//     <header className="bg-[#222] md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <CustomLink
//           href={brandHref}
//           text={brandContent}
//           className="text-slate-200 mb-4 md:mb-0"
//         />

//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center text-slate-200">
//           {navLinks.map((link, index) => (
//             <CustomLink
//               key={index}
//               href={link.href}
//               text={link.text}
//               className="hover:text-white"
//             />
//           ))}
//           {showPhone && phoneNumber && (
//             <p className="ml-4">{`Phone: ${phoneNumber}`}</p>
//           )}
//         </nav>

//         {buttonHref && buttonContent && (
//           <CustomLink
//             href={buttonHref}
//             text={buttonContent}
//             className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
//           />
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
