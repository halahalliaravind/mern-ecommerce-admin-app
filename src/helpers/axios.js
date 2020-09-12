import axios from "axios";
import { api } from "../urlCongig";

const axiosInstance = axios.create({
  baseURL: api,
//   headers:{
//       'Authorization': ''
//   }
});

export default axiosInstance;
