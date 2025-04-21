import cl from "./Tag.module.scss";
import classNames from "classnames";

type Props = {
  content: string;
}

const Tag: React.FC<Props> = ({ content }) => {
  return <p className={classNames("tags", cl.tag)}>{content}</p>;
};

export default Tag;
