import useTheme from "@customHooks/useTheme";
import getResponsiveIconSize from "../SocLinks/service";
import cl from "./Menu.module.scss";
import { BurgerMenu } from "@components/SVGs/Icons";
import { Link } from "react-scroll";
import useLanguage from "@customHooks/useLanguage";
import useWindowWidth from "@customHooks/useWindowScreen";
import classNames from "classnames";
import { useState } from "react";

const Menu = () => {
  const isDesktop = useWindowWidth().windowWidth > 1279;

  const { theme, colorLight, colorDark } = useTheme();
  const { content } = useLanguage();
  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);

  const iconColor = theme === "dark" ? colorLight : colorDark;
  const iconSize = getResponsiveIconSize(1.5);

  const handleNavItemClick = () => {
    if (!isDesktop) {
      setIsMobMenuVisible(!isMobMenuVisible);
    }
  }

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
        <Link
          className={cl.nav_item}
          to="home"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          <p>{content.HomeSection.sectionName}</p>
        </Link>

        <Link
          className={cl.nav_item}
          to="about"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          <p>{content.AboutSection.sectionName}</p>
        </Link>

        <Link
          className={cl.nav_item}
          to="skills"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          {content.SkillsSection.sectionName}
        </Link>

        <Link
          className={cl.nav_item}
          to="works"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          {content.WorksSection.sectionName}
        </Link>

        <Link
          className={cl.nav_item}
          to="experience"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          {content.ExperienceSection.sectionName}
        </Link>

        <Link
          className={cl.nav_item}
          to="contact"
          smooth={true}
          duration={1000}
          offset={-80}
          onClick={handleNavItemClick}
        >
          {content.ContactSection.sectionName}
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
