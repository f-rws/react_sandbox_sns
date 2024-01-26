import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { usersRepository } from "@/repositories/users/repository.ts";

export const useDeleteUser = () => {
    const { deleteUser: destroyUser } = usersRepository;
    const { loading, error, exec } = useCallApi<null>();

    const deleteUser = async (userId: User["_id"]) => {
        await exec(destroyUser(userId.toString()));
    };

    return {
        loading,
        error,
        deleteUser,
    };
};
