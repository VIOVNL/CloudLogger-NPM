import React from "react";
import { CloudLogger } from "cloudlogger";
import "./App.css";

const App: React.FC = () => {
  const clickHandler = () => {
    try {
     CloudLogger.Log([
        { Name: "Log1", Value: "Value1" },
        { Name: "Log2", Value: "Value2" },
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
