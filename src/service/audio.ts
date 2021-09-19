import { Langs } from "../components/TextAutocomplete/helpers";
import axios from "./axios";
import config from "./config";

const translate = async (
  lang: Langs,
  audio: File,
  responseType: string
): Promise<{
  result_variant: string;
  translated_text: string;
  translation_file_url: string;
}> => {
  const fd = new FormData();
  fd.append("audio", audio, audio.name);
  const response = await axios.post(`${config.path}audio/${lang}`, fd, {
    params: { result_variant: responseType },
  });
  return response.data;
};

export default {
  translate,
};
