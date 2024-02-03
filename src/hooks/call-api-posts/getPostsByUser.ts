import { useState } from "react";
import { useCallApi } from "@/hooks/callApi.ts";
import { PostData } from "@/repositories/posts/types.ts";
import { postsRepository } from "@/repositories/posts/repository.ts";
import { User } from "@/types/user.ts";
import { Post } from "@/types/post.ts";

export const useGetPostsByUser = () => {
    const { getPostsByUser } = postsRepository;
    const { loading, error, exec } = useCallApi<PostData[]>();

    const [postsByUser, setPostsByUser] = useState<Post[] | null>(null);

    const fetchPostsByUser = async (username: User["username"]) => {
        const data = await exec(getPostsByUser(username));
        if (data) {
            setPostsByUser(data);
        }
    };

    return {
        loading,
        postsByUser,
        error,
        fetchPostsByUser,
    };
};
