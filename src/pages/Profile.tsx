import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { getImgPath } from "@/functions/utils.ts";
import { useGetUser } from "@/hooks/call-api-users/getUser.ts";
import { useGetPostsByUser } from "@/hooks/call-api-posts/getPostsByUser.ts";
import { Topbar } from "@/components/Topbar.tsx";
import { Sidebar } from "@/components/Sidebar.tsx";
import { Post } from "@/components/Post.tsx";
import { ProfileDetail } from "./ProfileDetail.tsx";

export const Profile = () => {
    const { username } = useParams();

    const { user, fetchUser } = useGetUser();
    const { postsByUser, fetchPostsByUser } = useGetPostsByUser();

    useEffect(() => {
        if (!username) return;
        fetchUser({ username });
        fetchPostsByUser(username);
    }, []);

    return (
        <>
            <Topbar />
            <div css={styles.wrapper}>
                <div css={styles.pageLeft}>
                    <Sidebar />
                </div>
                <div css={styles.pageMain}>
                    <div css={styles.profileSummary}>
                        <img
                            src={user?.coverPicture || getImgPath("post/3.jpeg")}
                            alt={""}
                            css={styles.profileCover}
                        />
                        <img
                            src={user?.profilePicture || getImgPath("person/noAvatar.png")}
                            alt={""}
                            css={styles.profileIcon}
                        />
                    </div>
                    <div css={styles.profileName}>
                        <h4>{user?.username}</h4>
                        {user?.desc && <span>{user.desc}</span>}
                    </div>
                    <div css={styles.content}>
                        <div>
                            {postsByUser?.length &&
                                postsByUser.map((post) => (
                                    <Post
                                        key={post._id}
                                        post={post}
                                    />
                                ))}
                        </div>
                        <div>
                            <ProfileDetail />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    wrapper: css({
        display: "flex",
        maxWidth: "108rem",
        width: "100%",
        margin: "0 auto",
        justifyContent: "stretch",
    }),
    pageLeft: css({
        width: "25%",
    }),
    pageMain: css({
        width: "75%",
    }),
    profileSummary: css({
        width: "100%",
        height: "30rem",
        position: "relative",
    }),
    profileCover: css({
        width: "100%",
        height: "30rem",
        objectFit: "cover",
    }),
    profileIcon: css({
        position: "absolute",
        width: "10rem",
        height: "10rem",
        objectFit: "contain",
        left: "calc(50% - 5rem)", // 自身のwidth分を引いている
        top: "25rem",
    }),
    profileName: css({
        textAlign: "center",
        marginTop: "5rem",

        "> h4": {
            fontSize: "2.4rem",
        },
    }),
    content: {
        display: "flex",
    },
    contentMain: {},
    contentAside: {},
};
