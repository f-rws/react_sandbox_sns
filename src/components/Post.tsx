import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { format } from "timeago.js";
import { MoreVert } from "@mui/icons-material";
import noAvatarImg from "@/assets/person/noAvatar.png";
import HeartImg from "@/assets/heart.png";
import { getImgPath } from "@/functions/utils.ts";
import { useAuthState } from "@/globalStates/authState.ts";
import { useGetUser } from "@/hooks/call-api-users/getUser.ts";
import { usePutPostLike } from "@/hooks/call-api-posts/putPostLike.ts";
import { Post as TypePost } from "@/types/post.ts";
import { User } from "@/types/user.ts";

type Props = {
    post: TypePost;
};
export const Post = ({ post }: Props) => {
    const { userId, desc, img, createdAt, comment } = post;

    const { user: currentUser } = useAuthState();
    const { user, fetchUser } = useGetUser();
    const { error, updatePostLike } = usePutPostLike();

    const [like, setLike] = useState<number>(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // TODO: ページ側で取得する
        fetchUser({ userId });
    }, []);

    const selectProfilePicture = (user: User) => {
        return user.profilePicture ? getImgPath(`${user.profilePicture}`) : noAvatarImg;
    };

    // いいね押下
    const handleLike = async () => {
        if (!currentUser) return;

        await updatePostLike(post._id, currentUser);
        if (error) {
            console.log(error);
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
