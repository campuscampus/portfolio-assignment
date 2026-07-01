import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Shows the React app inside the root div.
createRoot(document.querySelector("#root")).render(<App />);
