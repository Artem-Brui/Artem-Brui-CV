import React from "react";
import WorkItem from "../WorkItem";
import cl from "./WorksList.module.scss";
import { WorkType } from "../WorkItem/WorkItem";

type Props = {
  worksList: WorkType[];
  highlightIndex: number;
};

const WorksList: React.FC<Props> = ({ worksList, highlightIndex }) => {
  return (
    <ul className={cl.works__list}>
      {worksList.map((work, index) => {
        return (
          <WorkItem
            key={index}
            work={work}
            index={index}
            highlightIndex={highlightIndex}
          />
        );
      })}
    </ul>
  );
};

export default WorksList;
