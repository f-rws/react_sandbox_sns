import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { usersRepository } from "@/repositories/users/repository.ts";
import { convertUserToPutUnfollowUserData } from "./converter.ts";

export const usePutUnfollowUser = () => {
    const { putUnfollowUser } = usersRepository;
    const { loading, error, exec } = useCallApi<null>();

    // NOTE: `userId`はフォローを解除されるユーザーのID
    const updateUnfollowUser = async (userId: User["_id"], user: User) => {
        const data = convertUserToPutUnfollowUserData(user);
        await exec(putUnfollowUser(userId.toString(), data));
    };

    return {
        loading,
        error,
        updateUnfollowUser,
    };
};
