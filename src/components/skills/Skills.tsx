import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, skillsCodeClan } from "../../constants";
import SkillList from "./SkillList";
import SkillWrapper from "./SkillWrapper";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <SkillWrapper
          title="Skills & Technologies"
          description="List of the main technologies I used while working at Astrosat."
        >
          <ChipIcon className="w-10 inline-block mb-4" />
        </SkillWrapper>
        <SkillList skills={skills} />

        <SkillWrapper
          title="Skills & Technologies (Code Clan)"
          description="List of the extra technologies I used while learning at Code Clan."
        />
        <SkillList skills={skillsCodeClan} />
      </div>
    </section>
  );
};

export default Skills;
