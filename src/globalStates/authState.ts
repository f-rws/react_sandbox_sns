import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { User } from "../types/user.ts";

type AuthState = {
    user: User | null;
    isFetching: boolean;
    error: boolean;
};

// TODO: type修正
// @ts-ignore
const userLocalStorage: User = JSON.parse(localStorage.getItem("user"));

const authState = atom<AuthState>({
    key: "authState",
    default: {
        user: userLocalStorage || null,
        isFetching: false,
        error: false,
    },
});

export const useAuthState = () => {
    return useRecoilValue(authState);
};

// TODO: ローカルストレージに保存する処理を`execLogin`から移行させる
export const useAuthStateMutators = () => {
    const setAuthState = useSetRecoilState(authState);

    return {
        setAuthState,
    };
};
