import { useState } from "react";
import "./App.css";
import { Letters } from "./components/Letters";
import { WritenProvider } from "./contex/Writing";
import Screen from "./components/Screen";

function App() {
  const [color, setColor] = useState("black");
  const handleClick = (newColorBoard) => {
    setColor(newColorBoard);
  };

  
  return (
    <main>
      <div className={`board ${color}`}>
        <div className="content">
          <WritenProvider>
          <Screen></Screen>
          <Letters></Letters>
          </WritenProvider>
        </div>
        <div className="button">
          <div className="button-content">
            <button
              className="color-button rose-button"
              onClick={() => handleClick("rose")}
            ></button>
            <button
              className="color-button grey-button "
              onClick={() => handleClick("grey")}
            ></button>
            <button
              className="color-button blue-button"
              onClick={() => handleClick("blue")}
            ></button>
            <button
              className="color-button dark-button"
              onClick={() => handleClick("dark")}
            ></button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;