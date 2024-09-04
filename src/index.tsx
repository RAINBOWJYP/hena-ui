import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
