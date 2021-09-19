import document from "../../service/document";
import { Langs } from "../TextAutocomplete/helpers";

export const translate = async (lang: Langs, file: File) => {
  return await document.translate(lang, file);
};
