import axios from "./axios"
import config from "./config"

const translate = async (audio: File):Promise<Blob> => {
    const response = await axios.post(`${config.path}audio`, audio, { responseType: "blob"})
    return response.data
}

export default {
    translate
}