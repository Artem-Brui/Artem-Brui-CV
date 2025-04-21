import cl from "./ChallengeListWorks.module.scss";
import React from "react";
import ChallengeItem from "../ChallengeItemWorks";
import useLanguage from "@customHooks/useLanguage";

type Props = {
  challenges: string[];
};

const ChallengeListWorks: React.FC<Props> = ({ challenges }) => {
  const { content } = useLanguage();

  const { challengesTitle } = content.WorksSection;

  return (
    <ul className={cl.challenges_list}>
      {challengesTitle}
      {challenges.map((challenge, index) => <ChallengeItem key={index} challengeItem={challenge} />
      )}
    </ul>
  );
};

export default ChallengeListWorks;
