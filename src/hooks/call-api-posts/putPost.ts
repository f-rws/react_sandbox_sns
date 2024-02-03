import { useCallApi } from "@/hooks/callApi.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { Post } from "@/types/post.ts";
import { convertPostToPutPostRequestData } from "./converter.ts";

export const usePutPost = () => {
    const { putPost } = postsRepository;
    const { loading, error, exec } = useCallApi<null>();

    const updatePost = async (postId: Post["_id"], post: Post) => {
        const data = convertPostToPutPostRequestData(post);
        await exec(putPost(postId, data));
    };

    return {
        loading,
        error,
        updatePost,
    };
};
