import classNames from "classnames";
import SectionHead from "../SectionHead";
import cl from "./Experience.module.scss";
import Job from "./Experience-components/Job";
import useTheme from "@customHooks/useTheme";
import useLanguage from "@customHooks/useLanguage";


const Experience = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const title = content.ExperienceSection.sectionName;
  const textHead = content.ExperienceSection.sectionHeader;
  const jobList = [...content.ExperienceSection.jobs];

  return (
    <section id='experience' className={classNames(cl.experience, cl[theme])}>
      <SectionHead title={title} text={textHead} />
      <ul className={cl.jobs__list}>
        {jobList.map((job, index) => {
          return (
            <Job key={index} job={job} jobIndex={index} />
          )
        })}
      </ul>
    </section>
  );
};

export default Experience;
