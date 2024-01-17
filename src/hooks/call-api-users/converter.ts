import { GetUserParamsData } from "@/repositories/users/types.ts";
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
