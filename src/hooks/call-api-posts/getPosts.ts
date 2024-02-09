import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { Post } from "@/types/post.ts";

export const useGetPosts = () => {
    const { getPosts } = postsRepository;
    const { data: posts, loading, error, exec } = useCallApi<Post[]>();

    const fetchPosts = async (userId: User["_id"]) => {
        await exec(getPosts(userId.toString()));
    };

    return {
        loading,
        posts,
        error,
        fetchPosts,
    };
};
