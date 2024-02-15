import { useState } from "react";
import { useCallApi } from "@/hooks/callApi.ts";
import { authRepository } from "@/repositories/auth/repository.ts";
import { UserData } from "@/repositories/users/types.ts";
import { LoginUser } from "@/types/auth.ts";
import { User } from "@/types/user.ts";

type DoLoginUser = {
    data: LoginUser;
    onSuccess?: (user: User) => void;
};

export const useLoginUser = () => {
    const { loading, error, exec } = useCallApi<UserData>();

    const [user, setUser] = useState<User | null>(null);

    const loginUser = async ({ data, onSuccess }: DoLoginUser) => {
        const userData = await exec(authRepository.loginUser(data));
        if (userData) {
            setUser(userData);
            onSuccess?.(userData);
        }
    };

    return {
        loading,
        user,
        error,
        loginUser,
    };
};
