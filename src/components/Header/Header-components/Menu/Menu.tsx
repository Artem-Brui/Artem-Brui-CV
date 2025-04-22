import useTheme from "@customHooks/useTheme";
import getResponsiveIconSize from "../SocLinks/service";
import cl from "./Menu.module.scss";
import { BurgerMenu } from "@components/SVGs/Icons";
import useLanguage from "@customHooks/useLanguage";
import useWindowWidth from "@customHooks/useWindowScreen";
import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ContentType } from "@content/types";

const Menu = () => {
  const isDesktop = useWindowWidth().windowWidth > 1279;

  const { theme, colorLight, colorDark } = useTheme();
  const { content } = useLanguage();
  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);

  const navLinksList = (Object.keys(content) as (keyof ContentType)[]).filter(
    (link) => link !== "Header" && link !== "Footer"
  );

  const iconColor = theme === "dark" ? colorLight : colorDark;
  const iconSize = getResponsiveIconSize(1.5);

  const handleNavItemClick = () => {
    if (!isDesktop) {
      setIsMobMenuVisible(!isMobMenuVisible);
    }
  };

  return (
    <nav
      className={classNames(cl.navigation, {
        [cl.mobile_menu]: isMobMenuVisible,
      })}
    >
      <a
        className={classNames(cl.burger_menu, {
          [cl.hiden]: isDesktop,
        })}
        onClick={handleNavItemClick}
      >
        <BurgerMenu width={iconSize} height={iconSize} color={iconColor} />
      </a>

      <ul
        className={classNames(cl.nav_list, {
          [cl.hiden]: !isDesktop,
          [cl[theme]]: isMobMenuVisible,
        })}
      >
        {navLinksList.map((link) => {
          const isHome = link === "HomeSection";
          const toLink = isHome ? "/" : link.split("Section")[0].toLowerCase();

          return (
            <NavLink
              className={({isActive}) =>
                classNames(cl.nav_item, { [cl.nav_active]: isActive })
              }
              to={toLink}
              onClick={handleNavItemClick}
            >
              {content[link].sectionName}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
