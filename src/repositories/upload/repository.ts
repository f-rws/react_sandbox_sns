import { apiClient } from "../apiClient.ts";
import { UploadData } from "./types.ts";

// 画像アップロード用API
const upload = async (reqData: UploadData): Promise<null> => {
    const { data } = await apiClient.post("/upload", reqData);
    return data;
};

export const uploadRepository = {
    upload,
};
