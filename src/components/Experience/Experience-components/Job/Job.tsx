import useLanguage from "@customHooks/useLanguage";
import cl from "./Job.module.scss";
import { dateCutter, periodCounter } from "./services";

type Props = {
  jobIndex: number;
  job: {
    company: string;
    location: string;
    jobType: string;
    role: string;
    challenges: string[];
    achievements: string[];
    startDate: string;
    endDate: string;
  };
};

const Job: React.FC<Props> = ({ job, jobIndex }) => {
  const { content } = useLanguage();

  const {
    company,
    location,
    jobType,
    role,
    challenges,
    achievements,
    startDate,
    endDate,
  } = job;

  const titles = { ...content.ExperienceSection.titles };
  const present = content.ExperienceSection.present;
  
  const jobPeriod = `${dateCutter(jobIndex, startDate)} - ${endDate.length ? dateCutter(jobIndex, endDate) : present}`

  return (
    <li key={company} className={cl.jobs__item}>
      <p className={cl.role}>{role}</p>

      <p className={cl.company}>{company}</p>

      <p className={cl.jobType}>{jobType}</p>

      <p className={cl.period}>
        {jobPeriod}
        <br/>
        {periodCounter(jobIndex, startDate, endDate)}
      </p>

      <p className={cl.location}>{location}</p>

      <ul className={cl.achievements}>
        <span>{titles.achievements}</span>:
        {achievements.map((achievement, i) => {
          return (
            <li key={i} className={cl.achievement}>
              {achievement}
            </li>
          )
        })}
      </ul>

      <ul className={cl.challenges}>
      <span>{titles.challenges}</span>:
        {challenges.map((challenge, i) => {
          return (
            <li key={i} className={cl.challenge}>
              {challenge}
            </li>
          )
        })}
      </ul>

     
    </li>
  );
};

export default Job;
