import classNames from "classnames";
import cl from "./Footer.module.scss";
import useTheme from "@customHooks/useTheme";
import SocLinks from "@components/Header/Header-components/SocLinks/SocLinks";
import useLanguage from "@customHooks/useLanguage";

const Footer = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const rightsText = content.Footer.textRights;

  return (
    <footer className={classNames(cl.footer, cl[theme])}>
      <div className={cl.footer_container}>
        <SocLinks />
  
        <p>{rightsText}</p>
      </div>
    </footer>
  )
};

export default Footer;
