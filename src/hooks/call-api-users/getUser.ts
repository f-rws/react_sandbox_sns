import { useCallApi } from "@/hooks/callApi.ts";
import { User } from "@/types/user.ts";
import { usersRepository } from "@/repositories/users/repository.ts";
import { convertUserParamsToData, UserParams } from "./converter.ts";

export const useGetUser = () => {
    const { getUser } = usersRepository;
    const { data: user, loading, error, exec } = useCallApi<User>();

    const fetchUser = async (params: UserParams) => {
        const paramsData = convertUserParamsToData(params);
        await exec(getUser(paramsData));
    };

    return {
        loading,
        user,
        error,
        fetchUser,
    };
};
