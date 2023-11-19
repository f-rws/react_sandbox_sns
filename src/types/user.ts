export type User = {
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
