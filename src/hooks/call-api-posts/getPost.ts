import { useState } from "react";
import { useCallApi } from "@/hooks/callApi.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { PostData } from "@/repositories/posts/types.ts";
import { Post } from "@/types/post.ts";

export const useGetPost = () => {
    const { getPost } = postsRepository;
    const { loading, error, exec } = useCallApi<PostData>();

    const [post, setPost] = useState<Post | null>(null);

    const fetchPost = async (postId: Post["_id"]) => {
        const data = await exec(getPost(postId));
        if (data) {
            setPost(data);
        }
    };

    return {
        loading,
        post,
        error,
        fetchPost,
    };
};
