import classNames from "classnames";
import SectionHead from "../SectionHead";
import cl from "./Works.module.scss";
import WorksGallery from "./Works-components/WorksGallery";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";

const Works = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const title = content.WorksSection.sectionName;
  const textHead = content.WorksSection.sectionHeader;

  return (
    <section id='works' className={classNames(cl.works, cl[theme])}>
      <SectionHead title={title} text={textHead} />
      <WorksGallery />
    </section>
  );
};

export default Works;
