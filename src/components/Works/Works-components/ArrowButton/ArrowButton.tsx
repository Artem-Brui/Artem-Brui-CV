import classNames from "classnames";
import cl from "./ArrowButton.module.scss";
import { handleArrowClick } from "./service";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";
import { Right } from "@components/SVGs/Icons";

type Props = {
  direction: string;
  highlightIndex: number;
  handleClick: (number: number) => void;
};

const ArrowButton: React.FC<Props> = ({
  direction,
  highlightIndex,
  handleClick,
}) => {
  const { theme, colorDark, colorLight } = useTheme();
  const { content } = useLanguage();
  const isDark = theme === "dark";
  const arrowColor = isDark ? colorLight : colorDark;
  const worksAmount = content.WorksSection.works.length;

  return (
    <button
      className={classNames(cl.button, {
        [cl.button_left]: direction === "left",
        [cl.button_right]: direction === "right",
      })}
      onClick={() =>
        handleArrowClick(direction, highlightIndex, handleClick, worksAmount)
      }
    >
      <Right width={100} height={100} color={arrowColor} />
    </button>
  );
};

export default ArrowButton;
