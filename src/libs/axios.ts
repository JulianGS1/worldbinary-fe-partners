import axiosLib from "axios";
import config from "../config";

const axios = () => {
  axiosLib.create({
    baseURL: config.api_url,
  });
};

export default axios;
