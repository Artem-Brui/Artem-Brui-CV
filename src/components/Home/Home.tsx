import Greating from "./Home-components/Greating";
import Descreption from "./Home-components/Descreption";
import Counter from "./Home-components/Counter/Counter";
import Photo from "./Home-components/Photo";
import cl from "./Home.module.scss";
import classNames from "classnames";
import useTheme from "@customHooks/useTheme";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section id='home' className={classNames(cl.home, cl[theme])} >
      <div className={cl.section_container}>
        <Photo />
        <Greating />
        <Descreption />
        <Counter />
      </div>
    </section>
  );
};

export default Home;
