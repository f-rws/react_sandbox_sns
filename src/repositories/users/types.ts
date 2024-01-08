export type UserData = {
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

// クエリーパラメータから特定のユーザーを取得
export type GetUserParams = {
    userId?: string;
    username?: string;
};

// ユーザーの更新
export type PutUserRequestData = {
    userId: string;
    desc: string;
};

// ユーザーのフォロー
export type PutFollowUserRequestData = {
    userId: string; // フォローする側のID
};

// ユーザーのフォロー解除
export type PutUnfollowUserRequestData = {
    userId: string; // フォロー解除する側のID
};
