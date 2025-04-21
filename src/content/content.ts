import {content as en} from "./mainContent_EN";
import {content as de} from "./mainContent_DE";
import {content as ua} from "./mainContent_UA";
import { ContentType } from "./types";

type LangType = {
  en: ContentType;
  de: ContentType;
  ua: ContentType;
}

const languages: LangType = {
  en,
  de,
  ua,
};

export default languages;

