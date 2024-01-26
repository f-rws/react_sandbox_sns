import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { usersRepository } from "@/repositories/users/repository.ts";
import { convertUserToData } from "./converter.ts";

export const usePutUser = () => {
    const { putUser } = usersRepository;
    const { loading, error, exec } = useCallApi<null>();

    const updateUser = async (userId: User["_id"], user: User) => {
        const data = convertUserToData(user);
        await exec(putUser(userId.toString(), data));
    };

    return {
        loading,
        error,
        updateUser,
    };
};
