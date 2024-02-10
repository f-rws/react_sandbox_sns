// 登録
export type ResisterUserRequestData = {
    username: string;
    email: string;
    password: string;
};

// ログイン
export type LoginUserData = {
    email: string;
    password: string;
};
