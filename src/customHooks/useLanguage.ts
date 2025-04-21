import { useContext } from "react";
import { ContentType } from "@content/types.ts";
import Context from "contexts/Main/service";

type contextLanguageType = {
  language: string;
  content: ContentType;
  toggleLanguage: (lang: string) => void;
};

export default function useLanguage(): contextLanguageType {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context is not defined!!..");
  }
  
  const { language, content, toggleLanguage } = context;

  const languageContext = {
    language,
    content,
    toggleLanguage,
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return languageContext;
}
