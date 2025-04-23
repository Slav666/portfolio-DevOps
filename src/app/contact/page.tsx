import React from "react";
import ContactForm from "@/components/form/form";
import ContactPageNavBar from "../../components/NavBars/ContactPageNavBar";
import ContactPageFooter from "../../components/Footers/contactPageFooter";

//   const navLinks = [
//     { href: "https://github.com/Slav666", text: "GitHub" },
//     {
//       href: "https://www.linkedin.com/in/slawomir-dyk-b35ab1177/",
//       text: "Linkedin",
//     },
//   ];

//   const buttonStyle =
//     "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";

//   return (
//     <header className="bg-slate-800 md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <CustomLink
//           href="/"
//           text={
//             <>
//               <ArrowLeftIcon className="w-4 h-4 ml-1" />
//               Portfolio
//             </>
//           }
//           className={`bg-yellow-500 hover:bg-yellow-300 ${buttonStyle}`}
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
//           <p>Phone: 87676767676</p>
//         </nav>
//       </div>
//     </header>
//   );
// };

const ContactPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <ContactPageNavBar />
      <ContactForm />
      <ContactPageFooter />
    </div>
  );
};
export default ContactPage;
