import { css } from "@emotion/react";
import { format } from "timeago.js";
import HeartImg from "../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { getImgPath } from "../functions/utils.ts";
import { Post as TypePost } from "../types/post.ts";
import { User } from "../types/user.ts";
import { useEffect, useState } from "react";
import noAvatarImg from "../assets/person/noAvatar.png";
import { useAuthState } from "../globalStates/authState.ts";
import { postsRepository } from "../repositories/posts/repository.ts";
import { PutPostLikeRequestData } from "../repositories/posts/types.ts";
import { usersRepository } from "../repositories/users/repository.ts";

const styles = {
    wrapper: css({
        width: "100%",
    }),
    postSummary: css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }),
    postSummaryLeft: css({
        display: "flex",
        alignItems: "center",
        "> img": {
            width: "4rem",
            height: "4rem",
            objectFit: "contain",
        },
    }),
    postUserName: css({
        fontSize: "1.4rem",
        fontWeight: "bold",
        margin: "0 1rem",
    }),
    postDate: css({
        fontSize: "1.2rem",
    }),
    postSummaryRight: css({}),
    postDescription: css({
        fontSize: "1.6rem",
        padding: "1rem 0",
        "> img": {
            objectFit: "contain",
            width: "100%",
            marginTop: "1.2rem",
        },
    }),
    postBottom: css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }),
    postBottomLeft: css({
        display: "flex",
        alignItems: "center",
        fontSize: "1.2rem",
        "> img": {
            width: "1.5rem",
            height: "1.5rem",
            objectFit: "contain",
            marginRight: "0.8rem",
        },
    }),
    postBottomRight: css({}),
};

type Props = {
    post: TypePost;
};
export const Post = ({ post }: Props) => {
    const { userId, desc, img, createdAt, comment } = post;

    const { user: currentUser } = useAuthState();
    const { getUser } = usersRepository;
    const { putPostLike } = postsRepository;

    const [user, setUser] = useState<User | null>(null);
    const [like, setLike] = useState<number>(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        fetchUser();
    }, []);

    // ユーザー情報取得
    const fetchUser = async () => {
        const params = {
            userId: userId.toString(),
        };
        const data = await getUser(params);
        setUser(data);
    };

    const selectProfilePicture = (user: User) => {
        return user.profilePicture ? getImgPath(`${user.profilePicture}`) : noAvatarImg;
    };

    // いいね押下
    const handleLike = async () => {
        if (!currentUser) return;
        const data: PutPostLikeRequestData = {
            userId: currentUser._id.toString(),
        };
        try {
            await putPostLike(post._id, data);
        } catch (e) {
            console.log(e);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
    return (
        <div>
            {user && (
                <>
                    <div css={styles.postSummary}>
                        <div css={styles.postSummaryLeft}>
                            <img
                                src={selectProfilePicture(user)}
                                alt={""}
                            />
                            <span css={styles.postUserName}>{user.username}</span>
                            <span css={styles.postDate}>{format(createdAt)}</span>
                        </div>
                        <div css={styles.postSummaryRight}>
                            <MoreVert />
                        </div>
                    </div>
                    <div css={styles.postDescription}>
                        <span>{desc}</span>
                        <img
                            src={getImgPath(`${img}`)}
                            alt={""}
                        />
                    </div>
                    <div css={styles.postBottom}>
                        <div
                            css={styles.postBottomLeft}
                            onClick={handleLike}
                        >
                            <img
                                src={HeartImg}
                                alt={""}
                            />
                            <span>{like}人がいいねを押しました</span>
                        </div>
                        <div css={styles.postBottomRight}>
                            <span>{comment}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
