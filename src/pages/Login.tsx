import { FormEvent, useRef, useState } from "react";
import { css } from "@emotion/react";
import { colors } from "../styles/variables.ts";
import { apiClient } from "../api";
import { useAuthState, useAuthStateMutators } from "../globalStates/authState.ts";

export const Login = () => {
    const { user, isFetching, error } = useAuthState();
    const { setAuthState } = useAuthStateMutators();

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [messages, setMessages] = useState<string[] | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (email?.current?.value && password?.current?.value) {
            const data = {
                email: email.current.value,
                password: password.current.value,
            };
            execLogin(data);
        }
    };
    const execLogin = async (data: { email: string; password: string }) => {
        try {
            const res = await apiClient.post("/auth/login", data);
            setAuthState({
                isFetching,
                error,
                user: res.data,
            });

            // ローカルストレージにユーザー情報を保存
            localStorage.setItem("user", JSON.stringify(res.data));
        } catch (e) {
            // TODO: type修正
            // @ts-ignore
            setMessages([e.response.data]);
        }
    };

    return (
        <div css={styles.wrapper}>
            <div css={styles.loginWrapper}>
                <h3 css={styles.title}>TestSNS</h3>
                <form
                    css={styles.formWrapper}
                    onSubmit={handleSubmit}
                >
                    <input
                        ref={email}
                        placeholder={"Eメール"}
                        type={"email"}
                        required={true}
                    />
                    <input
                        ref={password}
                        type={"password"}
                        placeholder={"パスワード"}
                        minLength={6}
                        required={true}
                    />
                    <button>ログイン</button>
                    {messages &&
                        messages.map((message) => {
                            return <p key={message}>{message}</p>;
                        })}
                    <span css={styles.forgotMessage}>パスワードを忘れた方へ</span>
                    <button>アカウント作成</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    wrapper: css({
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.Gray70,
    }),
    loginWrapper: css({
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        flexShrink: 0,
        width: "100%",
        maxWidth: "37rem",
        backgroundColor: colors.White,
        borderRadius: "1.2rem",
        padding: "2.4rem",
    }),
    title: css({
        fontWeight: "bold",
        fontSize: "2.4rem",
        color: colors.LightGreen20,
        textAlign: "center",
        marginBottom: "1.6rem",
    }),
    formWrapper: css({
        display: "flex",
        flexDirection: "column",
        "> input": {
            display: "inline-block",
            height: "4rem",
            marginBottom: "0.8rem",
            padding: "0.8rem",
        },
        "> button": {
            height: "4rem",
        },
    }),
    forgotMessage: css({
        color: colors.Gray40,
        textAlign: "center",
        margin: "1.6rem 0",
    }),
};
