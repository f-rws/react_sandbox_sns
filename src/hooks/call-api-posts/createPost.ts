import { postsRepository } from "@/repositories/posts/repository.ts";
import { useCallApi } from "@/hooks/callApi.ts";
import { CreatePost } from "@/types/post.ts";
import { convertPostToCreatePostRequestData } from "./converter.ts";

export const useCreatePost = () => {
    const { createPost: create } = postsRepository;
    const { loading, error, exec } = useCallApi<null>();

    const createPost = async (post: CreatePost) => {
        const data = convertPostToCreatePostRequestData(post);
        await exec(create(data));
    };

    return {
        loading,
        error,
        createPost,
    };
};
