import { apiClient } from "../apiClient.ts";
import { ResisterUserData, ResisterUser, LoginUserData, LoginUser } from "./types.ts";

// アカウント登録
const resisterUser = async (reqData: ResisterUserData): Promise<ResisterUser> => {
    const { data } = await apiClient.post("/auth/register", reqData);
    return data;
};

// ログイン
const loginUser = async (reqData: LoginUserData): Promise<LoginUser> => {
    const { data } = await apiClient.post("/auth/login", reqData);
    return data;
};

export const authRepository = {
    resisterUser,
    loginUser,
};
