import { content } from "../../../../content/mainContent_EN";
import { SkillType } from "../../../../contexts/Main/types";
import { PropsIcons } from "../../../SVGs/Icons";

const skillsList: SkillType[] = content.SkillsSection.skillsList;

export const getSkillLogo = (name: string): React.FC<PropsIcons> | string => {
  const skill = skillsList.find((item) => item.name === name);

  return skill ? skill.logo : "not found";
};

export const getSkillLogoColor = (name: string): string => {
  const skill = skillsList.find((item) => item.name === name);

  return skill ? skill.logoColor : "not found";
};