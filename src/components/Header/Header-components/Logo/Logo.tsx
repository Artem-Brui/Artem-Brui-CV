import Tag from "@components/Home/Home-components/Tag";
import cl from "./Logo.module.scss";

const Logo = () => {

  return (
    <div className={cl.logo_container}>
      <Tag content="<A/>" />
    </div>
  );
};

export default Logo;
