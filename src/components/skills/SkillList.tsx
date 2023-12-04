import React, { FC } from "react";
import Image from "next/image";

interface SkillProps {
  skills: { icon: string; tech: string }[];
}

const SkillList: FC<SkillProps> = ({ skills }) => (
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {skills.map((skill) => (
      <div key={skill.tech} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center gap-4">
          <Image src={skill.icon} alt="icon" width={20} height={20} />
          <span className="title-font font-medium text-white">
            {skill.tech}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default SkillList;
