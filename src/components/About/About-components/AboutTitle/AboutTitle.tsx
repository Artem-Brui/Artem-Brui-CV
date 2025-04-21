import classNames from "classnames";
import cl from "./AboutTitle.module.scss";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";

const AboutTitle = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const sectionName = content.AboutSection.sectionName;
  return (
    <h3 className={classNames(cl.head, cl[theme])}>
      {sectionName}
    </h3>
  );
};

export default AboutTitle;
