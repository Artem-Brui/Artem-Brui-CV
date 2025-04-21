import classNames from "classnames";
import cl from "./WorkItem.module.scss";
import React from "react";
import SkillsList from "../SkillsListWorks";
import ChallengeList from "../ChallengeListWorks";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";
import computer from '@images/computer.webp';

export type WorkType = {
    name: string;
    link: string;
    previewImage: string;
    created: string;
    challenges: string[];
    skills: string[];
};

type Props = {
  work: WorkType;
  highlightIndex: number;
  index: number;
};

const WorkItem: React.FC<Props> = ({ work, index, highlightIndex }) => {
  const { content } = useLanguage();
  const { theme } = useTheme();

  const { name, link, previewImage, created, challenges, skills } = work;
  const { buttonTitle, createdTitle } = content.WorksSection;
  
  const isHighlighted = index == highlightIndex - 1;
  const listItemDisplay = isHighlighted ? 'flex' : 'none';

  return (
    <li
      style={{
        display: listItemDisplay,
      }}
      className={classNames(cl.work__item, cl[`work__item__${theme}`])}>
      <h4 className={cl.title}>{name}</h4>

      <p className={cl.date}>
        {createdTitle} {created}
      </p>

      <div className={cl.item__image}>
        <img className={cl.computer} src={computer} alt="Computer" />

        <div className={cl.preview_container}>
          <img className={cl.preview} src={previewImage} alt="Preview" />
        </div>
      </div>

      <SkillsList skills={skills} />
      <ChallengeList challenges={challenges} />

      <a className={cl.link} href={link} target="_blank">
        {buttonTitle}
      </a>
    </li>
  );
};

export default WorkItem;
