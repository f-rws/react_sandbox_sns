import { css } from "@emotion/react";
import { getImgPath } from "../functions/utils.ts";
import { Users as mockDataUsers } from "../mockData.ts";
import { colors } from "../styles/variables.ts";
import starImg from "../assets/star.png";
import profileImg2 from "../assets/person/2.jpeg";
import promotionImg from "../assets/promotion/promotion1.jpeg";

const styles = {
    wrapper: css({}),
    eventInfo: css({
        "> img": {
            width: "100%",
            objectFit: "contain",
            borderRadius: "0.8rem",
        },
    }),
    eventInfoHeader: css({
        display: "flex",
        alignItems: "center",
        "> img": {
            width: "2rem",
            height: "2rem",
            marginRight: "0.8rem",
        },
    }),
    friendList: css({}),
    friendListItem: css({
        display: "flex",
        alignItems: "center",
        columnGap: "0.8rem",
    }),
    friendListItemIcon: css({
        position: "relative",
        "> img": {
            width: "4rem",
            height: "4rem",
        },
        "> span": {
            width: "1rem",
            height: "1rem",
            backgroundColor: colors.Pink10,
            position: "absolute",
            right: 0,
            top: 0,
            borderRadius: "99rem",
        },
    }),
    promotion: css({
        "> p": {
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
        },
    }),
    promotionList: css({
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
    }),
    promotionListItem: css({
        "> img": {
            width: "100%",
            objectFit: "contain",
            borderRadius: "0.8rem",
        },
        "> span": {
            color: colors.Gray20,
            fontSize: "1.4rem",
            display: "inline-block",
            marginTop: "0.5rem",
        },
    }),
};
export const Rightbar = () => {
    return (
        <div>
            <div css={styles.eventInfo}>
                <div css={styles.eventInfoHeader}>
                    <img
                        src={starImg}
                        alt={""}
                    />
                    <span>
                        <b>フォロワー限定</b>イベント開催中！
                    </span>
                </div>
                <img
                    src={profileImg2}
                    alt={""}
                />
            </div>
            <h4>オンラインの友達</h4>
            <ul css={styles.friendList}>
                {mockDataUsers.map(({ id, profilePicture, username }) => {
                    return (
                        <li
                            css={styles.friendListItem}
                            key={id}
                        >
                            <div css={styles.friendListItemIcon}>
                                <img
                                    src={getImgPath(`${profilePicture}`)}
                                    alt=""
                                />
                                <span />
                            </div>
                            <span>{username}</span>
                        </li>
                    );
                })}
            </ul>
            <div css={styles.promotion}>
                <p>プロモーション広告</p>
                <div css={styles.promotionList}>
                    <div css={styles.promotionListItem}>
                        <img
                            src={promotionImg}
                            alt={""}
                        />
                        <span>ショッピング</span>
                    </div>
                    <div css={styles.promotionListItem}>
                        <img
                            src={promotionImg}
                            alt={""}
                        />
                        <span>ショッピング</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
