import classNames from "classnames";
import cl from "./SkillItem.module.scss";
import useTheme from "@customHooks/useTheme";
import useWindowWidth from "@customHooks/useWindowScreen";
import useLanguage from "@customHooks/useLanguage";
import { FigmaHighlight, PropsIcons } from "@components/SVGs/Icons";
import { SkillType } from "contexts/Main/types";

type Props = {
  skill: SkillType;
  index: number;
  moveIndex: number;
  circleRadius: number;
  highlightIndex: number;
};


const SkillItem: React.FC<Props> = ({ skill, index, moveIndex, circleRadius, highlightIndex }) => {
  const { theme, colorBrand } = useTheme();
  const { windowWidth } = useWindowWidth();
  const { content } = useLanguage();
  
  const skillsAmount = content.SkillsSection.skillsList.length;
  const anglePerSkill = 360 / skillsAmount;
  const isThemeDark = theme === 'dark';

  const isHighlighted = highlightIndex === index;

  let iconSize = 0; 
  if (windowWidth > 1279) {
    iconSize = isHighlighted ? 100 : 50;
  } else {
    iconSize = isHighlighted ? 80 : 40;
  }

  const iconColor = isHighlighted ? skill.logoColor : colorBrand;
  const movementAngle = isHighlighted
    ? Math.floor(moveIndex / anglePerSkill) * anglePerSkill
    : moveIndex;
  
  const IconComponent: React.FC<PropsIcons> =
    skill.name !== 'figma' || !isHighlighted
      ? skill.logo
      : FigmaHighlight;
      
  const rotateAngle = anglePerSkill * (index + 1) + movementAngle;

  return (
      <li
      className={classNames(cl.list__item, {
        [cl.highlighted]: isHighlighted,
        [cl.dark]: isHighlighted && isThemeDark,
        [cl.light]: isHighlighted && !isThemeDark,
      })}
      style={{
        width: iconSize,
        height: iconSize,
          transform: `rotate(${rotateAngle}deg) translate(0, -${circleRadius}px) rotate(-${rotateAngle}deg)`
        }}
    >
        {IconComponent ? (
          <IconComponent width={iconSize} height={iconSize} color={iconColor} />
        ) : (
          <p>Not found</p>
        )}
      </li>
      
  );
};

export default SkillItem;
