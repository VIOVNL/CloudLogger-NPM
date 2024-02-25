import React from "react";
import {CloudLogger} from "@viovnl/cloudlogger";
import "./App.css";

const App: React.FC = () => {
    const clickHandler = () => {
        try {
            CloudLogger.Log([
                {Name: "Date", Value: "22-10-1994"},
                {Name: "Country", Value: "Netherlands"},
            ]);

        } catch (e) {
            console.log("error", e);
        }

    };

    return (
        <>
            <h1>CloudLogger TypeScript Demo</h1>
            <div className="card">
                <button onClick={clickHandler}>Click to send log</button>
            </div>
        </>
    );
};

export default App;
