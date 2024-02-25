import {CloudLogger} from "@viovnl/cloudlogger";
import "./App.css";

function App() {
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
            <h1>CloudLogger JavaScript Demo</h1>
            <div className="card">
                <button onClick={clickHandler}>Click to send log</button>
            </div>
            <div></div>
        </>
    );
}

export default App;
