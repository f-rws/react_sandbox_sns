import { useState, FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { useRegisterUser } from "@/hooks/call-api-auth/registerUser.ts";
import { colors } from "@/styles/variables.ts";

export const Register = () => {
    const navigate = useNavigate();
    const { error, registerUser } = useRegisterUser();

    const username = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordConfirmation = useRef<HTMLInputElement>(null);
    const [messages, setMessages] = useState<string[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setMessages([]);

        if (!username.current || !email.current || !password.current) return;

        if (password.current.value !== passwordConfirmation?.current?.value) {
            return setMessages(["パスワードが正しくありません。"]);
        }
        const data = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        await registerUser(data);
        if (error) return setMessages([error.message]);
        // NOTE: 登録成功後はログイン画面に遷移
        navigate("/login");
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
                        ref={username}
                        type={"text"}
                        placeholder={"ユーザー名"}
                        required={true}
                    />
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
                    <input
                        ref={passwordConfirmation}
                        type={"password"}
                        minLength={6}
                        required={true}
                        placeholder={"確認用パスワード"}
                    />
                    <button>登録する</button>
                    {messages &&
                        messages.map((message) => {
                            return <p key={message}>{message}</p>;
                        })}
                </form>
                <hr css={styles.breakLine} />
                <button>ログインする</button>
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
    breakLine: css({
        margin: "2.4rem 0",
    }),
};
