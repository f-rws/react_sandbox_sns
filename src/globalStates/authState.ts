import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { User } from "../types/user.ts";

type AuthState = {
    user: User | null;
};

// TODO: type修正
// @ts-ignore
const userLocalStorage: User = JSON.parse(localStorage.getItem("user"));

const authState = atom<AuthState>({
    key: "authState",
    default: {
        user: userLocalStorage || null,
    },
});

export const useAuthState = () => {
    return useRecoilValue(authState);
};

export const useAuthStateMutators = () => {
    const setAuthState = useSetRecoilState(authState);
    const setUserLocalStorage = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
    };

    const setAuthStateAndLocalStorage = (newState: AuthState) => {
        setAuthState(newState);
        if (newState.user) setUserLocalStorage(newState.user);
    };

    return {
        setAuthStateAndLocalStorage,
    };
};
