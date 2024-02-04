export type Post = {
    _id: string;
    userId: number;
    desc?: string;
    img: string;
    likes: number[];
    createdAt: string;
    updatedAt: string;
    comment: number;
};

export type CreatePost = {
    userId: number;
    desc: string;
    img: string;
};
