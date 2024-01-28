import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { usersRepository } from "@/repositories/users/repository.ts";
import { convertUserToPutFollowUserData } from "./converter.ts";

export const usePutFollowUser = () => {
    const { putFollowUser } = usersRepository;
    const { loading, error, exec } = useCallApi<null>();

    // NOTE: `userId`はフォローされるユーザーのID
    const updateFollowUser = async (userId: User["_id"], user: User) => {
        const data = convertUserToPutFollowUserData(user);
        await exec(putFollowUser(userId.toString(), data));
    };

    return {
        loading,
        error,
        updateFollowUser,
    };
};
