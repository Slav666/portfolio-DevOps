import React, { FC } from "react";
import Image from "next/image";

interface SkillProps {
  skills: { icon: string; tech: string }[];
}

const SkillList: FC<SkillProps> = ({ skills }) => (
  <div className="flex flex-wrap gap-8 justify-center mx-8">
    {skills.map((skill) => (
      <div
        key={skill.tech}
        className="max-w-[200px] bg-black rounded-2xl shadow-md p-2 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-yellow-300 gap-2"
      >
        <div className="bg-gray-700 rounded flex p-4 h-full items-center gap-4">
          <Image src={skill.icon} alt="icon" width={20} height={20} />
          <span className="text-lg font-semibold text-gray-300">
            {skill.tech}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default SkillList;
