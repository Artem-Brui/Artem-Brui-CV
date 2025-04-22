import classNames from "classnames";
import { Outlet } from "react-router-dom";

import "./App.scss";

import Header from "@components/Header";
import Footer from "@components/Footer/Footer.tsx";
import useTheme from "@customHooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("page", theme)}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
