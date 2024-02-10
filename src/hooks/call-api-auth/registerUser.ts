import { useState } from "react";
import { useCallApi } from "@/hooks/callApi.ts";
import { authRepository } from "@/repositories/auth/repository.ts";
import { UserData } from "@/repositories/users/types.ts";
import { RegisterUser } from "@/types/auth.ts";
import { User } from "@/types/user.ts";

export const useRegisterUser = () => {
    const { loading, error, exec } = useCallApi<UserData>();

    const [user, setUser] = useState<User | null>(null);

    const registerUser = async (user: RegisterUser) => {
        const data = await exec(authRepository.resisterUser(user));
        if (data) {
            setUser(data);
        }
    };

    return {
        loading,
        user,
        error,
        registerUser,
    };
};
