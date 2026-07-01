import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

// Renders the main React app inside the root div in index.html.
createRoot(document.querySelector("#root")).render(<App />);
