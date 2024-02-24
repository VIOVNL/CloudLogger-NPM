import React from "react";
import ReactDOM from "react-dom/client";
import {CloudLogger} from "cloudlogger-js";
import App from "./App.jsx";
import "./index.css";

CloudLogger.Create("your_project_secret");

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
