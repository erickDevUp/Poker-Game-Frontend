import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokerGameProvider } from "./context/connectWS.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokerGameProvider>
      <App />
    </PokerGameProvider>
  </React.StrictMode>
);
