import { UserData } from "@/repositories/users/types.ts";
import { apiClient } from "../apiClient.ts";
import { LoginUserRequestData, ResisterUserRequestData } from "./types.ts";

// アカウント登録
const resisterUser = async (reqData: ResisterUserRequestData): Promise<UserData> => {
    const { data } = await apiClient.post("/auth/register", reqData);
    return data;
};

// ログイン
const loginUser = async (reqData: LoginUserRequestData): Promise<UserData> => {
    const { data } = await apiClient.post("/auth/login", reqData);
    return data;
};

export const authRepository = {
    resisterUser,
    loginUser,
};
