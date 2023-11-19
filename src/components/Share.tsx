import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { FormEvent, useRef, useState } from "react";
import { useAuthState } from "../globalStates/authState.ts";
import { apiClient } from "../api";

type Props = {
    fetchPosts: () => Promise<void>;
};

export const Share = ({ fetchPosts }: Props) => {
    const { user } = useAuthState();

    const [imageFile, setImageFile] = useState<FileList | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!user) return;
        if (!ref?.current?.value) return;

        const newPost = {
            userId: user._id,
            desc: ref.current.value,
            img: "",
        };

        // 画像がアップロードされている場合
        if (imageFile) {
            const formData = new FormData();
            const imageFileInfo: File = imageFile[0];
            const imageFileName = Date.now() + imageFileInfo.name;

            formData.append("name", imageFileName);
            formData.append("file", imageFileInfo);

            newPost.img = imageFileName;
            await apiClient.post("/upload", formData);
        }

        await apiClient.post("/posts", newPost);
        await fetchPosts();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    ref={ref}
                    type="text"
                    placeholder="今何してる？"
                    minLength={1}
                    maxLength={255}
                    required={true}
                />
            </div>
            <div>
                <label htmlFor={"file"}>
                    <Image />
                    <span>写真</span>
                    <input
                        type="file"
                        id="file"
                        accept={".png, .jpeg, .jpg"}
                        style={{ display: "none" }}
                        onChange={(e) => setImageFile(e.target.files)}
                    />
                </label>
                <div>
                    <Gif />
                    <span>GIF</span>
                </div>
                <div>
                    <Face />
                    <span>気持ち</span>
                </div>
                <button type="submit">
                    <Analytics />
                    <span>投稿</span>
                </button>
            </div>
        </form>
    );
};
