import { FormEvent, useRef, useState } from "react";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { useAuthState } from "@/globalStates/authState.ts";
import { useCreatePost } from "@/hooks/call-api-posts/createPost.ts";
import { useGetPosts } from "@/hooks/call-api-posts/getPosts.ts";
import { useUpload } from "@/hooks/call-api-upload/upload.ts";
import { CreatePost } from "@/types/post.ts";

export const Share = () => {
    const { user } = useAuthState();
    const { fetchPosts } = useGetPosts();
    const { createPost } = useCreatePost();
    const { execUpload } = useUpload();

    const [imageFile, setImageFile] = useState<FileList | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!user) return;
        if (!ref?.current?.value) return;

        const newPost: CreatePost = {
            userId: user._id,
            desc: ref.current.value,
            img: "",
        };

        // 画像がアップロードされている場合
        if (imageFile) {
            const imageFileInfo: File = imageFile[0];
            await execUpload(imageFileInfo);
        }

        await createPost(newPost);
        await fetchPosts(user._id);
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
