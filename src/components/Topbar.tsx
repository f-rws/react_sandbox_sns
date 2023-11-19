import { Chat, Notifications, Search } from "@mui/icons-material";
import { css } from "@emotion/react";
import { colors } from "../styles/variables";
import { useAuthState } from "../globalStates/authState.ts";
import { getImgPath } from "../functions/utils.ts";
import { Link } from "react-router-dom";

export const Topbar = () => {
    const { user } = useAuthState();

    const personImage = user?.profilePicture ? user.profilePicture : getImgPath("/person/noAvatar.png");
    return (
        <>
            <div css={styles.wrapper}>
                <div css={styles.logoWrapper}>
                    <span>SNS</span>
                </div>
                <div css={styles.searchWrapper}>
                    <div css={styles.search}>
                        <Search />
                        <input
                            type="text"
                            placeholder="探し物はなんですか？"
                        />
                    </div>
                </div>
                <div css={styles.menu}>
                    <div css={styles.menuItems}>
                        <div css={styles.iconItem}>
                            <Chat />
                            <span>1</span>
                        </div>
                        <div css={styles.iconItem}>
                            <Notifications />
                            <span>2</span>
                        </div>
                        <Link to={`/profile/${user?.username}`}>
                            <img
                                src={personImage}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    wrapper: css({
        backgroundColor: colors.DarkBlue10,
        height: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
    }),
    logoWrapper: css({
        flex: 3,
    }),
    searchWrapper: css({
        flex: 5,
    }),
    search: css({
        backgroundColor: colors.White,
        display: "flex",
        alignItems: "center",
        borderRadius: "99rem",
        padding: ".5rem 1rem",

        "> svg": {
            fontSize: "1.5rem",
            marginRight: ".5rem",
        },

        "> input": {
            border: "none",
            flexGrow: 1,

            "&:focus": {
                outline: "none",
            },
        },
    }),
    menu: css({
        flex: 4,
        display: "flex",
        justifyContent: "center",
    }),
    menuItems: css({
        display: "flex",
        alignItems: "center",
        columnGap: "1rem",

        "> div": {
            color: colors.White,
            display: "flex",
            alignItems: "center",
            columnGap: ".3rem",
        },
        img: {
            width: "3rem",
            height: "3rem",
        },
    }),
    iconItem: css({
        position: "relative",

        "> span": {
            position: "absolute",
            top: "-.5rem",
            right: "-.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.Pink10,
            fontSize: "0.7px",
            borderRadius: "99rem",
            padding: "0 6px",
        },
    }),
};
