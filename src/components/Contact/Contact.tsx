import classNames from "classnames";
import cl from "./Contact.module.scss";
import SectionHead from "../SectionHead";
import Form from "./Contact-components/Form";
import useLanguage from "@customHooks/useLanguage";
import useTheme from "@customHooks/useTheme";

const Contact = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();

  const title = content.ContactSection.sectionName;
  const textHead = content.ContactSection.sectionHeader;

  return (
    <section id='contact' className={classNames(cl.contact, cl[theme])}>
      <div className={cl.contact_container}>
        <SectionHead title={title} text={textHead} />
        <Form />
      </div>

    </section>
  )
};

export default Contact;
