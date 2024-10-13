import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-YZGQYK5LZM");

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);
