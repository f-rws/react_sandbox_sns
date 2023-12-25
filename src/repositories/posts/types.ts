export type PostData = {
    _id: string;
    userId: number;
    desc?: string;
    img: string;
    likes: number[];
    createdAt: string;
    updatedAt: string;
    comment: number;
};

// 投稿作成のリクエスト
export type CreatePostRequestData = {
    userId: string;
    desc: string;
    img: string | null; // 画像パス
};

// 投稿の編集のリクエスト NOTE:仮実装
export type PutPostRequestData = {
    userId: string;
    desc: string;
    img: string | null; // 画像パス
};

// 特定の投稿にいいねをする
export type PutPostLikeRequestData = {
    userId: string;
};
