import classNames from "classnames";
import cl from "./About.module.scss";
import AboutTitle from "./About-components/AboutTitle";
import AboutText from "./About-components/AboutText";
import image from "@images/laptop.webp";
import useTheme from "@customHooks/useTheme";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id='about' className={classNames(cl.about, cl[theme])}>
      <div className={cl.section_container}>
        <AboutTitle />
        <AboutText />
        <img
          className={cl.image}
          src={image}
          alt="Person typing on the laptop"
        />
      </div>
    </section>
  );
};

export default About;
