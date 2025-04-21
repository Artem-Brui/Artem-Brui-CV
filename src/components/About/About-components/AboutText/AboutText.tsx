import classNames from "classnames";
import cl from "./AboutText.module.scss";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";
import Tag from "@components/Home/Home-components/Tag";

const AboutText = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const greating = content.AboutSection.greating;
  const paragraphsList = content.AboutSection.paragraphsList;

  return (
    <div className={classNames(cl.text__container, cl[theme])}>
      <Tag content="<p>" />
      <p className={cl.greating}>{greating}</p>

      {paragraphsList.map((parag, index) => {
        return (
          <p key={index} className={cl.paragraph}>
            {parag.paragraph}
          </p>
        );
      })}

      <Tag content="<p>" />
    </div>
  );
};

export default AboutText;
