import { useState } from "react";
import cl from "./ThemeSwitcher.module.scss";
import classNames from "classnames";
import useTheme from "@customHooks/useTheme";
import { Moon, Sun } from "@components/SVGs/Icons";
import useWindowWidth from "@customHooks/useWindowScreen";

const ThemeSwitcher = () => {
  const { theme, toggleTheme, colorBrand } = useTheme();

  const [isDark, setIsDark] = useState(theme === "dark");

  const iconColor = !isDark ? colorBrand : "#fafa83";
  const iconSize = useWindowWidth().windowWidth > 1279 ? 15 : 13;

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <label
        htmlFor="switcher"
        className={classNames(cl.theme_container, cl[theme])}>
        <input
          id="switcher"
          type="checkbox"
          checked={isDark}
          onChange={handleClick}
        />
        <i
          className={classNames(cl.theme_icon, cl[`icon_${theme}`], {
            [cl.hiden]: isDark,
          })}
        >
          <Moon width={iconSize} height={iconSize} color={iconColor} />
        </i>

        <i
          className={classNames(cl.theme_icon, cl[`icon_${theme}`], {
            [cl.hiden]: !isDark,
          })}
        >
          <Sun width={iconSize} height={iconSize} color={iconColor} />
        </i>
      </label>
  );
};

export default ThemeSwitcher;
