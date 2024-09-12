import { ROUTES } from "@/constants/routes";
import { getToken } from "@chakra-ui/react";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log("Inside request interceptor ", config);
    const at = sessionStorage.getItem("at");

    if (at) {
      config.headers["Authorization"] = `Bearer ${at}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const originalReq = error.config as AxiosRequestConfig;

    console.log("Inside response interceptor ", originalReq);
    if (error.response?.status === 403 || error.response?.status === 401) {
      // request for a new token
      const searchParams = new URLSearchParams();
      searchParams.append("scope", "member");
      searchParams.append("grant_type", "password");
      searchParams.append("password", "r00t!");
      searchParams.append("username", "administrator");

      axios
        .post(process.env.NEXT_PUBLIC_API_URL! + ROUTES.getToken, searchParams)
        .then((response) => {
          sessionStorage.setItem("at", response.data.access_token);
          sessionStorage.setItem("rt", response.data.refresh_token);
          sessionStorage.setItem("expires_in", response.data.expires_in);

          return axios(originalReq);
        })
        .catch((error) => Promise.reject(error));
    }
  }
);
