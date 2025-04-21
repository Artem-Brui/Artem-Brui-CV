import { ReactNode } from "react";
import { PropsIcons } from "../../components/SVGs/Icons";
import { ContentType } from "@content/types";

export type ChildrenType = {
  children: ReactNode;
}

export type SkillType = {
  name: string;
  logo: React.FC<PropsIcons>;
  logoColor: string;
  descreption: string;
}

export type mainContextType = {
  theme: string;
  toggleTheme: () => void;
  colorLight: string;
  colorDark: string;
  colorDarkPlus: string;
  colorBrand: string;
  language: string;
  content: ContentType;
  toggleLanguage: (lang: string) => void;
}