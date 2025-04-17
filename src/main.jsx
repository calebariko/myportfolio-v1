import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/reset.css"
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollReset from "./ScrollReset.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollReset />
      <App />
    </BrowserRouter>
  </StrictMode>
);
