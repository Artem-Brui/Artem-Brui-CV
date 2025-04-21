import cl from "./ChallengeItemWorks.module.scss";
import React from "react";

type Props = {
  challengeItem: string;
};

const ChallengeItemWorks: React.FC<Props> = ({ challengeItem }) => {
  return <li className={cl.challenge_item}>{challengeItem}</li>;
};

export default ChallengeItemWorks;
