import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (lang: Langs, audio: File): Promise<Blob> => {
  const response = await axios.post(`${config.path}audio/${lang}`, audio, {
    responseType: "blob",
  });
  return response.data;
};

export default {
  translate,
};
