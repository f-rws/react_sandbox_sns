import { css, Global } from "@emotion/react";
import sanitize from "sanitize.css";
import globalStyles from "./styles/global";
import { Home } from "./pages/Home.tsx";
import { Profile } from "./pages/Profile.tsx";
import { colors } from "./styles/variables.ts";
import { Login } from "./pages/Login.tsx";
import { Register } from "./pages/Register.tsx";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "./globalStates/authState.ts";

const styles = {
    wrapper: css({
        backgroundColor: colors.Gray70,
        height: "100vh",
        width: "100%",
        justifyContent: "stretch",
    }),
};

function App() {
    const { user } = useAuthState();

    console.log("app");
    console.log("user", user);
    return (
        <div css={styles.wrapper}>
            <Global styles={sanitize} />
            <Global styles={globalStyles} />
            <Router>
                <Routes>
                    <Route
                        path={"/"}
                        element={user ? <Home /> : <Navigate to="/login" />}
                    />
                    <Route
                        path={"/login"}
                        element={user ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path={"/register"}
                        element={user ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path={"/profile/:username"}
                        element={user ? <Profile /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
