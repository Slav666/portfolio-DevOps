import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface SectionWrapperProps {
  isEven?: boolean;
  children: ReactNode;
}

export const SectionWrapper = ({
  isEven = false,
  children,
}: SectionWrapperProps) => (
  <li className="flex justify-center bg-slate-500">{children}</li>
);

export const ContentArea = ({ children }: { children: ReactNode }) => (
  <div className="bg-[#222] min-h-screen flex flex-col justify-evenly gap-4 p-4 md:p-6 lg:p-8 text-center">
    {children}
  </div>
);

export const DescriptionSection = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`text-base md:text-lg lg:text-xl flex flex-col text-justify  ${className}`}
  >
    {children}
  </div>
);

interface TitleProps {
  icon?: ReactNode;
  title: string;
  className?: string;
  iconSize?: string;
  titleSize?: { sm: string; lg: string };
}

export const Title: FC<TitleProps> = ({
  icon,
  title,
  className = "",
  iconSize = "w-10 h-10",
  titleSize = { sm: "text-2xl", lg: "text-2xl" },
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {icon && <div className={`${iconSize} m-2`}>{icon}</div>}
      <h1
        className={`${titleSize.sm} lg:${titleSize.lg} font-medium text-center text-white mb-6`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;

export const DisplayArea = ({ children }: { children: ReactNode }) => (
  <div className=" flex justify-center items-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    {children}
  </div>
);

export const SocialMediaLinks = () => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        href="https://github.com/Slav666"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaGithub size={20} />
      </Link>
    </>
  );
};

export const RightReserved = () => {
  return (
    <div className="mt-8 text-center text-sm hover:text-gray-300 text-white">
      <p>© {new Date().getFullYear()} SlavPortfolioWeb. All rights reserved.</p>
    </div>
  );
};

export const NavButtonStyle =
  "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0";
