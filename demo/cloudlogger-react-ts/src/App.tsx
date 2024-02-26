import React from "react";
import {CloudLogger, CloudLoggerItem} from "@viovnl/cloudlogger";
import "./App.css";

const App: React.FC = () => {
    const clickHandler = () => {
        try {
            const logs: CloudLoggerItem[] = [
                {Name: "Date", Value: "22-10-1994"},
                {Name: "Country", Value: "Netherlands"},
            ];

            CloudLogger.Log(logs);

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
