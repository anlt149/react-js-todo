import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (conf) => {
  //hanlde exception here
  //..
  return conf;
});

axiosClient.interceptors.response.use((res) => {
  if (res && res.data) {
    return res.data;
  }
});

export default axiosClient;
