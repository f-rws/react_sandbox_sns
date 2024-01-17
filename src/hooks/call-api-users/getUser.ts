import { useState } from "react";
import { AxiosError, isAxiosError } from "axios";
import { usersRepository } from "@/repositories/users/repository.ts";
import { User } from "@/types/user.ts";
import { convertUserParamsToData, UserParams } from "./converter.ts";

export const useGetUser = () => {
    const { getUser } = usersRepository;

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetchUser = async (params: UserParams) => {
        setLoading(true);

        try {
            const paramsData = convertUserParamsToData(params);
            const res = await getUser(paramsData);
            setUser(res);
        } catch (e) {
            if (isAxiosError(e)) {
                setError(e);
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        user,
        error,
        fetchUser,
    };
};
