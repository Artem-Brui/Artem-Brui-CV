import classNames from "classnames";
import cl from "./Header.module.scss";
import useTheme from "@customHooks/useTheme";
import Logo from "./Header-components/Logo";
import SocLinks from "./Header-components/SocLinks/SocLinks";
import Menu from "./Header-components/Menu/Menu";
import Switchers from "./Header-components/Switchers";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={classNames(cl.header_section, cl[theme])}>
      <div className={cl.header_container}>
        <Switchers />
        <div className={cl.header}>
          <Logo />
          <SocLinks />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
