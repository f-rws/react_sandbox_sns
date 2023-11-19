import { css } from "@emotion/react";
import { colors } from "./variables.ts";

export default css({
    "*": {
        margin: 0,
        padding: 0,
    },
    html: {
        fontSize: "62.5%",
    },
    body: {
        fontSize: "1.6rem",
        color: colors.Gray10,
    },
    "nav, ul, li": {
        listStyle: "none",
    },
    a: {
        textDecoration: "none",
    },
});
