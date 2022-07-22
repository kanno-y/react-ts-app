import axios from "axios";
import { baseUrl } from "./request";

//TMDBからのbaseURLリクエストを作成
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
