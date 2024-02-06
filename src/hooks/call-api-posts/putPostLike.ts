import { useCallApi } from "@/hooks/callApi.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { Post } from "@/types/post.ts";
import { User } from "@/types/user.ts";
import { convertPostToPutPostLikeRequestData } from "./converter.ts";

export const usePutPostLike = () => {
    const { loading, error, exec } = useCallApi<null>();

    const updatePostLike = (postId: Post["_id"], user: User) => {
        const data = convertPostToPutPostLikeRequestData(user);
        return exec(postsRepository.putPostLike(postId, data));
    };

    return {
        loading,
        error,
        updatePostLike,
    };
};
