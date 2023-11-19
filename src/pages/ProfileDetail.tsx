import { getImgPath } from "../functions/utils.ts";
import { css } from "@emotion/react";

const styles = {
    wrapper: css({
        display: "flex",
        maxWidth: "108rem",
        width: "100%",
        margin: "0 auto",
        justifyContent: "stretch",
    }),
    summary: css({
        display: "flex",
        "> dt": {
            marginRight: "1rem",
        },
    }),
    followings: css({
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: "1rem",
    }),
    following: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",

        "> img": {
            width: "8rem",
            height: "8rem",
            borderRadius: "50%",
            objectFit: "cover",
        },
    }),
};

export const ProfileDetail = () => {
    return (
        <div>
            <h4>ユーザー情報</h4>
            <div>
                <dl css={styles.summary}>
                    <dt>出身:</dt>
                    <dd>福岡</dd>
                </dl>
                <h5>あなたの友達</h5>
                <div css={styles.followings}>
                    <div css={styles.following}>
                        <img
                            src={getImgPath("person/5.jpeg")}
                            alt={""}
                        />
                        <span>name</span>
                    </div>
                    <div css={styles.following}>
                        <img
                            src={getImgPath("person/5.jpeg")}
                            alt={""}
                        />
                        <span>name</span>
                    </div>
                    <div css={styles.following}>
                        <img
                            src={getImgPath("person/5.jpeg")}
                            alt={""}
                        />
                        <span>name</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
