import LangugeSwitcher from "./Switchers-components/LangugeSwitcher";
import ThemeSwitcher from "./Switchers-components/ThemeSwitcher";
import cl from "./Switchers.module.scss";
import classNames from "classnames";

const Switchers = () => {


  return (
    <div className={classNames(cl.switcherBox)}>
      <ThemeSwitcher />
      <LangugeSwitcher />
    </div>
  );
};

export default Switchers;
