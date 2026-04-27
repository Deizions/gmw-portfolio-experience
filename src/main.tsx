import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import "./styles/globals.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/ui.css";
import "./styles/sections.css";
import "./styles/motion.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
