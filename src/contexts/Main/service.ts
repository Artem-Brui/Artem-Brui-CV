import { createContext } from "react";
import { mainContextType } from "./types";


const Context = createContext<mainContextType | null>(null);

export default Context;