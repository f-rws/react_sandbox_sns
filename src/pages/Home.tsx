import { Topbar } from "../components/Topbar.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { css } from "@emotion/react";
import { Share } from "../components/Share.tsx";
import { Post } from "../components/Post.tsx";
import { Rightbar } from "../components/Rightbar.tsx";
import { useEffect, useState } from "react";
import { Post as TypePost } from "../types/post.ts";
import { useAuthState } from "../globalStates/authState.ts";
import { postsRepository } from "../repositories/posts/repository.ts";

export const Home = () => {
    const { user } = useAuthState();
    const { getPosts } = postsRepository;

    const [posts, setPosts] = useState<TypePost[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        if (!user?._id) return;
        const data = await getPosts(user._id.toString());
        setPosts(data);
    };
    return (
        <>
            <Topbar />
            <div css={styles.wrapper}>
                <div css={styles.pageLeft}>
                    <Sidebar />
                    <Share fetchPosts={fetchPosts} />
                </div>
                <div css={styles.pageCenter}>
                    {posts.map((post) => (
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
