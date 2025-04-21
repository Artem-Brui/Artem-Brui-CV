import useLanguage from "@customHooks/useLanguage";
import FormLink from "../FormLink";
import Tag from "../Tag";
import cl from "./Descreption.module.scss";

const Descreption = () => {
  const { content } = useLanguage();

  const text = content.HomeSection.descreption;
  
  return (
    <>
      <div className={cl.descreption}>
        <Tag content={"<p>"} />
        <p className={cl.descreption_text}>{text}</p>

        <Tag content={"<p>"} />
        <FormLink />
      </div>
    </>
  );
};

export default Descreption;
