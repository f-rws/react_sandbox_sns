type User = {
    _id: number;
    profilePicture: string;
    username: string;
    email: string;
    coverPicture: string;
    followers: string[];
    followings: string[];
    isAdmin: boolean;
    desc: string;
    city: string;
};

// 登録
export type ResisterUserData = {
    username: string;
    email: string;
    password: string;
};
export type ResisterUser = User;

// ログイン
export type LoginUserData = {
    email: string;
    password: string;
};
export type LoginUser = User;
