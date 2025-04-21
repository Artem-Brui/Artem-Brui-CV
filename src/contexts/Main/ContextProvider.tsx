import { useState } from "react";
import { ChildrenType } from "./types.ts";
import contextData from "./contextData.ts";
import Context from "./service.ts";
import languages from "@content/content.ts";
import { ContentType } from "@content/types.ts";

const ContextProvider: React.FC<ChildrenType> = ({ children }) => {
  // ==THEME

  const [theme, setTheme] = useState("dark");

  const { colorLight, colorDark, colorDarkPlus, colorBrand } = contextData;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // ==LANGUAGE

  const savedLanguage = window.localStorage.getItem("portfolioLanguage");
  const attributeValue = savedLanguage === 'ua' ? 'uk' : savedLanguage;

  const html: HTMLCollectionOf<HTMLHtmlElement> | null =
    document.getElementsByTagName("html");
  const meta: HTMLElement | null =
    document.getElementById("language");
  
  [...html][0].setAttribute("lang", attributeValue || 'en');

  if (meta) meta.setAttribute("content", attributeValue || 'en');

  const [language, setLanguage] = useState(savedLanguage || "en");

  const toggleLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  const content: ContentType = languages[language as keyof typeof languages];

  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        colorLight,
        colorDark,
        colorDarkPlus,
        colorBrand,
        language,
        content,
        toggleLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
