import { debounce } from "lodash";
import { Langs } from "../TextAutocomplete/helpers";
import audio from "../../service/audio";

const _translate = async (
  lang: Langs,
  audioFile: File,
  responseType: string
): Promise<{
  result_variant: string;
  translated_text: string;
  translation_file_url: string;
}> => {
  return await audio.translate(lang, audioFile, responseType);
};

export const translate = _translate;
