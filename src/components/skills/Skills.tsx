import { ChipIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import { devSkills, skills, skillsCodeClan } from "../../constants";
import SkillList from "./SkillList";
import { Title } from "../composite-components/composite-components";
import { ContentArea } from "../composite-components/composite-components";

const Skills: FC = () => {
  return (
    <div id="skills">
      <ContentArea>
        <Title
          icon={<ChipIcon className="text-blue-500" />}
          title="List of the main technologies I have used while learning DevOps."
          iconSize="w-12 h-12"
          titleSize={{ sm: "text-2xl", lg: "text-4xl" }}
        />
        <SkillList skills={devSkills} />
        <Title
          icon={<ChipIcon className="text-blue-500" />}
          title="List of the main technologies I used while working at Astrosat."
          iconSize="w-12 h-12"
          titleSize={{ sm: "text-2xl", lg: "text-4xl" }}
        />
        <SkillList skills={skills} />
        <Title
          icon={<ChipIcon className="text-blue-500" />}
          title="List of the extra technologies I used while learning at Code Clan."
          iconSize="w-12 h-12"
          titleSize={{ sm: "text-2xl", lg: "text-4xl" }}
        />
        <SkillList skills={skillsCodeClan} />
      </ContentArea>
    </div>
  );
};

export default Skills;
