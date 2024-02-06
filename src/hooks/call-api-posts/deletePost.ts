import { useCallApi } from "@/hooks/callApi.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { Post } from "@/types/post.ts";

export const useDeletePost = () => {
    const { loading, error, exec } = useCallApi<null>();

    const deletePost = async (postId: Post["_id"]) => {
        await exec(postsRepository.deletePost(postId));
    };

    return {
        loading,
        error,
        deletePost,
    };
};
