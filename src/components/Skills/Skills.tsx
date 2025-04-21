import cl from "./Skills.module.scss";
import SectionHead from "../SectionHead";
import classNames from "classnames";
import SkillsBoard from "./Skills-components/SkillsBoard";
import useTheme from "@customHooks/useTheme";
import useLanguage from "@customHooks/useLanguage";

const Skills = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const title = content.SkillsSection.sectionName;
  const textHead = content.SkillsSection.sectionHeader;

  return (
    <section  id='skills' className={classNames(cl.skills, cl[theme])}>
      <SectionHead title={title} text={textHead} />
      <SkillsBoard />
    </section>
  );
};

export default Skills;
