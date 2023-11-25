import React, { FC, ReactNode } from "react";

interface SkillWrapperProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const SkillWrapper: FC<SkillWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="text-center mb-20">
      {children}
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-700 mb-4">
        {title}
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SkillWrapper;
