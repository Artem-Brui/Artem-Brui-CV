import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "contexts/Main/ContextProvider";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "@components/About/About";
import Home from "@components/Home";
import Skills from "@components/Skills";
import Works from "@components/Works";
import Experience from "@components/Experience";
import Contact from "@components/Contact";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Works />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </ContextProvider>
);
