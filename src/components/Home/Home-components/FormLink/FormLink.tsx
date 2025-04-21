import useLanguage from "@customHooks/useLanguage";
import useTheme from "../../../../customHooks/useTheme";
import getResponsiveIconSize from "../../../Header/Header-components/SocLinks/service";
import { Mail } from "../../../SVGs/Icons";
import styles from "./FormLink.module.scss";
import { Link } from "react-scroll";

const FormLink = () => {
  const { theme, colorBrand, colorDark, colorLight } = useTheme();
  const { content } = useLanguage();

  const callToAction = content.HomeSection.callToAction;
  const textColor = theme === "dark" ? colorLight : colorDark;
  const iconSize = getResponsiveIconSize(1.7);

  return (
    <Link
      to="contact"
      smooth={true}
      duration={1000}
      offset={-80}
      className={styles.form_link}
    >
      <p style={{ color: textColor }}>{callToAction}</p>
      <i className={styles.icon}>
        <Mail width={iconSize} height={iconSize} color={colorBrand} />
      </i>
    </Link>
  );
};

export default FormLink;
