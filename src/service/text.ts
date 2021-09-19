import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (
  lang: Langs,
  text: string
): Promise<{ translation_text: string }> => {
  const response = await axios.post(`${config.path}text/${lang}`, { text });
  return response.data;
};

const summary = async (lang: Langs, text: string) => {
  const response = await axios.post(`${config.path}/summary/${lang}`, { text });
  return response.data;
};

export default {
  translate,
  summary,
};
