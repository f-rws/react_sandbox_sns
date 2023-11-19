import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "./constants.ts";

export const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
