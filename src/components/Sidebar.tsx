import { css } from "@emotion/react";
import { Bookmark, Home, Notifications, Person, Search, Settings } from "@mui/icons-material";
import personImgUrl from "../assets/person/2.jpeg";
import { colors } from "../styles/variables";
import { Link } from "react-router-dom";

const styles = {
    wrapper: css({
        display: "flex",
        flexDirection: "column",
        padding: "0 1.5rem",
    }),
    menuList: css({
        fontSize: "1.5rem",
        color: colors.LightPurple10,
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",

        "> li": {
            display: "flex",
            alignItems: "center",
            padding: "1rem 0.5rem",
            cursor: "pointer",

            ":hover": {
                color: colors.DarkBlue30,
            },
            "> a": {
                color: colors.LightPurple10,
            },
        },

        svg: {
            fontSize: "2rem",
            marginRight: "0.8rem",
        },
    }),
    friendList: css({
        img: {
            width: "3.2rem",
            height: "3.2rem",
        },
    }),
};

export const Sidebar = () => {
    return (
        <div css={styles.wrapper}>
            <ul css={styles.menuList}>
                <li>
                    <Home />
                    <Link to={"/"}>
                        <span>ホーム</span>
                    </Link>
                </li>
                <li>
                    <Search />
                    <span>検索</span>
                </li>
                <li>
                    <Notifications />
                    <span>通知</span>
                </li>
                <li>
                    <Notifications />
                    <span>メッセージ</span>
                </li>
                <li>
                    <Bookmark />
                    <span>ブックマーク</span>
                </li>
                <li>
                    <Person />
                    <Link to={"/profile/test"}>
                        <span>プロフィール</span>
                    </Link>
                </li>
                <li>
                    <Settings />
                    <span>設定</span>
                </li>
            </ul>
            <ul css={styles.friendList}>
                <li>
                    <img
                        src={personImgUrl}
                        alt={""}
                    />
                    <span>アルテタ</span>
                </li>
            </ul>
        </div>
    );
};
