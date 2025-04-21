import classNames from "classnames";

import "./App.scss";

import Header from "@components/Header";
import Home from "@components/Home";
import About from "@components/About/About.tsx";
import Skills from "@components/Skills/Skills.tsx";
import Works from "@components/Works/Works.tsx";
import Experience from "@components/Experience/Experience.tsx";
import Contact from "@components/Contact/Contact.tsx";
import Footer from "@components/Footer/Footer.tsx";
import useTheme from "@customHooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("page", theme)}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
