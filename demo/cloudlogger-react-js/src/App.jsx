import { CloudLogger } from "cloudlogger-js";
import "./App.css";

function App() {
  const clickHandler = () => {
    try {
      CloudLogger.log([
        { name: "Log1", value: "Value1" },
        { name: "Log2", value: "Value2" },
      ]);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <h1>CloudLogger JavaScript Demo</h1>
      <div className="card">
        <button onClick={clickHandler}>Click to send log</button>
      </div>
      <div></div>
    </>
  );
}

export default App;
