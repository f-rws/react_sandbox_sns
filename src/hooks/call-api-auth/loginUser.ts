import { useState } from "react";
import { useCallApi } from "@/hooks/callApi.ts";
import { authRepository } from "@/repositories/auth/repository.ts";
import { UserData } from "@/repositories/users/types.ts";
import { LoginUser } from "@/types/auth.ts";
import { User } from "@/types/user.ts";

export const useLoginUser = () => {
    const { loading, error, exec } = useCallApi<UserData>();

    const [user, setUser] = useState<User | null>(null);

    const loginUser = async (user: LoginUser) => {
        const data = await exec(authRepository.loginUser(user));
        if (data) {
            setUser(data);
        }
    };

    return {
        loading,
        user,
        error,
        loginUser,
    };
};
