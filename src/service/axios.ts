import axios from "axios";

axios.defaults.baseURL = process.env.BASE_API_URL;

export default axios;
