import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (lang: Langs, document: File) => {
  const fd = new FormData();
  fd.append("document", document, document.name);
  const response = await axios.post(`${config.path}audio/${lang}`, document);
  return response.data;
};

export default {
  translate,
};
