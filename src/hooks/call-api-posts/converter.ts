import { CreatePostRequestData, PutPostLikeRequestData, PutPostRequestData } from "@/repositories/posts/types.ts";
import { CreatePost, Post } from "@/types/post.ts";
import { User } from "@/types/user.ts";

/*
 * useCreatePost
 */
export const convertPostToCreatePostRequestData = (post: CreatePost): CreatePostRequestData => {
    const { userId, desc, img } = post;
    return {
        userId: userId.toString(),
        desc,
        img,
    };
};

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

/*
 * usePutPostLike
 */
export const convertPostToPutPostLikeRequestData = (user: User): PutPostLikeRequestData => {
    return {
        userId: user._id.toString(),
    };
};
