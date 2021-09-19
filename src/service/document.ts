import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (lang: Langs, document: File): Promise<Blob> => {
  const response = await axios.post(`${config.path}audio/${lang}`, document, {
    responseType: "blob",
  });
  return response.data;
};

export default {
  translate,
};
