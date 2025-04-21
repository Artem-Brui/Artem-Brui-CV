import useWindowWidth from "@customHooks/useWindowScreen";
import cl from "./LangugeSwitcher.module.scss";
import useLanguage from "@customHooks/useLanguage";
import languages from "@content/content";
import { PropsIcons } from "@components/SVGs/Icons";
import classNames from "classnames";
import { useState } from "react";

const LangugeSwitcher = () => {
  const [isLangListVisible, setIsLangListVisible] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const savedLanguage = window.localStorage.getItem("portfolioLanguage");
  const attributeValue = savedLanguage === "ua" ? "uk" : savedLanguage;

  if (!savedLanguage) {
    window.localStorage.setItem("portfolioLanguage", language);
  }

  let flagWidth = 30;

  if (useWindowWidth().windowWidth > 1279) {
    flagWidth = 25;
  }

  if (useWindowWidth().windowWidth > 1919) {
    flagWidth = 28;
  }

  const flagHeight = (flagWidth / 3) * 2;

  const handleItemClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    if (isLangListVisible) {
      const newLanguage = event.currentTarget.getAttribute("data-language");

      if (newLanguage) {
        const html: HTMLCollectionOf<HTMLHtmlElement> =
          document.getElementsByTagName("html");
        if (attributeValue) [...html][0].setAttribute("lang", attributeValue);

        toggleLanguage(newLanguage);
        window.localStorage.setItem("portfolioLanguage", newLanguage);
        setIsLangListVisible(false);
      }
    } else {
      setIsLangListVisible(true);
    }
  };

  return (
    <ul className={cl.language_list}>
      {Object.keys(languages).map((lang, index) => {
        const FlagComponent: React.FC<PropsIcons> =
          languages[lang as keyof typeof languages].Header.languageFlag;

        const isCurrent = savedLanguage
          ? isLangListVisible || lang === savedLanguage
          : isLangListVisible || lang === language;

        return (
          <li
            key={index}
            data-language={lang}
            className={classNames(cl.language_item, {
              [cl.hiden]: !isCurrent,
            })}
            onClick={handleItemClick}
          >
            <div className={cl.language_flag}>
              {FlagComponent && (
                <FlagComponent width={flagWidth} height={flagHeight} />
              )}
            </div>

            <p className={cl.language_title}>{lang}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default LangugeSwitcher;
