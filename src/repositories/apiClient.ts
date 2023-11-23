import axios, { AxiosInstance } from "axios";

// TODO: 環境変数に置き換える
const BASE_DOMAIN = "http://localhost:3000";
const BASE_URL = `${BASE_DOMAIN}/api`;
export const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
