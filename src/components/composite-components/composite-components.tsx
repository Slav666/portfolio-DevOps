import React, { FC, ReactNode } from "react";

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
