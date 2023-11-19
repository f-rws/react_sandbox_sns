import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import RecoilizeDebugger from "recoilize";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RecoilRoot>
            <RecoilizeDebugger />
            <App />
        </RecoilRoot>
    </React.StrictMode>,
);
