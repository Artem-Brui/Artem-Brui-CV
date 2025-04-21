import cl from "./SectionHead.module.scss";

type Props = {
  title: string;
  text: string;
}

const SectionHead: React.FC<Props> = ({ title, text}) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>{ title }</h2>
      <p className={cl.text}>{ text }</p>
    </div>
  );
};

export default SectionHead;
