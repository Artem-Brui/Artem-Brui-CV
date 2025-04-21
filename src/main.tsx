import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "contexts/Main/ContextProvider";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
