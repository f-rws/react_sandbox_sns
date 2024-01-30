import { Topbar } from "../components/Topbar.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { css } from "@emotion/react";
import { Share } from "../components/Share.tsx";
import { Post } from "../components/Post.tsx";
import { Rightbar } from "../components/Rightbar.tsx";
import { useEffect } from "react";
import { useAuthState } from "../globalStates/authState.ts";
import { useGetPosts } from "@/hooks/call-api-posts/getPosts.ts";

export const Home = () => {
    const { user } = useAuthState();
    const { posts, fetchPosts } = useGetPosts();

    useEffect(() => {
        if (!user?._id) return;
        fetchPosts(user._id);
    }, []);
    return (
        <>
            <Topbar />
            <div css={styles.wrapper}>
                <div css={styles.pageLeft}>
                    <Sidebar />
                    <Share />
                </div>
                <div css={styles.pageCenter}>
                    {posts?.length &&
                        posts.map((post) => (
                            <Post
                                key={post._id}
                                post={post}
                            />
                        ))}
                </div>
                <div css={styles.pageRight}>
                    <Rightbar />
                </div>
            </div>
            {/* timeline */}
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
    pageCenter: css({
        width: "50%",
    }),
    pageRight: css({
        width: "25%",
    }),
};
