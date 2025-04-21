import cl from "./SkillsListWorks.module.scss";
import SkillItemWorks from "../SkillItemWorks";

type Props = {
  skills: string[];
};


const SkillsListWorks: React.FC<Props> = ({ skills }) => {

  return (
    <ul className={cl.skills_list}>
      {skills.map((skill, index) => {
        return (
          <SkillItemWorks
            key={index}
            skill={skill}
          />
        )
      })}
    </ul>
  );
};

export default SkillsListWorks;
