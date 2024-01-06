import { apiClient } from "../apiClient.ts";
import { CreatePostRequestData, PostData, PutPostLikeRequestData, PutPostRequestData } from "./types.ts";

// タイムラインの投稿を取得
const getPosts = async (userId: string): Promise<PostData[]> => {
    const res = await apiClient.get<PostData[]>(`/posts/timeline/${userId}`);
    return res.data;
};

// プロフィール専用のタイムラインの取得
const getPostsByUser = async (userName: string): Promise<PostData[]> => {
    const res = await apiClient.get<PostData[]>(`/posts/profile/${userName}`);
    return res.data;
};

// 特定の投稿を取得する
const getPost = async (postId: string): Promise<PostData> => {
    const res = await apiClient.get<PostData>(`/posts/${postId}`);
    return res.data;
};

// 投稿を作成
const createPost = async (data: CreatePostRequestData): Promise<null> => {
    const res = await apiClient.post<null>("/posts", data);
    return res.data;
};

// 投稿を編集
const putPost = async (postId: string, data: PutPostRequestData): Promise<null> => {
    const res = await apiClient.put<null>(`/posts/${postId}`, data);
    return res.data;
};

// 投稿を削除
const deletePost = async (postId: string): Promise<null> => {
    const res = await apiClient.delete<null>(`/posts/${postId}`);
    return res.data;
};

// 特定の投稿にいいねをする
const putPostLike = async (postId: string, data: PutPostLikeRequestData): Promise<null> => {
    const res = await apiClient.put<null>(`/posts/${postId}/like`, data);
    return res.data;
};

export const postsRepository = {
    getPosts,
    getPostsByUser,
    getPost,
    createPost,
    putPost,
    deletePost,
    putPostLike,
};
