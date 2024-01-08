import { apiClient } from "../apiClient.ts";
import {
    UserData,
    GetUserParams,
    PutFollowUserRequestData,
    PutUnfollowUserRequestData,
    PutUserRequestData,
} from "./types.ts";

// クエリーパラメータから特定のユーザーを取得
const getUser = async (params: GetUserParams): Promise<UserData> => {
    const res = await apiClient.get<UserData>("/users", { params });
    return res.data;
};

// ユーザー情報の更新
const putUser = async (userId: string, data: PutUserRequestData): Promise<null> => {
    const res = await apiClient.put<null>(`/users/${userId}`, data);
    return res.data;
};

// ユーザー情報の削除
const deleteUser = async (userId: string): Promise<null> => {
    const res = await apiClient.delete<null>(`/users/${userId}`);
    return res.data;
};

// ユーザーのフォロー
const putFollowUser = async (
    userId: string, // フォローされる側のID,
    data: PutFollowUserRequestData,
): Promise<null> => {
    const res = await apiClient.put<null>(`/users/${userId}/follow`, data);
    return res.data;
};

// ユーザーのフォロー解除
const putUnfollowUser = async (
    userId: string, // フォロー解除される側のID,
    data: PutUnfollowUserRequestData,
): Promise<null> => {
    const res = await apiClient.put<null>(`/users/${userId}/unfollow`, data);
    return res.data;
};

export const usersRepository = {
    getUser,
    putUser,
    deleteUser,
    putFollowUser,
    putUnfollowUser,
};
