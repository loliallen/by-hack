import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (lang: Langs, text: string): Promise<Blob> => {
  const response = await axios.post(`${config.path}text/${lang}`, { text });
  return response.data;
};

export default {
  translate,
};
