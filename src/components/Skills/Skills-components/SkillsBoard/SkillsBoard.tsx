import cl from "./SkillsBoard.module.scss";
import { useRef, useState } from "react";
import SkillItem from "../SkillItem";
import classNames from "classnames";
import useTheme from "@customHooks/useTheme";
import useWindowWidth from "@customHooks/useWindowScreen";
import useLanguage from "@customHooks/useLanguage";
import useToogleEvents from "@customHooks/useToggleEvents";

const SkillsBoard = () => {
  const { theme, colorDark, colorLight } = useTheme();
  const { windowWidth } = useWindowWidth();
  const { content } = useLanguage();

  const skillsListCopy = [...content.SkillsSection.skillsList].reverse();

  const isThemeDark = theme === 'dark';
  const scrollerBGColor = isThemeDark ? colorLight : colorDark;

  const scrollerElement = useRef<HTMLDivElement | null>(null);
  const listElementRef = useRef<HTMLUListElement | null>(null)

  const toglerWidth =
    scrollerElement.current?.getBoundingClientRect().width || 0;
  const toglerInitialX =
    scrollerElement.current?.getBoundingClientRect().x || 0;

  const [isMoving, setIsMoving] = useState(false);
  const [toogleTransform, setToogleTransform] = useState(0);

  useToogleEvents(isMoving, toglerInitialX, toglerWidth, setToogleTransform, setIsMoving);

  const handleMouseDown = () => {
    setIsMoving(true);
  }

  const deltaX = Math.min(Math.max(toogleTransform, 0), toglerWidth);

  const skillsRoundingIndex =
    (deltaX / (toglerWidth / 100)) *
    ((360 - skillsListCopy.length * 1.50) / 100) || 0;


  //RADIUS
  const circleRadius = windowWidth > 1279 ? 180 : 130;

  //TITLE
  const anglePerSkill = 360 / skillsListCopy.length;
  
  const highlightIndex = skillsListCopy.length - 1 - Math.floor(skillsRoundingIndex / anglePerSkill);
  const shownTitle = skillsListCopy[highlightIndex].name;
  const shownDescription = skillsListCopy[highlightIndex].descreption;
  
  return (
    <div className={cl.skills_board}>
      <ul
        className={cl.list}
        ref={listElementRef}>
        {skillsListCopy.map((item, index) => {
          return (
            <SkillItem
              key={index}
              skill={item}
              index={index}
              moveIndex={skillsRoundingIndex}
              circleRadius={circleRadius}
              highlightIndex={highlightIndex}
            />
          );
        })}

        <p className={cl.item_title}>{shownTitle}</p>
      </ul>

      <p className={cl.item_description}>{shownDescription}</p>

      <div className={cl.switcher_container}>
        <div className={cl.scroller_container}>
          <div
            className={classNames(cl.scroller)}
            style={{backgroundColor: scrollerBGColor}}
            ref={scrollerElement}></div>

          <div
            className={cl.togler}
            style={{ transform: `translate(${deltaX}px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBoard;
