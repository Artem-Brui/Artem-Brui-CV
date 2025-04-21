import { useContext } from "react";
import ThemeContext from "../contexts/Main/service.ts";

type contextThemeType = {
  theme: string;
  toggleTheme: () => void;
  colorLight: string;
  colorDark: string;
  colorDarkPlus: string;
  colorBrand: string;
}

export default function useTheme(): contextThemeType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Context not found...')
  }

  const {
    theme,
    toggleTheme,
    colorLight,
    colorDark,
    colorDarkPlus,
    colorBrand,
  } = context;

  const themeContext = {
    theme,
    toggleTheme,
    colorLight,
    colorDark,
    colorDarkPlus,
    colorBrand,
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return themeContext;
}
