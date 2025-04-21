import classNames from "classnames";
import useTheme from "../../../../customHooks/useTheme";
import cl from "./Counter.module.scss";
import useLanguage from "@customHooks/useLanguage";

const Counter = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const counterContent = [
    {
      name: content.HomeSection.counter.projectsTitle,
      number: content.HomeSection.counter.projectsAmount,
    },
    {
      name: content.HomeSection.counter.carrierTitle,
      number:
        new Date().getFullYear() -
        Number(content.HomeSection.counter.carrierStarted),
    },
    {
      name: content.HomeSection.counter.skillsTitle,
      number: content.HomeSection.counter.skillsAmount,
    },
  ];

  const isDark = theme === "dark";

  const containerClass = isDark
    ? cl.container_dark
    : cl.container_light;
  
  const textColorClass = isDark ? cl.font_dark : cl.font_light;

  const containerStyle = classNames(cl.counter, containerClass);
  const textStyle = classNames(cl.counter_text, textColorClass);

  return (
    <ul className={containerStyle}>
      {counterContent.map((item, index) => {
        return (
          <li key={index} className={cl.counter_item}>
            <p className={cl.counter_number}>{item.number}</p>
            <p className={textStyle}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Counter;
