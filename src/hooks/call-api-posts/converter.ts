import { PutPostRequestData } from "@/repositories/posts/types.ts";
import { Post } from "@/types/post.ts";

/*
 * usePutPost
 */
export const convertPostToPutPostRequestData = (post: Post): PutPostRequestData => {
    const { userId, desc, img } = post;
    return {
        userId: userId.toString(),
        desc: desc ?? "",
        img,
    };
};
