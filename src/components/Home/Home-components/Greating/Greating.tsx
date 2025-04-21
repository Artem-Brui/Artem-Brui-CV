import useLanguage from "@customHooks/useLanguage";
import Tag from "../Tag";
import cl from "./Greating.module.scss";

const Greating = () => {
  const { content } = useLanguage();
  
  const contentList = [...content.HomeSection.greating];

  return (
    <div className={cl.greating}>
      <Tag content={"<h1>"} />

      <div className={cl.text__container}>
        {contentList.map((text, index) => {
          return (
            <p key={index} className={cl.greating_text}>
              {text}
              <br />
            </p>
          );
        })}
      </div>

      <Tag content={"<h1>"} />
    </div>
  );
};

export default Greating;
