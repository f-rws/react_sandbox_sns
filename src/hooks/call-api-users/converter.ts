import {
    GetUserParamsData,
    PutFollowUserRequestData,
    PutUnfollowUserRequestData,
    PutUserRequestData,
} from "@/repositories/users/types.ts";
import { User } from "@/types/user.ts";

/*
 * useGetUser
 */
export type UserParams = {
    userId?: User["_id"];
    username?: User["username"];
};
export const convertUserParamsToData = (params: UserParams): GetUserParamsData => {
    const data: GetUserParamsData = {};
    const { userId, username } = params;

    if (userId) data.userId = userId.toString();
    if (username) data.username = username;

    return data;
};

/*
 * usePutUser
 */
export const convertUserToPutUserData = ({ _id, desc }: User): PutUserRequestData => {
    return {
        userId: _id.toString(),
        desc,
    };
};

/*
 * usePutFollowUser
 */
export const convertUserToPutFollowUserData = ({ _id }: User): PutFollowUserRequestData => {
    return {
        userId: _id.toString(),
    };
};

/*
 * usePutUnfollowUser
 */
export const convertUserToPutUnfollowUserData = ({ _id }: User): PutUnfollowUserRequestData => {
    return {
        userId: _id.toString(),
    };
};
